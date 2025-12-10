"use client";

export function VideoPlayer() {
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden">
        <video
          autoPlay
          className="w-full h-auto"
          src="/main_video.mp4"
          poster="/about_image1.jpg"
          muted={true}
          loop
          playsInline
          preload="auto"
          suppressHydrationWarning
        />
      </div>
    </div>
  );
}
