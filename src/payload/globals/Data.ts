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
      name: "shortIntroduction",
      label: "Short Introduction",
      type: "text",
    },
    {
      name: "introduction",
      label: "Introduction",
      type: "richText",
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
  ],
};

export default Data;
