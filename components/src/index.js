import React from "react";
import { createRoot } from "react-dom/client";
import CommentDetail from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="today at 4:45pm"
          content="nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="today at 2:0pm"
          content="i like the subject"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="yesterday at 5:00pm"
          content="i like writing"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

createRoot(document.querySelector("#root")).render(<App />);
