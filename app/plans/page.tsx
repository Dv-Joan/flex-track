import React from 'react'
import { PlanCard } from './plan-card'

function page() {
    return (
        <section className="text-gray-400 body-font ">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 overflow-hidden bg-gray-800 rounded">
                        <div className="w-24 h-full bg-white"></div>
                    </div>
                    <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
                        <h1 className="mb-2 text-2xl font-medium text-white sm:w-2/5 title-font sm:mb-0">Space The Final Frontier</h1>
                        <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                    </div>
                </div>
                <div className="flex justify-center gap-10">

                    <PlanCard title='Basic Plan' price={120} />
                    <PlanCard title='Premium Plan' price={150} />
                    <PlanCard title='Familiar Plan' price={200} />
                </div>
            </div>

        </section>
    )
}

export default page