import "./App.css";

function App() {
  const food = "pizza";
  const age = 21;
  const skills = ["mern", "node", "dsa", "design", "animation"];
  return (
    <div className="">
      {/* I am eating the {food} and i am {age} years old.
      <div>You are {age > 18 ? "Eligible" : "Not eligible"} for licence</div>
      <div>
        Your Skills:
        <ul>
          {skills.map((e) => {
            return <p className="redtext">Skills : {e}</p>;
          })}
        </ul>
      </div>
      <Skill /> */}
      <Mobile />
      <MM />
    </div>
  );
}
//component
// function Skill(){
//   return <p className="redtext">Skill: React</p>
// }

function Mobile(){
  const mos = ["Android","Bleckberry","iPhone","Windows Phone"];
  return (
    <div>
    Mobile Oprating System:
    <ul>
      {mos.map((e) => {
        return <li>{e}</li>;
      })}
    </ul>
  </div>
  );
}

function MM(){
  const manu = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div>
    Mobile Oprating System:
    <ul>
      {manu.map((e) => {
        return <li>{e}</li>;
      })}
    </ul>
  </div>
  );
}

export default App;
