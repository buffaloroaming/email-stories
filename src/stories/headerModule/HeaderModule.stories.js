import Header from '@/components/HeaderModule.vue'

export default {
  title: 'Modules/Headers',
  component: Header
  // tags: ['autodocs']
}

export const LogIn = {
  args: {
    logInButton: true
  }
}
export const NoLogIn = {
  args: {
    logInButton: false
  }
}
