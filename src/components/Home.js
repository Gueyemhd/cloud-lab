import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(null);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All blogs!"}></BlogList>}
    </div>
  );
};

export default Home;
