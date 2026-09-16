import { useState } from "react";
import "./App.css";
import SongItem from "./components/Songitem";
import AddSong from "./components/addsong";

function App() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Shape of You",
      artist: "Ed Sheeran",
      favorite: false,
    },
    {
      id: 2,
      title: "Blinding Lights",
      artist: "The Weeknd",
      favorite: false,
    },
    {
      id: 3,
      title: "Perfect",
      artist: "Ed Sheeran",
      favorite: false,
    },
    {
      id: 4,
      title: "Stay",
      artist: "Justin Bieber",
      favorite: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [playingSong, setPlayingSong] = useState(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const addSong = () => {
    if (title.trim() === "" || artist.trim() === "") {
      alert("Please enter the song title and artist.");
      return;
    }

    const newSong = {
      id: Date.now(),
      title: title,
      artist: artist,
      favorite: false,
    };

    setSongs([...songs, newSong]);

    setTitle("");
    setArtist("");
  };

  const deleteSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  const toggleFavorite = (id) => {
    setSongs(
      songs.map((song) =>
        song.id === id
          ? { ...song, favorite: !song.favorite }
          : song
      )
    );
  };

  const playSong = (song) => {
  setPlayingSong(song);
};

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())
  );
  const favoriteSongs = songs.filter((song) => song.favorite);

  return (
    <div className="app">
      <h1>My Music Playlist</h1>

      <div className="search-box">
  <input
    type="text"
    placeholder="Search songs or artists..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  {search && (
    <button onClick={() => setSearch("")}>
      Clear Search
    </button>
  )}
</div>

      <AddSong
  title={title}
  artist={artist}
  setTitle={setTitle}
  setArtist={setArtist}
  onAddSong={addSong}
/>

        {playingSong && (
  <div className="now-playing">
    <h2>Now Playing</h2>
    <p>{playingSong.title}</p>
    <p>{playingSong.artist}</p>
  </div>
)}

        

      <div className="playlist">
        <h2>My Playlist ({filteredSongs.length} songs)</h2>

        {filteredSongs.map((song) => (
  <SongItem
    key={song.id}
    song={song}
    onPlay={playSong}
    onFavorite={toggleFavorite}
    onDelete={deleteSong}
  />
))}
        {filteredSongs.length === 0 && (
          <p>No songs found.</p>
        )}
        <hr />

<h2>Favorite Songs</h2>

{favoriteSongs.map((song) => (
  <div className="song" key={song.id}>
    <div className="song-info">
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
    </div>

    <button onClick={() => toggleFavorite(song.id)}>
      Remove Favorite
    </button>
  </div>
))}

{favoriteSongs.length === 0 && (
  <p>No favorite songs yet.</p>
)}
      </div>
    </div>
  );
}

export default App;