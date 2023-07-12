import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAwuTof5TpjwSwPHCxrHwAtp16Qz9FdI7w",
  authDomain: "leave-management-system-33333.firebaseapp.com",
  databaseURL: "https://leave-management-system-33333-default-rtdb.firebaseio.com",
  projectId: "leave-management-system-33333",
  storageBucket: "leave-management-system-33333.appspot.com",
  messagingSenderId: "698049752932",
  appId: "1:698049752932:web:6b8a99808b9f21c7f1d471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)