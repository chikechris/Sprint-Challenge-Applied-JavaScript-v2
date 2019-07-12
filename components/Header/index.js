// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());

function Header() {
  // create elements
  const headerOf = document.createElement("div");
  const dateOf = document.createElement("span");
  const titleOf = document.createElement("h1");
  const tempOf = document.createElement("span");

  // set up structure of elements
  headerOf.appendChild(dateOf);
  headerOf.appendChild(titleOf);
  headerOf.appendChild(tempOf);

  // set class names
  headerOf.classList.add("header");
  dateOf.classList.add("date");
  tempOf.classList.add("temp");

  // set text content
  dateOf.textContent = "SMARCH 28, 2019";
  titleOf.textContent = "Lambda Times";
  tempOf.textContent = "98°";

  return headerOf;
}
