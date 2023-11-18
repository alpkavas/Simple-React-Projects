import React from "react";
import { useAddAlbumMutation, useFetchAlbumQuery } from "../store/main";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import "../css/AlbumList.css";
import AlbumItem from "./AlbumItem";

function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleUserAdd = () => {
    addAlbum(user);
  };
  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rounded" sx={{ width: "100%", height: "3rem" }} />
    );
  } else if (isError) {
    content = <div> Opps, bir şeyler yanlış gitti...</div>;
  } else {
    content = data.map((album) => {
      return <AlbumItem key={album.id} album={album} />;
    });
  }

  return (
    <>
      <div className="albumListHeaderArea">
        <h1>{user.name} Albümü</h1>
        <Button color="error" variant="outlined" onClick={handleUserAdd}>
          {results.isLoading ? (
            <CircularProgress size={"25px"} />
          ) : (
            <span>Album Ekle +</span>
          )}
        </Button>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumList;
