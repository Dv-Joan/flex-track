'use client'
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import { ProductForm } from "@/components/products-form";
import { columns } from "./columns";
import { Product } from "@/types/product";
import { DataTable } from "./data-table";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query"

const queryClient = new QueryClient()
export default function Page() {

    const [data, setData] = useState<Product[]>([]);
    const handleDelete = (id: string) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };
    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);


    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-col gap-20 mx-14 my-7">
                <section className="grid justify-around grid-cols-1 text-gray-400 gap-y-14 lg:grid-cols-3">
                    <ProductCard
                        title="Men's UA Freedom Eagle T-Shirt"
                        description="Ultra-comfortable fit and feel, while giving you the sweat-wicking, heat-battling & performance benefits"
                        imageSrc=" https://underarmour.scene7.com/is/image/Underarmour/PS1363510-824_HB?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640"
                        alt="ua-shirt"
                    />
                    <ProductCard
                        title="Men's UA Vanish Woven 2-in-1 Pride Shorts"
                        description="This year's UA Pride collection supports Unmatched Athlete, WorldPride, and Rainbow Labs"
                        imageSrc=" https://underarmour.scene7.com/is/image/Underarmour/V5-1378910-001_BC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640"
                        alt="ua-shirt"
                    />
                    <ProductCard
                        title="Men's Project Rock Training Short Sleeve"
                        description="Project Rock training gear was built to help you find boundaries, then push right through them."
                        imageSrc="https://underarmour.scene7.com/is/image/Underarmour/V5-1376891-800_BC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640"
                        alt="ua-shirt"
                    />
                    <ProductCard
                        title="Men's UA RUSH™ SmartForm 2-in-1 Shorts"
                        description="We added UA SmartForm to our powerful UA RUSH™ fabric to keep your focus fixed."
                        imageSrc=" https://underarmour.scene7.com/is/image/Underarmour/V5-1377154-001_BC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640"
                        alt="ua-shirt"
                    />
                </section>
                <div className="flex gap-7">
                    <ProductForm />
                    <DataTable handleDelete={handleDelete} data={data} />
                </div>
            </div>
        </QueryClientProvider>
    );
}
