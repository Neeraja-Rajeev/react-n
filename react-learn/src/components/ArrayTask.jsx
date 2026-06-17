import React, {useState} from 'react'
import { GiHearts } from "react-icons/gi";
function ArrayTask(){
const reactionArray = [
  "🥲",
  "😞",
  "😔",
  "😟",
  "☹️",
  "😊",
  "😄",
  "😁",
  "😀",
  "😃",
  "😆",
  "😂"
];

    const [count, setCount] = useState(0);

  const handleClick = () => {
   {
      setCount(count + 1);
    }
  };
  return (
    <div className="container">
      <h2>
        Likes: {count} {""}
        {count>=reactionArray.length?
        reactionArray[reactionArray.length-1]:reactionArray[count]}
      </h2>

      <GiHearts
        size={40}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ArrayTask