import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";
import Nav from "./comp/Nav";
import TopBar from "./comp/TopBar";
import { ChatCard } from "./comp/ChatCard";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const getResponse = async () => {
    setLoading(true);
    const genAI = new GoogleGenerativeAI(
      "AIzaSyB-RmHhKzSBO2EEkRYlL1H_xgo620_I1Uw"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = input;
    const result = await model.generateContent(prompt);
    setLoading(false);
    setInput('')
    setResponse((prev) => {
      prev.push({
        prompt: input,
        response: result.response.text(),
      });
      return prev
    });
  };

  // console.log({ response });
  return (
    <>
      <Nav />
      <TopBar />
      <main className="container">
        {/* <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
          <h1 className="m-0 p-0 me-2">@</h1>
          <div className="lh-1">
            <h1 className="h6 mb-0 text-white lh-1">MyBot</h1>
            <small>Since 2024</small>
          </div>
        </div> */}

        <ChatCard responses={response} loading={loading} />

        <div className="container chat-input-box">
          <form
            className="input-group has-validation "

            onSubmit={(e) => {
              e.preventDefault();
              getResponse();
            }}
          >
            <span className="input-group-text">@Prompt</span>
            <input
              readOnly={loading}
              autoFocus
              type="text"
              className="form-control"
              id="input"
              placeholder="How are you?"
              required=""
              value={input}
              onChange={(e) => !loading && setInput(e.target.value)}
            />
            {/* <div className="invalid-feedback">Your username is required.</div> */}
            <button type="hidden" style={{ visibility: "hidden" }}></button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
