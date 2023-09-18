import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const UserContext = () => {
    const [data, setData] = useState([]);
    const userapi = data;
  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      // Handle the response data
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };
  const AuthContext = createContext(userapi);
  return (
    <div>user-context</div>
  )
}
export default UserContext;