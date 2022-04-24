//Get the button:
mybutton = document.getElementById("scroll-up");

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Read more card
function readMore(i) {
    let dots = document.getElementById(`dots${i}`);
    let moreText = document.getElementById(`more${i}`);
    let btnText = document.getElementById(`myBtn${i}`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less...";
        moreText.style.display = "inline";
    }
}
