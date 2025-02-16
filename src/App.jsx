import './App.css';
import Pages from "./pages/Pages.jsx";
import Category from "./components/Category.jsx";
import { BrowserRouter, Link } from 'react-router-dom';
import Search from "./components/Search.jsx";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>TastyBites</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 32px;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default App;
