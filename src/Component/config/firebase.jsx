import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDqPQjcmjv4qmdMo9mLp976JraRdsJ7rvA",
  authDomain: "leave-management-sys-36414.firebaseapp.com",
  projectId: "leave-management-sys-36414",
  storageBucket: "leave-management-sys-36414.appspot.com",
  messagingSenderId: "948621143184",
  appId: "1:948621143184:web:13842bc78a07498bd13c15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);