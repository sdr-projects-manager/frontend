export default {
  getToken() {
    return typeof window !== 'undefined' && localStorage.getItem('token')
  }
}
