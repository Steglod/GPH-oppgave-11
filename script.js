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
    
    const response = await data.json()
    console.log(response)

    const imageUrl = await response.url;
    console.log(imageUrl)
    
    const img = new Image ()
      img.src = await imageUrl; // Set the image source
        img.alt = 'Image from API'; // Set alt text for accessibility
      catSection.appendChild(img)

  }catch {
    console.error("No haz burgerz")
  }
}

catButton.addEventListener("click",getCat)

// må sette op html og meir i js og mangler yo mama
async function  getHoliday() {
  try{
    const holidaySection = document.querySelector("#holidaySection")
    const data = await fetch("https://date.nager.at/api/v3/NextPublicHolidaysWorldwide")
    const response = await data.json
    console.log(response)

    response.forEach(function (item) {

      
    });
  }catch{
    consol.error("Ingen helidager lenger :(")
  }
}

getHoliday()