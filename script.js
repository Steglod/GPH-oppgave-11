console.log('Hello!');

/*
async function getCat () {
  try {

  }catch {
    console.error()
  }
} */

const catButton = document.querySelector("#catButton")
const catInput = document.querySelector("#catInput")

async function getCat () {
  try {
    const catSection = document.querySelector("#catSection")
    const tag = catInput.value
    console.log(tag)
    const data = await fetch(`https://cataas.com/cat/${tag}?json=true`)
  
    if (!data.ok) {

      catOutput.innerHTML = `

    <figure class="figure">
        <h1>No cat :(</h1>
      </figure> 
      `
    } 
      
      const response = await data.json()
      console.log(response)
      
      const imageUrl = await response.url
      console.log(imageUrl)
      
      const imageTags = await response.tags.join(", ");
    console.log(imageTags)
    
    catOutput.innerHTML = `
    
    <figure class="figure">
    <img src="${response.url}" alt="1" />
    <figcaption>
    Tags: ${imageTags}
    </figcaption>
    </figure>
    `
  
    
      
    
    /*
    const img = new Image ()
      img.src = await imageUrl; // Set the image source
        img.alt = 'Image from API'; // Set alt text for accessibility
      catSection.appendChild(img)
*/
  }catch {
    console.error("No haz burgerz")
  }
}

catButton.addEventListener("click",getCat)

/*
// må sette op html og meir i js 
async function  getHoliday() {
  try{
    const data = await fetch("https://date.nager.at/api/v3/NextPublicHolidaysWorldwide")
    
    if (!data.ok) {
      
      catOutput.innerHTML = `
      
      <figure class="figure">
      <h1>No cat :(</h1>
      </figure> 
      `
    } 
    const holidaySection = document.querySelector("#holidaySection")
    const response = await data.json
    console.log(response)

    response.forEach(function (item) {
      const figure = document.createElement ("div")
      figure.innerHTML = `
      <figure class="figure">
      <h2>Gratulerere med ${holiday}!!!</h2>
      <p>Håper ${holiday} er ein bra dag for dere ${landskode} </p>
    </figure>
    
      `

      
    });
  }catch{
    consol.error("Ingen helidager lenger :(")
  }
}

 '${}' `${}` "${}" */