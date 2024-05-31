import React from 'react';
import fullStar from '../assets/star-full.png'
import emptyStar from '../assets/star-empty.png'

function Rate (props){

    const stars = [1, 2, 3, 4, 5];
    const rate = props.rate;
	// console.log(rate);
    
    return(
        <div className='rate'>

        {stars.map((star) =>
				rate >= star ? (
					<img
						key={star}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( 
					<img
						key={star}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		
        
        </div>
    )
}

export default Rate;