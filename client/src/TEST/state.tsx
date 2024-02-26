import { useState } from 'react';

const StatePlayGround = () => {
  let initialCount = 0;
  let [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };
  const removeone = () => {
    setCount(count - 1);
  };
  const restcount = () => {
    setCount((count = initialCount));
  };
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h3 className="p-5">Count: {count}</h3>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col p-3">
            <button onClick={addOne} className="btn btn-primary">
              Add add One
            </button>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col p-3">
            <button onClick={removeone} className="btn btn-primary">
              Add Remove One
            </button>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col p-3">
            <button onClick={restcount} className="btn btn-primary">
              Reset
            </button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default StatePlayGround;
