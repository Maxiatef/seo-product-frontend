"use client"; 
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <header className="sticky top-0 w-full bg-black shadow-md z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3" aria-label="Main navigation">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="sr-only">Home</span>
                        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold m-0">ATTRACT</h1>
                    </Link>

                    <ul className="flex gap-4 sm:gap-6 md:gap-8 list-none m-0 p-0">
                        <li>
                            <Link href="/#about" className="text-white text-sm sm:text-base hover:text-gray-300 transition-colors">About</Link>
                        </li>
                        <li>
                            <Link href="/#products" className="text-white text-sm sm:text-base hover:text-gray-300 transition-colors">Products</Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="text-white text-sm sm:text-base hover:text-gray-300 transition-colors">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
