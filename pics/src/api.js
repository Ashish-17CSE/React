import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: 'Client-ID fAZifyH6c19CqOqjwchRTWOq1UK7pea47_21fmzHStg'
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
