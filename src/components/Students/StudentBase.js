import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const StudentBase = initializeApp({
    apiKey: "AIzaSyD0MmI68lCASFze1t9V2U7rv7Hn1EJyA4o",
    authDomain: "codelab-students.firebaseapp.com",
    projectId: "codelab-students",
    storageBucket: "codelab-students.appspot.com",
    messagingSenderId: "10952386684",
    appId: "1:10952386684:web:f45e259c270931931081f9"
})

const data = getFirestore(StudentBase)

export { data }