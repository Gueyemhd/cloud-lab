import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getFirestore, deleteDoc, doc } from "firebase/firestore";

const db = getFirestore();

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(id);
  const navigate = useNavigate();

  const handleClick = () => {
    const docRef = doc(db, "blogs", id);
    deleteDoc(docRef).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
