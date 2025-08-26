export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent fixed w-full z-10">
        <img src="/logo.png" alt="Netflix Logo" className="h-8" />
        <nav className="space-x-4 text-sm">
          <a href="#" className="hover:text-red-500">Home</a>
          <a href="#" className="hover:text-red-500">TV Shows</a>
          <a href="#" className="hover:text-red-500">Movies</a>
          <a href="#" className="hover:text-red-500">New & Popular</a>
          <a href="#" className="hover:text-red-500">My List</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[80vh] flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/1X8j0qD.jpeg')" }}>
        <div className="bg-black/60 p-8 rounded max-w-lg ml-6">
          <h1 className="text-4xl font-bold mb-4">Breaking Bad</h1>
          <p className="mb-4 text-sm">
            A high school chemistry teacher turned methamphetamine producer
            navigates the criminal underworld with his former student.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-black px-4 py-2 rounded font-semibold">▶ Play</button>
            <button className="bg-gray-500/70 px-4 py-2 rounded font-semibold">ℹ More Info</button>
          </div>
        </div>
      </section>

      {/* Movie Rows */}
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          {[1,2,3,4,5,6].map((i) => (
            <img
              key={i}
              src={`https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`}
              className="w-48 rounded-lg hover:scale-110 transition-transform duration-300"
              alt="Movie Poster"
            />
          ))}
        </div>
      </section>
    </main>
  )
}
