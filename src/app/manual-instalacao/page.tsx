import OnBoardLogo from "@/components/OnBoardLogo"
import NavigateBackButton from "@/components/NavigateBackButton"
import LinkCard from "@/components/LinkCard"
import { MdMenuBook, MdMovie } from "react-icons/md"
import { BsPostcardFill } from "react-icons/bs"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Manual de instalação",
    description: "Links de manual de instalação de dispositivos OnBoard",
}

export default function InstallationManualPage() {
    return <nav className="flex-1 flex flex-col items-center">
        <OnBoardLogo className="self-center my-4 max-h-40"/>

        <div className="w-full flex gap-4 px-4 sm:px-6 justify-between">
            <NavigateBackButton/>
            <h2 className="text-4xl font-bold">Instalação</h2>
            <div className="w-[40px]" />
        </div>

        <div className="flex-1 grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-3 gap-4 p-8 justify-center items-center auto-rows-max content-center">
            <LinkCard title="Manual de instalação" url="/manual-instalacao/downloads" icon={<MdMenuBook size={32} />} className="aspect-square hover:bg-white hover:text-black" />
            <LinkCard title="Videos" url="/manual-instalacao/videos" icon={<MdMovie size={32} />} className="aspect-square hover:bg-white hover:text-black" />
            <LinkCard title="Panfleto" subtitle="Passo a passo" url="/manual-instalacao/panfletos" icon={<BsPostcardFill size={32} />} className="aspect-square hover:bg-white hover:text-black" />
        </div>
    </nav>
}