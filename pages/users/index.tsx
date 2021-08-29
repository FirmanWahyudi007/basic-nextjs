import Layout from "../../components/Layout";
import Link from "next/dist/client/link";

export default function index() {
  return (
    <Layout>
      <div>
        <h1>Users Page</h1>
        <Link href="/users/detail">
          <a>Users Detail</a>
        </Link>
      </div>
    </Layout>
  );
}
