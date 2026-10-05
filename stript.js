function orderNow() {
    alert(
        "Thank you for choosing Kampala Fizz! " +
        "Our sales team will contact you shortly."
    );
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    contactForm.reset();
});
