import Head from 'next/head'
import styles from '../styles/App.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Index = () => {
  const appName = 'Blog App - Posts'
  const API_URL = 'https://jsonplaceholder.typicode.com/posts'

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (posts.length === 0) return <p>No posts...</p>

  return (
    <div className={styles.main_container}>
      <Head>
        <title>{appName}</title>
        <meta name="description" content={appName} />
      </Head>

      <main>
        <div className={styles.container}>
          <h1 className={styles.center}>{appName}</h1>
          {posts.map((post) => (
            <article key={post.id} className={styles.episode}>
              <div className={styles.episode__number}>{post.id}</div>
              <div className={styles.episode__content}>
                <div className={styles.title}>{post.title}</div>
                <div className={styles.story}>
                  <p>{post.body}</p>
                  <p>
                    <Link
                      href={{
                        pathname: '/posts/comments',
                        query: { post_id: post.id },
                      }}
                    >
                      See the comments
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Index
