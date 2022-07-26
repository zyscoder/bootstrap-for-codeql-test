import * as StackBlitzSDK from '@stackblitz/sdk/bundles/sdk'
/* global  openBootstrapSnippet: false */

// Open in StackBlitz logic
document.querySelectorAll('.btn-edit').forEach(btn => {
  btn.addEventListener('click', event => {
    const htmlSnippet = event.target.closest('.bd-code-snippet').querySelector('.bd-example').innerHTML

    // Get extra classes for this example
    const classes = Array.from(event.target.closest('.bd-code-snippet').querySelector('.bd-example').classList).join(' ')

    const jsSnippet = event.target.closest('.bd-code-snippet').querySelector('.btn-edit').getAttribute('data-sb-js-snippet')

    StackBlitzSDK.openProject(openBootstrapSnippet(htmlSnippet, jsSnippet, classes), { openFile: 'index.html' })
  })
})

