import React from "react";
import { useDeletePhotoMutation } from "../store/main";
import { FcEmptyTrash } from "react-icons/fc";
import CircularProgress from "@mui/material/CircularProgress";
import "../css/PhotoItem.css";

function PhotoItem({ photo }) {
  const [deletePhoto, results] = useDeletePhotoMutation(photo);
  const handleDelete = () => {
    deletePhoto(photo);
  };
  return (
    <div className="goTrash" style={{ margin: "5px", cursor: "pointer" }}>
      <button onClick={handleDelete} className="cancelBtn">
        {results.isLoading ? (
          <CircularProgress id="circularIcon" color="error" />
        ) : (
          <FcEmptyTrash id="trashIcon" />
        )}
        <img src={photo.url} alt="albumimage" />
      </button>
    </div>
  );
}

export default PhotoItem;
