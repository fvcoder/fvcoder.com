const bp = [1536, 1280, 1024, 768, 640]

interface ImgProps {
  src: string
  alt?: string
  className?: string
}

export function Img({ src, alt, className }: ImgProps): JSX.Element {
  const url = new URL(src)
  if (url.host === 'images.prismic.io') {
    const imgSrc = new URL(url)
    imgSrc.searchParams.delete('w')
    imgSrc.searchParams.delete('auto')
    imgSrc.searchParams.append('w', '360')
    imgSrc.searchParams.append('auto', 'compress,format')
    return (
      <picture className={className}>
        {bp.map((x, i) => {
          url.searchParams.delete('w')
          url.searchParams.delete('auto')
          url.searchParams.append('w', String(x))
          url.searchParams.append('auto', 'compress,format')

          return (
            <source
              srcSet={url.toString()}
              className={className}
              media={`(min-width: ${x}px)`}
              key={`${url.pathname}-${i}`}
            />
          )
        })}
        <img src={imgSrc.toString()} alt={alt} className={className} />
      </picture>
    )
  }
  return <img src={src} alt={alt} className={className} />
}
