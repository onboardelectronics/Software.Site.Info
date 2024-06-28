"use client"

import { MdArrowBack } from "react-icons/md"
import { useRouter } from "next/navigation"

export default function NavigateBackButton() {
    const router = useRouter()

    return <button onClick={router.back}>
        <MdArrowBack size={32} className="fill-brand"/>
    </button>
}