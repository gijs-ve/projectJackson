import { HeaderItem } from "./HeaderItem"
import {T_HeaderItem} from "../../../types"

const HeaderItems: T_HeaderItem[] = [{
    text: "Thuis",
    path: "/"
},{
    text: "Solo",
    path: "/solo",
},{
    text: "Multiplayer",
    path: "/mp",
}]



export const Header = () => {
    return      <>
    <div className="flex flex-row justify-center items-center bg-darkest w-full h-1/5 gap-4">
    {HeaderItems.map((item, index) => {
        return <HeaderItem key={index} text={item.text} path={item.path}/>
        })}</div>
    </> 
}