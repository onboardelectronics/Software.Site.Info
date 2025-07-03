import OnBoardLogo from "@/components/OnBoardLogo"
import NavigateBackButton from "@/components/NavigateBackButton"
import VideoCard from "@/components/VideoCard"
import { MdPlayCircle, MdVideoLibrary } from "react-icons/md"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Vídeos - Tutoriais",
    description: "Vídeos tutoriais de instalação de dispositivos OnBoard",
}

export default function VideosPage() {
    return <nav className="flex-1 flex flex-col items-center">
        <OnBoardLogo className="self-center my-4 max-h-40"/>

        <div className="w-full flex gap-4 px-4 sm:px-6 justify-between">
            <NavigateBackButton/>
            <h2 className="text-4xl font-bold text-center">Vídeos</h2>
            <div className="w-[40px]" />
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <MdPlayCircle size={24} className="text-brand" />
                    <h3 className="text-lg font-semibold">Como assistir</h3>
                </div>
                <p className="text-sm opacity-90">
                    Clique no vídeo para assistir online ou use o botão de download para salvar no seu dispositivo.
                </p>
            </div>
        </div>

        <div className="flex-1 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 justify-center items-start content-start">
            <VideoCard 
                title="Vídeo de Instalação Base"
                subtitle="Tutorial passo a passo completo"
                fileName="video_instalacao_base.mp4"
                duration="8:42"
                fileSize="45 MB"
                videoUrl="https://infofleet-onboard.s3.us-east-1.amazonaws.com/public/helpdesk/videos/video_instalacao_base.mp4"
                thumbnailUrl="https://infofleet-onboard.s3.us-east-1.amazonaws.com/public/helpdesk/videos/video_instalacao_base.mp4"
                icon={<MdVideoLibrary size={32} />}
                className="bg-blue-600 border-blue-600 text-white"
            />

            {/* Placeholder para futuros vídeos */}
            <div className="p-6 border-4 border-dashed border-gray-400 rounded-lg text-center opacity-50">
                <MdVideoLibrary size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">Mais vídeos em breve</h3>
                <p className="text-sm text-gray-500">
                    Novos tutoriais serão adicionados aqui
                </p>
            </div>
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-6 pb-6">
            <div className="bg-brand/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-brand">Precisa de Ajuda?</h4>
                <p className="text-sm opacity-90 mb-3">
                    Se você tiver dificuldades com a instalação após assistir aos vídeos, nossa equipe de suporte está pronta para ajudar.
                </p>
                <a 
                    href="https://wa.me/5531996115502?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20a%20instala%C3%A7%C3%A3o%20dos%20dispositivos%20OnBoard"
                    className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-brand/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Falar com Suporte</span>
                </a>
            </div>
        </div>
    </nav>
} 