var firebaseConfig = {
  apiKey: "AIzaSyCX989SzsxNrPK5J3LET-KSkhc-Wh3fuD4",
  authDomain: "chat-app-fca4b.firebaseapp.com",
  databaseURL: "https://chat-app-fca4b-default-rtdb.firebaseio.com",
  projectId: "chat-app-fca4b",
  storageBucket: "chat-app-fca4b.appspot.com",
  messagingSenderId: "295754381709",
  appId: "1:295754381709:web:ad827a63bab53a3264e5c4",
  measurementId: "G-WQQ390FQ7X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username_input");

  document.getElementById("username_input").innerHTML= "Welcome " + user_name + " !";

  function  addRoom()
  {
      room_name=document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
          purpose: " Add new room "
      });
      localStorage.setItem("room_name" , room_name);
      
      window.location="lets_chat_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name" , Room_names);
      row = "<div class='Room_names' id=" + Room_names +"onclick= 'redirectToRoomName(this.id)'> # "+Room_names+"</div></hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
  console.log(name);

  localStorage.setItem("room_name" , name);

  window.location="index.html";
}