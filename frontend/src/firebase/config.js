import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHrXJHocwPgRHydf8cLBs3Gxjdc6uYhFQ",
  authDomain: "health-care-appointment-system.firebaseapp.com",
  projectId: "health-care-appointment-system",
  storageBucket: "health-care-appointment-system.appspot.com",
  messagingSenderId: "1026994088913",
  appId: "1:1026994088913:web:b0cfc3a89cf59166834ef0",
  measurementId: "G-GF46V76593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
