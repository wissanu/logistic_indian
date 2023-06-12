import axios from "axios";

export const getAuthen = async (user, pass) => {
  console.log("post login");
  const response = await axios({
    method: "post",
    url: "https://logistic-iot.n-digitaltech.com/logis/users/login",
    data: {
      username: `${user}`,
      password: `${pass}`,
    },
  });
  const authen = response.data;

  console.log("Authen : ", authen);
  return authen;
};
