import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_YNHqJt_q_DSIkjJxiMlhyCWIrs3L6_s",
  authDomain: "fir-9-momo.firebaseapp.com",
  projectId: "fir-9-momo",
  storageBucket: "fir-9-momo.appspot.com",
  messagingSenderId: "484689112115",
  appId: "1:484689112115:web:6066f91c53f282ce0d8746",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
