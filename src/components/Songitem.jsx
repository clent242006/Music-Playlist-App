function SongItem({ song, onPlay, onFavorite, onDelete }) {
  return (
    <div className="song">
      <div className="song-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>

      <div>
        <button onClick={() => onPlay(song)}>
          Play
        </button>

        <button onClick={() => onFavorite(song.id)}>
          {song.favorite ? "Favorited" : "Favorite"}
        </button>

        <button onClick={() => onDelete(song.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default SongItem;