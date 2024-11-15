import React from 'react'

export const Rating = ({ name, rate, content }) => {
    const filledStars  = '★'//"&#9733;"
    const emptyStars = '☆'//"&#9734;"
    const stars = Array(rate).fill(filledStars).concat(Array(5 - rate).fill(emptyStars))
    return(
        <div className='ratings__item'>
            <h3>{name}</h3>
            <p>{content}</p>
            <div>
               {stars.map((star,index)=>
                <span key={index}>{star}</span>
               )}
            </div>
        </div>
    );
  };
export const AverageRating = ({ ratings }) => {
    const totalRating = ratings.reduce((sum,{rate})=> sum + rate ,0);
    const averageRate = totalRating / ratings.length;
    const filledStars  = '★'//"&#9733;"
    const emptyStars = '☆'//"&#9734;"
    const fullstarts = Math.floor(averageRate);
    const halfStar = (averageRate % 1) >= 0.5 ? '★' : '☆';

    const starts =Array(fullstarts).fill(filledStars).concat(Array(5 - fullstarts).fill(emptyStars));
    return(
        <div className='ratings-average'>
            <h3>Average Rating</h3>
            <div>
               {starts.map((star,index)=>
                <span key={index}>{star}</span>
               )}
            </div>
        </div>
    );

  };


  const RatingsList = ({ratings}) => {
    return (
      <div className="ratings">
        <AverageRating ratings={ratings} />
        {ratings.map((rating, index) => (
          <Rating
            key={index}
            {...rating}
          />
        ))}
      </div>
    );
  };
  
  export default RatingsList;



//   import React from 'react'

// export const Rating = ({ name, rate, content }) => {
//     const filledStars  = '★'//"&#9733;"
//     const emptyStars = '☆'//"&#9734;"
//     const stars = Array(rate).fill(filledStars).concat(Array(5 - rate).fill(emptyStars))
//     return(
//         <div className='ratings__item'>
//             <h3>{name}</h3>
//             <p>{content}</p>
//             <div>
//                {stars.map((star,index)=>
//                 <span key={index}>{star}</span>
//                )}
//             </div>
//         </div>
//     );
//   };
// export const AverageRating = ({ ratings }) => {
//     const totalRating = ratings.reduce((sum,{rate})=> sum + rate ,0);
//     const averageRate = totalRating / ratings.length;
//     const filledStars  = '★'//"&#9733;"
//     const emptyStars = '☆'//"&#9734;"
//     const fullstarts = Math.round(averageRate);
//     const halfStar = (averageRate % 1) >= 0.5 ? '★' : '☆';
   
//     const starts =Array(fullstarts).fill(filledStars).concat(Array(5 - fullstarts).fill(emptyStars));
//     return(
//         <div className='ratings__average'>
//             <h3>Average Rating</h3>
//             <div>
//                {starts.map((star,index)=>
//                 <span key={index}>{star}</span>
//                )}
//             </div>
//         </div>
//     );

//   };


//   const RatingsList = ({ratings}) => {
//     return (
//       <div className="ratings">
//         <AverageRating ratings={ratings} />
//         {ratings.map((rating, index) => (
//           <Rating
//             key={index}
//             {...rating}
//           />
//         ))}
//       </div>
//     );
//   };
  
//   export default RatingsList;