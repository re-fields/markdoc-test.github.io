// ./pages/articles/index.js

import fs from "fs";
import glob from "glob-promise";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import SiteLayout from "../../layouts/SiteLayout";

export const getStaticProps = async () => {
  // Find all Markdown files in the /articles directory
  const ARTICLES_DIR = path.join(process.cwd(), "pages/docs");
  const docsPaths = await glob("**/*.md", { cwd: ARTICLES_DIR });

  console.log({ ARTICLES_DIR, docsPaths });

  const docs = docsPaths.map((docPath) => {
    // get the slug from the markdown file name
    const slug = path.basename(docPath, path.extname(docPath));

    // read the markdown files
    const source = fs.readFileSync(
      path.join(process.cwd(), "pages/docs", docPath),
      "utf8"
    );

    // use gray-matter to parse the article frontmatter section
    const { data } = matter(source);
    const { title, description, cover } = data;

    console.log({ data });

    return {
      title,
      description,
      cover,
      slug,
    };
  });

  return {
    props: {
      docs,
    },
  };
};

const SystemDocs = ({ docs }) => {
  return (
    <>
      <Head>
        <title>System Docs</title>
        <meta name="description" content="View all my docs" />
      </Head>

      <section>
        <header className="docs-header">
          <div className="wrapper">
            <h1 className="font-extrabold text-5xl">
              Exibindo todos os artigos
            </h1>
          </div>
        </header>
        <ul className="docs">
          {docs.map((docs) => (
            <li key={docs.slug} className="docs">
              <Link href={`/docs/${docs.slug}`}>
                <header className="docs-item-header">
                  <Image
                    src={docs.cover}
                    width={300}
                    height={200}
                    alt="cover"
                  />
                  <div className="details">
                    <h2 className="font-bold text-3xl">{docs.title}</h2>
                    <p> {docs.description} </p>
                  </div>
                </header>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SystemDocs;

// define layout for docs page
SystemDocs.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
