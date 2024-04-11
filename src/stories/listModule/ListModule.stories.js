import List from '@/components/ListModule.vue'

export default {
  title: 'Modules/Lists',
  component: List
}

export const ModuleOne = {
  args: {
    headline:
      'H2. Here is the title of a list. It has cool stuff in it and you should take a look!',
    listItems: [
      {
        img: 'icon-one-light.png',
        subHeadline: 'Subheadline goes here',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae placerat massa. Praesent posuere efficitur tellus.'
      },
      {
        img: 'icon-two-light.png',
        subHeadline: 'Subheadline goes here',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae placerat massa. Praesent posuere efficitur tellus.'
      },
      {
        img: 'icon-three-light.png',
        subHeadline: 'Subheadline goes here',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae placerat massa. Praesent posuere efficitur tellus.'
      },
      {
        img: 'icon-four-light.png',
        subHeadline: 'Subheadline goes here',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae placerat massa. Praesent posuere efficitur tellus.'
      }
    ]
  }
}
export const ModuleTwo = {
  args: {
    headline: '',
    listItems: [
      {
        img: 'icon-bell-light.png',
        subHeadline: 'Subheadline goes here',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae placerat massa. Praesent posuere efficitur tellus.'
      }
    ]
  }
}
