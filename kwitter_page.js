//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCRFiw8ePezey_A12Q9INWUeJzuHNPzVNw",
    authDomain: "kwitter-f6045.firebaseapp.com",
    databaseURL: "https://kwitter-f6045-default-rtdb.firebaseio.com",
    projectId: "kwitter-f6045",
    storageBucket: "kwitter-f6045.appspot.com",
    messagingSenderId: "33290429831",
    appId: "1:33290429831:web:a829fb5a79d502b544df22",
    measurementId: "G-TT287BNKKY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name : user_name,
              message : msg,
              like : 0
        });
        document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();