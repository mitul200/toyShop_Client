// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_project,
//   storageBucket: import.meta.env.VITE_storageBuck,
//   messagingSenderId: import.meta.env.VITE_messagingSender,
//   appId: import.meta.env.VITE_app,
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_project,
  storageBucket: import.meta.env.VITE_storageBuck,
  messagingSenderId: import.meta.env.VITE_messagingSender,
  appId: import.meta.env.VITE_app,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
