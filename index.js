// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyAvgKm42YqxQUBZBvSW4ja6MuI84uO2y44",
  authDomain: "ethancsci225.firebaseapp.com",
  projectId: "ethancsci225",
  storageBucket: "ethancsci225.appspot.com",
  messagingSenderId: "393850707109",
  appId: "1:393850707109:web:0649917dd9037550d2414c",
  measurementId: "G-21TV94DY8P"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value//?
    });


  });

});
