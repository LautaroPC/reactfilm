import { tmdb_api, tmdb_paths } from "../../../../core/datasource/remote/tmdb/tmbd_api";
import { tmdbMoviesTvAdapter } from "../../../adapters/tmdb.adapters";

export const getMovieSearch = async (parametros) => {
    const params = {
        query: parametros,
    }
    const {data} = await tmdb_api.get(tmdb_paths.movies.search, {params});
    
    return tmdbMoviesTvAdapter(data);
}