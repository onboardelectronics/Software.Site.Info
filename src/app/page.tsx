import OnBoardLogo from "@/components/OnBoardLogo"
import LinkCard from "@/components/LinkCard"
import { FaAppStoreIos, FaGooglePlay, FaWhatsapp } from "react-icons/fa6"
import { MdDescription } from "react-icons/md"

export default function Home() {
    return <nav className="h-dvh w-full flex flex-col items-center">
        <OnBoardLogo className="m-4 max-w-[36rem]"/>

        <div className="w-full md:h-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 justify-center items-center">
            <LinkCard url=""
                      title="Manual"
                      subtitle="Instalação"
                      className="bg-white border-white text-black col-span-2 md:col-span-1 md:aspect-square hover:bg-black hover:text-white"
                      icon={<MdDescription size={32}/>}/>

            <LinkCard url=""
                      title="Suporte"
                      subtitle="WhatsApp"
                      className="bg-green-600 border-green-600 text-white col-span-2 md:col-span-1 md:aspect-square hover:bg-white hover:text-green-600"
                      icon={<FaWhatsapp size={32}/>}/>

            <LinkCard url=""
                      title="iOS"
                      subtitle="App Instalador"
                      className="bg-blue-600 border-blue-600 text-white aspect-square sm:aspect-auto md:aspect-square sm:col-span-2 md:col-span-1 hover:bg-white hover:text-blue-600"
                      icon={<FaAppStoreIos size={32}/>}/>

            <LinkCard url=""
                      title="Android"
                      subtitle="App Instalador"
                      className="bg-green-700 border-green-700 text-white aspect-square sm:aspect-auto md:aspect-square sm:col-span-2 md:col-span-1 hover:bg-white hover:text-green-700"
                      icon={<FaGooglePlay size={32}/>}/>
        </div>
    </nav>
}
