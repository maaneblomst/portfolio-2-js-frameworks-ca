import NextHead from "../components/layout/NextHead";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import { ImHeart, ImHeartBroken } from "react-icons/im";

export default function Favourites() {
  return (
    <Layout>
      <NextHead title="Favourites" />
      <Heading title="Favourites" />
    </Layout>
  );
}
