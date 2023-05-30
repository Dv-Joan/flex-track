import * as React from "react"
import ProductCard from "@/components/product-card"
function page() {
    return (
        <section className="grid grid-flow-row grid-cols-4 gap-10 p-10 text-gray-400">
            <ProductCard title="Boys' UA Performance Polo" description="Ultra-comfortable fit and feel, while giving you the sweat-wicking, heat-battling & performance benefits" imageSrc=" https://underarmour.scene7.com/is/image/Underarmour/PS1363510-824_HB?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640" alt="ua-shirt" />
            <ProductCard title="Men's UA Vanish Woven 2-in-1 Pride Shorts" description="This year's UA Pride collection supports Unmatched Athlete, WorldPride, and Rainbow Labs" imageSrc=" https://underarmour.scene7.com/is/image/Underarmour/V5-1378910-001_BC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640" alt="ua-shirt" />
            <ProductCard title="Men's Project Rock Training Short Sleeve" description="Project Rock training gear was built to help you find boundaries, then push right through them." imageSrc="https://underarmour.scene7.com/is/image/Underarmour/V5-1376891-800_BC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640" alt="ua-shirt" />
            <ProductCard title="Men's UA RUSH™ SmartForm 2-in-1 Shorts" description="We added UA SmartForm to our powerful UA RUSH™ fabric to keep your focus fixed ." imageSrc=" https://underarmour.scene7.com/is/image/Underarmour/V5-1377154-001_BC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640" alt="ua-shirt" />
        </section>
    )
}

export default page