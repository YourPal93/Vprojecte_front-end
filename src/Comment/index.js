import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useLocalState } from "../utils/userLocalStorage";

const Comment = (props) => {
  const jwt = props.jwt;
  const decodedJwt = jwt_decode(jwt);
  const { id, createdDate, createdBy, message } = props.commentData;
  const { emitEditComment, emitDeleteComment } = props;
  const [commentRelativeTime, setCommentRelativeTime] = useState("");

  useEffect(() => {
    updateCommentRelativeTime();
  }, [createdDate]);

  function updateCommentRelativeTime() {
    if (createdDate) {
      dayjs.extend(relativeTime);

      if (typeof createdDate === "string")
        setCommentRelativeTime(dayjs(createdDate).fromNow());
      else {
        setCommentRelativeTime(createdDate.fromNow());
      }
    }
  }

  return (
    <>
      <div className="comment-bubble">
        <div className="d-flex gap-5" style={{ fontWeight: "bold" }}>
          <div>{`${createdBy.login}`}</div>
        </div>
        <div>{message}</div>
      </div>

      <div
        style={{ fontSize: "10px", marginTop:"0.5em" }}
        className="ml-auto"
      >
        {commentRelativeTime ? `Posted ${commentRelativeTime}` : ""}
      </div>
    </>
  );
};

export default Comment;