export function RegionSelect(props) {
    const $select = document.createElement("div");
    $select.classList.add("region-select");
    $select.innerHTML = `
        <select class="select">
            <option value="" selected disabled>Filter by region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        <select>
        <i class="uil uil-angle-down"></i>
    
    `
    document.addEventListener("click", e => {
        if (e.target.matches("option")) {
            localStorage.setItem("region", e.target.value);
            location.hash = `#/region/${localStorage.getItem("region")}`;
        }
    });


    return $select;
}
{/* <i class="uil uil-filter"></i> */}