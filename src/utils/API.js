import { OKR_LINK } from "./Constants";

export const fetchData = async () => {
  let data = await fetch(OKR_LINK);
  let response = await data.json();
  return response;
};
