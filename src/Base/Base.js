import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const app = initializeApp({
    apiKey: "AIzaSyBc3JOhf_9yIKnrizuYFSS2TvEHsQzY_D4",
    authDomain: "base-understand.firebaseapp.com",
    projectId: "base-understand",
    storageBucket: "base-understand.appspot.com",
    messagingSenderId: "41658856896",
    appId: "1:41658856896:web:237579008a0efebadbc425"
})

const db = getFirestore(app);

export { db };
