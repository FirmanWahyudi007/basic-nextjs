import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlogs: [];
}

export default function Blog(props: BlogProps) {
  const { dataBlogs } = props;
  return (
    <Layout pageTitle="Blog">
      {dataBlogs.map((blog: Post) => {
        return (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlogs = await res.json();
  return {
    props: {
      dataBlogs,
    },
  };
}
