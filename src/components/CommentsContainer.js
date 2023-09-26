import React from "react";

const commentsData = [
  {
    name: "Siddharth",
    text: "Nice Video",
    replies: [
      {
        name: "Harsh",
        text: "Awesome Video",
      },
      {
        name: "Raj",
        text: "Very Nice Video",
      },
      {
        name: "Naman",
        text: "Perfect",
        replies: [
          {
            name: "Harsh",
            text: "Awesome Video",
          },
          {
            name: "Raj",
            text: "Very Nice Video",
            replies: [
              {
                name: "Harsh",
                text: "Awesome Video",
              },
              {
                name: "Raj",
                text: "Very Nice Video",
              },
              {
                name: "Naman",
                text: "Perfect",
              },
            ],
          },
          {
            name: "Naman",
            text: "Perfect",
          },
        ],
      },
    ],
  },
  {
    name: "Harsh",
    text: "Awesome Video",
    replies: [
      {
        name: "Harsh",
        text: "Awesome Video",
      },
      {
        name: "Raj",
        text: "Very Nice Video",
      },
      {
        name: "Songkiat",
        text: "Perfect",
      },
    ],
  },
  {
    name: "Raj",
    text: "Very Nice Video",
  },
  {
    name: "Dev",
    text: "Perfect",
    replies: [
      {
        name: "Raj",
        text: "Very Nice Video",
        replies: [
          {
            name: "Harsh",
            text: "Awesome Video",
          },
          {
            name: "Raj",
            text: "Very Nice Video",
          },
          {
            name: "Kaushik",
            text: "Perfect",
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg bg-gray-100 p-2 rounded-lg my-3">
      <img
        className="w-9 h-9 rounded-full"
        alt="comment-user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4za-gwBM2h9DeD08Vz3NmcPzrbNo4fLDS6g&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-bold text-blue-700">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if (!Array.isArray(comments)) {
    return null;
  }

  return comments.map((comment, index) => (
    <div key={index} className="mt-2">
      <Comment data={comment} />
      <div className="pl-5 border-l border-gray-300 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold text-green-800">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
