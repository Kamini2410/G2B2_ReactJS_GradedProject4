import axios from "axios";


const getAllMovies = async () => {

  const response = await axios.get("http://localhost:4000/data")

  return response.data;
}

export {getAllMovies}