// // src/service/firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "your-app.firebaseapp.com",
//   projectId: "your-app-id",
//   storageBucket: "your-app.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:abcdef123"
// };


// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app); // This connects your app to the Database



























// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRyEuBm4LICtMaV6IGT2WP4XpG-CN7450",
  authDomain: "ai-trip-planner-7cecd.firebaseapp.com",
  projectId: "ai-trip-planner-7cecd",
  storageBucket: "ai-trip-planner-7cecd.firebasestorage.app",
  messagingSenderId: "350213857337",
  appId: "1:350213857337:web:edf53d9ce4d5ebaef3ade8",
  measurementId: "G-3QDNVV6LD4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);