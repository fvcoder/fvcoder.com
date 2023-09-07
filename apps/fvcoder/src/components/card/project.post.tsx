import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { BadgeBySkill } from "../badge"

export interface ProjectPostProps {
    tag: string[]
    title: string
    image: string
    imageAlt: string
}

export function ProjectPost({ tag, title, image, imageAlt }: Partial<ProjectPostProps>) {
    return (
        <Card shadow="sm" className="pb-4">
		    <CardHeader className="px-4 flex-col items-start" >
			    <h2 className="font-bold line-clamp-1 text-lg">{title}</h2>
                <div className="flex flex-wrap gap-2 py-2">
                    {tag && tag.slice(0, 3).map((x, i) => (
                        <BadgeBySkill text={x} key={`tag-${i}-${title}`} />
                    ))}
                </div>
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