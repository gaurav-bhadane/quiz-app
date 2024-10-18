import React from 'react';  
import './style.css'  
const CircularProgress = ({ progress, total }) => {  
  const percentage = (progress / total) * 100;  
  const strokeDasharray = `calc(${percentage} * 3.14)`;  
  
  return (  
   <svg  
    width="100%"  
    height="100%"  
    viewBox="0 0 100 100"  
    fill="none"  
    xmlns="http://www.w3.org/2000/svg"  
   >  
    <circle  
      cx="50"  
      cy="50"  
      r="45"  
      stroke="#ccc"  
      strokeWidth="10"  
      strokeLinecap="round"  
      strokeLinejoin="round"  
    />  
    <circle  
      cx="50"  
      cy="50"  
      r="45"  
      stroke="#4CAF50"  
      strokeWidth="10"  
      strokeLinecap="round"  
      strokeLinejoin="round"  
      strokeDasharray={strokeDasharray}  
      strokeDashoffset="0"  
    />  
    <text  
      x="50"  
      y="50"  
      textAnchor="middle"  
      dominantBaseline="middle"  
      fontSize="24"  
      fill="#333"  
    >  
      {progress}/{total}  
    </text>  
   </svg>  
  );  
};  
  
export default CircularProgress;
