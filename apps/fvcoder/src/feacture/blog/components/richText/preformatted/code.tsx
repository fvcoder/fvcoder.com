/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import hlc from "highlight.js";

export function Code({ t }: { t: string }): JSX.Element | null {
  let body: JSX.Element | null = null;
  if (t.startsWith("language") || t.startsWith("thefersh")) {
    const re = /(language|thefersh):(.*)\n/;
    let language = "";
    t.replace(re, function (match) {
      language = match.replace(/(language|thefersh):/, "").replace(/\n/, "");

      return "";
    });
    const code = hlc.highlight(t.replace(/(language|thefersh):(.*)\n/, ""), {
      language,
    }).value;

    body = (
      <pre>
        <code className={`hljs language-${language}`} dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    );
  }

  return body;
}
