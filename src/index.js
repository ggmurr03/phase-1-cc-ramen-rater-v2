// index.js

//import VirtualConsoleLogEntryStringifier from "happy-dom/lib/console/utilities/VirtualConsoleLogEntryStringifier.js";

//////////////////////////////////////////////////////
//selectors defined in functions per Lantz on discord
/////////////////////////////////////////////////////



// Callbacks

const handleClick = (ramen) => {
  const detailImg = document.querySelector("#ramen-detail > .detail-image")
  const detailName = document.querySelector("#ramen-detail > .name")
  const detailRestaurant = document.querySelector("#ramen-detail > .restaurant")
  const detailsRating = document.getElementById("rating-display")
  const detailsComment = document.getElementById("comment-display")

  detailImg.src = ramen.image
  detailName.textContent = ramen.name
  detailRestaurant.textContent = ramen.restaurant
  detailsRating.textContent = ramen.rating
  detailsComment.textContent = ramen.comment
  console.log("hi")
}

const handleSubmit = (event) => {
  event.preventDefault()  
  console.log("Submit clicked")

  const ramenFormName = document.querySelector("#new-ramen #new-name").value
  const ramenFormRestaurant = document.querySelector("#new-ramen #new-restaurant").value
  const ramenFormImage = document.querySelector("#new-ramen #new-image").value
  const ramenFormRating = document.querySelector("#new-ramen #new-rating").value
  const ramenFormComment = document.querySelector("#new-ramen #new-comment").value

  document.querySelector("h3.restaurant").textContent = ramenFormRestaurant
  document.querySelector("img.detail-image").src = ramenFormImage
  document.querySelector("#rating-display").textContent = ramenFormRating
  document.querySelector("#comment-display").textContent = ramenFormComment
  document.querySelector("h2.name").textContent = ramenFormName

  //reformat for handleClick()
  const ramenData = {
    image: ramenFormImage,
    name: ramenFormName,
    restaurant: ramenFormRestaurant,
    rating: ramenFormRating,
    comment: ramenFormComment
  }

  const newRamenPic = document.createElement("img")
  newRamenPic.src = ramenFormImage
  
  
  const ramenMenuDiv = document.querySelector('#ramen-menu')
  ramenMenuDiv.appendChild(newRamenPic)

  newRamenPic.addEventListener("click", () => {
    handleClick(ramenData)}) 
}

const addSubmitListener = () => {
  const ramenForm = document.querySelector("#new-ramen")
  ramenForm.addEventListener("submit", handleSubmit)
}

const displayRamens = () => {
  const ramenMenuDiv = document.querySelector('#ramen-menu')
  return fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramens => {
      ramens.forEach((ramen) => {
        let img = document.createElement("img")
        img.src = `${ramen.image}`
        ramenMenuDiv.appendChild(img)
        console.log(`${ramen}`)
        img.addEventListener("click", () => handleClick(ramen))
      })
    })
}

const main = () => {
  displayRamens()
  addSubmitListener()
}

main()

// Export functions for testing


export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
