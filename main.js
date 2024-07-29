window.onscroll = () => {
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    //BUTTONS COLOR
    let active_home = document.querySelector(".active-home");
    let active_about = document.querySelector(".active-about");
    let active_intership = document.querySelector(".active-internship");
    let active_projects = document.querySelector(".active-projects");
    let active_contact = document.querySelector(".active-contact");

    //active-home
    if (window.scrollY > 700) {
        active_home.style.color = "#323232";
    }
    else if (window.scrollY < 700) {
        active_home.style.color = "#0088ff";
    }
    //active-about
    if (window.scrollY < 700 || window.scrollY > 1400) {
        active_about.style.color = "#262626";
    }
    else if (window.scrollY > 700 && window.scrollY < 1500) {
        active_about.style.color = "#0088ff";
    }
    //active-projects
    if (window.scrollY < 1400 || window.scrollY > 2200) {
        active_projects.style.color = "#262626";
    }
    else if (window.scrollY > 1400 && window.scrollY < 2200) {
        active_projects.style.color = "#0088ff";
    }
    //active-contact
    if (window.scrollY < 2200) {
        active_contact.style.color = "#262626";
    }
    else if (window.scrollY > 2200) {
        active_contact.style.color = "#0088ff";
    }
}

function sendEmail() {
    Email.send({
        SecureToken: "675be58e-e933-414a-9de6-e558782dfe25",
        To : 'contatofewarchelski@gmail.com',
        From : "contatofewarchelski@gmail.com",
        Subject : "New Message from FW PORTFOLIO!",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent succesfully!")
    );
}