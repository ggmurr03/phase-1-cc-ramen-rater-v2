// index.js

//import VirtualConsoleLogEntryStringifier from "happy-dom/lib/console/utilities/VirtualConsoleLogEntryStringifier.js";

//////////////////////////////////////////////////////
//selectors defined in functions per Lantz on discord
/////////////////////////////////////////////////////



// Callbacks
const handleClick = (ramen) => {
  const detailImg = document.querySelector("#ramen-detail > .detail-image");
  const detailName = document.querySelector("#ramen-detail > .name");
  const detailRestaurant = document.querySelector("#ramen-detail > .restaurant");
  const detailsRating = document.getElementById("rating-display");
  const detailsComment = document.getElementById("comment-display");
  
  detailImg.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailsRating.textContent = ramen.rating;
  detailsComment.textContent = ramen.comment;
  console.log("hi");
};
  




const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  const ramenMenuDiv = document.querySelector('#ramen-menu')
  return fetch("http://localhost:3000/ramens")
  .then(resp=>resp.json())
  .then(ramens =>{
    ramens.forEach((ramen)=>{
      let img = document.createElement("img")
      img.src = `${ramen.image}`
      ramenMenuDiv.appendChild(img)
      console.log(`${ramen}`)
      //we all need closure sometimes
      img.addEventListener("click", () =>handleClick(ramen))})})}
      
      
         


const main = () => {
  displayRamens()
//  addSubmitListener()
}

main()

// Export functions for testing


export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
