import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import SocialLoginComponent from "../components/SocialLoginComponent";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Home() {
  const SocialLoginDynamic = dynamic(
    () =>
      import("../components/SocialLoginComponent").then((res) => res.default),
    {
      ssr: false,
    }
  );
  return (
    <>
      <main className={styles.main}>
        <div>
          <Suspense fallback={<div>Loading...</div>} />
          <SocialLoginDynamic />
        </div>
      </main>
    </>
  );
}
