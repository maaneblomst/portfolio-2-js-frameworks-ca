import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../constants/api";
import Head from "../../components/layout/Head";
import Navigation from "../../components/navigation/Navigation";

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
    <Navigation>
      <Head title={post.title.rendered} />
      <h1>{post.title.rendered}</h1>
      <span className="text-muted">Published: {dateFormatter(post.date)}</span>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Navigation>
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
