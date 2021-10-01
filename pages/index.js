import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { BASE_URL } from "../constants/api";
import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Navigation from "../components/navigation/Navigation";
import Container from "react-bootstrap/Container";

export default function Home(props) {
  return (
    <Navigation>
      <Head title="Home" />
      <Image
        src="/images/home.jpg"
        alt="delicious smoothie jars filled with fresh fruits"
        width={1200}
        height={520}
        className="mb-2"
      />

      {props.posts.map((post) => {
        function createMarkup() {
          return { __html: `${post.excerpt.rendered}` };
        }
        function dateFormatter() {
          let wpDate = post.date;
          let formattedDate = moment(wpDate).format("DD MMMM YYYY");
          return formattedDate;
        }
        return (
          <Container key={post.id} className="mb-5">
            <h3>{post.title.rendered}</h3>
            <span className="text-muted">
              Published: {dateFormatter(post.date)}
            </span>
            <div dangerouslySetInnerHTML={createMarkup()} />
            <a key={post.slug} href={`detail/${post.slug}`} className="d-block">
              Read more..
            </a>
          </Container>
        );
      })}
    </Navigation>
  );
}

export async function getStaticProps() {
  let posts = [];
  const url = BASE_URL + "wp-json/wp/v2/posts";

  try {
    const response = await axios.get(url);
    console.log(response.data);
    posts = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      posts: posts,
    },
  };
}
