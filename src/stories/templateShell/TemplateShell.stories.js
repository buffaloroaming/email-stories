import TemplateShell from '@/components/TemplateShell.vue'

export default {
  title: 'Modules/TemplateShell',
  component: TemplateShell
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
