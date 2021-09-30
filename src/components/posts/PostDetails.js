import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

export default function PostDetails() {
  const [post, setPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadError, setLoadError] = useState(null);

  let { id } = useParams();

  const url = BASE_URL + `wp-json/wp/v2/posts/${id}`;

  useEffect(function () {
    async function getPost() {
      try {
        const response = await axios.get(url);
        setPost(response.data);
      } catch (error) {
        console.log(error);
        setLoadError(error.toString());
      } finally {
        setLoadingPost(false);
      }
    }
    getPost();
    // eslint-disable-next-line
  }, []);

  if (loadingPost)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading post...</span>
      </Spinner>
    );

  if (loadError) return <div>Error loading post</div>;

  function createMarkup() {
    return { __html: `${post.content.rendered}` };
  }

  function dateFormatter() {
    let wpDate = post.date;
    let formattedDate = moment(wpDate).format("DD MMMM YYYY");
    return formattedDate;
  }

  return (
    <Container>
      <h1>{post.title.rendered}</h1>
      <span>{dateFormatter(post.date)}</span>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Container>
  );
}
