import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount = () => {
    console.log('나 count');
    setCount(count + 1);
    setCount2(count2 + 1);
  };

  // 컴포넌트의 리렌더링을 관리하고 싶음
  // 부모 컴포넌트가 리렌더링되면 자식 컴포넌트가 리랜더링되는데
  // 부모 컴포넌트 안에 자식 컴포넌트가 무척 많으면 전부 리랜더링됨
  // 그럼 페이지가 최적화되지 않는다

  const handleCount2 = useMemo(() => {
    console.log('나 count2');
    return count2 + 1;
  }, [count2]);

  return (
    <div>
      <p>memo</p>
      <button onClick={handleCount}>더하기</button>
      <p>handleCount2: {handleCount2}</p>
    </div>
  );
};

export default Memo;