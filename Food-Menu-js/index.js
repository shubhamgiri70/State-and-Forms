let tags = document.querySelector(".tags");
let foodItems = document.querySelector(".food-items");

let allFooditemType = [...new Set(data.map((food) => food.category))];

function createUI(filteredData) {
  foodItems.innerHTML = "";
  filteredData.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("flex", "justify-between");

    let img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    let foodDetails = document.createElement("div");
    foodDetails.classList.add("food-details");

    let div = document.createElement("div");
    div.classList.add("flex", "item-center", "justify-between");

    let h2 = document.createElement("h2");
    h2.innerText = item.title;

    let span = document.createElement("span");
    span.innerText = item.price;

    let hr = document.createElement("hr");

    let p = document.createElement("p");
    p.innerText = item.desc;

    div.append(h2, span);
    foodDetails.append(div, hr, p);
    li.append(img, foodDetails);
    foodItems.append(li);
  });
}

function createTags() {
  tags.innerHTML = "";
  let allTag = document.createElement("li");
  allTag.innerText = "ALL";
  allTag.addEventListener("click", () => {
    createUI(data);
  });
  tags.append(allTag);

  allFooditemType.forEach((food) => {
    let li = document.createElement("li");
    li.innerText = food.toUpperCase();
    li.addEventListener("click", () => {
      let filteredData = data.filter((fooditem) => fooditem.category === food);
      createUI(filteredData);
    });

    tags.append(li);
  });
}

createUI(data); 
createTags();
