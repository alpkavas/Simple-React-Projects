import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store/main";
import PhotoItem from "./PhotoItem";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import { Button } from "@mui/material";
import "../css/PhotoList.css";

function PhotoList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album);
  };
  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rounded" sx={{ width: "100%", height: "3rem" }} />
    );
  } else if (isError) {
    content = <div> Opps, bir şeyler yanlış gitti...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <>
      <div className="albumListHeaderArea">
        <h1>{album.title} Fotoğrafları</h1>
        <Button color="secondary" variant="outlined" onClick={handlePhotoAdd}>
          {results.isLoading ? (
            <CircularProgress size={"25px"} color="secondary" />
          ) : (
            <span>Görsel Ekle +</span>
          )}
        </Button>
      </div>
      <div className="imageAlbum">{content}</div>
    </>
  );
}

export default PhotoList;
