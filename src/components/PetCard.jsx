import React from "react";
function PetCard({ pet }) {
    return (
        <div className="pet-card">
          <img src={pet.image} alt={`${pet.name} image`} />
      <h3>{pet.name}</h3>
      <p>{pet.age}</p>
      <p>{pet.breed}</p>
      <button>Adopt Me</button>  
        </div>
    )
}
export default PetCard;