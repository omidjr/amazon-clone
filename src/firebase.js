import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFLmJcVFlcfOhOxoImV6kZ2Ua9IXEoEew",
  authDomain: "clone-43455.firebaseapp.com",
  databaseURL: "https://clone-43455.firebaseio.com",
  projectId: "clone-43455",
  storageBucket: "clone-43455.appspot.com",
  messagingSenderId: "503232964354",
  appId: "1:503232964354:web:0dd1fadf4061234de6441b",
  measurementId: "G-RZ3RBST4YP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
