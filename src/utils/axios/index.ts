import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "localhost:3001/",
});

const mapApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_MAP_BASE_URL ||
    "https://nominatim.openstreetmap.org/search?",
});

export { api, mapApi };
