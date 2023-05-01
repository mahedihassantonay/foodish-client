// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAXwfL0BseKeNrMiRT91515lFJsa3vk_Q",
  authDomain: "chef-recipe-hunter-700c2.firebaseapp.com",
  projectId: "chef-recipe-hunter-700c2",
  storageBucket: "chef-recipe-hunter-700c2.appspot.com",
  messagingSenderId: "484773689342",
  appId: "1:484773689342:web:d4eeebf05e17600a4fb2af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;