import { useEffect, useState } from "react";

export  const useArticles = async (openModal2: boolean, item:any) => {
  const [article, setArticle] = useState<any>(null)
  useEffect(() => {
    fetch(`http://localhost:5000/products/${item.article}`)
    .then((response) => {
        return response.json();
      })
      .then((recurso) => {
       
        setArticle(recurso)
        
      });
  }, [openModal2])

  return { article };
};
