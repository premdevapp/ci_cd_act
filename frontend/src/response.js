import axios from "axios";
const getNames = async () => {
  const response = await axios.get("/name");
  return response.data;
};

export default getNames;
