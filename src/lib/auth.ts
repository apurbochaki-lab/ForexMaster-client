import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db("ForexMaster-DB");

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: { enabled: true },
    plugins: [
        jwt()
    ]
});