import React from "react";
import { useSelector } from "react-redux";

function Value() {
  const totalValue = useSelector(({ courses: { data, searchTerm } }) => {
    return data
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, course) => acc + course.cost, 0);
  });

  return <div className="coursePrice">Toplam Fiyat Tutarı: {totalValue} ₺</div>;
}

export default Value;
