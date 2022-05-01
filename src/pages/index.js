import React from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Home = ({ data }) => {
  console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ data", data);

  return (
    <div className="font-noto-sans">
      <Layout>
        <h1>Hello Next.js</h1>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "https://portfolio-strapi3-api.herokuapp.com/global-data"
    );
    return { props: { data: response.data } };
  } catch (error) {
    console.error(error);
    return { props: { data: "error" } };
  }
}

export default Home;
