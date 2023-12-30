// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDYv6qarRJzO3Wn6IPaA2yxJOqB5KW_Onk",
  authDomain: "morning-turf-football.firebaseapp.com",
  projectId: "morning-turf-football",
  storageBucket: "morning-turf-football.appspot.com",
  messagingSenderId: "792956606286",
  appId: "1:792956606286:web:9ba48f50a69a742116301f",
  measurementId: "G-8C8EHJ0TB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app);