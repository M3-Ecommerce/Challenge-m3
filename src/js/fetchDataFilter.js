
principal = 'http://localhost:5000/products?';

colors = ['blue','red', 'white' ];

range = ['0','100'];

size = ["M","L", "XL"];


const addCategory = (url, categoryList, categoryFilter) => {
  

  for (let i = 0; i < categoryList.length; i++){
    
    if((url.slice(-1) == "?")){
      url =`${url}${categoryFilter}=${categoryList[i]}`;

    } else {
      url = `${url}&${categoryFilter}=${categoryList[i]}`;
    }
  }

  return url;
}


urlTwo= addCategory(principal,colors,"color");

console.log(typeof(urlTwo))
urlThree= addCategory(urlTwo,size,"size_like"); 



const addRange = (url, categoryList, categoryFilter) => {
  

  for (let i = 0; i < categoryList.length; i=i+2){
    
    if((url.slice(-1) == "?")){
      url =`${url}${categoryFilter}_gte=${categoryList[i]}&${categoryFilter}_lte=${categoryList[i+1]}`;

    } else {
      url = `${url}&${categoryFilter}_gte=${categoryList[i]}&${categoryFilter}_lte=${categoryList[i+1]}`;
    }
  }

  return url;
}

urlFour=  addRange(urlThree,range,"price")

console.log(urlFour)



