import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useDispatch } from "react-redux";






  const UserCard = ( user ) => {
const dispatch=useDispatch()
  console.log(user,"yuessssssssssssssssssss")
  return (
    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardTitle tag="h5"> {user.el.name} </CardTitle>
        <CardText>{user.el.lastname} </CardText>
        <CardText>{user.el.email} </CardText>        
        <CardText>
          {/* {user.dateCreation.slice(0, 10)} ---{" "}
          {user.dateCreation.slice(11, 19)}{" "} */}
        </CardText>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          
        </div>
      </Card>
    </div>
  );
};

export default UserCard;