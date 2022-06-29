import React from "react";
import { useState } from "react";

// function handleChange(){
//   setName("")
// }

// function handleSubmit(){
//   console.log("submitted");
//   console.log(this.name);
// }
const RegisterPage = () => {
  const [name , setName] = useState("");
  return (
    <>
      <div>
        <form onSubmit={(e)=> {console.log("submitted");console.log(name);e.preventDefault();}}>
          <label>
            Name:
            <input
              type="text"
              onChange={(e)=> {setName(e.target.value)}}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
