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

const sites = [
    { name: "Statistics", href: "stats"},
    { name: "Our Philosophy", href: "philosophy"}
]


export default function Footer() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="flex p-20 space-x-20 justify-center">
            <a>METIS Investment</a>
            <a>since 2023</a>
            <a>Privacy Policy</a>
            <a>Fairness Declaration</a>
        </div>
    )
}
