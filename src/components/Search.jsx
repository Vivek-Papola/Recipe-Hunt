import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`searched/${input}`);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          placeholder="Search recipes, dishes ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 20px; /* Reduce margin for smaller screens */
  text-align: center; /* Center align for smaller screens */

  div {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  input {
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 16px; 
    color: #fff;
    padding: 10px 50px; 
    border-radius: 15px;
    border: none;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
    color: #fff; 
  }

  @media (max-width: 768px) {
    input {
      font-size: 14px;
      padding: 10px 40px;
    }
  }
`;

export default Search;
