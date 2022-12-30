const $ = document;
const input = $.getElementById("text-to-search");
const searchBtn = $.querySelector(".container button");
const paragraph = $.getElementById("paragraph");

const searchInText = () => {
    let inputValue = input.value.trim();
    if (inputValue !== "") {
        let mainPattern = new RegExp(inputValue, "gi");

        if (mainPattern.test(paragraph.innerHTML)) {
            paragraph.innerHTML = paragraph.textContent.replace(mainPattern, (item) => {
                return `<mark>${item}</mark>`;
            });
        }
    } else {
        let marks = paragraph.querySelectorAll("mark");
        marks.forEach((item) => {
            paragraph.innerHTML = paragraph.textContent.replace(item, item.innerHTML);
        });
    }
};

searchBtn.addEventListener("click", searchInText);
window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchInText();
    }
});
