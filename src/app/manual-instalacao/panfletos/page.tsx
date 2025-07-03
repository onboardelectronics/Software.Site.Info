import OnBoardLogo from "@/components/OnBoardLogo"
import NavigateBackButton from "@/components/NavigateBackButton"
import PanfletoCard from "@/components/PanfletoCard"
import { MdPictureAsPdf, MdDownload } from "react-icons/md"
import { BsPostcardFill } from "react-icons/bs"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Panfletos - Passo a Passo",
    description: "Panfletos de instalação passo a passo dos dispositivos OnBoard",
}

export default function PanfletosPage() {
    return <nav className="flex-1 flex flex-col items-center">
        <OnBoardLogo className="self-center my-4 max-h-40"/>

        <div className="w-full flex gap-4 px-4 sm:px-6 justify-between">
            <NavigateBackButton/>
            <h2 className="text-4xl font-bold text-center">Panfletos</h2>
            <div className="w-[40px]" />
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <MdDownload size={24} className="text-brand" />
                    <h3 className="text-lg font-semibold">Guias Rápidos</h3>
                </div>
                <p className="text-sm opacity-90">
                    Visualize ou baixe os panfletos com instruções visuais passo a passo para instalação dos dispositivos OnBoard.
                </p>
            </div>
        </div>

        <div className="flex-1 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-center items-start content-start">
            <PanfletoCard 
                title="OnLink e AnalogLink"
                subtitle="Passo a passo visual de instalação"
                fileName="onlink_analoglink.pdf"
                fileSize="1.8 MB"
                downloadUrl="https://infofleet-onboard.s3.us-east-1.amazonaws.com/public/helpdesk/flyers/onlink_analoglink.pdf"
                icon={<BsPostcardFill size={32} />}
                className="bg-green-600 border-green-600 text-white hover:bg-white hover:text-green-600"
            />

            <PanfletoCard 
                title="CANLink"
                subtitle="Passo a passo visual de instalação"
                fileName="canlink.pdf"
                fileSize="1.5 MB"
                downloadUrl="https://infofleet-onboard.s3.us-east-1.amazonaws.com/public/helpdesk/flyers/canlink.pdf"
                icon={<BsPostcardFill size={32} />}
                className="bg-purple-600 border-purple-600 text-white hover:bg-white hover:text-purple-600"
            />

            {/* Placeholder para futuros panfletos */}
            <div className="p-6 border-4 border-dashed border-gray-400 rounded-lg text-center opacity-50">
                <BsPostcardFill size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">Mais panfletos em breve</h3>
                <p className="text-sm text-gray-500">
                    Novos guias visuais serão adicionados aqui
                </p>
            </div>
        </div>

        {/* Seção Informativa */}
        <div className="w-full max-w-4xl px-4 sm:px-6 mb-6">
            <div className="bg-blue-600/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2 text-blue-400">📋 Sobre os Panfletos</h4>
                <div className="text-sm opacity-90 space-y-2">
                    <p><strong>OnLink e AnalogLink:</strong> Características técnicas e dicas de instalação para equipamentos com alimentação 9-30V</p>
                    <p><strong>CANLink:</strong> Guia específico para instalação de dispositivos com protocolo CAN</p>
                </div>
            </div>
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-6 pb-6">
            <div className="bg-brand/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-brand">Precisa de Ajuda?</h4>
                <p className="text-sm opacity-90 mb-3">
                    Se você tiver dúvidas sobre a instalação após consultar os panfletos, nossa equipe de suporte está disponível.
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