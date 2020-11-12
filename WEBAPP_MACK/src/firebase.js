import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: 'AIzaSyBTrmQMdsBzftDehntM6E_xtAN_H3inggI',
    authDomain: 'maridosaluguel-62276.firebaseapp.com',
    databaseURL: 'https://maridosaluguel-62276.firebaseio.com',
    projectId: 'maridosaluguel-62276',
    storageBucket: 'maridosaluguel-62276.appspot.com',
    messagingSenderId: '931825271808',
    appId: '1:931825271808:web:a1d70f5ec1a6658c1584e5'
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const firestore = app.firestore();
const storage = app.storage();

export {auth, firestore, storage};
export default app;