"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

interface Product {
    title: string;
    slug: string;
    description: string;
    price: number;
    currency: string;
    imageUrl?: string;
    availability?: string;
    seo?: any;
}
interface seo {
    metaTitle?: string;
    metaDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImageUrl?: string;
}

const API_URL = "/api/products";

export default function ProductCard(): JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
                const data = await res.json();
                const items: Product[] = Array.isArray(data) ? data : data.items ?? [];
                console.log("Fetched products:", res, data);
                setProducts(items);
            } catch (err: any) {
                if (err.name !== 'AbortError') setError(err.message || "Failed to load products");
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    if (loading) return <div className="p-4">Loading products…</div>;
    if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
    if (products.length === 0) return <div className="p-4">No products found.</div>;

    const truncate = (text: string, n = 120) => (text.length > n ? text.slice(0, n) + '…' : text);

    return (
        <section className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/product/${p.slug}`}
                        aria-labelledby={`product-${p.slug}`}
                        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A16DE] focus-visible:ring-offset-2 rounded-lg"
                    >
                        <article className="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden flex flex-col border border-transparent hover:shadow-lg transition">


                        <div className="w-full h-48 relative bg-gray-50 dark:bg-gray-800">
                            {p.imageUrl ? (
                                <Image
                                    src={p.imageUrl}
                                    alt={p.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-contain"
                                    unoptimized
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">No image</div>
                            )}
                        </div>

                        <div className="p-4 flex-1 flex flex-col">
                            <h3 id={`product-${p.slug}`} className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{p.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">{truncate(p.description || '', 140)}</p>

                            <div className="mt-4 flex items-center justify-between">
                                <div className="text-base font-bold text-[#2A16DE] dark:text-[#B526D1]">
                                    {p.currency} {p.price?.toFixed(2)}
                                </div>
                                <div className={`text-sm px-2 py-1 rounded ${p.availability === 'InStock' ? 'bg-[#e9e7ff] text-[#2A16DE]' : 'bg-[#fff0f6] text-[#B526D1]'}`}>
                                    {p.availability ?? 'Unknown'}
                                </div>
                            </div>
                        </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}