import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { BASE_URL } from "../constants/api";
import NextHead from "../components/layout/NextHead";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home(props) {
  return (
    <Layout>
      <NextHead title="Home" />
      <Container className="hero-image p-0 m-0" />
      <Row>
        <Col sm={9} className="p-0">
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
              <Container key={post.id} className="mb-3 p-3">
                <h3 className="fw-bold">{post.title.rendered}</h3>
                <span className="text-muted">
                  Published: {dateFormatter(post.date)}
                </span>
                <div dangerouslySetInnerHTML={createMarkup()} />
                <a
                  key={post.slug}
                  href={`detail/${post.slug}`}
                  className="d-block"
                >
                  Read more..
                </a>
              </Container>
            );
          })}
        </Col>
      </Row>
    </Layout>
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
