import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const KEY = "22022827-e7833ac6793c04553f9ed3424";
const PER_PAGE = 12;

export const fetchImages = async ({ page = 1, query } = {}) => {
  try {
    const data = await axios(
      `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
