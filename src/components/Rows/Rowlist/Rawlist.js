import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const Rawlist = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending" fetchurl={requests.fetchtrending} />

      <Row title="Top Rated" fetchurl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchurl={requests.fetchTvShows} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />
    </>
  );
};

export default Rawlist;
