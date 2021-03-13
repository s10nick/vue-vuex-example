import axios from 'axios'

var http = axios.create({
  baseURL: '/'
  // timeout: 1000,
  // headers: {
  //   'Accept': 'application/json, */*',
  //   'Content-Type': 'multipart/form-data'
  // }
})

// export const login = data => http.post('login', data)
// export const register = data => http.post('signup', data)
// export const logout = () => http.get('logout')

// export const fetchUserAssets = () => http.get('account/uploads')
// export const uploadUserAssets = (data) => http.post('account/upload', data)
// export const deactivateUserAsset = (data) => {
//   return http({
//     method: 'post',
//     url: 'account/deactivateAsset',
//     data,
//     headers: {
//       'Accept': 'application/json, */*',
//       'Content-Type': 'application/json'
//     }
//   })
// }

// export const bundleCreate = data => http.post('api/bundles/create', data)
// export const getBundles = () => http.get(`api/bundles`)
// export const getBundleById = id => http.get(`api/bundles/${id}`)
// export const bundleEditById = (id, data) => http.put(`api/bundles/${id}`, data)
// export const deleteBundle = id => http.delete(`api/bundles/${id}`)

// export const getChannels = () => http.get(`api/channels`)
// export const createChannel = data => http.post(`api/channels/create`, data)
// export const editChannel = (id, data) => http.put(`api/channels/${id}`, data)
// export const deleteChannel = id => http.delete(`api/channels/${id}`)

// export const getCampaigns = () => http.get(`api/campaigns`)
// export const createCampaign = data => http.post(`api/campaigns/create`, data)
// export const editCampaign = (id, data) => http.put(`api/campaigns/${id}`, data)
// export const deleteCampaign = id => http.delete(`api/campaigns/${id}`)
