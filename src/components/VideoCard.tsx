"use client"

import { ReactNode, useState, useRef } from "react"
import { MdPlayArrow, MdPause, MdDownload, MdFullscreen, MdVolumeUp } from "react-icons/md"

interface VideoCardProps {
    title: string
    subtitle?: string
    fileName: string
    duration: string
    fileSize: string
    videoUrl: string
    thumbnailUrl?: string
    icon: ReactNode
    className?: string
}

export default function VideoCard({ 
    title, 
    subtitle, 
    fileName, 
    duration, 
    fileSize, 
    videoUrl, 
    icon, 
    className 
}: VideoCardProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlayClick = () => {
        if (!showVideo) {
            setShowVideo(true)
            return
        }

        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleVideoPlay = () => setIsPlaying(true)
    const handleVideoPause = () => setIsPlaying(false)

    const handleDownload = async () => {
        if (isDownloading) return

        setIsDownloading(true)
        
        try {
            // Método 1: Tentar fetch e download blob
            const response = await fetch(videoUrl, {
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
                // Método 2: Fallback - abrir em nova aba
                throw new Error("Fetch failed")
            }
            
        } catch (error) {
            console.log("Tentando método alternativo...", error)
            
            // Método alternativo: força download via anchor com headers
            try {
                const link = document.createElement("a")
                link.href = videoUrl
                link.download = fileName
                link.target = "_blank"
                link.rel = "noopener noreferrer"
                
                // Adicionar parâmetros para forçar download
                const urlWithParams = new URL(videoUrl)
                urlWithParams.searchParams.set("response-content-disposition", `attachment; filename="${fileName}"`)
                urlWithParams.searchParams.set("response-content-type", "application/octet-stream")
                link.href = urlWithParams.toString()
                
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                
            } catch (fallbackError) {
                console.error("Erro no download:", fallbackError)
                // Último recurso: abrir em nova aba
                window.open(videoUrl, "_blank")
            }
        } finally {
            setTimeout(() => {
                setIsDownloading(false)
            }, 2000)
        }
    }

    const handleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen()
            }
        }
    }

    return (
        <div className={`rounded-lg overflow-hidden ${className} border-4 transition-all duration-200 hover:scale-105`}>
            {/* Área do Vídeo */}
            <div className="relative aspect-video bg-black">
                {showVideo ? 
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        className="w-full h-full object-cover"
                        controls={false}
                        playsInline
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                        poster={videoUrl} // Usar o próprio vídeo como poster
                    />
                 : 
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                        {icon}
                    </div>
                }
                
                {/* Overlay de Controles */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <button
                        onClick={handlePlayClick}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors"
                    >
                        {isPlaying ? 
                            <MdPause size={32} className="text-white" />
                         : 
                            <MdPlayArrow size={32} className="text-white" />
                        }
                    </button>
                </div>

                {/* Controles Mobile */}
                {showVideo && 
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center justify-between text-white">
                            <button
                                onClick={handlePlayClick}
                                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/30 transition-colors"
                            >
                                {isPlaying ? 
                                    <MdPause size={20} />
                                 : 
                                    <MdPlayArrow size={20} />
                                }
                                <span className="text-sm font-medium">
                                    {isPlaying ? "Pausar" : "Reproduzir"}
                                </span>
                            </button>
                            
                            <div className="flex gap-2">
                                <button
                                    onClick={handleFullscreen}
                                    className="bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 transition-colors"
                                    title="Tela cheia"
                                >
                                    <MdFullscreen size={20} />
                                </button>
                                <MdVolumeUp size={20} className="opacity-60" />
                            </div>
                        </div>
                    </div>
                }
            </div>

            {/* Informações do Vídeo */}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                {subtitle && <p className="text-sm opacity-90 mb-3">{subtitle}</p>}
                
                <div className="flex justify-between items-center text-xs opacity-75 mb-4">
                    <span>{duration}</span>
                    <span>{fileSize}</span>
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-2">
                    <button
                        onClick={handlePlayClick}
                        className="flex-1 flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg py-3 px-4 hover:bg-white/30 transition-colors font-medium"
                    >
                        {showVideo && isPlaying ? 
                            <>
                                <MdPause size={18} />
                                <span>Pausar</span>
                            </>
                         : 
                            <>
                                <MdPlayArrow size={18} />
                                <span>{showVideo ? "Reproduzir" : "Assistir"}</span>
                            </>
                        }
                    </button>

                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg py-3 px-4 hover:bg-white/30 transition-colors font-medium disabled:opacity-50"
                        title="Baixar vídeo"
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
                        href={videoUrl}
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
    )
} 