import { useEffect, useState } from "react";

export  const useArticles = async (openModal2: boolean) => {
  const [article, setArticle] = useState<any[]>([]);
  let array = [{}]
  useEffect(() => {
    
    const lastAdd = JSON.parse(
      window.localStorage.getItem("ShoppingCart") || ""
    );

    lastAdd?.map((item: any, index:any) => {
       fetch(`http://localhost:5000/products/${item?.article}`)
        .then((response:any) => {
         
          return response.json();
        })
        .then((recurso:any) => {
          array[index] = recurso
          
        });
        setArticle(array);
    });
    
  }, [openModal2]);

  return { article };
};
