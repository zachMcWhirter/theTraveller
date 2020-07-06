// import makeTraveller from "./travellerFactory.js"
import renderTravellerToDOM from "./travellerDOM.js"

// makeTraveller()

const tripArray = [
    {
        name: "Big Night Out",
        description: "Bingo and Shoney's",  
        cost: "$50.00"
    },
    {
        name: "Day Trip",
        description: "Fall Creek Falls",  
        cost: "Gas Money"
    },
    {
        name: "Vegas",
        description: "Win all the money",  
        cost: "Break even after winning!"
    }
]


const container = document.querySelector("#container");

    tripArray.map(trip => {
    container.innerHTML += renderTravellerToDOM(trip);
})