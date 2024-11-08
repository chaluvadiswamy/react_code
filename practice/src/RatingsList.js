import React from 'react'

export const Rating = ({ name, rate, content }) => {
    const filledStars  = "&#9733;" .repeat(rate);
    const emptyStars = "\u2606".repeat(5 - rate);
    return(
        <div className='rating-item'>
            <h3>{name}</h3>
            <p>{content}</p>
            <div>
                {filledStars.split('').map((star,index)=>(
                    <span key={index}>{star}</span>
                ))}
                {emptyStars.split('').map((star,index)=>(
                    <span key={5 + index}>{star}</span>
                ))}
            </div>
        </div>
    );
  };
export const AverageRating = ({ ratings }) => {
    const totalRating = ratings.reduce((acc,rating)=> acc + rating.rate ,0);
    const averageRate = Math.round(totalRating / ratings.length);
    const filledStars  = "\u2605" .repeat(averageRate);
    const emptyStars = "\u2606".repeat(5 - averageRate);
    return(
        <div className='ratings-average'>
            <h3>Average Rating</h3>
            <div>
                {filledStars.split('').map((star,index)=>(
                    <span key={index}>{star}</span>
                ))}
                {emptyStars.split('').map((star,index)=>(
                    <span key={5 + index}>{star}</span>
                ))}
            </div>
        </div>
    );

  };


  const RatingsList = () => {
    const ratings = [
        {name:"John Doe",content:"Nice Things",rate:5},
        {name:"John Doe 2",content:"good",rate:3},
        {name:"John Doe 4",content:"Not Bad",rate:4}
      ]; 
    return (
      <div className="ratings">
        <AverageRating ratings={ratings} />
        {ratings.map((rating, index) => (
          <Rating
            key={index}
            name={rating.name}
            rate={rating.rate}
            content={rating.content}
          />
        ))}
      </div>
    );
  };
  
  export default RatingsList;