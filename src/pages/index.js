import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="text-center">

        <h2 className="text-2xl font-bold inline-block my-8 p-3">
          This is where you talk about what you do as a baby whisperer
       </h2>

      </section>
    </Layout>
  );
}

export default IndexPage;
