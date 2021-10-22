import firebase from "firebase/app";
import "firebase/auth";
require("dotenv").config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyBA1D0hthlfNgQGTaLI9M2mcZdqVLloeNg",
  authDomain: "todoapp-9d3a2.firebaseapp.com",
  projectId: "todoapp-9d3a2",
  storageBucket: "todoapp-9d3a2.appspot.com",
  messagingSenderId: "481544986224",
  appId: "1:481544986224:web:e8b1e62fbaa7e1c9135eb5",
});

console.log(app);

export const auth = app.auth();
export default app;
