import Link from "next/link"
import { ReactNode } from "react"

interface LinkCardProps {
    title: string
    subtitle?: string
    url: string
    icon: ReactNode
    className?: string
    titleClassName?: string
}

export default function LinkCard({ title, subtitle, url, icon, className, titleClassName }: LinkCardProps) {
    return <Link href={url}
                 className={`p-4 min-h-0 h-full transition active:scale-95 border-4 content-center text-center max-h-96 flex flex-col justify-center items-center ${className} ${className ?? ""}`}>
        {icon}
        <div className="mt-2 2xs:mt-4"></div>
        <h3 className={`text-2xl 2xs:text-xl xs:text-2xl font-semibold ${titleClassName}`}>{title}</h3>
        {subtitle && <h5 className="text-base font-normal">{subtitle}</h5>}
    </Link>
}