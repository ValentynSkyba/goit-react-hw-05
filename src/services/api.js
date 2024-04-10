import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
export const fetchImages = async (query, page) => {
  const params = {
    client_id: "Rss7XLP-YRW6OHudaGj-MK3CEunwpB67A368WjfcDlM",
    query,
    page,
    per_page: 9,
  };
  const response = await axios.get("search/photos", { params });
  return response.data;
};
