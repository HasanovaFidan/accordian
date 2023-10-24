
const item = document.querySelectorAll(".item");
const option = document.querySelectorAll(".option");

item.forEach((button, i) => {
    button.addEventListener("click", function () {
        if (option[i].style.display == "flex") {
            option[i].style.display = "none";
        } else {
            option.forEach((e) => {
                e.style.display = "none";
            });
            option[i].style.display = "flex";
        }
    });
});


