export default {
  namespaced: true,
  state: {
    //現在の時刻
    updated: new Date().toTimeString(),
  },
  mutations: {
    //updatedの時刻で更新
    setUpdated(state) {
      state.updated = new Date().toLocaleTimeString();
    },
  },
};
