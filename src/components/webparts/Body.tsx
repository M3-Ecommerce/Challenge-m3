import React from 'react'

function Body() {
    fetch("http://localhost:5000/products")
    .then((response) => {
        return response.json();
      })
      .then((recurso) => {
        const names = recurso.map(function (rec:any) { return rec.color; });
        const sorted = names.sort();
        var unique = sorted.filter(function (value:any, index:number) {
            return value !== sorted[index + 1];
        });
        console.log(unique);
      });
    return (
        <div >
            <p className="titlem3">Blusas</p>
        </div>
    )
}

export default Body
