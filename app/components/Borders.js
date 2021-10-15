export function Borders(props) {
    let { name, cca2 } = props,
        borderContent = name.common;

    // document.addEventListener("click", e => {
    //     if (!e.target.matches("#detail")) return false;

    //     localStorage.setItem("cca2", e.target.dataset.cca2);
    // })
    
    return `
        <a id="detail" class="b-box" href="#/${borderContent}" data-cca2="${cca2}">${borderContent}</a>
    `
}