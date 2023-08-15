import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface CardProps {
    tag: string
    title: string
    image: string
    imageAlt: string
}

export function CardPost({tag, title, image, imageAlt}: CardProps) {
    return (
        <Card className="py-4" >
		    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start" >
                <p className="text-sm text-neutral-500">{tag}</p>
			    <h2 className="font-bold  text-lg">{title}</h2>
		    </CardHeader>
		    <CardBody className="overflow-visible py-2" >
			    <Image
				    className="object-cover rounded-xl aspect-video"
				    src={image}
				    alt={imageAlt}
			    />
		    </CardBody>
        </Card>
    )
}