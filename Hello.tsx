import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './src/state/actions';

export default ({ name }) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <h1>
      Hello {name}! Counter {counter}
      <button onClick={() => dispatch(increment())}>Plus</button>
    </h1>
  );
};
