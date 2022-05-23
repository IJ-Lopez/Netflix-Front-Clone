import axios from 'axios';

export const API = {
  baseUrl: "https://api.themoviedb.org/3",
  key: "?api_key=1c147da4387c54a54cc621c649df1ccf",
  entity: {
    topRatedMovies: "/movie/top_rated",
    topRatedTv: "/tv/top_rated",
    popularMovies: "/movie/popular",
    popularTv: "/tv/popular",
  },
  language: {
    en: "&language=en_US",
    es: "&language=es_ES",
  },
  pagination: "&page=",
  imageUrl: "https://image.tmdb.org/t/p",
  imageQuality: {
    posterSmall: "/w200",
    posterMedium: "/w300",
    posterLarge: "/w500",
    backdropSmall: "/w300",
    backdropMedium: "/w780",
    backdropLarge: "/w1280",
  },
};


export const createUrl = {
    api: (entity, language = "es", page = 1) => {
        const url = `${API.baseUrl}${API.entity[entity]}${API.key}${API.language[language]}${API.pagination + page}`;
        return url;
    },
    img: (path, quality = "backdropLarge") => {
      const url = `${API.imageUrl}${API.imageQuality[quality]}${path}`;
      //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
      return url;
    }
};

export const services = {
    tryGetTopRatedMovies: async (page = 1) => {
        const url = createUrl.api(...["topRatedMovies", ,page]);
        
        let response;
        await axios.get(url).then((r) => response = r).catch((er) => response = er.response);
        return response;

    },
    tryGetTopRatedTv: async (page = 1) => {
      const url = createUrl.api(...["topRatedTv", ,page]);
      
      let response;
      await axios.get(url).then((r) => response = r).catch((er) => response = er.response);
      return response;

    },
    tryGetPopularMovies: async (page = 1) => {
      const url = createUrl.api(...["popularMovies", ,page]);
      
      let response;
      await axios.get(url).then((r) => response = r).catch((er) => response = er.response);
      return response;

    },
    tryGetPopularTv: async (page = 1) => {
      const url = createUrl.api(...["popularTv", ,page]);
      
      let response;
      await axios.get(url).then((r) => response = r).catch((er) => response = er.response);
      return response;

    }
};
