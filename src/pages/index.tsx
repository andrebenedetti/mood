import Head from "next/head";
import GradePanel from "../components/GradePanel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mood</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 h-screen">
        <div className="h-1/6 flex flex-col justify-center">
          <h1 className="text-center py-4">
            Hello, Andre =)
            <br />
            <strong>how was your day, today?</strong>
          </h1>
        </div>
        <div className="flex justify-items-center ml-auto mr-auto max-w-sm h-4/6">
          <GradePanel />
        </div>
      </main>
    </>
  );
}
