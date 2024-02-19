import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  // articles = [
  //      {
  //         "source": {
  //             "id": null,
  //             "name": "Gizmodo.com"
  //         },
  //         "author": "Justin Carter",
  //         "title": "Believe It: Naruto May Be Back on the Live-Action Movie Train",
  //         "description": "The success of One Piece’s live-action Netflix series means western studios are going to be looking at other popular shonen anime to bring to life. My Hero Academia is already on the docket over at Netflix, and we got one for Saint Seiya (or Knights of the Zo…",
  //         "url": "https://gizmodo.com/naruto-live-action-film-lionsgate-1851047617",
  //         "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a6863e3a81a9b94e3a9b75fd96aea154.jpg",
  //         "publishedAt": "2023-11-26T15:30:00Z",
  //         "content": "The success of One Pieceslive-action Netflix series means western studios are going to be looking at other popular shonen anime to bring to life. My Hero Academiais already on the docket over at Netf… [+2547 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "polygon",
  //             "name": "Polygon"
  //         },
  //         "author": "Toussaint Egan",
  //         "title": "What anime food would you bring to Thanksgiving?",
  //         "description": "Why does anime food look so good? Moreover, what anime food would you bring to Thanksgiving? Here’s are list of the most delectable anime food out there.",
  //         "url": "https://www.polygon.com/23969607/best-anime-food-delicious-yum",
  //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/_pedjneWf8vVXMsZn8vKHOUQ9Wo=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25105516/spirited_awaybr_disneyscreencaps.com_8513.jpg",
  //         "publishedAt": "2023-11-23T14:00:00Z",
  //         "content": "Why does anime food always look so good? Its a question thats befuddled scholars since time immemorial (or err, at least as long as anime has been around), and one that always prompts anime fans to d… [+4754 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "polygon",
  //             "name": "Polygon"
  //         },
  //         "author": "Toussaint Egan",
  //         "title": "You’ve seen Scott Pilgrim Takes Off, now watch these other great Science Saru anime",
  //         "description": "Scott Pilgrim Takes Off, the latest anime from Science Saru, premiered on Netflix last week. Here’s a list of some other great anime if you loved the series.",
  //         "url": "https://www.polygon.com/239613props.pageSize/scott-pilgrim-takes-off-netflix-anime-studio-science-saru-shows-movies",
  //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/gmoccie_-SDCfNrdcluXe4_ICP8=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25089681/Scott_Pilgrim_Takes_Off_MainTrailer_02.jpg",
  //         "publishedAt": "2023-11-26T16:00:00Z",
  //         "content": "If you buy something from a Polygon link, Vox Media may earn a commission. See our ethics statement.Scott Pilgrim Takes Off, the anime adaptation of Bryan Lee OMalleys hit comic series by studio Scie… [+7889 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "polygon",
  //             "name": "Polygon"
  //         },
  //         "author": "Toussaint Egan",
  //         "title": "When Demon Slayer season 4 comes out, based on everything we know",
  //         "description": "The anime adaptation of Demon Slayer’s Hashira Training Arc is handled by Ufotable. Here’s when it might be released and if it will come to Netflix or Crunchyroll.",
  //         "url": "https://www.polygon.com/23979916/demon-slayer-season-4-everything-we-know",
  //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/LB4Zf0Oci2VIVtqMjUXS8T8GhGE=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25119816/25002646.jpg",
  //         "publishedAt": "2023-12-21T19:00:00Z",
  //         "content": "Demon Slayer: Kimetsu no Yaiba season 3 concluded this past June, continuing Tanjiro Kamados battle against the demonic forces of Lord Muzan and earning a spot on our list of the best anime of 2023. … [+3098 chars]"
  //     }
  // ]

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=anime&apiKey=${props.apikey}&language=${props.language}&page=${props.page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/everything?q=anime&apiKey=${
      props.apikey
    }&language=${props.language}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h2 className="text-center" style={{ marginTop: "95px" }}>
        AnimeVerse - Top Headlines from {props.heading}
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles !== totalResults}
        loader={<Spinner />}
      >
        <div className="container mt-4">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  language: "en",
  pageSize: 48,
};
News.propTypes = {
  language: PropTypes.string,
  pageSize: PropTypes.number,
};
