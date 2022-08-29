import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "my-portofolio-messages.firebaseapp.com",
  projectId: "my-portofolio-messages",
  storageBucket: "my-portofolio-messages.appspot.com",
  messagingSenderId: "649746817267",
  appId: "1:649746817267:web:eea5974f60b8118b85d786",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
