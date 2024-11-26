import React from 'react';

const Child = (props:any) => {
  console.log(props);

  return (
    <div>
      <h1 className='text-5xl text-rose-200'>I am {props.name}.</h1>
      <h1 className='text-5xl text-rose-200'>I live in {props.place}.</h1>
      <h1 className='text-5xl text-rose-200'>I like {props.color} color.</h1>
    </div>
  )
}

export default Child;
