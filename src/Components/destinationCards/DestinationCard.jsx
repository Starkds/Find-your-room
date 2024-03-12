import React from "react";
import Placedetail from "../../Cards/Placedetail/Placedetail";
import "./Destination.scss";
function DestinationCard() {
  return (
    <>
      <div className="destination-Cards">
        <Placedetail
          img="./images/Places/place-1.jpg"
          name="mumbai"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-2.jpg"
          name="delhi"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-3.jpg"
          name="indore"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-4.jpg"
          name="bhopal"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-5.jpg"
          name="rishikesh"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-6.jpg"
          name="gwalior"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-7.jpg"
          name="pune"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-8.jpg"
          name="bangalore"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-9.jpg"
          name="ladakh"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-10.jpg"
          name="chandigarh"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-11.jpg"
          name="mandsaur"
          description="3bhk with balcony"
          price="3000/month"
        />
        <Placedetail
          img="./images/Places/place-3.jpg"
          name="jaipur"
          description="3bhk with balcony"
          price="3000/month"
        />
      </div>
    </>
  );
}

export default DestinationCard;
