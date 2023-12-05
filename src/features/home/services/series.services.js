import { tmdb_api, tmdb_paths } from "../../../core/datasource/remote/tmdb/tmbd_api";
import { tmdbMoviesTvAdapter } from "../../adapters/tmdb.adapters";

export const getPopularTv = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.tv.popular);

  return tmdbMoviesTvAdapter(data);
};

export const getTopRatedTv = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.tv.top_rated);

  return tmdbMoviesTvAdapter(data);
};

export const getAiringTodayTv = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.tv.airing_today);

  return tmdbMoviesTvAdapter(data);
}; 