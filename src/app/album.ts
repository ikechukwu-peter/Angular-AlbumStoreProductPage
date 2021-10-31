import { Track } from "./track";

export interface Album {
    name: string;
    releaseDate: string;
    artist:string;
    coverImage: string;
    tracks: Track[]
}
