import { useEffect, useState } from 'react'

export const useArticles = (openModal2:boolean) => {

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
    }, [openModal2])
  
    return{article}
}
