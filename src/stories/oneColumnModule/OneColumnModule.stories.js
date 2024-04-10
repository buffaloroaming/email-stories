import OneColumn from '@/components/HeroModule.vue'

export default {
  title: 'Modules/OneColumn',
  component: OneColumn
}

export const ModuleOne = {
  args: {
    moduleType: 'oneColumn',
    headline: 'This is a headline and it is so freaking amazing, so we used it in this template',
    body: [
      'Hello {{defaultIfEmpty (capitalizeFirst (lower fName)) "valued member"}},',
      'Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus risus, pellentesque ut iaculis non, bolded text looks like this. Pellentesque tincidunt in lacus sit amet molestie. Vivamus id augue varius, here is a text link, condimentum sapien. Aliquam vestibulum sed mi semper commodo. Proin purus risus, pellentesque ut iaculis non.',
      'Oportun® Visa® Credit Card is issued by WebBank. Click here for Important Disclosure and Pricing Information. See other terms and conditions below.'
    ],
    listItems: ['Point 1', 'Point 2', 'Point 3'],
    CTALabel: 'Call to Action'
  }
}

export const ModuleTwo = {
  args: {
    moduleType: 'oneColumn',
    headline: 'This is a headline and it is so freaking amazing, so we used it in this template',
    body: [
      'Hello {{defaultIfEmpty (capitalizeFirst (lower fName)) "valued member"}},',
      'Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus risus, pellentesque ut iaculis non, bolded text looks like this. Pellentesque tincidunt in lacus sit amet molestie. Vivamus id augue varius, here is a text link, condimentum sapien. Aliquam vestibulum sed mi semper commodo. Proin purus risus, pellentesque ut iaculis non.',
      'Oportun® Visa® Credit Card is issued by WebBank. Click here for Important Disclosure and Pricing Information. See other terms and conditions below.'
    ],
    listItems: [],
    CTALabel: 'Call to Action'
  }
}
export const ModuleThree = {
  args: {
    moduleType: 'oneColumn',
    headline: '',
    body: [
      'Hello {{defaultIfEmpty (capitalizeFirst (lower fName)) "valued member"}},',
      'Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus risus, pellentesque ut iaculis non, bolded text looks like this. Pellentesque tincidunt in lacus sit amet molestie. Vivamus id augue varius, here is a text link, condimentum sapien. Aliquam vestibulum sed mi semper commodo. Proin purus risus, pellentesque ut iaculis non.',
      'Oportun® Visa® Credit Card is issued by WebBank. Click here for Important Disclosure and Pricing Information. See other terms and conditions below.'
    ],
    listItems: [],
    CTALabel: 'Call to Action'
  }
}
export const ModuleFour = {
  args: {
    moduleType: 'oneColumn',
    headline: '',
    body: [
      'Hello {{defaultIfEmpty (capitalizeFirst (lower fName)) "valued member"}},',
      'Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus risus, pellentesque ut iaculis non, bolded text looks like this. Pellentesque tincidunt in lacus sit amet molestie. Vivamus id augue varius, here is a text link, condimentum sapien. Aliquam vestibulum sed mi semper commodo. Proin purus risus, pellentesque ut iaculis non.',
      'Oportun® Visa® Credit Card is issued by WebBank. Click here for Important Disclosure and Pricing Information. See other terms and conditions below.'
    ],
    listItems: ['Point 1', 'Point 2', 'Point 3'],
    CTALabel: 'Call to Action'
  }
}
export const ModuleFive = {
  args: {
    moduleType: 'oneColumn',
    headline: 'H1. This is a longer headline and it is so freaking amazing',
    body: [],
    listItems: ['Point 1', 'Point 2', 'Point 3'],
    CTALabel: 'Call to Action'
  }
}
