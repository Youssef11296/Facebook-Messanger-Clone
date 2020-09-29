import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAeKMzGGyDqlCdHhVE74tRNr9KP1lNwmls",
  authDomain: "facebook-messanger-clone-114e4.firebaseapp.com",
  databaseURL: "https://facebook-messanger-clone-114e4.firebaseio.com",
  projectId: "facebook-messanger-clone-114e4",
  storageBucket: "facebook-messanger-clone-114e4.appspot.com",
  messagingSenderId: "194976851329",
  appId: "1:194976851329:web:332278da5c334861a9f480",
  measurementId: "G-TWKSENQNQ3",
});

const db = firebaseApp.firestore();

export default db;
