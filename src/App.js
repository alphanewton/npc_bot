import React from "react";
import "./App.css";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div>
      <iframe
        title="Dashboard Alpha Frequency and Severity v9 palette 2"
        // width="1140"
        src="https://app.powerbi.com/reportEmbed?reportId=b4615735-34ff-4774-ab17-f9c2da47305a&autoAuth=true&ctid=9ba89a8f-4215-4c19-9801-247b96db22ac"
        frameborder="0"
        allowFullScreen="true"
        className="w-full h-screen"
      ></iframe>
      <Chatbot />
    </div>
  );
}

export default App;
