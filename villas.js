const cardContainer = document.getElementById("card-container");

const capacityIcon = {
  guests: "fa-solid fa-users",
  bedrooms: "fa-solid fa-bed",
  bathrooms: "fa-solid fa-bath",
};

properties.forEach((property) => {
  const card = document.createElement("div");
  card.classList.add("property-card");

  const guestsIcon = capacityIcon.guests || "fa-solid fa-circle-check";
  const bedroomsIcon = capacityIcon.bedrooms || "fa-solid fa-circle-check";
  const bathroomsIcon = capacityIcon.bathrooms || "fa-solid fa-circle-check";

  card.innerHTML = ` 
  <div class ="img-container">
  <img src="${property.gallery}"alt=""/>
  <div class ="tag"> ${property.priceTag}</div>
  </div>
  <div class = "card-contents">
  <div class ="title-container">
  <div class = "location">
  <p>${property.location.country}</p>
  <div class = "dot"></div>
  <p>${property.location.city}</p>
  </div>
  <h2>${property.title}</h2>
  </div>



  <div class ="property-capacity">
  <div><i class ="${guestsIcon}"></i> ${property.capacity.guests}guests</div>
  <div><i class ="${bedroomsIcon}"></i> ${property.capacity.bedrooms}bedrooms</div>
  <div> <i class = "${bathroomsIcon}"></i> ${property.capacity.bathrooms} bathrooms</div>
  <div></div>
  </div>
  
  </div>
  `;
  cardContainer.appendChild(card);
});
