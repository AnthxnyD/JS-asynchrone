const button = document.getElementById("1");
console.log(button);

fetch("Contain.json")
    .then((response) => response.json())
    .then((contain) => {
        const main = document.querySelector("main");
        const ul = document.createElement("ul");

        console.log(contain);

        main.appendChild(ul);
        contain.forEach((element) => {
            const li = document.createElement("li");
            li.textContent =
                element.name + " , " + element.age + " , " + element.secretIdentity;

            ul.appendChild(li);
        });


    })
    .catch((error) => {
        console.log("There was an error!", error);
    });