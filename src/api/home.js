import axios from "@/util/axios";

export const fetchSlides = () => axios.get("/api/slides");
