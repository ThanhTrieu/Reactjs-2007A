import React, { useState } from 'react';

// muon su dung hooks chi duoc phep su dung trong function component
const Counter = () => {
  // tao ra state bang hooks useState
  const [count, setCount] = useState(0);
  // count : chinh la state duoc khai bao
  // setCount: chinh la phuong thuc(ham) thay doi state count
  // gia tri  0 trong useState la gia mac dinh gan cho state count

  const decrementNumber = () => {
    setCount(count + 1);
    // this.SetState({count: this.state.count+1});
  }

  const incrementNumber = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrementNumber}> + </button>
      <button onClick={incrementNumber}> - </button>
    </>
  );
}
export default React.memo(Counter);