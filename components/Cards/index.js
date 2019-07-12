// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    console.log("data: ", res);
    const articlesObj = res.data.articles;
    console.log(articlesObj);
    Object.values(articlesObj).forEach(arr => {
      const articlesArr = arr;
      console.log(articlesArr);
      articlesArr.forEach(articleObj => {
        console.log(articleObj);
        const articleComp = createCard(articleObj);
        cardsContainer.appendChild(articleComp);
      });
    });
  })
  .catch(error => {
    console.log("Error", error);
  });

// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

function createCard(cardObj) {
  const cardOf = document.createElement("div");
  const headlineOf = document.createElement("div");
  const authorOf = document.createElement("div");
  const imgOf = document.createElement("div");
  const authorImageOf = document.createElement("img");
  const authorNameOf = document.createElement("span");
  //
  // set class names:
  cardOf.className = "card";
  headlineOf.className = "headline";
  authorOf.className = "author";
  imgOf.className = "img-container";

  // set text content and attributes:
  authorImageOf.src = cardObj.authorPhoto;
  headlineOf.textContent = cardObj.headline;
  authorNameOf.textContent = `By ${cardObj.authorName}`;

  // appending and putting the element structure together:
  cardOf.appendChild(headlineOf);
  cardOf.appendChild(authorOf);
  authorOf.appendChild(imgOf);
  authorOf.appendChild(authorNameOf);
  imgOf.appendChild(authorImageOf);

  return cardOf;
}

// Create a card for each of the articles and add the card to the DOM.
