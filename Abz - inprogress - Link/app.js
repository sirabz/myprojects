const linkCategory = document.querySelector("#linkCategory");

let linkCategories = [];
console.log(linkCategory);

linkCategory.addEventListener(`keydown`, function (event) {

    if (event.keyCode === 188) {
        console.log("User pressed comma");
        console.log(linkCategory.value);

        linkCategories.push(linkCategory.value);
        console.log(linkCategories);
        linkCategory.value = ``;
    }
})