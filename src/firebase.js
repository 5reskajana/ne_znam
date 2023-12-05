import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import {getFirestore} from "firebase/firestore";

const app = firebase.initializeApp({

    apiKey: 'AIzaSyAwJxU9M5-zFfAG024H5ULamAqQ4vA1WIM',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID

})
export const auth = app.auth()
export default app
export const db = getFirestore(app);
