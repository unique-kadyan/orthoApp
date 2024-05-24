import React from "react";
import Card from "../components/Card";
import image1 from "../assets/images/HM1.jpg";
import image2 from "../assets/images/HM2.jpg";
import image3 from "../assets/images/HM3.jpg";
function Products() {
  return (
    <div className="h-auto w-auto">
      <Card name="Bone + Muscles" image={image1} />
      <Card name="Expiry Details" image={image2} />
      <Card name="Energy Details" image={image3} />
    </div>
  );
}

export default Products;
