import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";


import {
  Container,
  Image,
  User,
} from "./styles";

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("https://api-login-users-0.vercel.app/users");

      setUsers(newUsers);
    }

    fetchUsers();

  }, [users]);

  async function deleteUser(userId) {
    await axios.delete(`https://api-login-users-0.vercel.app/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage(){
    navigate("/")
  }

  return (
    <Container>
      <Image alt="people" src={Avatar}></Image>
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
