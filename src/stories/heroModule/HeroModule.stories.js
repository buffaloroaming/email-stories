import Hero from '@/components/HeroModule.vue'

export default {
  title: 'Modules/Heros',
  component: Hero,
  argTypes: {
    moduleType: {
      table: {
        disable: true
      }
    }
  }
}

export const ModuleOne = {
  args: {
    moduleType: 'hero',
    headline: 'This is a headline and it is so freaking amazing, so we used it in this template',
    body: ['Current balance: {{numberFormat cardCurrentBalance "currency" "en_US"}}'],
    listItems: [],
    CTALabel: 'Call to Action'
  }
}

export const ModuleTwo = {
  args: {
    moduleType: 'hero',
    headline: 'This is a headline and it is so freaking amazing, so we used it in this template',
    body: ['Current balance: {{numberFormat cardCurrentBalance "currency" "en_US"}}'],
    listItems: [],
    CTALabel: ''
  }
}
