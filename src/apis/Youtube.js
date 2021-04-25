import axios from 'axios'

const KEY = "AIzaSyDu4VaXRCcFVShywbG7I0zDFoEPz6XH914"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3" ,
    params:{
        part:"snippet",
        maxResults: 5,
        type:"",
        key: KEY
    }
})