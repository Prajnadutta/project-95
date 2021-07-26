// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyArnH2fgyif__sfGRgpBFrjfhOLf7eLeN8",
    authDomain: "classtest-29075.firebaseapp.com",
    databaseURL: "https://classtest-29075-default-rtdb.firebaseio.com",
    projectId: "classtest-29075",
    storageBucket: "classtest-29075.appspot.com",
    messagingSenderId: "967167901638",
    appId: "1:967167901638:web:18eb3d68aef92a71067cc7",
    measurementId: "G-XQ7SNZLEXF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}