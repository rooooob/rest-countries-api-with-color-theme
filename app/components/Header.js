export function Header() {
    const $header = document.createElement("header");
    $header.innerHTML = `
        <a href="#/" class="main-header">
            <h2>Where in the world?</h2>
        <a/>
        <p class="theme">
        <i class="uil uil-moon"></i>
        DarkMode</p>
    `

    return $header;
}