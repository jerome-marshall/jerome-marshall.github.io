import { type Payload } from "payload";

const getAllData = async (payload: Payload) => {
  const data = await payload.findGlobal({
    slug: "data",
  });

  return data;
};

export default getAllData;
