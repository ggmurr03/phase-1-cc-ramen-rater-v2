// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  const ramenMenuDiv = document.querySelector('#ramen-menu')
  console.log(ramenMenuDiv)
  return fetch("http://localhost:3000/ramens")
  .then(resp=>resp.json())
  .then(ramens =>{
    ramens.forEach((ramen)=>{
      let img = document.createElement("img")
      img.src = `${ramen.image}`
      ramenMenuDiv.appendChild(img)
      // img.addEventListener("click", event=>{}
         
})})
};

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
