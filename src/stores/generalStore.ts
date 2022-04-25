import { defineStore } from 'pinia'
import { userDto } from 'src/dtos/user'

export const useGeneralStore = defineStore('counter', {
  state: () => ({
    user: {
      token: '',
      info: <userDto> {}
    },
    darkMode: false
  }),
  getters: {
    getInfo: (state) => state.user.info,
    getToken: (state) => state.user.token
  },
  actions: {
    setUserInfo (payload:userDto) {
      this.user.info = payload
    },
    setToken (payload:string) {
      this.user.token = payload
    }
  }
})
