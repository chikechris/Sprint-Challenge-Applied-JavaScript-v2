// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => {
    console.log("data: ", res);
    const topicObj = res.data.topics;
    console.log(topicObj);
    topicObj.forEach(topic => {
      const tab = createTab(topic);
      topics.appendChild(tab);
    });
  })
  .catch(error => {
    console.log("Error", error);
  });

function createTab(topicTab) {
  // create elements
  const tab = document.createElement("div");

  // set classes
  tab.classList.add("tab");

  // set text content
  tab.textContent = topicTab;

  return tab;
}
