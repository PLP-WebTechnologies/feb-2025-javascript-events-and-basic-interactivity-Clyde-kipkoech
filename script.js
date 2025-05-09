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

let images = ["https://i.pinimg.com/736x/d1/4e/15/d14e15ef45e34499a4a081ea338e9254.jpg", "https://i.pinimg.com/736x/c6/ea/40/c6ea406c333809ad8fe95ea88e68406c.jpg", "https://i.pinimg.com/736x/d0/74/6c/d0746c822c78a48c5e434313e60d1577.jpg"];
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

