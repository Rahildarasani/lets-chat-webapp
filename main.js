var username;

function signin() {
    username = document.getElementById("username_input").value;
    localStorage.setItem("Username", username);
    window.location = "lets_chat_room.html";
}