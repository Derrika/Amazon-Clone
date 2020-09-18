import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbAxB93FPiUIrKDUX2x6HPoQoGx2zh6hY",
  authDomain: "clone-d351d.firebaseapp.com",
  databaseURL: "https://clone-d351d.firebaseio.com",
  projectId: "clone-d351d",
  storageBucket: "clone-d351d.appspot.com",
  messagingSenderId: "326473595100",
  appId: "1:326473595100:web:4c09a376770741e58b5c19",
  measurementId: "G-GKFB1HGQ5Q",
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const authorize = firebaseApp.auth();

export {database, authorize };