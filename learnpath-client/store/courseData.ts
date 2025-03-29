import { create } from "zustand";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;
const dataStore = create((set, get) => ({
  courseData: null,
  roadMaps: null,
  generateRoadmap: async (router: any, params: any) => {
    try {
      const respone = await axios.post(`${url}/api/roadmap`, params);
      set({ courseData: respone.data.data });
      router.push("/course");
    } catch (err) {
      console.log("Error in fetching data", err);
    }
  },

  getRoadmaps: async (router: any, id: any) => {
    try {
      const response = await axios.get(`${url}/api/roadmap/${id}`);
      set({ roadMaps: response.data.data });
      router.push(`/course/${id}`);
    } catch (err) {
      console.log("Error in fetching data", err);
    }
  },
}));

export default dataStore;
