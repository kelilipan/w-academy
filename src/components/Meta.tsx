import React from "react";
import Head from "next/head";
import config from "@/constants/site.config";

const Meta = ({ pageName = "" }) => {
  const titleFmt = pageName ? `${pageName} | ${config.title}` : config.title;
  return (
    <Head>
      <title>{titleFmt}</title>
      <meta property="og:title" content={titleFmt} key="title" />
      <meta name="description" content={config.description} />
      <meta
        property="og:description"
        content={config.description}
        key="description"
      />
      <meta property="og:image" content="/og.jpg" />
    </Head>
  );
};

export default Meta;
