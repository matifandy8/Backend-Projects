import { useEffect, useState } from "react";
import "./FormUrl.css";

const FormUrl = () => {
  const [url, setUrl] = useState("");

  // const serverURL = "http://localhost:4000";

  // const fetchDownload = () => {

  // };

  return (
    <>
      <div className="form">
        <input
          className="input__link"
          type="text"
          placeholder="Search or Paste Youtube link here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="button__start" >
          Start
        </button>
      </div>
    </>
  );
};

export default FormUrl;
