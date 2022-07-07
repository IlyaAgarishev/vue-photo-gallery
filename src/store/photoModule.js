import axios from "axios";

export default {
  state: {
    photos: [],
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
  },
  actions: {
    fetchPhotos(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((resp) => context.commit("setPhotos", resp.data));
    },
  },
};
