import React from "react";
import ExpandPanel from "./ExpandPanel";
import AlbumList from "./AlbumList";
import { FcCancel } from "react-icons/fc";
import "../css/UserItem.css";
import { useDeleteUserMutation } from "../store/apis/userdb";
import CircularProgress from "@mui/material/CircularProgress";

function UserItem({ user }) {
  const [deleteUser, results] = useDeleteUserMutation();

  const handleDelete = () => {
    deleteUser(user);
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
      {user.name}
    </>
  );

  return (
    <div>
      <ExpandPanel user={user.name} header={header}>
        <AlbumList user={user} />
      </ExpandPanel>
    </div>
  );
}

export default UserItem;
