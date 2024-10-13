import React, { useEffect, useRef } from "react";
import { marked } from 'marked';
import parse from 'html-react-parser';

export const ChatCard = ({ responses, loading }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [loading]);

  return (
    <div className="my-3 p-1 bg-body rounded shadow-sm">
      <h6 className="border-bottom pb-2 mb-0">Recent Queries</h6>
      <div
        className="p-1"
        style={{ height: "calc(96vh - 250px)",maxHeight: "calc(96vh - 250px)", overflowY: "scroll" }}
      >
        {responses.map((res, i) => (
          <Response key={i + "card"} response={res}>
            {res}
          </Response>
        ))}

        {loading && <Response loading={loading} />}
        <div ref={messagesEndRef} />
      </div>

      {/* <small className="d-block text-end mt-3">
    <a href="#">All updates</a>
  </small> */}
    </div>
  );
};

export const Response = ({ response, loading }) => {
  return (
    <div className="d-flex text-muted pt-3">
      <svg
        className="bd-placeholder-img flex-shrink-0 me-2 rounded"
        width={32}
        height={32}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 32x32"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#007bff" />
        <text x="50%" y="50%" fill="#007bff" dy=".3em">
          32x32
        </text>
      </svg>
      {loading ? (
        <p className="pb-3 mb-0 small lh-sm border-bottom w-100">
          <strong className="d-block text-gray-dark bg-secondary bg-gradient col-3 mb-1 p-1 ps-2 pe-2 text-light">
       loading...
          </strong>
          <strong class="d-block m-0 p-0 col-12  bg-secondary bg-gradient p-1 ps-2 pe-2 text-light ">loading...</strong>
        </p>
      ) : (
        <p className="pb-1 mb-0 small lh-sm border-bottom w-100">
          <strong className="d-block text-gray-dark">@{response.prompt}</strong>
          <MarkdownContent markdownString={response.response}/>
          
        </p>
      )}
    </div>
  );
};
const MarkdownContent = ({ markdownString }) => {
  // Convert markdown to HTML
  const htmlString = marked(markdownString);
  
  // Parse HTML to React elements
  return <div className="parsed-markdown-content">{parse(htmlString)}</div>;
};