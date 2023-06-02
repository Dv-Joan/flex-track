'use client'
import Link from "next/link"
import Image from "next/image"
import bannerImage from "@/assets/images/banner.jpg"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import 'animate.css';

export default function IndexPage() {
  return (
    <section className="container flex justify-between gap-5">
      <div className="flex flex-col gap-14  justify-center">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-3xl font-extrabold leading-tight md:text-6xl">
            Get Strong, <br />
            Get Fit, <br />
            Get Healthy! <br />
          </h1>
          <p className="text-lg w-[500px] text-muted-foreground">
            We are a community of people who are passionate about fitness and
            health. We are here to help you achieve your goals and live a
            healthier life.
          </p>
        </div>
        <div className="flex items-end gap-5 ">
          <Link
            href={siteConfig.mainNav[0].href}
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Star Now
          </Link>
          <Link
            href={siteConfig.mainNav[1].href}
            rel="noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Chekout Our Products
          </Link>
        </div>


        <Accordion type="single" collapsible className="w-full mt-10">
          <AccordionItem value="item-1">
            <AccordionTrigger>What are the available class schedules at the gym?</AccordionTrigger>
            <AccordionContent>
              We have hours in the morning, afternoon and night.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are the membership rates and options you offer?</AccordionTrigger>
            <AccordionContent>
              We offer different membership options with varying rates. <br /> Visit us for details on rates and available membership options.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What types of workouts and additional services does the gym provide?</AccordionTrigger>
            <AccordionContent>
              At our gym, we offer a wide variety of workouts, including cardio, <br /> strength training, yoga, Pilates, and functional training.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>



      <Image className="opacity-70  animate_animated animate__fadeInRight" alt="banner" src={bannerImage} unoptimized={false} priority={true}
      />




    </section>
  )
}
