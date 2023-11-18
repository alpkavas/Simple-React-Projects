import React from "react";
import ExpandPanel from "./ExpandPanel";
import { FcCancel } from "react-icons/fc";
import CircularProgress from "@mui/material/CircularProgress";
import { useDeleteAlbumMutation } from "../store/main";
import PhotoList from "./PhotoList";

function AlbumItem({ album }) {
  const [deleteUser, results] = useDeleteAlbumMutation();

  const handleDelete = () => {
    deleteUser(album);
  };

  const header = (
    <>
      <button onClick={handleDelete} className="cancelBtn">
        {results.isLoading ? (
          <CircularProgress color="error" size={"15px"} />
        ) : (
          <FcCancel />
        )}
      </button>
      {album.title}
    </>
  );
  return (
    <div>
      <ExpandPanel header={header}>
        <PhotoList album={album} />
      </ExpandPanel>
    </div>
  );
}

export default AlbumItem;
