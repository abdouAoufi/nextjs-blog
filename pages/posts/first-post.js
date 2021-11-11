import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Post() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <Link href="/"> go back</Link>
      <h1 className="title">this is the first post</h1>
      <Image
        src="/images/profile.jpg"
        alt="Aoufi abderahmane"
        height={144}
        width={144}
      />
      <style jsx>{`
        .title {
          font-size: 20px;
          color: #c4c4c4;
        }
      `}</style>
    </Layout>
  );
}
