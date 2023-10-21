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
import {Link} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const sites = [
    { name: "Statistics", href: "stats"},
    { name: "Our Philosophy", href: "philosophy"}
]


export default function Footer() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
    <div>
      {isMobile ? (
        <div className="flex flex-col items-center py-10 sm:p-20 justify-center flex-wrap text-xs sm:text-base">
        <a className="md:mx-3">METIS Investment</a>
        <a className="md:mx-3">since 2023</a>
        <a className="md:mx-3">Privacy Policy</a>
        <a className="md:mx-3">Fairness Declaration</a>
        </div>
      ) : (
        <div className="flex sm:p-20 justify-center flex-wrap text-xs sm:text-base">
        <a className="md:mx-3">METIS Investment</a>
        <a className="md:mx-3">since 2023</a>
        <a className="md:mx-3">Privacy Policy</a>
        <a className="md:mx-3">Fairness Declaration</a>
        </div>
      )}
    </div>
    )
}
