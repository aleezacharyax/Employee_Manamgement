// Define the clicklog function
// function clicklog(event) {
//     // Prevent the default form submission behavior
//     

//     // Get the values of the userID and password input fields
//     const user_ID = document.getElementById("userID").value;
//     const password = document.getElementById("password").value;

//     // Log the values to the console for debugging
//     console.log("User ID:", user_ID);
//     console.log("Password:", password);
// }

// // Wait for the DOM to be fully loaded before accessing elements
// document.addEventListener("DOMContentLoaded", function() {
//     

//     // Attach event listener to the login button
//     
// });

const btnLogin = document.querySelector(".btn");
btnLogin.addEventListener("click", clicklog);

function clicklog(){
    event.preventDefault();
    const user_ID = document.getElementById("userID").value;
    const password = document.getElementById("password").value;

    // Log the values to the console for debugging
    console.log("User ID:", user_ID);
    console.log("Password:", password);
    
}
