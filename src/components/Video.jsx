function Video() {
  return (
    <div className="py-16 px-4 bg-[#f4faff] text-center">
      <h2 className="text-2xl font-bold mb-10 text-gray-900">
        Zážitek bez doušku
      </h2>
      <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Video;
