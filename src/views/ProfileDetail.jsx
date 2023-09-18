import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProfileDetail = () => {
  const params = useParams();
  const [photo, setPhoto] = useState();
  console.log("render");

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/photos";
    axios
      .get(apiUrl)
      .then((response) => {
        const photos = response.data;
        const photo = photos.find((photo) => photo.id == params.id);
        setPhoto(photo);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      {photo ? (
        <section className="container d-flex flex-column py-5 border justify-content-center align-items-center gap-1">
          <img
            className="detail-img"
            src={photo.thumbnailUrl}
            alt="profile-thumbnail"
          />
          <div className="user-title">{photo.title}</div>
          <div className="user-title">{`Album id is: ${photo.albumId}`}</div>
        </section>
      ) : (
        <p>Loading ..</p>
      )}
    </>
  );
};

export default ProfileDetail;
