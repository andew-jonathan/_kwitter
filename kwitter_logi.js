
//ADD YOUR FIREBASE LINKS HERE
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
  document.getElementById("user_name").innerHTML = "WELCOME"+user_name+"!"

  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child.room_name.update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name" , room_name);
        window.locationv = "kwitter_room.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("room_name-" +Room_names);
     row = "<div c;ass='room_name' id="+ Room_names +"onclick = 'addRedirectToTheRoomName(this.id)'>#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRedirectToTheRoomName(name){
    console.log(name);
    localStorage.getItem("room_name" , name);
    window.location = "kwitter_room.html";
}