import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../constants/api";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { Favorite } from "../favorites/Favorite";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + "wp-json/wp/v2/posts";

  useEffect(function () {
    async function getPosts() {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getPosts();
    // eslint-disable-next-line
  }, []);

  if (loading)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading posts...</span>
      </Spinner>
    );

  if (error) return <div>Error loading post</div>;

  return (
    <Container className="posts">
      {posts.map((post) => {
        function createMarkup() {
          return { __html: `${post.excerpt.rendered}` };
        }
        function dateFormatter() {
          let wpDate = post.date;
          let formattedDate = moment(wpDate).format("DD MMM YYYY");
          return formattedDate;
        }
        return (
          <Container key={post.id} className="post mb-4">
            <span className="text-muted">{dateFormatter(post.date)}</span>
            <h2>{post.title.rendered} </h2>
            <div dangerouslySetInnerHTML={createMarkup()} />
            <Link to={`/posts/${post.id}`}>Read more</Link>
            <Favorite id={post.id} />
          </Container>
        );
      })}
    </Container>
  );
}
