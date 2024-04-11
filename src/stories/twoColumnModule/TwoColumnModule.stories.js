import TwoColumnModule from '@/components/TwoColumnModule.vue'

export default {
  title: 'Modules/TwoColumn',
  component: TwoColumnModule
}

export const ModuleOne = {
  args: {
    headline: 'Sub headline goes here and is also pretty cool, right?',
    body: [
      'Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus risus, pellentesque ut iaculis non, fermentum quis augue. Proin purus risus.'
    ],
    listItems: [
      'Body copy lorem ipsum dolor sit amet.',
      'Body copy lorem ipsum dolor sit amet.',
      'Body copy lorem ipsum dolor sit amet.',
      'Body copy lorem ipsum dolor sit amet.'
    ],
    image: 'square.png',
    reverse: false,
    CTALabel: 'Call to Action'
  }
}
export const ModuleTwo = {
  args: {
    headline: 'Sub headline goes here and is also pretty cool, right?',
    body: [
      'Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus risus, pellentesque ut iaculis non, fermentum quis augue. Proin purus risus.'
    ],
    listItems: [],
    image: 'square.png',
    reverse: true,
    CTALabel: 'Call to Action'
  }
}
