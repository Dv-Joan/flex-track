import { FileBadge, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plan } from "@/types/plan"
import { Badge } from "@/components/ui/badge"

const notifications = [
    {
        title: "Limited access to the gym.",
        description: "Only 2 hours per day.",
    },
    {
        title: "Access to the pool.",
        description: "Only on weekends.",
    },
    {
        title: "Access to the sauna.",
        description: "Only on weekends.",
    },
]

type CardProps = React.ComponentProps<typeof Card>


export function PlanCard({ className, ...props }: CardProps & Plan,) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-center p-4 space-x-4 duration-200 ease-out border rounded-md hover:text-black hover:scale-105 hover:bg-lime-500 w-80 ">
                    <FileBadge />
                    <div className="flex-1 space-y-1 ">
                        <p className="flex gap-2 text-xl font-medium leading-none">
                            <Badge className="" variant='outline'>USD</Badge>
                            {props.price} $
                        </p>
                        <p className="text-sm text-muted-foreground">
                            This price can be negotiable.
                        </p>
                    </div>

                </div>
                <div>
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex w-2 h-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <Check className="w-4 h-4 mr-2" /> Go for it!
                </Button>
            </CardFooter>
        </Card >
    )
}
