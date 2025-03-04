document.addEventListener('DOMContentLoaded', () => {
    let splash_screen = document.querySelector(".splash_screen");
    let logoSpans = document.querySelectorAll(".logo");
    let mission = document.querySelector(".mission");
    let team = document.querySelector(".team");

    /* swipes the screen upwards and makes the existing texts invisible */
    setTimeout(() => {
        splash_screen.style.transition = "top 1s, opacity 1s";
        splash_screen.style.top = '-100vh';
        splash_screen.style.opacity = '0';
        mission.style.transition = "top 1s, opacity 1s";
        logoSpans.style.top = '0%';
        logoSpans.style.opacity = '0';
        mission.style.top = '20%';
        mission.style.opacity = '0';
        team.style.transition = "top 1s, opacity 1s";
        team.style.top = '50%';
        team.style.opacity = '0';
    }, logoSpans.length * 400 + 4000);
    setTimeout(() => {
        window.location.href = "../student2/home.html";
    }, 5400);
});
