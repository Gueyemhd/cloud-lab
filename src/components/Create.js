import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const db = getFirestore();
// collection ref
const colRef = collection(db, "blogs");

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIspending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const blog = { title, body, author };
    setIspending(true);

    addDoc(colRef, {
      title: title,
      author: author,
      body: body,
    }).then(() => {
      setIspending(false);
      navigate("/");
    });

    // fetch("http://localhost:8000/blogs", {
    //   method: "POST",
    //   headers: { "content-Type": "application/json" },
    //   body: JSON.stringify(blog),
    // }).then(() => {
    //   setIspending(false);
    //   navigate("/");
    // });
  };
  return (
    <div className="create">
      <h2>Add a New blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input
          type="text"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        {/* <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="mouhamed">mouhamed</option>
          <option value="yoshi">yoshi</option>
          <option value="yoshi">yoshi</option>
        </select> */}
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
