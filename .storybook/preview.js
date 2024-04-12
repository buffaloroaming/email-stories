import '../src/assets/styles/main.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    // docs: {
    //   toc: true // 👈 Enables the table of contents
    // },
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
