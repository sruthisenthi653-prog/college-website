function showMessage(){
    alert("Thank you for your interest in Pioneer College!");
}

document.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Your message has been submitted successfully!");
});
