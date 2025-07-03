"use client"

import { ReactNode, useState } from "react"
import { MdDownload, MdPreview, MdClose, MdFullscreen } from "react-icons/md"

interface PanfletoCardProps {
    title: string
    subtitle?: string
    fileName: string
    fileSize: string
    downloadUrl: string
    icon: ReactNode
    className?: string
}

export default function PanfletoCard({ 
    title, 
    subtitle, 
    fileName, 
    fileSize, 
    downloadUrl, 
    icon, 
    className 
}: PanfletoCardProps) {
    const [isDownloading, setIsDownloading] = useState(false)
    const [showPreview, setShowPreview] = useState(false)

    const handlePreview = () => {
        setShowPreview(true)
    }

    const closePreview = () => {
        setShowPreview(false)
    }

    const handleDownload = async () => {
        if (isDownloading) return

        setIsDownloading(true)
        
        try {
            // Método 1: Tentar fetch e download blob
            const response = await fetch(downloadUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/octet-stream",
                },
            })
            
            if (response.ok) {
                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement("a")
                link.href = url
                link.download = fileName
                link.style.display = "none"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                window.URL.revokeObjectURL(url)
            } else {
                throw new Error("Fetch failed")
            }
            
        } catch (error) {
            console.log("Tentando método alternativo...", error)
            
            try {
                const link = document.createElement("a")
                link.href = downloadUrl
                link.download = fileName
                link.target = "_blank"
                link.rel = "noopener noreferrer"
                
                const urlWithParams = new URL(downloadUrl)
                urlWithParams.searchParams.set("response-content-disposition", `attachment; filename="${fileName}"`)
                urlWithParams.searchParams.set("response-content-type", "application/octet-stream")
                link.href = urlWithParams.toString()
                
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                
            } catch (fallbackError) {
                console.error("Erro no download:", fallbackError)
                window.open(downloadUrl, "_blank")
            }
        } finally {
            setTimeout(() => {
                setIsDownloading(false)
            }, 2000)
        }
    }

    const openInNewTab = () => {
        window.open(downloadUrl, "_blank")
    }

    return (
        <>
            <div className={`rounded-lg overflow-hidden ${className} border-4 transition-all duration-200 hover:scale-105`}>
                {/* Área de Preview */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {icon}
                    
                    {/* Overlay de Controles */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <button
                            onClick={handlePreview}
                            className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors"
                            title="Visualizar panfleto"
                        >
                            <MdPreview size={32} className="text-white" />
                        </button>
                    </div>
                </div>

                {/* Informações do Panfleto */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{title}</h3>
                    {subtitle && <p className="text-sm opacity-90 mb-3">{subtitle}</p>}
                    
                    <div className="flex justify-between items-center text-xs opacity-75 mb-4">
                        <span>PDF</span>
                        <span>{fileSize}</span>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex gap-2">
                        <button
                            onClick={handlePreview}
                            className="flex-1 flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg py-3 px-4 hover:bg-white/30 transition-colors font-medium"
                        >
                            <MdPreview size={18} />
                            <span>Visualizar</span>
                        </button>

                        <button
                            onClick={handleDownload}
                            disabled={isDownloading}
                            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg py-3 px-4 hover:bg-white/30 transition-colors font-medium disabled:opacity-50"
                            title="Baixar panfleto"
                        >
                                                    {isDownloading ? 
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                                <span className="hidden sm:inline">Baixando...</span>
                            </>
                         : 
                            <>
                                <MdDownload size={18} />
                                <span className="hidden sm:inline">Download</span>
                            </>
                        }
                        </button>
                    </div>

                    {/* Link de Download Direto como Backup */}
                    <div className="mt-3 pt-3 border-t border-white/20">
                        <a
                            href={downloadUrl}
                            download={fileName}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs opacity-60 hover:opacity-100 transition-opacity underline"
                        >
                            💾 Download direto (clique aqui se o botão acima não funcionar)
                        </a>
                    </div>

                    <p className="text-xs opacity-60 mt-2 text-center">
                        {fileName}
                    </p>
                </div>
            </div>

            {/* Modal de Preview */}
            {showPreview && 
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-4xl h-full max-h-[90vh] bg-white rounded-lg overflow-hidden relative">
                        {/* Header do Modal */}
                        <div className="bg-gray-100 p-4 flex items-center justify-between border-b">
                            <div>
                                <h3 className="font-semibold text-gray-800">{title}</h3>
                                <p className="text-sm text-gray-600">{fileName}</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={openInNewTab}
                                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    title="Abrir em nova aba"
                                >
                                    <MdFullscreen size={20} />
                                </button>
                                <button
                                    onClick={closePreview}
                                    className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                                    title="Fechar"
                                >
                                    <MdClose size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Área do PDF */}
                        <div className="h-full">
                            <iframe
                                src={`${downloadUrl}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
                                className="w-full h-full border-0"
                                title={title}
                                loading="lazy"
                            />
                        </div>

                        {/* Footer do Modal */}
                        <div className="absolute bottom-4 right-4">
                            <button
                                onClick={handleDownload}
                                disabled={isDownloading}
                                className="bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand/80 transition-colors flex items-center gap-2"
                            >
                                {isDownloading ? 
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                                        <span>Baixando...</span>
                                    </>
                                 : 
                                    <>
                                        <MdDownload size={18} />
                                        <span>Baixar PDF</span>
                                    </>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
} 