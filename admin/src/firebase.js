import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-d528a.firebaseapp.com",
  projectId: "netflix-d528a",
  storageBucket: "netflix-d528a.appspot.com",
  messagingSenderId: "794175909581",
  appId: "1:794175909581:web:790334a9850126b14f8384",
  measurementId: "G-5ECBG8JWRJ",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
