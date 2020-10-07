import React, {useState} from 'react';
import TestComponent from './components/Test';

const App = () => {
  const [show, setShow] = useState(true);
  const deleteComponent = () => {
    setShow(false);
  }
  return (
    <>
      { show && <TestComponent/> }
      <button onClick={deleteComponent}> Delete </button>
    </>
  )
}
export default App;
