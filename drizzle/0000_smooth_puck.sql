CREATE TABLE `todo_items` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`text` varchar(256),
	CONSTRAINT `todo_items_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `todo_lists` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `todo_lists_id` PRIMARY KEY(`id`)
);
