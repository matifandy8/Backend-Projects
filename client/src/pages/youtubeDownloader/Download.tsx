import "./Download.css"


const Download = ({ url, img, title, videoformats }: any) => {
  const downloadFile = (itag:any, type:any) => {
    console.log(itag, type);
    window.open(
      `http://localhost:4000/download?title=${title}&videoId=${url}&type=${
        type ? "mp4" : "mp3"
      }&itag=${itag}`
    );
  };
  return (
    <div className="download">
      <h2 className="download__title">{title}</h2>
      <img className="download__image" src={img} alt={title} />
      <div className="download__buttons">
        {videoformats &&
          videoformats.map((format:any, index:any) =>
            format.qualityLabel === null ? (
              ""
            ) : format.hasAudio === true ? (
              <button
                className="download__button"
                onClick={() => {
                  downloadFile(format.itag, format.hasVideo);
                }}
                key={index}
              >{format.qualityLabel}</button>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
};

export default Download;
