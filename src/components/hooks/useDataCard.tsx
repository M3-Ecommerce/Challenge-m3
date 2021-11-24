import { useEffect, useState } from "react";

export const useDataCard = (update: boolean) => {
  const [arrayData, setarrayData] = useState<any>(null);
  const local = window.localStorage.getItem("ColorFilter");
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        return response.json();
      })
      .then((recurso) => {
        const data = recurso.map(function (rec: any) {
          return rec;
        });

        const dataColorFilter = data.filter(function (value: any) {
          if (local) {
            return value.color == local
          }else{
            return value
          }
          
        });
        setarrayData(dataColorFilter);
      });
  }, [update]);

  return { arrayData };
};
