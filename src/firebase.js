import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAK11J_eEn-WqxJxZ3l-Kz4XImjXBBLVro",
  authDomain: "amazo-clone-9c6e3.firebaseapp.com",
  databaseURL: "https://amazo-clone-9c6e3.firebaseio.com",
  projectId: "amazo-clone-9c6e3",
  storageBucket: "amazo-clone-9c6e3.appspot.com",
  messagingSenderId: "652322067637",
  appId: "1:652322067637:web:09529569059fef28ebdafc",
  measurementId: "G-CP6WL6BB95",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
