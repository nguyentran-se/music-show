export const renderPlaylists = (playlists) => {
  return playlists.map(({ image, name, description, id }) => {
    return (
      <div className="card card--square">
        <div className="card-wrapper">
          <a to={`#${id}`} className="card-link">
            <div className="card-img">
              <img src={image.url} alt="playlist" />
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
