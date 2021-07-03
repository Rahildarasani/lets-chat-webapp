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
  
  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg=documnet.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
