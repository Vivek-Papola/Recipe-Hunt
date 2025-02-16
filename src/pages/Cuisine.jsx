import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';


function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_MY_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {
        cuisine.map((item) => {
          return (
            <Card key={item.id} >
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })
      }
    </Grid>

  );
}

const Grid = styled(motion.div)`
  display : grid;
  grid-template-columns : repeat(auto-fit , minmax(200px , 1fr));
  grid-gap : 45px;
`

const Card = styled.div`
  img{
    width : 100%;
    border-radius : 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  a{
    text-decoration : none;
  }
  h4 {
    font-size : 13px;
    text-align : center;
    padding : 10px;
  }
`

export default Cuisine;