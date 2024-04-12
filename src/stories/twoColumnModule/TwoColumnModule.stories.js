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
    listItems: [],
    image: 'square.png',
    CTALabel: 'Call to Action',
    styles: { reverse: false, border: false, imgWidth: '224px', imgAlignCenter: false }
  }
}
export const ModuleTwo = {
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
    CTALabel: 'Call to Action',
    styles: { reverse: false, border: false, imgWidth: '224px', imgAlignCenter: false }
  }
}
export const ModuleThree = {
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
    CTALabel: '',
    styles: { reverse: false, border: false, imgWidth: '224px', imgAlignCenter: false }
  }
}
export const ModuleFour = {
  args: {
    headline: 'Sub headline goes here and is also pretty cool, right?',
    body: [
      'Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus risus, pellentesque ut iaculis non, fermentum quis augue. Proin purus risus.'
    ],
    listItems: [],
    image: 'square.png',
    CTALabel: 'Call to Action',
    styles: { reverse: true, border: false, imgWidth: '120px', imgAlignCenter: false }
  }
}
export const ModuleFive = {
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
    CTALabel: 'Call to Action',
    image: 'square.png',
    styles: { reverse: true, border: true, imgWidth: '224px', imgAlignCenter: true }
  }
}
