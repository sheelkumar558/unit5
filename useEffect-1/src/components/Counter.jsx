import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(20);
    useEffect(() => {
     let id= setInterval(() => {
        setCount((prevValue)=>{
           if(prevValue<=0){
               clearInterval(id);
                return 0;
            }
            return prevValue-1;
        });
      }, 1000);
    },[]);
  return (
    <div>
      <h3>Count:{count}</h3>
      {/* <button
        onClick={() => {
          setCount((count) => {
            return count + 1;
          });
        }}
      >
        Add
      </button> */}
    </div>
  );
};
