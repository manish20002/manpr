import React from 'react'

export default function footer() {
    return (
        <div>
            <footer>
                <div class="w-full max-w-screen-xl mx-auto p-2 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="/" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="/" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/" class="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="/" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
