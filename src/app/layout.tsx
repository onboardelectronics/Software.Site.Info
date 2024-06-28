import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ReactNode } from "react"
import "./globals.css"

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: {
        template: "%s | Links OnBoard",
        default: "Links OnBoard",
    },
    description: "Central de links da OnBoard",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return <html lang="pt-br">
        <body className={`${poppins.className} flex flex-col h-dvh`}>
            {children}
            <footer className="self-center text-white p-4">COPYRIGHT &copy; {new Date().getFullYear()} OnBoard</footer>
        </body>
    </html>
}
