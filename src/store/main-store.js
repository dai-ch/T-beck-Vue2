export default {
  namespaced:true,
  state: {
    //現在の時刻で初期化
    updated: new Date().toTimeString(),
  },
  mutations: {
    //updatedの時刻で初期化
    setUpdated(state) {
      state.updated = new Date().toTimeString();
    },
  },
  getters: {
    //updatedを取得
    localUpdated(state) {
      return state.updated;
    },
  },
};
