import { construirModales } from "./items-modales.js";

export const componenteInicio = () =>{
  const API = "https://docs.google.com/spreadsheets/d/1oRTi34jLj2HkBUN9n0Pp1KIbKVje8qwhTO0KOH59gBQ/gviz/tq?tqx=out:json&gid=52700096"
  construirModales(API);
}