'use client';

import { Card } from 'flowbite-react';
import { useState } from 'react';
import { BsFillFileEarmarkMedicalFill } from 'react-icons/bs';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

interface ExamCardProps {
  name: string;
  price?: number;
}

const ExamCard = ({ name, price }: ExamCardProps) => {
  const [isSelected, setIsSelected] = useState(false); // 
  

  return (
    <button
      onClick={() => setIsSelected(!isSelected)}
      className={`max-w-40 w-60 h-25 font-bold py-2 px-4 rounded inline-flex items-center shadow-body gap-1  dark:bg-boxdark  dark:text-whiten dark:hover:text-white ${isSelected ? 'relative bottom-2 shadow-md shadow-black dark:bg-primary bg-primary text-white hover:bg-primary dark:hover:bg-primary' : 'hover:bg-whiten shadow-sm bg-gray-2 dark:hover:bg-secondary'}`}>
      {isSelected ? <IoIosCheckmarkCircle className={` dark:text-white text-white`}/> : <IoIosCheckmarkCircleOutline />}
      
      <span>{name}</span>
    </button>
  ) 
}

export default ExamCard;


