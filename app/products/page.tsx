import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
function page() {
    return (
        <section className="text-gray-400">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid items-center w-full gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Name of your project" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Framework</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                        <SelectContent position="popper">
                                            <SelectItem value="next">Next.js</SelectItem>
                                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                            <SelectItem value="astro">Astro</SelectItem>
                                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                        </SelectContent>
                                    </SelectTrigger>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="ghost">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
                        <a className="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/420x260" />
                        </a>
                        <div className="mt-4">
                            <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
                            <h2 className="text-lg font-medium text-white title-font">The Catalyzer</h2>
                            <p className="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
                        <a className="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/421x261" />
                        </a>
                        <div className="mt-4">
                            <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
                            <h2 className="text-lg font-medium text-white title-font">Shooting Stars</h2>
                            <p className="mt-1">$21.15</p>
                        </div>
                    </div>
                    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
                        <a className="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/422x262" />
                        </a>
                        <div className="mt-4">
                            <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
                            <h2 className="text-lg font-medium text-white title-font">Neptune</h2>
                            <p className="mt-1">$12.00</p>
                        </div>
                    </div>
                    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
                        <a className="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/423x263" />
                        </a>
                        <div className="mt-4">
                            <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
                            <h2 className="text-lg font-medium text-white title-font">The 400 Blows</h2>
                            <p className="mt-1">$18.40</p>
                        </div>
                    </div>
                    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
                        <a className="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/424x264" />
                        </a>
                        <div className="mt-4">
                            <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
                            <h2 className="text-lg font-medium text-white title-font">The Catalyzer</h2>
                            <p className="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
                        <a className="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/425x265" />
                        </a>
                        <div className="mt-4">
                            <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
                            <h2 className="text-lg font-medium text-white title-font">Shooting Stars</h2>
                            <p className="mt-1">$21.15</p>
                        </div>
                    </div>
                    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
                        <a className="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/427x267" />
                        </a>
                        <div className="mt-4">
                            <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
                            <h2 className="text-lg font-medium text-white title-font">Neptune</h2>
                            <p className="mt-1">$12.00</p>
                        </div>
                    </div>
                    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
                        <a className="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/428x268" />
                        </a>
                        <div className="mt-4">
                            <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
                            <h2 className="text-lg font-medium text-white title-font">The 400 Blows</h2>
                            <p className="mt-1">$18.40</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page