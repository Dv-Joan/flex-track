'use client'
import Link from "next/link"
import Image from "next/image"
import bannerImage from "@/assets/images/banner.jpg"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import 'animate.css';

export default function IndexPage() {
  return (
    <section className="container grid grid-flow-row grid-cols-2 gap-6 pt-6 pb-8 md:py-10">
      <div className="flex flex-col mt-10 gap-7">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight md:text-6xl">
            Get Strong, <br />
            Get Fit, <br />
            Get Healthy! <br />
          </h1>
          <p className="max-w-[700px]  text-lg mt-10 pr-52 text-muted-foreground">
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


      </div>

      <Image className="relative opacity-70 bottom-24 left-8 animate_animated animate__fadeInRight" alt="banner" src={bannerImage} width={1000} height={1000} />



    </section>
  )
}
