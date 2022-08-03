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

const app = initializeApp(firebaseConfig);


// export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;