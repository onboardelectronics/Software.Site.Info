import Link from "next/link"
import { ReactNode } from "react"

interface LinkCardProps {
    title: string
    subtitle?: string
    url: string
    icon: ReactNode
    className?: string
}

export default function LinkCard({ title, subtitle, url, icon, className }: LinkCardProps) {
    return <Link href={url}
                 className={`p-4 transition active:scale-95 border-2 content-center text-center max-h-96 flex flex-col justify-center items-center ${className} ${className ?? ""}`}>
        {icon}
        <h3 className="text-2xl font-semibold mt-6">{title}</h3>
        {subtitle && <h5 className="text-base font-normal">{subtitle}</h5>}
    </Link>
}