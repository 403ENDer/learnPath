import { create } from "zustand";
import axios from "axios";
import { toast } from "sonner";

const url = process.env.NEXT_PUBLIC_API_URL;
export const dataStore = create((set, get) => ({
  courseData: null,
  courses: null,
  generateCourse: async (router: any, params: any) => {
    try {
      const token = localStorage.getItem("token");
      const respone = await axios.post(`${url}/api/course`, params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({ courseData: respone.data.data });

      router.push(`/course/${respone.data.data.id}`);
    } catch (err) {
      toast.error("Error in generating Course,try again", {
        style: {
          color: "#dc2626",
          padding: "8px 12px",
          fontSize: "18px",
          minWidth: "auto",
        },
      });
      console.log("Error in fetching data", err);
    }
  },

  getCourseData: async (id: any) => {
    try {
      const respone = await axios.get(`${url}/api/course/?id=${id}`);
      set({ courseData: respone.data.data });
      return respone.data.data;
    } catch (err) {
      console.log("Error in fetching data", err);
    }
  },

  getCourses: async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`${url}/api/course/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ courses: response.data.data });
      return response.data.data;
    } catch (err) {
      console.log("Error in fetching data", err);
    }
  },
}));
