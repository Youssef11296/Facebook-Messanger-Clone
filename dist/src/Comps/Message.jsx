import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={isUser ? "message message__user" : "message"}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography
            className="card__content"
            color="white"
            variant="h5"
            component="h2"
          >
            <div className="card__username">{!isUser && message.username}</div>
            <div className="card__message">{message.message}</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
