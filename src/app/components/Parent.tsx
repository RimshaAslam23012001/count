import Child from "./Child";

const Parent = () => {
    let name = "Rimsha Aslam"
    let place = "Karachi"
    let color = "White"
  return (
    <div>
      <Child name={name} place={place} color={color}/>
    </div>
  )
}

export default Parent;
