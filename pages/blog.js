import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from "fs";
import InfiniteScroll from 'react-infinite-scroll-component';


// step 1: Collect all the files from blogdata directory
// step 2: iterate through them and display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs.slice(0, 4));
  const [count, setCount] = useState(2)

   const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+4}`)
    setCount(count + 4)
    let data = await d.json()
    setBlogs(data)
  };

  return ( 
    <div className={styles.container}>
      <main className={styles.main}>

        <InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={props.allCount !== blogs.length}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  } 
  >
  {blogs.map((blogItem) => {
          return <div key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
            <p className={styles.blogItemp}>{blogItem.metadesc.substr(0, 200)}</p>
             <Link href={`/blogpost/${blogItem.slug}`}><button className={styles.btn}>Read More</button></Link>
          </div>
        })}
</InfiniteScroll>

      </main>
    </div>
  )
};

export async function getStaticProps(context) {
 let data = await fs.promises.readdir("blogdata");
   let allCount = data.length;
   let myfile;
   let allBlogs = [];
   for (let index = 0; index < 4; index++) {
     const item = data[index]; 
       myfile = await fs.promises.readFile(("blogdata/" + item), "utf-8")
       allBlogs.push(JSON.parse(myfile))
      }

  return {
    props: {allBlogs, allCount}, // Will be passed to the page component as props
  }
}

export default Blog