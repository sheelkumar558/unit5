import "./Food.css"
import Data from "../data.json";

export const Food = () => {
  return (
    <div>
      {Data.map(p => {
        return(
            <div className="main" key={postMessage.id}>
                <div className="img">
                <img src={p.strMealThumb} alt="" />
                </div>
                <div className="para">
                <h3>{p.strMeal}</h3>
                <p>{p.strCategory}</p>
                <p>Accepts online payment only</p>
                </div>
            </div>
        )
        
      })}
    </div>
  );
};
