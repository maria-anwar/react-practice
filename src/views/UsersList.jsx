import Profile from "../components/Profile";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const UsersList = () => {
  //https://jsonplaceholder.typicode.com/photos

  const [data, setData] = useState([]);

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

  // const getSingleItem = () => {
  //   return data.find((user) => item.id === +params.id);
  // };
  //    const userdata = [
  //         {
  //           id: 1,
  //           title: 'jack ritchie',
  //           img: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
  //           label: 'my label',

  //         },
  //         {
  //           id: 2,
  //           title: 'jack ritchie',
  //           img: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
  //           label: 'my label',

  //         },
  //         {
  //           id: 3,
  //           title: 'jack ritchie',
  //           img: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
  //           label: 'my label',

  //         },
  //         {
  //           id: 4,
  //           title: 'jack ritchie',
  //           img: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
  //           label: 'my label',

  //         }
  //       ];
  return (
    <>
      <section className="container">
        <h1>Users List</h1>
        <div className="d-flex border users-container row ">
          {data.map((user, index) =>
            index <= 49 ? (
              <Profile
                userImg={user.thumbnailUrl}
                userId={user.id}
                title={user.title}
                key={index}
              />
            ) : (
              ""
            )
          )}
        </div>
      </section>
    </>
  );
};

export default UsersList;
