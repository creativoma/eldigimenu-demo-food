import { construirModales } from "./items-modales.js";

export const componenteBebida = () =>{
  const API = "https://docs.google.com/spreadsheets/d/1oRTi34jLj2HkBUN9n0Pp1KIbKVje8qwhTO0KOH59gBQ/gviz/tq?tqx=out:json&gid=1917942344"
  construirModales(API);
}