let = menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

// Contact Form

// listen to the form submission
document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const serviceID = "service_4awooqr";
        const templateID = "template_jw5153m";

        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Thanks for your message!...I will get back to you as soon as possible!");
            },
            (error) => {
                console.log("FAILED...", error);
                alert("Ops...Looks like something went wrong!", error);
            }
        );
    });

