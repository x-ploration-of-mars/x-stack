import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  routeAction$,
  Form,
  zod$,
  z,
} from "@builder.io/qwik-city";
import { todoItems } from "~/drizzle/schema/todos";
import { db } from "~/drizzle/db";

export const useListLoader = routeLoader$(async () => {
  const list = await db.select().from(todoItems);

  console.log("todo list: ", list);
  return list;
});

export const useAddToListAction = routeAction$(
  async (data) => {
    await db.insert(todoItems).values({ text: data.text });
    console.log("action");
    return {
      success: true,
    };
  },
  zod$({
    text: z.string().trim().min(1),
  }),
);

export default component$(() => {
  const list = useListLoader();
  const action = useAddToListAction();

  return (
    <>
      <div class="container-center container">
        <h1>
          <span class="highlight">TODO</span> List
        </h1>
      </div>

      <div role="presentation" class="ellipsis"></div>

      <div class="container-center container">
        {list.value.length === 0 ? (
          <span>No items found</span>
        ) : (
          <ul>
            {list.value.map((item, index) => (
              <li key={`items-${index}`}>{item.text}</li>
            ))}
          </ul>
        )}
      </div>

      <div class="container-center container">
        <Form action={action} spaReset>
          <input type="text" name="text" required />
          <button type="submit" class="button-dark">
            Add item
          </button>
        </Form>

        <p>PS: This little app works even when JavaScript is disabled.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Todo List",
};
