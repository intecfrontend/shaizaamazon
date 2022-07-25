import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpj0SZQIFzoke4uWDeD4-5ei4kre29yU4",
  authDomain: "login-763ba.firebaseapp.com",
  projectId: "login-763ba",
  storageBucket: "login-763ba.appspot.com",
  messagingSenderId: "75292848804",
  appId: "1:75292848804:web:6ad973b890c0314e4e2c31",
  measurementId: "G-JZCPHGH49N"
});
const auth = firebase.auth();


export { auth };
