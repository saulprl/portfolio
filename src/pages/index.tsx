import { Contact } from "@/components/contact/contact";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import { Page } from "@/payload/collections/page";
import getPayloadClient from "@/payload/payload-client";
import { InferGetServerSidePropsType } from "next";

export default function Home({
  landingPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 p-2">
        <Hero image={landingPage?.heroImage} socials={landingPage?.socials} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const payload = await getPayloadClient();

  const payloadPages = await payload.find({
    collection: "pages",
    where: { metaTitle: { equals: "Home" } },
  });

  const landingPage =
    payloadPages.docs.length > 0 ? (payloadPages.docs[0] as Page) : null;

  return {
    props: {
      landingPage,
    },
  };
}
