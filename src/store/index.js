import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:false,
    termsAndConditionsModal:{
      dialog:false
    },
    stateTolbar:{
      stateTolbar:false,
    }
  },
  mutations: {
    openViewFile(state){
      Vue.set(state,"show",!state.show);
    },
    hiddenTolbar(state){
        var URLactual = window.location.href;
        Vue.set(state.stateTolbar,"stateTolbar",URLactual.substr(24) === "landing-page" ? false : true);
    },
    viewFile(state, v) {
      let file = v === "document" ? state.modalValidations.img : state.modalValidations.img2;
      let type = file.substr(0, file.indexOf(";")).replace("data:", "");

      let style =
        type === "application/pdf"
          ? "width: 100%;height: 100%;"
          : "margin: auto;display: list-item;width: 100%;height: 100%;";

      let object = `<object data="${file}" type="${type}" style="${style}"></object>`;
      let html = `<html><body style="margin: 0;background: #3a3a3a;"> <div style="width: 100%;height: 100%;"> ${object} </div></body></html>`;

      var newWin = window.open("", "_blank");
      newWin.document.write(html);
    }
  },
  actions: {
  },
  modules: {
  }
})
