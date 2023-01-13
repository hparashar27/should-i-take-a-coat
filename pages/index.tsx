import React from "react";
import Head from "next/head";
import Layout from '../components/layout/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Should I Take a Coat?</title>
        <meta name="description" content="Should i take a coat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" className="rounded-full" />
      </Head>
      <Layout>
        <div className="min-h-screen  flex flex-row items-center justify-center">
          <div className="border-4 border-solid border-gray-900 rounded-lg p-20">
          <h1 className="text-5xl text-slate-50 font-bold ">
            I would grab a coat today !
          </h1>
          </div>
        </div>
      </Layout>
    </>
  );
}
