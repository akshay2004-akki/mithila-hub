import { useParams } from "react-router-dom";

import Saree from "./components/Saree";
import Chunri from "./components/Chunri";
import BedSheet from "./components/BedSheet";
import Canvas from "./components/Canvas";


const Category = () => {
  const { category } = useParams();

  const renderCategoryContent = () => {
    switch (category.toLowerCase()) {
      case "saree":
        return <Saree category = {category} />;
      case "chunri":
        return <Chunri category = {category} />;
      case "bed sheet":
        return <BedSheet category = {category} />;
      case "canvas":
        return <Canvas category = {category} />;
      default:
        return <p>Category not found!</p>;
    }
  };

  return <div>{renderCategoryContent()}</div>;
};

export default Category;
