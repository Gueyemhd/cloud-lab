import { useState, useEffect } from "react";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

// collection ref
const colRef = collection(db, "blogs");

const useFetch = (id) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id == null) {
      //get collection data
      getDocs(colRef)
        .then((snapshot) => {
          let books = [];
          snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id });
            setData(books);
          });
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    } else {
      // get a single document
      const docRef = doc(db, "blogs", id);

      onSnapshot(
        docRef,
        (doc) => {
          setData(doc.data());
          setIsPending(false);
          setError(null);
        },
        (err) => {
          setIsPending(false);
          setError(err.message);
        }
      );
    }
  }, [id]);

  return { data, isPending, error };
};

export default useFetch;
