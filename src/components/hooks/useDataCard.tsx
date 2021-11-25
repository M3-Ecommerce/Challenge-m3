import { useEffect, useState } from "react";

export const useDataCard = (update: boolean) => {
  const [arrayData, setarrayData] = useState<any>(null);
  const wlsColor = window.localStorage.getItem("ColorFilter");
  const wlsSize: any = JSON.parse(
    window.localStorage.getItem("SizeFilter") || "0"
  );
  const wlsPrice: any = JSON.parse(
    window.localStorage.getItem("PriceFilter") || `{"min":0,"max":100000}`
  );

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        return response.json();
      })
      .then((recurso) => {
        const data = recurso.map(function (rec: any) {
          return rec;
        });

        const dataColorFilter = data.filter(function (item: any) {
          if (wlsColor) {
            return item.color == wlsColor;
          } else {
            return item;
          }
        });
        const dataSizeFilter = dataColorFilter.filter(function (item: any) {
          const data0 = `"${item?.size[0]?.toLowerCase()}"`;
          const data1 = `"${item?.size[1]?.toLowerCase()}"`;

          if (wlsSize != "0") {

            return (
              data0 == JSON.stringify(wlsSize[0]?.size) ||
              data0 == JSON.stringify(wlsSize[1]?.size) ||
              data0 == JSON.stringify(wlsSize[2]?.size) ||
              data0 == JSON.stringify(wlsSize[3]?.size) ||
              data0 == JSON.stringify(wlsSize[4]?.size) ||
              data0 == JSON.stringify(wlsSize[5]?.size) ||
              data0 == JSON.stringify(wlsSize[6]?.size) ||
              data0 == JSON.stringify(wlsSize[7]?.size) ||
              data0 == JSON.stringify(wlsSize[8]?.size) ||
              data0 == JSON.stringify(wlsSize[9]?.size) ||
              data0 == JSON.stringify(wlsSize[10]?.size) ||
              data0 == JSON.stringify(wlsSize[11]?.size) ||
              data1 == JSON.stringify(wlsSize[0]?.size) ||
              data1 == JSON.stringify(wlsSize[1]?.size) ||
              data1 == JSON.stringify(wlsSize[2]?.size) ||
              data1 == JSON.stringify(wlsSize[3]?.size) ||
              data1 == JSON.stringify(wlsSize[4]?.size) ||
              data1 == JSON.stringify(wlsSize[5]?.size) ||
              data1 == JSON.stringify(wlsSize[6]?.size) ||
              data1 == JSON.stringify(wlsSize[7]?.size) ||
              data1 == JSON.stringify(wlsSize[8]?.size) ||
              data1 == JSON.stringify(wlsSize[9]?.size) ||
              data1 == JSON.stringify(wlsSize[10]?.size) ||
              data1 == JSON.stringify(wlsSize[11]?.size) 
            );
          } else {
            return item;
          }
        });
        const dataPriceFilter = dataSizeFilter.filter(function (item: any) {
          if (wlsPrice) {
            return item.price >= wlsPrice.min && item.price <= wlsPrice.max;
          } else {
            return item;
          }
        });
        setarrayData(dataPriceFilter);
      });
  }, [update]);

  return { arrayData };
};
