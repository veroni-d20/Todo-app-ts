import firebase from "firebase/app";
import "firebase/auth";
require("dotenv").config();

const app = firebase.initializeApp({});

console.log(app);

export const auth = app.auth();
export default app;
