import axios from 'axios';
import { API_KEY } from "../constants/index.js";

export function getNewPic(){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`)
        .then(res => {
            return res.data[0];
        })
        .catch(err => {
            console.error(err);
        })
}