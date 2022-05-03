import React, {createContext} from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { GlobalContext, GlobalProvider } from "../data/GlobalContext";

const Home = ({ data }) => {

  return (
    <div className="font-noto-sans">
      <GlobalProvider value={{ data }}>
        <Layout>
          <h1>Hello Next.js</h1>
        </Layout>
      </GlobalProvider>
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
