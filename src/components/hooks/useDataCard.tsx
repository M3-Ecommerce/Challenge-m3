import { useEffect, useState } from 'react'

export const useDataCard = () => {
    const [arrayData, setarrayData] = useState<any>(null)
    useEffect(() => {
      fetch("http://localhost:5000/products")
      .then((response) => {
          return response.json();
        })
        .then((recurso) => {
          const data = recurso.map(function (rec:any) { return rec });
          setarrayData(data)
        });
    }, [])
  
    return{arrayData}
}
