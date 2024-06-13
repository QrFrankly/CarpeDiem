const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
icon.onclick = function () {
    search.classList.toggle("activesearch");
};

document.addEventListener("keyup", (e) => {
    if (e.target.matches("#mysearch")) {
        if (e.key === "Escape") e.target.value = " ";

        document.querySelectorAll(".produc").forEach((filterElement) => {
            filterElement.textContent
                .toLocaleLowerCase()
                .includes(e.target.value.toLocaleLowerCase())
                ? filterElement.classList.remove("filter")
                : filterElement.classList.add("filter");
        });

        // document.querySelectorAll(".card-content").forEach((filterElement) => {
        //     filterElement.textContent
        //         .toLocaleLowerCase()
        //         .includes(e.target.value.toLocaleLowerCase())
        //         ? filterElement.classList.remove("filter")
        //         : filterElement.classList.add("filter");
        // });
    }
});
