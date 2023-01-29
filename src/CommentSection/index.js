import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Comment from "../Comment";
import ajax from "../services/fetchService";
import { useInterval } from "../utils/useInterval";
import { useLocalState } from "../utils/userLocalStorage";

const CommentSection = (props) => {
  const { postId } = props;
  const [jwt, setJwt] = useLocalState("", "jwt")

  const emptyComment = {
    id: null,
    message: "",
    createdBy: null,
    creationDate: null,
  };

  const [comment, setComment] = useState(emptyComment);
  const [comments, setComments] = useState([]);

  useInterval(() => {
    updateCommentTimeDisplay();
  }, 1000 * 5);

  function updateCommentTimeDisplay() {
    const commentsCopy = [...comments];
    commentsCopy.forEach(
      (comment) => (comment.createdDate = dayjs(comment.createdDate))
    );
    formatComments(commentsCopy);
  }

  function formatComments(commentsCopy) {
    commentsCopy.forEach((comment) => {
      if (typeof comment.creationDate === "string") {
        comment.creationDate = dayjs(comment.creationDate);
      }
    });
    setComments(commentsCopy);
  }

  useEffect(() => {
    ajax(
      `/posts/comments/${postId}`, "get", jwt, null)
    .then((commentsData) => {
      console.log(commentsData);
      formatComments(commentsData.content);
    });
  }, []);

  function submitComment() {
    console.log(jwt)
    ajax(`/posts/comments/${postId}`, "post", jwt, comment)
    .then((commentData) => {
      const commentsCopy = [...comments];
      commentsCopy.push(commentData);
      formatComments(commentsCopy);
      setComment(emptyComment);
    });
  }

  function updateComment(value) {
    const commentCopy = { ...comment };
    commentCopy.message = value;
    setComment(commentCopy);
  }

  return (
    <>
      <div className="mt-3">
        <h6>Comments</h6>
      </div>
      <div className="mt-2" style={{ marginLeft: "20px"}}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            commentData={comment}
            jwt={jwt}
          />
        ))}
      </div>
      <Row>
        <Col lg="8" md="10" sm="12" className="mt-3">
          <textarea
            style={{ width: "80%", borderRadius: "0.25em", height: "80%" }}
            onChange={(e) => updateComment(e.target.value)}
            value={comment.message}
          ></textarea>
        </Col>
      </Row>
      <Button onClick={() => submitComment()}>Post Comment</Button>
    </>
  );
};

export default CommentSection;