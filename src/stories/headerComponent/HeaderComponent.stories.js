import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  title: 'Modules/Headers',
  component: HeaderComponent
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
