
const renderTravellerToDOM = (travellerObj) => {
    const DomString = `
        <section class="travellerCard">
            <div>
                <h3>${travellerObj.name}</h3>
                <p>${travellerObj.description}</p>
                <p>${travellerObj.cost}</p>
            </div>`

    return DomString         
}

export default renderTravellerToDOM;