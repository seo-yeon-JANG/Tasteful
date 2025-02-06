import { Link } from "react-router-dom";
import "../styles/itemBox.css";

const ItemBox = ({ data }) => {
  return (
    <Link to={`/list/${data.id}`}>
      <div className="itemBlock">
        <img src={data.imageUrl} alt={data.RCP_NM} className="foodImage" />
        <div className="foodDetails">
          <h1 className="foodName">{data.title}</h1>
          <p className="foodContext">{data.context}</p>
          <p className="foodIngredients">{data.ingredients}</p>
        </div>
      </div>
    </Link>
  );
};
export default ItemBox;
