import Head from 'next/head'
import styles from '../../styles/App.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Comments = () => {
  const appName = 'Blog App - Comments'
  const API_URL = 'https://jsonplaceholder.typicode.com/posts'

  const [comments, setComments] = useState([])
  const [isLoading, setLoading] = useState(true)

  const router = useRouter()
  const query = router.query

  useEffect(() => {
    setLoading(true)
    fetch(`${API_URL}/${query.post_id}/comments`)
      .then((res) => res.json())
      .then((comments) => {
        setComments(comments)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (comments.length === 0) return <p>No comments...</p>

  return (
    <div className={styles.main_container}>
      <Head>
        <title>{appName}</title>
        <meta name="description" content={appName} />
      </Head>

      <main>
        <div className={styles.container}>
          <h1 className={styles.center}>{appName}</h1>
          <p>
            <Link href="/">Back to the posts list</Link>
          </p>
          {comments.map((comment) => (
            <article key={comment.id} className={styles.episode}>
              <div className={styles.episode__number}>{comment.id}</div>
              <div className={styles.episode__content}>
                <div className={styles.title}>{comment.name}</div>
                <div className={styles.story}>
                  <p>{comment.email}</p>
                  <hr />
                  <p>{comment.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Comments
