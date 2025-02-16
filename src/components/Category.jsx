import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Indian'}>
        <h1>🇮🇳</h1>
        <h4>Indian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <h1>🇺🇸</h1>
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Italian'}>
        <h1>🇮🇹</h1>
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <h1>🇯🇵</h1>
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 30px;
  text-decoration: none;
  width: 85px;
  height: 85px;
  background: linear-gradient(35deg, #495057, #212529);
  cursor: pointer;
  transform: scale(0.8);
  transition: 0.5s;

  

  &:hover {
    background: linear-gradient(35deg, #212529, #495057);
  }

  h1 {
    font-size: 32px;
  }

  h4 {
    color: #fff;
    font-size: 14px;
    font-weight: bolder;
  }
  
  @media (max-width: 800px) {
    margin-right: 20px;
  }

  @media (max-width: 650px) {
    width: 75px;
    height: 75px;
    h1 {
        font-size: 25px;
    }
    h4 {
        font-size: 12px;
    }
    margin-right:5px
  }

  @media (max-width: 475px) {
    width: 65px;
    height: 65px;
    h1 {
        font-size: 21px;
    }
    h4 {
        font-size: 10px;
    }
    margin-right:5px;
  }

  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
    h1 {
        font-size: 18px;
    }
    h4 {
        font-size: 8px;
    }
    margin-right:2px;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    h4 {
      color: #fff;
    }
  }
`;

export default Category;
