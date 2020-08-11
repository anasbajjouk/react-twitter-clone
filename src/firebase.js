import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxh-XmG-tNsMWkT16taHi3GTaC9ltRBxk",
  authDomain: "twitter-clone-a82f3.firebaseapp.com",
  databaseURL: "https://twitter-clone-a82f3.firebaseio.com",
  projectId: "twitter-clone-a82f3",
  storageBucket: "twitter-clone-a82f3.appspot.com",
  messagingSenderId: "606289006087",
  appId: "1:606289006087:web:4cb86c93f5cf5dad1b64a2",
  measurementId: "G-CGG9C0LGZD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
