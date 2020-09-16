import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';


const Stars = ({ count }) => {
  return (
    <>
      {
        Array(5).fill("").map((x, i) => {
          
          if (parseInt(count) > i) {
            return <IoIosStar style={{ color: "orange", paddingTop: "4px" }} />
          } else {
            return <IoIosStarOutline style={{ color: "orange", paddingTop: "4px" }} />
          }
        })
      }
    </>
  )
}

export default Stars
