export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
  autoPlay
  muted
  loop
  playsInline
  className="h-full w-full object-cover"
>
  <source src="/minecraft-bg.mp4" type="video/mp4" />
</video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-[0_0_25px_rgba(85,255,85,0.8)]">
          NexaraMC
        </h1>

        <p className="mt-4 text-gray-300 text-lg md:text-xl">
          Comunitatea ta Minecraft
        </p>

        <div className="mt-10 flex flex-col gap-4 items-center">
          <a
            href="https://discord.gg/yM2YMwWpGT"
            target="_blank"
            className="bg-green-500 hover:bg-green-400 transition-all px-10 py-4 rounded-2xl text-black font-bold text-lg shadow-[0_0_30px_rgba(85,255,85,0.7)]"
          >
            Intră pe Discord
          </a>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/dragos_56.0"
              target="_blank"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-6 py-3 rounded-xl text-white transition"
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com/@dragos5655"
              target="_blank"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-6 py-3 rounded-xl text-white transition"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}