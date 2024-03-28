export interface Item{
    url: string,
    genre: string,
    id: number,
    movieName: string
    movieDescription: string
    movieTrailer: string
}
export interface Genre{
    genreName: string,
    genreId: number,
    item: Item[]
}