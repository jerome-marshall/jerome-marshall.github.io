import { webpackBundler } from "@payloadcms/bundler-webpack";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

import { buildConfig } from "payload/config";

import { type PayloadBundler } from "payload/dist/bundlers/types";
import BeforeLogin from "../components/BeforeLogin";
import { Pages } from "./collections/Pages";
import { Data } from "./globals/Data";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL ?? "",
  collections: [Pages],
  globals: [Data],
  admin: {
    bundler: webpackBundler() as PayloadBundler,
    components: {
      // beforeLogin: [BeforeLogin],
    },
  },
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI + "?sslmode=require",
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "./payload-types.ts"),
  },
});
