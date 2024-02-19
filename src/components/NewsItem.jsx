import React from "react";

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="d-flex justify-content-end end-0 position-absolute badge rounded-pill bg-danger">
          {source}
        </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.pixelstalk.net/wp-content/uploads/2016/10/Anime-Landscape-Backgrounds-Free-Download.jpg"
          }
          className="card-img-top"
          alt="loading error"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {author} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
