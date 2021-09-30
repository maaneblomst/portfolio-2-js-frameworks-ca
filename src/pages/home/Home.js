import Heading from "../../components/common/Heading";
import PostList from "../../components/posts/PostList";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import image from "../../images/home_img.jpg";

function Home() {
  return (
    <>
      <Heading size="1" display="d-none" content="Home" />
      <Container>
        <Image
          src={image}
          width={1200}
          height={412}
          className="mb-2"
          fluid
          alt="image"
        ></Image>
        <PostList />
      </Container>
    </>
  );
}

export default Home;
