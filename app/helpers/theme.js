export function Theme() {
    const $themeBtn = document.querySelector(".theme");

    document.addEventListener("click", e => {
        if (e.target !== $themeBtn) return false;

        alert("Comming soon :)")
    });
}