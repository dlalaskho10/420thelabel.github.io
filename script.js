function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thanks for contacting 420 THE Label!"
    );

}


function playDemo() {

    alert(
        "Add your music player or streaming link here."
    );

}
