import { useEffect, useState } from "react";

export const useSize = () => {
  const [arraySizes, setArraySizes] = useState<any>(null);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        return response.json();
      })
      .then((recurso) => {
          const ancla:any =[]
          let unique
        recurso.map((item: any) => {
          const names = item.size.map(function (rec: any) {
              ancla.push(rec)
            return rec;
          });
           
          const sorted = ancla.sort();
          unique = sorted.filter(function (value: any, index: number) {
            return value !== sorted[index + 1];
          });
          
        });
        setArraySizes(unique)
      });
  }, []);

  return { arraySizes };
};
