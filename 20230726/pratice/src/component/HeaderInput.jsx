import React, { useState } from 'react';
import { StyledInput } from './temp.styled';

const HeaderInput = () => {
  const [clicked, setClicked] = useState(false);

  const handleInputClick = () => {
    setClicked(true);
  };
   x 
  const handleInputBlur = () => {
    setClicked(false);
  };

  return (
    <div className='headerInput-main'>
      <StyledInput
        type="text"
        placeholder='컬렉션 이름, 마켓의 URL 주소'
        onClick={handleInputClick}
        onBlur={handleInputBlur}
        className={clicked ? 'clicked' : ''}
      />
    </div>
  );
};

export default HeaderInput;