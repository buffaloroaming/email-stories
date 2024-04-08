import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  title: 'Components/Headers',
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
