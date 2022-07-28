import axios from "axios";

const apikey = process.env.NEXT_API_KEY;
const hash = process.env.NEXT_APP_HASH;
const ts = process.env.NEXT_APP_TS;
const apiUrl = process.env.NEXT_APP_ENDPOINT;

export const api = axios.create({
  baseURL: apiUrl,
  params: {
    ts,
    apikey,
    hash,
  }
})