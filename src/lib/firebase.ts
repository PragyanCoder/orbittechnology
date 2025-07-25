import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6YFQ0Sdwwrz1dD6ot41j4x0PD6yBSdsU",
  authDomain: "orbittechn-93fb1.firebaseapp.com",
  projectId: "orbittechn-93fb1",
  storageBucket: "orbittechn-93fb1.firebasestorage.app",
  messagingSenderId: "858990599268",
  appId: "1:858990599268:web:fcabdd90433e7310be5371",
  measurementId: "G-5BY6KEZWPF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;
