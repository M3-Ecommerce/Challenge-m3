import { useEffect, useState } from 'react'

export const useArticleRequest = (openModal:boolean) => {

    const [article, setArticle] = useState<any>(null)
    useEffect(() => {
        const lastAdd = window.localStorage.getItem("LastAdd")
      fetch(`http://localhost:5000/products/${lastAdd}`)
      .then((response) => {
          return response.json();
        })
        .then((recurso) => {
         
          setArticle(recurso)
          
        });
    }, [openModal])
  
    return{article}
}
