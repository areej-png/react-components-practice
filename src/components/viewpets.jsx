// src/components/ViewPets.jsx
import React from "react";
import PetCard from "./PetCard";
import { pets } from "../data/pets";

function ViewPets() {
    return (
        <section className="viewpets" id="viewpets">
            <div className="pets-header">
                <h2>Viewpets</h2>
                <h3>Who are waiting for You?</h3>
                <p>If you want to know more about a pet, just click on its box.</p>
            </div>
            
            <div className="pet-cards-container">
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </section>
    );
}

export default ViewPets;
