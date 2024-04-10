import Hero from '@/components/HeroModule.vue'

export default {
  title: 'Modules/Hero',
  component: Hero
}

export const ModuleOne = {
  args: {
    moduleType: 'hero',
    headline: 'This is a headline and it is so freaking amazing, so we used it in this template',
    body: ['Current balance: {{numberFormat cardCurrentBalance "currency" "en_US"}}'],
    CTALabel: 'Call to Action'
  }
}

export const ModuleTwo = {
  args: {
    moduleType: 'hero',
    headline: 'This is a headline and it is so freaking amazing, so we used it in this template',
    body: ['Current balance: {{numberFormat cardCurrentBalance "currency" "en_US"}}'],
    CTALabel: ''
  }
}
