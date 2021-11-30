import { get } from "./http.js";

export const getData = () => get("/json/hero.json");