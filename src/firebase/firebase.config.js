// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYL7g-c3LQTarM28DGyKwe51GPyeBfVzM",
  authDomain: "car-doctor-2d922.firebaseapp.com",
  projectId: "car-doctor-2d922",
  storageBucket: "car-doctor-2d922.appspot.com",
  messagingSenderId: "1022046542598",
  appId: "1:1022046542598:web:7a8d12fb7f270c8ee49c87",
  measurementId: "G-Z35048V6HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;