import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Main from "../components/main";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {

    const [change, setChange] = useState("1");

    const click = (e: any) => {
      setChange(e.target.id);
    };


  return (
    <div>
      <Head>
        <title>TrendAssemble</title>
      </Head>

      <main>
        {/* sidebar */}

        <Sidebar  />

        {/* feeds */}
        <Main/>
      </main>
    </div>
  );
};

export default Home;
