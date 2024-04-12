export const gitHubAction = {
  title: 'Open in GitHub',
  onClick: () => {
    {
      window.open(
        'https://github.com/buffaloroaming/email-stories/blob/main/src/components/TemplateShell.vue',
        '_blank'
      )
    }
    console.log('Open in GitHub')
  }
}
