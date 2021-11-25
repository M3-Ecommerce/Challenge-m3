import { useEffect, useState } from 'react'

export const useColors = () => {
    const [arrayColors, setarrayColors] = useState<any>(null)
    useEffect(() => {
      fetch("http://localhost:5000/products")
      .then((response) => {
          return response.json();
        })
        .then((recurso) => {
          const names = recurso.map(function (rec:any) { return rec.color; });
          const sorted = names.sort();
          let unique = sorted.filter(function (value:any, index:number) {
              return value !== sorted[index + 1];
          });
          setarrayColors(unique)
          
        });
    }, [])
  
    return{arrayColors}
}
