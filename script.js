const container = document.querySelector(".container");

const getRGBValue = () => {
    return Math.floor(Math.random() * 256);
}

const createBox = side => {
    for (let i = 0; i < (side * side); i++) {
        const div = document.createElement("div");
        div.style.width = `${960 / side}px`;
        div.style.aspectRatio = "1 / 1";
        div.style.opacity = 0;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = `rgb(${getRGBValue()}, ${getRGBValue()}, ${getRGBValue()})`;
            div.style.opacity = Number(div.style.opacity) + 0.1;
        })
        container.appendChild(div);
    }
}

createBox(16);

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let sides;
    do {
        sides = Number(prompt("Enter number of boxes on each side (1 to 100)."));
    } while (sides > 100 || sides < 1)
    container.replaceChildren();
    createBox(sides);
})