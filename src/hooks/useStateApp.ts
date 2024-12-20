import { ref } from 'vue'

const stateApp = ref({
  headerBack: false,
  isShowBottomNavigate: true,
})

function useStateApp() {
  const hiddenBottomNavigate = () => {
    stateApp.value.isShowBottomNavigate = false
  }
  const showBottomNavigate = () => {
    stateApp.value.isShowBottomNavigate = true
  }

  return {
    stateApp,
    hiddenBottomNavigate,
    showBottomNavigate,
  }
}

export default useStateApp
