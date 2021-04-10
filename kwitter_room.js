
 var firebaseConfig = {
    apiKey: "AIzaSyCVSIMb2HHs1g8gpilohtCggsNcGBheM8o",
    authDomain: "qwit-503ab.firebaseapp.com",
    databaseURL: "https://qwit-503ab-default-rtdb.firebaseio.com",
    projectId: "qwit-503ab",
    storageBucket: "qwit-503ab.appspot.com",
    messagingSenderId: "571575166558",
    appId: "1:571575166558:web:2604c0e41815dae0a2f6cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });

});
}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}