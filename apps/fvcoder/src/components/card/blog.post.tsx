import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export interface CardPostProps {
    tag: string
    title: string
    image: string
    imageAlt: string
}

export function CardPost({ tag, title, image, imageAlt }: Partial<CardPostProps>) {
    return (
        <Card shadow="sm" className="pb-4">
		    <CardHeader className="px-4 flex-col items-start" >
                <p className="text-sm text-neutral-500 line-clamp-1 capitalize">{tag}</p>
			    <h2 className="font-bold line-clamp-1 text-lg">{title}</h2>
		    </CardHeader>
		    <CardBody className="overflow-visible pt-2" >
			    <Image
				    className="object-cover rounded-xl aspect-video"
				    src={image}
				    alt={imageAlt}
			    />
		    </CardBody>
        </Card>
    )
}