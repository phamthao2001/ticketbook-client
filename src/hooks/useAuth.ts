import { ref } from 'vue'

const isAuth = ref<boolean>(!!localStorage.getItem('token'))

function useAuth() {
  const setToken = (token: string): void => {
    localStorage.setItem('token', token)
    isAuth.value = true
  }

  const getToken = (): string => {
    return localStorage.getItem('token') || ''
  }

  const logout = (): void => {
    localStorage.removeItem('token')
    isAuth.value = false
  }
  return { isAuth, setToken, getToken, logout }
}

export default useAuth
