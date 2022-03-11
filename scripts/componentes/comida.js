import { construirModales } from "./items-modales.js";

export const componenteComida = () =>{
  const API = "https://docs.google.com/spreadsheets/d/1oRTi34jLj2HkBUN9n0Pp1KIbKVje8qwhTO0KOH59gBQ/gviz/tq?tqx=out:json&gid=816209340"
  construirModales(API);
}