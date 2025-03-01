import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67b4825e00282d9d41bc");

export const account = new Account(client);

//Database

export const databases = new Databases(client, "67b482cd00348b579c8c");
