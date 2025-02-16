// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";

// function Recipe() {
//   const [details, setDetails] = useState({});
//   const [activeTab, setActiveTab] = useState("Instructions");
//   const params = useParams();

//   const fetchDetails = async () => {
//     const data = await fetch(
//       `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_MY_API_KEY}`
//     );
//     const detailData = await data.json();
//     console.log(detailData);
//     setDetails(detailData);
//   };

//   useEffect(() => {
//     fetchDetails();
//   }, [params.name]);

//   return (
//     <DetailWrapper>
//       <div>
//         <h2>{details.title}</h2>
//         <img src={details.image} alt={details.title} />
//       </div>
//       <Info>
//         <Button className={activeTab === "Instructions" ? 'active' : ''}
//           onClick={() => setActiveTab("Instructions")}
//         >
//           Instructions
//         </Button>
//         <Button className={activeTab === "Ingredients" ? 'active' : ''}
//           onClick={() => setActiveTab("Ingredients")}
//         >
//           Ingredients
//         </Button>
//         {activeTab === "Instructions" && (
//           <div>
//             <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
//             <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
//           </div>
//         )}

//         {activeTab === "Ingredients" && (
//           <ul>
//             {
//               details.extendedIngredients &&
//               details.extendedIngredients.map((ingredient) => (
//                 <li key={ingredient.id}>{ingredient.original}</li>
//               ))
//             }
//           </ul>
//         )}
//       </Info>
//     </DetailWrapper>
//   );
// }


// const DetailWrapper = styled.div`
//   margin: 100px 0 50px 0;
//   display: flex;

//   .active {
//     background: linear-gradient(35deg, #494949, #313131);
//     color: #fff;
//   }

//   h2 {
//     margin-bottom: 22px;
//   }

//   ul {
//     margin-top: 25px;
//   }

//   li {
//     font-size: 16px;
//     line-height: 32px;
//   }

//   p {
//     margin: 10px 0;
//     font-size: 17px;
//     line-height: 30px;

//     &:first-child {
//       margin-top: 25px;
//     }
//   }
// `;

// const Button = styled.button`
//   padding: 16px 32px;
//   color: #313131;
//   background: #fff;
//   border: 2px solid #000;
//   margin-right: 27px;
//   font-weight: 600;
// `;


// const Info = styled.div`
//   margin-left: 85px;
// `;

// export default Recipe

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");
  const params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_MY_API_KEY}`
    );
    const detailData = await data.json();
    console.log(detailData);
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={activeTab === "Instructions" ? 'active' : ''}
          onClick={() => setActiveTab("Instructions")}
        >
          Instructions
        </Button>
        <Button className={activeTab === "Ingredients" ? 'active' : ''}
          onClick={() => setActiveTab("Ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "Instructions" && (
          <div style={{maxWidth : 760}}>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "Ingredients" && (
          <ul>
            {details.extendedIngredients &&
              details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 20px 0;
  display: flex;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  img {
    width: 100%;
    margin-bottom: 15px
  }

  ul {
    margin-top: 10px;
  }

  li {
    font-size: 14px;
    line-height: 24px;
  }

  p {
    margin: 10px 0;
    font-size: 16px;
    line-height: 28px;

    &:first-child {
      margin-top: 10px;
    }
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 16px 32px;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 27px;
  font-weight: 600;
  cursor: pointer;


  @media (max-width: 675px) {
    padding: 12px 24px;
    margin-right: 18px;
  }

  @media (max-width: 525px) {
    padding: 6px 9px;
    margin-right: 5px;
  }

  @media (max-width: 375px) {
    padding: 8px 16px;
    margin-bottom: 15px;
  }
`
;


const Info = styled.div`
  margin-left: 75px;

  @media (max-width: 1600px) {
    margin: 20px 0 0 0 ;
`;

export default Recipe;
