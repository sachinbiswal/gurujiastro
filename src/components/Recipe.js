import { Link } from "react-router-dom";
import { FaCheckCircle, FaEgg} from 'react-icons/fa'
import '../App.css'
const Recipe = ({ recipe }) => {
  return (
    <div className="card_container">
    <Link to={`/recipe-item/${recipe.id}`} className="card">
      <img src={recipe.image_url} alt={recipe.name} className="food_img" />
      <div className="hover_screen"></div>
        <div className="food_title">
          <p className="center_column"><FaEgg style={{ marginRight: 10 }} />{recipe.title}</p>
          <p className="center_column"><FaCheckCircle style={{ marginRight: 10 }} /> {recipe.publisher}</p>
        </div>
    </Link>
    </div>
  );
};

export default Recipe;

