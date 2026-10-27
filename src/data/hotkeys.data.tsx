import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"


export const hotkeysData = [
    {
        icon: <div className="text-base mt-0.5 font-medium">1</div>,
        label: "TOP MENU",
        hotkey: "1"
    },
    {
        icon: (
            <>
                <ArrowDown />
            </>
        ),
        label: "DETAILS",
        hotkey: "ArrowDown"
    },
    {
        icon: (
            <>
                <ArrowLeft />
            </>
        ),
        label: "PREVIOUS GAME",
        hotkey: "ArrowDown"
    },
    {
        icon: (
            <>
                <ArrowRight />
            </>
        ),
        label: "NEXT GAME",
        hotkey: "ArrowRight"
    }
]

export type THotkeyKey = typeof hotkeysData[number]