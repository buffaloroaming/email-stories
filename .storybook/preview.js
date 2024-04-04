import '../src/assets/styles/main.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<story />`
    })
  ]
}

export default preview
