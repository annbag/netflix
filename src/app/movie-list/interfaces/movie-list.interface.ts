export interface Movie {
    id: string;
    title: string;
    description: string;
    thumbUrl: string;
    videoUrl: string;
}

export interface MovieList extends Array<Movie>{
}