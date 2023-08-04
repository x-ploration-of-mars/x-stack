import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  routeAction$,
  Form,
  zod$,
  z,
} from "@builder.io/qwik-city";
import styles from "./todolist.module.css";
import { todoItems } from "~/drizzle/schema";
import { db } from "~/drizzle/db";

export const useListLoader = routeLoader$(async (requestEvent) => {
  const list = await db(requestEvent).select().from(todoItems);

  console.log("todo list: ", list);
  return list;
});

export const useAddToListAction = routeAction$(
  async (data, requestEvent) => {
    await db(requestEvent).insert(todoItems).values({ text: data.text });
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
          <span class={styles.empty}>No items found</span>
        ) : (
          <ul class={styles.list}>
            {list.value.map((item, index) => (
              <li key={`items-${index}`}>{item.text}</li>
            ))}
          </ul>
        )}
      </div>

      <div class="container-center container">
        <Form action={action} spaReset>
          <input type="text" name="text" required class={styles.input} />
          <button type="submit" class="button-dark">
            Add item
          </button>
        </Form>

        <p class={styles.hint}>
          PS: This little app works even when JavaScript is disabled.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Todo List",
};
