import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/BlogPost.module.css'
import * as fs from 'fs'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }

  const [blog, setBlog] = useState(props.myBlog || null);
  const router = useRouter();

  // Show loading on fallback pages
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Handle missing blog case
  if (!blog) {
    return <div>Error: Blog not found</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
     <h1>{blog.title}</h1>
        <hr />
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div> }
      </main>
    </div>
  );
};

// Static path side
export async function getStaticPaths() {
  let allb = await fs.promises.readdir('blogdata');
  const paths = allb.map((item) => ({
    params: { slug: item.replace('.json', '') },
  }));

  return {
    paths,
    fallback: true, // allows build-time fallback
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  try {
    const data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
    return {
      props: { myBlog: JSON.parse(data) },
    };
  } catch (error) {
    // If file not found or read fails, show 404
    return {
      notFound: true,
    };
  }
}

export default Slug;
