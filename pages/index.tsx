import Layout from "../components/Layout";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={style["container"]}>
        <div className={style["card"]}>
          <h1 className="title">Halooo</h1>
        </div>
      </div>
    </Layout>
  );
}
