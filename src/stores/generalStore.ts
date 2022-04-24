import { defineStore } from 'pinia'
import { userDto } from 'src/dtos/user'

export const useGeneral = defineStore('counter', {
  state: () => ({
    user: {
      token: '',
      infos: <userDto>{}
    },
    darkMode: false
  }),
  getters: {
    infos: (state) => state.user.infos,
    token: (state) => state.user.token
  },
  actions: {
    setUserInfo (payload:userDto) {
      this.user.infos = payload
    }
  }
})
