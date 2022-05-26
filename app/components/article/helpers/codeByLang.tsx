import hlc from 'highlight.js'

export function CodeByLangHelper({ t }: { t: string }): JSX.Element | null {
  let body: JSX.Element | null = null
  if (t.startsWith('thefersh')) {
    const re = /thefersh:(.*)\n/
    let language = ''
    t.replace(re, function (match) {
      language = match.replace(/thefersh:/, '').replace(/\n/, '')
      return ''
    })
    const code = hlc.highlight(t.replace(/thefersh:(.*)\n/, ''), {
      language
    }).value

    body = (
      <pre>
        <code
          className={'hljs language-' + language}
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </pre>
    )
  }

  return body
}
