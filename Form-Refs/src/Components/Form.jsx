import { useRef, useState } from "react";

export const Form = () => {
  const [profile, setProfile] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    salary: "",
    address: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    //const id=e.target.id;
    //const value =e.target.value;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const name = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch("http://localhost:8000/profile",{
    //   method:"POST",
    //   body: JSON.stringify(formData),
    // });
    console.log(name.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ol>
          Name:-
          <input
            onChange={handleChange}
            //value={formData.userName}
            type="text"
            placeholder="Enter userName"
            id="username"
            ref={name}
          />
        </ol>
        <ol>
          Age :-
          <input
            onChange={handleChange}
            type="number"
            placeholder="Enter age"
            id="age"
          />
        </ol>
        <ol>
          Salary :-
          <input
            onChange={handleChange}
            type="number"
            placeholder="Enter Salary"
            id="salary"
          />
        </ol>
        Address:-
        <textarea
          onChange={handleChange}
          type="text"
          placeholder="Enter Address"
          id="address"
          name=""
          cols="30"
          rows="5"
        ></textarea>
        <input type="Submit" value="submit" />
      </form>
      <h1>{name.current.value}</h1>
    </div>
  );
};
