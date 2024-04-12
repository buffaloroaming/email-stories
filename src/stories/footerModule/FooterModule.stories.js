import Footer from '@/components/FooterModule.vue'

export default {
  title: 'Modules/Footers',
  component: Footer,
  argTypes: {
    language: {
      control: {
        type: 'select',
        required: true
      },
      options: ['english', 'spanish']
    }
  }
}

export const English = {
  args: {
    language: 'english'
  }
}
export const Spanish = {
  args: {
    language: 'spanish'
  }
}
