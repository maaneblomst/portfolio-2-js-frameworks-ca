import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../constants/api";
import NextHead from "../../components/layout/NextHead";
import Layout from "../../components/layout/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "react-bootstrap";

export default function Post({ post }) {
  function createMarkup() {
    return { __html: `${post.content.rendered}` };
  }
  function dateFormatter() {
    let wpDate = post.date;
    let formattedDate = moment(wpDate).format("DD MMMM YYYY");
    return formattedDate;
  }
  return (
    <Layout>
      <NextHead title={post.title.rendered} />
      <Container>
        <Row>
          <Col />
          <Col sm={12}>
            <Container className="text-center m-2 p-2">
              <h1>{post.title.rendered}</h1>
              <span className="text-muted">
                Published: {dateFormatter(post.date)}
              </span>
            </Container>
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />
          <Col>
            <Container className="p-2 m-2">
              <div dangerouslySetInnerHTML={createMarkup()} />
            </Container>
          </Col>
          <Col />
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    let posts = [];
    const url = BASE_URL + "wp-json/wp/v2/posts";
    const response = await axios.get(url);
    console.log(response.data);
    posts = response.data;

    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));

    console.log(paths);

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}wp-json/wp/v2/posts?slug=${params.slug}`;

  let post = null;

  try {
    const response = await axios.get(url);
    post = response.data[0];
  } catch (error) {
    console.log(error);
  }

  return {
    props: { post: post },
    revalidate: 10,
  };
}
