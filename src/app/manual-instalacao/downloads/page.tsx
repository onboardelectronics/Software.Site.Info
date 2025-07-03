import OnBoardLogo from "@/components/OnBoardLogo"
import NavigateBackButton from "@/components/NavigateBackButton"
import DownloadCard from "@/components/DownloadCard"
import { MdCloudDownload, MdPictureAsPdf, MdVideoLibrary } from "react-icons/md"
import { BsFiletypeDocx, BsPostcardFill } from "react-icons/bs"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Downloads - Manuais",
    description: "Download dos manuais de instalação de dispositivos OnBoard",
}

export default function DownloadsPage() {
    return <nav className="flex-1 flex flex-col items-center">
        <OnBoardLogo className="self-center my-4 max-h-40"/>

        <div className="w-full flex gap-4 px-4 sm:px-6 justify-between">
            <NavigateBackButton/>
            <h2 className="text-4xl font-bold text-center">Downloads</h2>
            <div className="w-[40px]" />
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <MdCloudDownload size={24} className="text-brand" />
                    <h3 className="text-lg font-semibold">Instruções de Download</h3>
                </div>
                <p className="text-sm opacity-90">
                    Clique no arquivo desejado para fazer o download. Os manuais estão em formato PDF para melhor compatibilidade.
                </p>
            </div>
        </div>

        <div className="flex-1 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-center items-start content-start">
            <DownloadCard 
                title="Manual Básico de Instalação"
                subtitle="Manual oficial OnBoard v1.0"
                fileName="manual_basico_instalacao.pdf"
                fileSize="2.1 MB"
                downloadUrl="https://infofleet-onboard.s3.us-east-1.amazonaws.com/public/helpdesk/manuals/manual_basico_instalacao.pdf"
                icon={<MdPictureAsPdf size={32} />}
                className="bg-red-600 border-red-600 text-white hover:bg-white hover:text-red-600"
            />
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-6 pb-6">
            <div className="bg-brand/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-brand">Precisa de Ajuda?</h4>
                <p className="text-sm opacity-90 mb-3">
                    Se você tiver dificuldades com a instalação, nossa equipe de suporte está pronta para ajudar.
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