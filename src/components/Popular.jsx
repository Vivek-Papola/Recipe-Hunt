import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    console.log("API Key:", import.meta.env.VITE_MY_API_KEY);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_MY_API_KEY}&number=9`
      );

      console.log("API Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const text = await response.text();
      console.log("Raw API Response:", text);

      if (!text) {
        throw new Error("API response is empty.");
      }

      const data = JSON.parse(text);
      console.log("Parsed Data:", data);

      if (!data || !data.recipes) {
        throw new Error("Invalid response: No recipes found.");
      }

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        {loading && <p>Loading recipes...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {!loading && !error && (
          <Splide options={{ perPage: 3, arrows: true, pagination: false, drag: "free", gap: "50px" }}>
            {popular.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div` margin: 40px 0rem; `;

const Card = styled.div`
  min-height: 290px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 20px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
