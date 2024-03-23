import React from "react";
import PlaceCard from "../../Cards/PlaceCard/PlaceCard";
import "./Destination.scss";
function DestinationCard() {

  const destinationcards =[
    { id:1, img:"./images/Places/place-1.jpg",   name:"mumbai", description:"3bhk with balcony", price:"3000/month"},
    { id:2, img:"./images/Places/place-2.jpg",   name:"banglore", description:"3bhk with balcony", price:"3000/month"},
    { id:3, img:"./images/Places/place-3.jpg",   name:"bhopal", description:"3bhk with balcony", price:"3000/month"},
    { id:4, img:"./images/Places/place-4.jpg",   name:"indore", description:"3bhk with balcony", price:"3000/month"},
    { id:5, img:"./images/Places/place-5.jpg",   name:"ujjain", description:"3bhk with balcony", price:"3000/month"},
    { id:6, img:"./images/Places/place-6.jpg",   name:"mandsaur", description:"3bhk with balcony", price:"3000/month"},
    { id:7, img:"./images/Places/place-7.jpg",   name:"jaipur", description:"3bhk with balcony", price:"3000/month"},
    { id:8, img:"./images/Places/place-8.jpg",   name:"ahemdabad", description:"3bhk with balcony", price:"3000/month"},
    { id:9, img:"./images/Places/place-9.jpg",   name:"ratlam", description:"3bhk with balcony", price:"3000/month"},
    { id:10, img:"./images/Places/place-10.jpg",   name:"chandigarh", description:"3bhk with balcony", price:"3000/month"},
    { id:11, img:"./images/Places/place-11.jpg",   name:"delhi", description:"3bhk with balcony", price:"3000/month"},
    { id:12, img:"./images/Places/place-4.jpg",   name:"madhura", description:"3bhk with balcony", price:"3000/month"}
  ]



  return (

  
    <>
      <div className="destination-Cards">

      {destinationcards.map(card => (
        <PlaceCard key={card.id} img={card.img}  name={card.name} description={card.description} price={card.price} />
      ))}
      
     </div>
    </>
  );
}

export default DestinationCard;
