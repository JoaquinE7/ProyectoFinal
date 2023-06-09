// const firebase = require('firebase');
// import firebase from "firebase";
// var firebase = require('firebase/app')
// require("firebase/firestore");
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDmbw6thX59gb1_epaRamNW9F7pzye08E0",
    authDomain: "basepelis-1170.firebaseapp.com",
    projectId: "basepelis-1170",
    storageBucket: "basepelis-1170.appspot.com",
    messagingSenderId: "1013459864022",
    appId: "1:1013459864022:web:2d81ad35190d50cfebbc77",
    measurementId: "G-7HCJCN0133"
};

const express = require("express"); // Importar express
const router = express.Router();
const serviceAccount = require('./basepelis-1170-bcd17c60f792.json');

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
initializeApp({
    credential: cert(serviceAccount)
  });




router.get("/ayuda", (req, res) => {

    // const db = firebase.firestore();
    const db = getFirestore();

    db.collection('1170').get()
        .then((snapshot) => {

            // res.send({peli: snapshot[Math.floor(snapshot.size * Math.random())]})

            // console.log(snapshot.data[2]);

            let arr = [];


            snapshot.forEach((doc) => {
                arr.push(doc.data())
            });
            // res.send({peli: arr[Math.floor(5 * Math.random())].Numero}).status(200)

            res.json(arr[Math.floor(5 * Math.random())].Numero)

            console.log(arr); 
        })
        .catch((error) => {
            console.log('Error getting documents:', error);
            res.json(243606)
        });
});
module.exports =
  router;