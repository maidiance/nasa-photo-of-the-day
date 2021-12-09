import axios from 'axios';
import { API_KEY } from "../constants/index.js";

export function getNewPic(){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=2`)
        .then(res => {
            console.log('getNewPic', res.data);
            return res.data;
        })
        .catch(err => {
            console.error(err);
            return [];
        })
}