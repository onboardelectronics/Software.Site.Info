import OnBoardLogo from "@/components/OnBoardLogo"
import LinkCard from "@/components/LinkCard"
import { FaAppStoreIos, FaGooglePlay, FaWhatsapp } from "react-icons/fa6"
import { MdDescription } from "react-icons/md"

export default function Home() {
    return <nav className="h-full w-full flex flex-col items-center">
        <OnBoardLogo className="m-4 max-w-[36rem]"/>

        <div className="flex-1 w-full md:h-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 justify-center items-center content-center">
            <LinkCard url="/manual-instalacao"
                      title="Manuais de instalação"
                      subtitle="Passo a passo, videos e mais"
                      className="bg-white border-white text-black col-span-2 md:col-span-1 md:aspect-square hover:bg-black hover:text-white"
                      icon={<MdDescription size={32}/>}/>

            <LinkCard url="https://wa.me/5531996115502?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20a%20tecnologia%20da%20OnBoard"
                      title="Suporte"
                      subtitle="WhatsApp"
                      className="bg-green-600 border-green-600 text-white col-span-2 md:col-span-1 md:aspect-square hover:bg-white hover:text-green-600"
                      icon={<FaWhatsapp size={32}/>}/>

            <LinkCard url="https://apps.apple.com/br/app/instalador/id6502647804"
                      title="iOS"
                      subtitle="App Instalador"
                      className="bg-blue-600 border-blue-600 text-white aspect-square sm:aspect-auto md:aspect-square sm:col-span-2 md:col-span-1 hover:bg-white hover:text-blue-600"
                      titleClassName="hidden 2xs:block"
                      icon={<FaAppStoreIos size={32} className="flex-shrink-0"/>}/>

            <LinkCard url="https://play.google.com/store/apps/details?id=br.ind.onboard.instalador"
                      title="Android"
                      subtitle="App Instalador"
                      className="bg-green-700 border-green-700 text-white aspect-square sm:aspect-auto md:aspect-square sm:col-span-2 md:col-span-1 hover:bg-white hover:text-green-700"
                      titleClassName="hidden 2xs:block"
                      icon={<FaGooglePlay size={32} className="flex-shrink-0"/>}/>
        </div>
    </nav>
}
