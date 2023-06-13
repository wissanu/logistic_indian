import axios, { Post } from "axios";

export function getTopCustomerDummy(shipmentType, year, month, username) {
  console.log(shipmentType);
  console.log(year);
  console.log(month);
  console.log(username);
  return new Promise((res) => {
    res({
      data: [
        {
          Customer: "AGC Techno Glass (Thailand) Co., Ltd.",
          TEU: 7.0,
          TotalRevenue: 865040.0,
          EstimateProfit: 92160.0,
        },
      ],
      recordsTotal: 1,
    });
  });
}

export const getTopCustomer = async (shipmentType, year, month, username) => {
  console.log("post table topCustomer");
  const response = await axios({
    method: "post",
    url: "https://logistic-iot.n-digitaltech.com/IN/logis/Dashboard/TopCustomer",
    data: {
      ShipmentType: `${shipmentType}`,
      Year: `${year}`,
      Month: `${month}`,
      UserID: `${username}`,
      SortBy: "RowID",
      AscDesc: "ASC",
      PageRows: 5,
      PageNo: "1",
    },
  });
  const topCus = response.data.resultContent;

  console.log("topCustomer : ", topCus);
  return topCus;
};
