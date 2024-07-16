"use client";
// import YouTube from "react-youtube";

// const YoutubePlayer = ({ youtubeId }) => {
//   return (
//     <div className="pt-3 m-1 overflow-hidden rounded-lg md:m-10">
//       <YouTube
//         videoId={youtubeId}
//         onReady={(event) => event.target.pauseVideo()}
//         onError={() => alert("Video is broken, please try another.")}
//         iframeClassName="w-[100%] h-[250px] md:h-[500px]"
//       />
//     </div>
//   );
// };

// export default YoutubePlayer;

const YoutubePlayer = ({ youtubeId }) => {
  return (
    <div className="pt-3 m-1 overflow-hidden rounded-lg md:m-10">
      <iframe
        width="100%"
        height="480"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
        className="w-[100%] h-[300px] md:h-[500px]"
      />
    </div>
  );
};

export default YoutubePlayer;
