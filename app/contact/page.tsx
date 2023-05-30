import React from 'react'

function page() {
    return (
        <section className="relative text-gray-400 body-font">
            <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
                <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-900 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
                    <iframe width="100%" height="100%" title="map" className="absolute inset-0" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
                    <div className="relative flex flex-wrap py-6 bg-gray-900 rounded shadow-md">
                        <div className="px-6 lg:w-1/2">
                            <h2 className="text-xs font-semibold tracking-widest text-white title-font">ADDRESS</h2>
                            <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                            <h2 className="text-xs font-semibold tracking-widest text-white title-font">EMAIL</h2>
                            <a className="leading-relaxed text-indigo-400">example@email.com</a>
                            <h2 className="mt-4 text-xs font-semibold tracking-widest text-white title-font">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
                    <h2 className="mb-1 text-lg font-medium text-white title-font">Feedback</h2>
                    <p className="mb-5 leading-relaxed">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="text-sm leading-7 text-gray-400">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="text-sm leading-7 text-gray-400">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="text-sm leading-7 text-gray-400">Message</label>
                        <textarea id="message" name="message" className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"></textarea>
                    </div>
                    <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
                    <p className="mt-3 text-xs text-gray-400 text-opacity-90">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
    )
}

export default page