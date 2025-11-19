document.addEventListener("DOMContentLoaded", () => {
    const profileImg = document.querySelector("#ProfileImage");
    const nameTag = document.querySelector("#name");

    profileImg.addEventListener("mouseenter", () => {
        nameTag.style.opacity = 1;
    });

    profileImg.addEventListener("mouseleave", () => {
        nameTag.style.opacity = 0;
    });
});