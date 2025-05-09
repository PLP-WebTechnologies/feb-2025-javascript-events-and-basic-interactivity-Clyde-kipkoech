// Event Handling
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

document.getElementById("hoverText").addEventListener("mouseover", function() {
    this.style.color = "green";
});

document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});

let timer;
document.getElementById("myButton").addEventListener("mousedown", function() {
    timer = setTimeout(() => alert("Long press detected!"), 1000);
});
document.getElementById("myButton").addEventListener("mouseup", function() {
    clearTimeout(timer);
});

// Interactive Elements
document.getElementById("changeButton").addEventListener("click", function() {
    this.style.backgroundColor = "green";
    this.textContent = "Clicked!";
});

let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;
document.getElementById("nextButton").addEventListener("click", function() {
    index = (index + 1) % images.length;
    document.getElementById("imageGallery").src = images[index];
});

let tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        let content = document.querySelector(`#${this.dataset.target}`);
        content.style.display = content.style.display === "none" ? "block" : "none";
    });
});

// Form Validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById("submitBtn").addEventListener("click", function(e) {
    let input = document.getElementById("myInput");
    if (input.value === "") {
        e.preventDefault();
        alert("Field is required!");
    }

    let email = document.getElementById("emailInput").value;
    if (!validateEmail(email)) {
        e.preventDefault();
        alert("Invalid email format!");
    }

    let password = document.getElementById("passwordInput").value;
    if (password.length < 8) {
        e.preventDefault();
        alert("Password must be at least 8 characters!");
    }
});

document.getElementById("passwordInput").addEventListener("input", function() {
    let feedback = document.getElementById("passwordFeedback");
    if (this.value.length < 8) {
        feedback.textContent = "Password too short!";
    } else {
        feedback.textContent = "Password is good!";
    }
});

