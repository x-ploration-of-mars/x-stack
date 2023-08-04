import {   mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
 

export const todoItems = mysqlTable('todo_items', {
  id: serial('id').primaryKey(),
  text: varchar('text', { length: 256 }),
});
