import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FS_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FS_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FS_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FS_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FS_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FS_APP_ID}`,
    measurementId: `${process.env.REACT_APP_FS_MEASUREMENT_ID}`
};

// const firebaseConfig = {
//     apiKey: "AIzaSyA4J11bPbPLqduJXsKPsH342bde1Y9Fn2Q",
//     authDomain: "airbnb-clone-99a17.firebaseapp.com",
//     projectId: "airbnb-clone-99a17",
//     storageBucket: "airbnb-clone-99a17.appspot.com",
//     messagingSenderId: "696178664806",
//     appId: "1:696178664806:web:d2cf2dcd48e9bc317494a7",
//     measurementId: "G-VCE08C7HSN"
//   };

const app = initializeApp(firebaseConfig);


// export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;