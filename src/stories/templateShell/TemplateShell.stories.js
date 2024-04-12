import TemplateShell from '@/components/TemplateShell.vue'

export default {
  title: 'Modules/TemplateShell',
  component: TemplateShell,
  argTypes: {
    language: {
      control: {
        type: 'select',
        required: true
      },
      description: 'Overwritten description',
      options: ['english', 'spanish']
    },
    cta: {
      control: {
        type: 'boolean'
      },
      description: 'Overwritten description',
      options: ['english', 'spanish']
    }
  }
}

export const EnglishLogIn = {
  args: {
    language: 'english',
    cta: true
  }
}
export const EnglishNoLogIn = {
  args: {
    language: 'english',
    cta: false
  }
}
export const SpanishLogIn = {
  args: {
    language: 'spanish',
    cta: true
  }
}
export const SpanishNoLogIn = {
  args: {
    language: 'spanish',
    cta: false
  }
}
