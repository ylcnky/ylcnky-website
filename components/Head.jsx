import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="A senior data engineer specialized in automotive, machinery and construction industries"
      />
      <meta
        name="keywords"
        content="mehmet, mehmet yalcinkaya, ylcnky, ylcnky senior data engineer, ylcnky data engineer, ylcnky software engineer, apache spark, apache kafka, aws, kinesis, lambda, dynamo"
      />
      <meta property="og:title" content="Nehmet Yalcinkaya's Portfolio" />
      <meta
        property="og:description"
        content="A senior data engineer specialized in automotive, machinery and construction industries"
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mehmet Yalcinkaya',
};
