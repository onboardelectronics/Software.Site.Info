import { ReactNode } from "react"
import { MdDescription } from "react-icons/md"
import { FaAppStoreIos, FaGooglePlay, FaWhatsapp } from "react-icons/fa6"

interface OnBoardLink {
    title: string
    subtitle?: string
    url: string
    className?: string
    icon: ReactNode
}

export const Links: OnBoardLink[] = [
    {
        title: "Manual",
        subtitle: "Instalação",
        url: "",
        className: "bg-white border-white text-black col-span-2 sm:col-span-1 hover:bg-black hover:text-white",
        icon: <MdDescription size={32}/>
    },
    {
        title: "Suporte",
        subtitle: "WhatsApp",
        url: "",
        className: "bg-green-600 border-green-600 text-white col-span-2 sm:col-span-1 hover:bg-white hover:text-green-600",
        icon: <FaWhatsapp size={32}/>
    },
    {
        title: "iOS",
        subtitle: "App Instalador",
        url: "",
        className: "bg-blue-600 border-blue-600 text-white aspect-square",
        icon: <FaAppStoreIos size={32}/>
    },
    {
        title: "Android",
        subtitle: "App Instalador",
        url: "",
        className: "bg-green-700 border-green-700 text-white aspect-square",
        icon: <FaGooglePlay size={32}/>
    }
]

export default OnBoardLink