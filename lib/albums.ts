import axios from "axios";
// import {BASE_URL, APP_ID} from './constants'
export const getAlbums = async () => {
  const albums = await axios
    .get(`https://638f2a689cbdb0dbe31ee601.mockapi.io/api/getAlbumData`)
    .then(({ data }: { data: any }) => {
      return data;
    });
  return albums;
};
