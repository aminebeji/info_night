import React,{useState} from "react";
import ReactStars from "react-stars";                                                                                                                                   
const Score = () => {
    const [rating,setRating] = useState(0);
    const ratingChanged = (newRating) => {
      setRating(newRating);
    }
     
    return ( <ReactStars count={6  } onChange={ratingChanged} color2={"#ffd700"} />)


    
}

export default Score;