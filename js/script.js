<script src="js/script.js"></script>
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
const clickSound = document.getElementById("click-sound");
document.querySelectorAll("button, a, .title-buttons span").forEach(el => {
    el.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

});
