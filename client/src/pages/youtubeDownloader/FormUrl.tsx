import { useEffect, useState } from "react";
import Loading from "../../utils/loading";
import Download from "./Download";
import "./FormUrl.css";

const FormUrl: React.FC = () => {
  const [url, setUrl] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [formats,setFormats] = useState()
  const [audioFormats,setAudioFormats] = useState();

  const handleSubmit = () => {
    setLoading(true);
    if (url === "" || !url.includes("https") || !url.includes("yout")) {
      alert("Please enter a Youtube URL...");
    } else {
      fetch(`http://localhost:4000/video?videoId=${url}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.formats);
          setImg(data.videoDetails.thumbnails[data.videoDetails.thumbnails.length-1].url);
          setTitle(data.videoDetails.title);
          setFormats(data.formats)
          setLoading(false);
        });
    }
  };

  const handleUrlChange = (e: any) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <div className="form">
        <input
          className="input__link"
          placeholder="Search or Paste Youtube link here"
          type="url"
          required
          onChange={handleUrlChange}
          value={url}
        />
        <button className="button__start" onClick={handleSubmit}>
          Start
        </button>
      </div>
      {/* loading true when fetch and the show the image buuttons */}
      {loading === true ?  (
        <div className="loading">
        <Loading/>
        </div>
      ) : img == "" ? (
        <div>
            <h1>no Download</h1>
          </div>
      ) : (
        <div>
           <Download url={url} img={img} title={title} videoformats={formats}/>
          </div>
          )}
    </>
  );
};

export default FormUrl;
