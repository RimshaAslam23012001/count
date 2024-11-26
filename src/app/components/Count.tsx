"use client"
import { useState } from "react";
const Count = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count +1)
    const decrement =() => setCount(count -1)
    const reset =() => setCount(0)

return(
    <div className="text-center">
        <h1 className="text-7xl m-4 ">Counter Value: {count}</h1>
        <button className="py-2 px-10 m-4 bg-slate-400 text-white rounded" onClick={increment}>Increment</button>
        <button className="py-2 px-10 m-4 bg-slate-400 text-white rounded" onClick={decrement}>Decrement</button>
        <button className="py-2 px-10 m-4 bg-slate-400 text-white rounded" onClick={reset}>Reset</button>
    </div>

)
}

export default Count;