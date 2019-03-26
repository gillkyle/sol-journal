import firebase from "firebase";
const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "journal-app-service.firebaseapp.com",
  databaseURL: "https://journal-app-service.firebaseio.com",
  projectId: "journal-app-service",
  storageBucket: "journal-app-service.appspot.com",
  messagingSenderId: "492083585165"
};
const fire = firebase.initializeApp(config);

export default fire;
