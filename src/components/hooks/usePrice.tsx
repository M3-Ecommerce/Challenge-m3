import React, { useEffect, useState } from 'react'

function usePrice() {
    const [arrayPrices, setarrayPrices] = useState<any>(null)
    useEffect(() => {
      fetch("http://localhost:5000/products")
      .then((response) => {
          return response.json();
        })
        .then((recurso) => {
          const price = recurso.map(function (rec:any) { return rec.price; });
          const sorted = price.sort();
          let unique = sorted.filter(function (value:any, index:number) {
              return value !== sorted[index + 1];
          });
          setarrayPrices(unique)
        });
    }, [])
  
    return{arrayPrices}
}

export default usePrice
