CREATE TABLE "transactions" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"amount" text NOT NULL,
	"dateCreated" timestamp DEFAULT now(),
	"dateUpdated" timestamp,
	CONSTRAINT "transactions_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE INDEX "transaction_id_index" ON "transactions" USING btree ("id");