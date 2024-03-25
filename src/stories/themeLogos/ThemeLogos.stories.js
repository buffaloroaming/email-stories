import ThemeLogos from './ThemeLogos.vue'

export default {
    title: 'Theme/Logos',
    component: ThemeLogos
}

export const LogoBlackLarge = {
    args: {
        images: ['logo-black-large.png'],
        size: '14em',
        caption: 'Standard black logo.'
    }
}
export const logoPathward = {
    args: {
        images: ['logo-black-pathward-en.png', 'logo-black-pathward-es.png'],
        size: '14em',
        caption: 'English and Spanish versions.'
    }
}