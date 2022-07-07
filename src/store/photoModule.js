import axios from "axios";

export default {
  state: {
    photos: [],
    dialogVisible: false,
    currentPhoto: {},
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },

    showDialog(state) {
      state.dialogVisible = true;
    },
    hideDialog(state) {
      state.dialogVisible = false;
    },
    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload;
    },
    addNewPhoto(state, payload) {
      state.photos.push(payload);
    },
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
    getDialogVisible: (state) => state.dialogVisible,
    getCurrentPhoto: (state) => state.currentPhoto,
  },
  actions: {
    fetchPhotos(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((resp) => context.commit("setPhotos", resp.data));
    },
  },
};
