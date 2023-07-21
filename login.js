const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    window.location.href = "index.html";
})

const signupLink = document.getElementById("signup")

function changeColourBlue(){
    signupLink.style.color = "#075063";
}

function changeColourWhite(){
    signupLink.style.color = "white";
}

signupLink.addEventListener("mouseenter", () =>{
    setTimeout(changeColourBlue, 300);
})

signupLink.addEventListener("mouseleave", () =>{
    changeColourWhite();
})