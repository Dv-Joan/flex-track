'use client'
import Link from "next/link"
import Image from "next/image"
import bannerImage from "@/assets/images/banner.jpg"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import AOSWrapper from "@/lib/aos"

export default function IndexPage() {
  return (
    <section className="container grid grid-flow-row grid-cols-2 gap-6 pt-6 pb-8 md:py-10">
      <div className="flex flex-col gap-5">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-6xl">
            Alcanza tu máximo potencial fitness
          </h1>
          <p className="max-w-[700px]  text-lg text-muted-foreground">
            ¡Convierte tu cuerpo en una obra maestra con Flex-Track!
          </p>
        </div>
        <div className="flex items-end ">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
        </div>


      </div>
      <AOSWrapper data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <Image className="relative opacity-30" alt="banner" src={bannerImage} width={1000} height={1000} />
      </AOSWrapper>

    </section>
  )
}
