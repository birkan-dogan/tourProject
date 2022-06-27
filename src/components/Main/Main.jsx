import "./Main.scss";
import { data } from "../../helpers/data";
const Main = () => {
  return (
    <div className="card-container">
      {data.map((item, index) => {
        const { id, title, image, desc } = item;
        return (
          <div className="cards">
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Main;
