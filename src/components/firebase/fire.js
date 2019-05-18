import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_DEV_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DEV_DATABASE_URL,
  projectId: process.env.GATSBY_DEV_PROJECT_ID,
  storageBucket: process.env.GATSBY_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_DEV_MESSAGING_SENDER_ID,
}

class Firebase {
  constructor() {
    if (typeof window !== "undefined") {
      app.initializeApp(config)
      this.auth = app.auth()
      this.db = app.firestore()
      app
        .firestore()
        .enablePersistence()
        .catch(function(err) {
          if (err.code === "failed-precondition") {
            console.error(
              "firestore won't work offline with multiple tabs open"
            )
          } else if (err.code === "unimplemented") {
            console.error(
              "current browser can't take advantage of firestore offline"
            )
          }
        })
    }
  }

  // Auth
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => {
    this.auth.signOut()
    window.location.replace("/login")
  }

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)
}

export default Firebase
