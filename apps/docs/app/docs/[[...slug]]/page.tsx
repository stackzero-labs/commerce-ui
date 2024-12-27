import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { components } from "@/components/ui/mdx-components";
import { metadataImage } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmerButton";
import { createTypeTable } from "fumadocs-typescript/ui";
import { HTMLAttributes } from "react";

const StackzeroApiCta = () => {
  return (
    <div className="mt-6 p-2 border rounded-md flex flex-col gap-4">
      <h1 className="text-lg font-bold">Power your apps with stackzero API</h1>
      <p className="text-sm">
        Create a fully functional commerce website or apps in minutes with the
        official API integration.
      </p>
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Deploy now
        </span>
      </ShimmerButton>
    </div>
  );
};

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const { AutoTypeTable } = createTypeTable();

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
        // footer: <StackzeroApiCta />,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            ...components,
            AutoTypeTable,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  //TODO with metadata image
  return metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description,
  });

  //   return {
  //     title: page.data.title,
  //     description: page.data.description,
  //   };
}
