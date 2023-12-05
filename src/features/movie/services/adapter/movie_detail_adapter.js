import { tmdb_paths } from "../../../../core/datasource/remote/tmdb/tmbd_api"

export const movieDetailsAdapter = (response) => {

    const data = {
        title: response.title,
        description: response.overview,
        tagline: response.tagline,
        backdrop: `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.w300}${response.backdrop_path}`,
        poster: `${tmdb_paths.images.poster.url}${tmdb_paths.images.poster.sizes.original}${response.poster_path}`,
        release_date: response.release_date,
        rating: response.vote_average,
        genres: response.genres.map((item) => (item.name
        )),
        productors: response.production_companies.map((item) => ({
            name: item.name,
            logo_path: item.logo_path,
        })),
        time: response.runtime,
    }
    return (data)
}