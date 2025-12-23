import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface Params {
    params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Params) {
    const { slug } = await params;
    
    // Fetch product data server-side
    let product: Product | null = null;
    let error: string | null = null;

    try {
        const res = await fetch(`http://seoproducts.runasp.net/api/products/${slug}`, {
            cache: 'no-store' // Ensure fresh data on each request
        });
        
        if (!res.ok) {
            throw new Error(`Failed to fetch product: ${res.status}`);
        }
        
        const data = await res.json();
        product = Array.isArray(data) ? data[0] : data;
        console.log("Fetched product:", product);
    } catch (err: any) {
        error = err.message || "Failed to load product";
        console.error("Error fetching product:", err);
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div className="p-4 text-red-600">Error: {error}</div>
            </>
        );
    }

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="p-4">Product not found</div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen w-full overflow-x-hidden bg-zinc-50 font-sans dark:bg-black">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2A16DE] to-[#B526D1] text-white">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                                {product.title}
                            </h1>
                            <p className="text-lg md:text-xl mb-6 opacity-90">
                                {product.description}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                                <div className="text-3xl md:text-4xl font-bold">
                                    {product.currency} {product.price?.toFixed(2)}
                                </div>
                                <div className={`text-sm px-4 py-2 rounded-full font-semibold ${
                                    product.availability === 'InStock'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-red-500 text-white'
                                }`}>
                                    {product.availability ?? 'Unknown'}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            {product.imageUrl ? (
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-2xl"
                                />
                            ) : (
                                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-96 flex items-center justify-center bg-gray-200 rounded-lg text-gray-500">
                                    No image available
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Details Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">
                            Product Details
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Description */}
                            <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                                    <span className="w-2 h-8 bg-gradient-to-br from-[#2A16DE] to-[#B526D1] rounded mr-3"></span>
                                    Description
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {product.description}
                                </p>
                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold mb-4 text-white">Key Features</h4>
                                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-[#2A16DE] mr-2">•</span>
                                            High-performance design for gaming enthusiasts
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#2A16DE] mr-2">•</span>
                                            Ergonomic and comfortable for long sessions
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#2A16DE] mr-2">•</span>
                                            Durable build quality with premium materials
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#2A16DE] mr-2">•</span>
                                            Compatible with multiple platforms
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                                    <span className="w-2 h-8 bg-gradient-to-br from-[#2A16DE] to-[#B526D1] rounded mr-3"></span>
                                    Specifications
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                                        <span className="font-medium text-white">Price</span>
                                        <span className="text-[#2A16DE] font-bold">{product.currency} {product.price?.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                                        <span className="font-medium text-white">Availability</span>
                                        <span className={`px-2 py-1 rounded-full text-sm font-semibold ${
                                            product.availability === 'InStock'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                            {product.availability ?? 'Unknown'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                                        <span className="font-medium text-white">Product ID</span>
                                        <span className="text-gray-600 dark:text-gray-400">{product.slug}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="font-medium text-white">Category</span>
                                        <span className="text-gray-600 dark:text-gray-400">Gaming Gear</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
