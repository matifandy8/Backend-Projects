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
    <div>
      <h2>{title}</h2>
      <img src={img} alt="" />
      <div>
        {videoformats &&
          videoformats.map((format:any, index:any) =>
            format.qualityLabel === null ? (
              ""
            ) : format.hasAudio === true ? (
              <button
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
