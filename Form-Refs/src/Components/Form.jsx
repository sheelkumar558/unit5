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

  const handleSubmit = async(e) => {
    e.preventDefault();
  const data=await  fetch("http://localhost:9090/profile",{
      method:"POST",
      body: JSON.stringify(formData),
    });
    console.log(data);
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
     
    </div>
  );
};
