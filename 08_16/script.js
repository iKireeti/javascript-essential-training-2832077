/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
import backpackObjects from "./components/data.js";

const lidToggleFunc = function () {
  let backpackObject = backpackObjects.find(
    ({ id }) => id === this.parentElement.id
  );
};

const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>     
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");
const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

const bagPacksArray = backpackObjects.map((bagpack) => {
  const bagpackContent = `
    <figure class="backpack__image">
      <img src=${bagpack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${bagpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        bagpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        bagpack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${bagpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        bagpack.pocketNum
      }</span></li>
      <li class="packprop left_backpack__strap">Left strap length:<span> ${
        bagpack.strapLength.left
      } inches</span></li>
      <form class='left-form'>
      <input class ='left-input' placeholder='enter new value'></input>
      <button class='left-update'>update</button>
      </form>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        bagpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        bagpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  <button class='lid-toggle'>Open Lid</button>
`;
  let bagpackArticle = document.createElement("article");
  bagpackArticle.classList.add("bagpack");
  bagpackArticle.setAttribute("id", bagpack.id);
  bagpackArticle.innerHTML = bagpackContent;

  const lidStatus = bagpackArticle.querySelector(".backpack__lid span");
  const clickButton = bagpackArticle.querySelector(".lid-toggle");

  const leftStrapForm = bagpackArticle.querySelector(".left-form");
  const leftStrapValue = bagpackArticle.querySelector(
    ".left_backpack__strap span"
  );

  leftStrapForm.addEventListener("submit", function (event) {
    event.preventDefault();
    leftStrapValue.innerText =
      bagpackArticle.querySelector(".left-input").value + " Inches";
  });

  clickButton.addEventListener("click", function (event) {
    lidStatus.innerText === "open"
      ? (lidStatus.innerText = "closed")
      : (lidStatus.innerText = "open");

    lidStatus.innerText === "open"
      ? (this.innerText = "Close Lid")
      : (this.innerText = "Open Lid");
  });

  return bagpackArticle;
});

bagPacksArray.forEach((bagpack) => {
  main.append(bagpack);
});
