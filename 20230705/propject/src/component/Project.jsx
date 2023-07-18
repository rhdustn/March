import React, { useEffect, useState } from 'react';
import { img1,flag } from "../img";

const Block = ({ index, data1, data2, data3 }) => {
  const [color, setColor] = useState('pink');
  const [image, setImage] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    if (index === data1 || index === data2 || index === data3) {
      setIsMine(true);
      console.log(index)

    }
  }, []);
  const handleGameover =()=>{
    alert("Game over 다시 하세요")
     window.location.reload();
    
  }

  const userClick = () => {
    if (!clicked) {
      const change = color === "pink" ? "white" : "pink";
      setColor(change);
      setClicked(true);
      if (change === 'white') {
        let imgs=[img1]
        let imgs2=[flag]
        const randomImage = imgs[Math.floor(Math.random() * imgs.length)];
        setImage(randomImage);
        if(isMine){
          handleGameover();
        }else{
          setImage(imgs2)
        }
      }
    }
  };

  return (
    <div className='block' style={{ backgroundColor: color }} onClick={userClick}>
      {isMine && <img className='pow' src={image} alt='' />}
    </div>
  );
};

const Container = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let resultarr = arr[Math.floor(Math.random() * arr.length)];
  let resultarr2 = arr[Math.floor(Math.random() * arr.length)];
  let resultarr3 = arr[Math.floor(Math.random() * arr.length)];

  while (resultarr === resultarr2 || resultarr === resultarr3 || resultarr2 === resultarr3) {
    resultarr = arr[Math.floor(Math.random() * arr.length)];
    resultarr2 = arr[Math.floor(Math.random() * arr.length)];
    resultarr3 = arr[Math.floor(Math.random() * arr.length)];
  }


  return (
    <div className='main'>
      <Block index={1} data1={resultarr} data2={resultarr2} data3={resultarr3} />
      <Block index={2} data1={resultarr} data2={resultarr2} data3={resultarr3} />
      <Block index={3} data1={resultarr} data2={resultarr2} data3={resultarr3} />
      <Block index={4} data1={resultarr} data2={resultarr2} data3={resultarr3} />
      <Block index={5} data1={resultarr} data2={resultarr2} data3={resultarr3} />
      <Block index={6} data1={resultarr} data2={resultarr2} data3={resultarr3} />
      <Block index={7} data1={resultarr} data2={resultarr2} data3={resultarr3} />
      <Block index={8} data1={resultarr} data2={resultarr2} data3={resultarr3} />
      <Block index={9} data1={resultarr} data2={resultarr2} data3={resultarr3} />
    </div>
  );
};

export { Block, Container };