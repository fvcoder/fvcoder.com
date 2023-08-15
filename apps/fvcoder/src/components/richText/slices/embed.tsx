import type { RTEmbedNode } from '@prismicio/types'

export function EmbedSlice({ oembed }: RTEmbedNode) {
    
    const url = new URL(oembed.embed_url)
    if (url.searchParams.has("v")) {
        return (
            <iframe
                className='w-full aspect-video rounded-xl'
                src={`https://www.youtube.com/embed/${url.searchParams.get("v")}?feature=oembed`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={oembed.title ?? undefined}
            />
        )
    }
    
    return null

}
