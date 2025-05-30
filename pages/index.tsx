//これらは Next.js にビルトイン されている
import Timeline from "@/components/Timeline";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SNS Next</title>
      </Head>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div>
        <Timeline />
      </div>
    </div>
  );
}
