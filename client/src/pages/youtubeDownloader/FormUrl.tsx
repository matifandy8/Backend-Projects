import { useEffect, useState } from "react";
import "./FormUrl.css";

const FormUrl = () => {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("");
  const [quality, setQuality] = useState("");

  const serverURL = "http://localhost:8000";

  const fetchDownload = () => {
    fetch(`${serverURL}/check-download?URL=${url}`).then((res: any) => {
      window.location.href = `${serverURL}/download?URL=${url}&downloadFormat=${format}&quality=${quality}&title=${res.title}`;
    });
  };

  const selectFormat = (e: any) => {
    let idx = e.target.selectedIndex;
    setFormat(e.target.options[idx].value);
    console.log("format ", format);
  };
  const selectQuality = (e: any) => {
    let idx = e.target.selectedIndex;
    setQuality(e.target.options[idx].value);
    console.log("Quality: ", quality);
  };
  return (
    <>
      <form>
        <label>
          <strong>Conversion Type</strong>
        </label>
        <select
          onChange={selectFormat}
          className="input-audio-video"
          id="format"
        >
          <option value="audio-only">MP3: Audio only (No video)</option>
          <option value="video-only">MP4: Video only (No audio) </option>
          <option value="video&amp;audio" selected>
            MP4: Video and Audio
          </option>
        </select>
        <label>
          <strong>Quality</strong>
        </label>
        <select onChange={selectQuality} id="quality">
          <option value="high">Highest</option>
          <option value="low" selected>
            Lowest
          </option>
        </select>
      </form>
      <div className="form">
        <input
          className="input__link"
          type="text"
          placeholder="Search or Paste Youtube link here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="button__start" onClick={fetchDownload}>
          Start
        </button>
      </div>
    </>
  );
};

export default FormUrl;
