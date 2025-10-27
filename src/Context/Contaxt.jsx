import React, { createContext, useEffect, useState } from "react";

export const RecipeContaxt = createContext();

function Contaxt(props) {
  const [datas, setDatas] = useState();

  const getData = () => {
    const row = JSON.parse(localStorage.getItem("recipe"));
    setDatas(row)
    
  };
  useEffect(() => {
    getData();
  },[]);
  return (
    <RecipeContaxt.Provider value={[datas, setDatas]}>
      {props.children}
    </RecipeContaxt.Provider>
  );
}

export default Contaxt;
