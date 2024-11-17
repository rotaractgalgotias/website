export function VideoPlayer() {
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden">
        <video
          autoPlay
          className="w-full h-auto"
          src="/main_video.mp4"
          poster="/\team_23-24.jpg"
          muted={true}
          loop
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}
