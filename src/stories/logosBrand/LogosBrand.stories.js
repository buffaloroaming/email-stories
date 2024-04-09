import Logos from './LogosBrand.vue'

export default {
  title: 'Brand/Logos',
  component: Logos
}

export const LogoBlackLarge = {
  args: {
    images: ['logo-black-large.png'],
    size: '14em',
    caption: 'Standard black logo.'
  }
}
export const LogoPathward = {
  args: {
    images: ['logo-black-pathward-en.png', 'logo-black-pathward-es.png'],
    size: '14em',
    caption: 'English and Spanish versions.'
  }
}
export const LogoDarkMode = {
  args: {
    images: ['logo-white-green-dot.png', 'logo-white-white-dot.png'],
    size: '6em',
    backgroundColor: '#666'
  }
}
