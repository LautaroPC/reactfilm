import { tmdb_api, tmdb_paths } from "../../../core/datasource/remote/tmdb/tmbd_api";
import { movieDetailsAdapter } from "../services/adapter/movie_detail_adapter";

export const getMovieDetails = async (id) => {
        
    const {data} = await tmdb_api.get(`${tmdb_paths.movie.id}${id}`);
    return movieDetailsAdapter(data);
    
}