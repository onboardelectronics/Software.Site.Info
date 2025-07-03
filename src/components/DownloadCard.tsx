"use client"

import { ReactNode, useState } from "react"
import { MdDownload, MdCheck } from "react-icons/md"

interface DownloadCardProps {
    title: string
    subtitle?: string
    fileName: string
    fileSize: string
    downloadUrl: string
    icon: ReactNode
    className?: string
}

export default function DownloadCard({ 
    title, 
    subtitle, 
    fileName, 
    fileSize, 
    downloadUrl, 
    icon, 
    className 
}: DownloadCardProps) {
    const [isDownloading, setIsDownloading] = useState(false)
    const [isDownloaded, setIsDownloaded] = useState(false)

    const handleDownload = async () => {
        if (isDownloading || isDownloaded) return

        setIsDownloading(true)
        
        try {
            const link = document.createElement("a")
            link.href = downloadUrl
            link.download = fileName
            link.target = "_blank"
            link.rel = "noopener noreferrer"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            
            // Para URLs externas (como S3), mostrar confirmação mais rápida
            const isExternalUrl = downloadUrl.startsWith("http")
            const delay = isExternalUrl ? 800 : 1500
            
            setTimeout(() => {
                setIsDownloading(false)
                setIsDownloaded(true)
                
                // Reseta o estado após 3 segundos
                setTimeout(() => {
                    setIsDownloaded(false)
                }, 3000)
            }, delay)
            
        } catch (error) {
            console.error("Erro no download:", error)
            setIsDownloading(false)
        }
    }

    return (
        <div className={`p-6 min-h-0 h-full transition-all duration-200 border-4 content-center text-center max-h-96 flex flex-col justify-center items-center rounded-lg cursor-pointer ${className} ${
            isDownloading ? "opacity-75 scale-95" : isDownloaded ? "scale-105" : "hover:scale-105 active:scale-95"
        }`}
        onClick={handleDownload}>
            
            <div className="relative">
                {icon}
                {isDownloaded && 
                    <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                        <MdCheck size={16} className="text-white" />
                    </div>
                }
            </div>
            
            <div className="mt-4"></div>
            
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            {subtitle && <h5 className="text-sm font-normal opacity-90 mb-2">{subtitle}</h5>}
            
            <div className="text-xs opacity-75 mb-3">
                <p className="font-medium">{fileName}</p>
                <p>{fileSize}</p>
            </div>
            
            <div className="flex items-center gap-2 text-sm font-medium">
                {isDownloading ? 
                    <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                        <span>Baixando...</span>
                    </>
                 : isDownloaded ? 
                    <>
                        <MdCheck size={16} />
                        <span>Baixado!</span>
                    </>
                 : 
                    <>
                        <MdDownload size={16} />
                        <span>Baixar</span>
                    </>
                }
            </div>
        </div>
    )
} 