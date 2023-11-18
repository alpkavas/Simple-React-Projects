import React from "react";
import { useFetchUserQuery, useAddUserMutation } from "../store/main";
import Skeleton from "@mui/material/Skeleton";
import UserItem from "./UserItem";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../css/UserListCss.css";

function UsersList() {
  const { data, isError, isFetching } = useFetchUserQuery();
  const [addUser, results] = useAddUserMutation();

  const handleUserAdd = () => {
    addUser();
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rounded" sx={{ width: "100%", height: "3rem" }} />
    );
  } else if (isError) {
    content = <div> Bir şeyler yanlış gitti...</div>;
  } else {
    content = data.map((user) => {
      return <UserItem key={user.id} user={user} />;
    });
  }

  return (
    <>
      <div className="userListHeaderArea">
        <h1>Kişi Listesi</h1>
        <Button color="success" variant="outlined" onClick={handleUserAdd}>
          {results.isLoading ? (
            <CircularProgress size={"25px"} color="success" />
          ) : (
            <span>KİŞİ Ekle +</span>
          )}
        </Button>
      </div>
      <div className="content">{content}</div>
    </>
  );
}

export default UsersList;
