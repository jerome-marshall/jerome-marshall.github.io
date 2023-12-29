/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { type RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import type { FieldHook, GlobalConfig } from "payload/types";
import { type Datum } from "../payload-types";

const populateFullName: FieldHook<Datum> = ({ data }) => {
  if (!data) return;

  return `${data?.firstName} ${data?.lastName}`;
};

export const Data: GlobalConfig = {
  slug: "data",
  admin: {},
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          required: true,
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "fullName",
      type: "text",
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [populateFullName],
      },
    },
    {
      name: "shortIntroduction",
      label: "Short Introduction",
      type: "text",
    },
    {
      name: "introduction",
      label: "Introduction",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("introduction", { name: "introduction_html" }),
    {
      name: "about",
      label: "About",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("about", { name: "about_html" }),
    {
      name: "contactText",
      label: "Contact Text",
      type: "text",
      required: true,
    },
    {
      name: "socials",
      label: "Socials",
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: RowLabelArgs) => {
            return data.name || `Social ${String(index).padStart(2, "0")}`;
          },
        },
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "name",
              label: "Name",
              type: "text",
              required: true,
            },
            {
              name: "url",
              label: "URL",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default Data;
