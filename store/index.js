import * as API from '~/api'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    state: {
      user: {
        assets: [],
        bundles: [],
        channels: [],
        campaigns: []
      },
      navbar: {
        vissible: true
      },
      uploadDialog: {
        vissible: false
      }
    },
    getters: {
      campaignById: state => _id => {
        return state.user.campaigns.filter(item => {
          return item._id === _id
        })
      },
      bundleById: state => _id => {
        return state.user.bundles.filter(item => {
          if (item !== null) return item._id === _id
          return false
        })
      },
      assetById: state => _id => {
        return state.user.assets.filter(item => {
          return item._id === _id
        })
      },
      userAssets: state => state.user.assets,
      userChannels: state => {
        return state.user.channels.filter(item => {
          return item !== null
        })
      },
      userCampaigns: state => {
        return state.user.campaigns.filter(item => {
          return item !== null
        })
      },
      userBundles: state => {
        return state.user.bundles.filter(item => {
          return item !== null
        })
      },
      navbarVissible: state => state.navbar.vissible,
      uploadDialogVisible: state => state.uploadDialog.vissible
    },
    actions: {
      async fetchUserCampaigns ({ commit }) {
        try {
          const response = await API.getCampaigns()
          commit('STORE_USER_CAMPAIGNS', response.data.data)
        } catch (err) {
          throw new Error((err && err.data && err.data.msg) || 'Failed to STORE_USER_CAMPAIGNS')
        }
      },
      async fetchUserChannels ({ commit }) {
        try {
          const response = await API.getChannels()
          commit('STORE_USER_CHANNELS', response.data.data)
        } catch (err) {
          throw new Error((err && err.data && err.data.msg) || 'Failed to STORE_USER_CHANNELS')
        }
      },
      async fetchUserBundles ({ commit }) {
        try {
          const response = await API.getBundles()
          commit('STORE_USER_BUNDLES', response.data.data)
        } catch (err) {
          throw new Error((err && err.data && err.data.msg) || 'Failed to STORE_USER_BUNDLES')
        }
      },
      async fetchUserAssets ({ commit }) {
        try {
          const response = await API.fetchUserAssets()
          commit('STORE_USER_ASSETS', response.data.data.assets.reverse())
        } catch (err) {
          throw new Error((err && err.data && err.data.msg) || 'Failed to STORE_USER_ASSETS')
        }
      }
    },
    mutations: {
      STORE_USER_CAMPAIGNS (state, data) {
        state.user.campaigns = data
      },
      STORE_USER_CHANNELS (state, data) {
        state.user.channels = data
      },
      STORE_USER_BUNDLES (state, data) {
        state.user.bundles = data
      },
      STORE_USER_ASSETS (state, data) {
        state.user.assets = data
      },
      TOGGLE_VISSIBLE_NAVBAR (state) {
        state.navbar.vissible = !state.navbar.vissible
      },
      TOGGLE_VISSIBLE_UPLOAD_DIALOG (state) {
        state.uploadDialog.vissible = !state.uploadDialog.vissible
      }
    }
  })
}

export default createStore
