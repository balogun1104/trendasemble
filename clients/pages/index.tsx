import Head from "next/head";
import { InstaTrend } from "../components/instaTrend";
import SideNav from "../components/sideNav";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import TwitterTrend from "../components/twitterTrend";
import TiktokTrend from "../components/tiktokTrend";
import GoogleTrend from "../components/googleTrends";
import { QueryCache, useQuery, QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query-devtools'
import {GetServerSideProps} from 'next'

interface PTypes {
  click:() => string;
  change: string;
  info: any;
}

// const queryClient = new QueryClient()

// const toJSON = (_: Response) => _.json() 

// const fetecher = () => fetch('https://jsonplaceholder.typicode.com/posts').then(toJSON);




export default function Home( { data} ) {
  console.log(data)
  const [change, setChange] = useState("1");

  const click: any = (e: any) => {
    setChange(e.target.id);
  };
  console.log(click.value)

  // const {data: information, isLoading, error} =useQuery('information', fetecher)

  // if(isLoading) return 'Loading...'
  // if(error) return console.log(error)
  // console.log(information)

  return (
    // <QueryClientProvider client={queryClient} contextSharing={true}>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <div className={styles.home}>
          <SideNav click={click} change={change} />

          {change === "2" ? (
            <TwitterTrend />
          ) : change === "3" ? (
            <TiktokTrend />
          ) : change === "4" ? (
            <GoogleTrend />
          ) : (
            <InstaTrend />
          )}

        </div>
        {/* <ReactQueryDevtools /> */}
      </main>
    </div>
    // </QueryClientProvider>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data =  await res.json()
  console.log(data)

  return {
    props: {
      data
    }
  }
}