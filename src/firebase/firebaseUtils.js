import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDC0o33dIOfRYOZYAD3_Z5oPKLxPFqylLc",
    authDomain: "tung-test-db.firebaseapp.com",
    projectId: "tung-test-db",
    storageBucket: "tung-test-db.appspot.com",
    messagingSenderId: "341491609101",
    appId: "1:341491609101:web:3dbd4f6929754c23396f44",
    measurementId: "G-NDBQDXVCNF"
}

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const loginWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;