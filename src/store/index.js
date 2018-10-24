import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const store= new Vuex.Store({
  state:{
      token:'',
      userInfo:{
         address: "",
         age: 0,
         birthday: "",
         branchId: "",
         count: 0,
         disabled: 0,
         education: "",
         header: "",
         hometown: "",
         id: 0,
         idCard: "",
         jobRank: "",
         joinPartyTime: "",
          lastPayTime: "",
          leadPerson: "",
         nation: "",
        partyStatus: 0,
        password: "",
        phone: "",
        qqNum: "",
        salary: 0,
        sex: 0,
        special: "",
        totalScore: 0,
        username: "",
        wxNum: "",
      }
  } ,
  action:{},//异步mutations
  mutations: {

    SET_information(state, payload) {
      state.userInfo= payload
    },
    DEL_token(state) {
      state.token = '';
      sessionStorage.removeItem('token');
      localStorage.removeItem('token')
    },
    SET_token(state, token) {
      state.token = token;
      sessionStorage.token=token;
      localStorage.token=token
    },
    },
  plugins:[
    createPersistedState({
      storage:{
      getItem:key=>localStorage.getItem(key),
      setItem:(key,value)=>{
        localStorage.setItem(key,value)
      },
      removeItem:key=>localStorage.removeItem(key)
    }
  })]
})
export  default store
