export const renderSongs = (songs) => {
  return songs.map(({ images, name, description, id }) => {
    const image = images[0].url;
    return (
      <div className="card card--square">
        <div className="card-wrapper">
          <a to={`#${id}`} className="card-link">
            <div className="card-img">
              <img src={image} alt="song" />
            </div>
            {name && <h4 className="card-title line-clamp--1">{name}</h4>}
          </a>
          {description && (
            <h5
              className="card-description line-clamp--2"
              dangerouslySetInnerHTML={{ __html: description }}
            ></h5>
          )}
        </div>
      </div>
    );
  });
};
