import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {Link, useNavigate} from "react-router-dom";

const sites = [
    { name: "Our Philosophy", href: "philosophy"},
    { name: "Investment", href: "investment/one-time"},
    { name: "Statistics", href: "statistics"}
]


export default function Header({login}: {login: boolean}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const nav = useNavigate();

    const handleNavigation = (path: string) => {
        nav(path);
        setMobileMenuOpen(false);  // Close the mobile menu
    };

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a onClick={() => {nav('/');}} className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="/icon.png" alt="" />
                    </a>
                </div>
                <div className="flex sm:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden sm:flex sm:flex-1 sm:justify-center">
                {
                    sites.map((site) => (
                        <a key={site.name + "normal"} className="text-sm px-4 font-semibold leading-6 text-gray-900">
                             <Link to={site.href}>{site.name}</Link>
                        </a>
                    ))
                }
                </div>

                <div className="hidden sm:flex sm:flex-1 sm:justify-end">
                        <a className="text-sm px-4 font-semibold leading-6 text-gray-900">
                             <Link to="login">{login ? "Log out" : "Log in"}</Link>
                        </a>
                </div>
                <Dialog as="div" className="sm:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a onClick={() => {nav('/');}} className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="/icon.png"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                {
                                    sites.map((site) => (
                                        <a 
                                            key={site.name + "mobile"} 
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={() => handleNavigation(site.href)} // Use the handleNavigation function
                                        >
                                            {site.name}
                                        </a>
                                    ))
                                }
                                <div className="py-6">
                                    <a
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => handleNavigation("login")}  // Use the handleNavigation function
                                    >
                                        {login ? "Log out" : "Log in"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </nav>
        </header>
    )
}
