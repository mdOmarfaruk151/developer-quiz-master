import React, { useContext } from 'react';
import Quiz from '../Quiz/Quiz';
import Time from '../Timer/Time';
import { useEffect, useState } from "react";

const Topics = () => {
   
    const {q} =useContext(Quiz)
 console.log(q)


    return (
        <div className='mx-auto w-96'>
            <div className="font-bold right ">
      <Time />
      </div>
            
        </div>
    );
};

export default Topics;