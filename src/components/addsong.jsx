function AddSong({
  title,
  artist,
  setTitle,
  setArtist,
  onAddSong,
}) {
  return (
    <div className="add-song">
      <h2>Add a Song</h2>

      <input
        type="text"
        placeholder="Song title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <button onClick={onAddSong}>
        Add Song
      </button>
    </div>
  );
}

export default AddSong;