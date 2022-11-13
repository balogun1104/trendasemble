import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Main from "../components/main";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {




  return (
    <div>
      <Head>
        <title>TrendAssemble</title>
      </Head>

      <main>
        {/* sidebar */}

        <Sidebar/>

        {/* feeds */}

      </main>
    </div>
  );
};

export default Home;
