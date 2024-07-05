import { Link } from "react-router-dom";
import reactsvg from '../../assets/logoDragon.png'

export default function LinksDeAtividades(){
    return(
        <div className="flex items-center justify-between text-3xl mb-10 gap-6 w-full h-[6rem] bg-slate-800">

            <div className="flex flex-col justify-center w-full h-[4rem] m-0 p-0">
            <img src={reactsvg} alt="Logo Cesar School" className="w-[15rem]" />
            </div>

            <div className="flex gap-6 w-full">
            <Link to="https://dragonball.fandom.com/pt-br/wiki/Dragon_Ball_(anime)" className="hover:text-amber-500 text-white">
            <h1 className="text-2xl">Dragon Ball Fan Dom</h1>
            </Link>
            <Link to="https://mangaplus.shueisha.co.jp/titles/200025" className="hover:text-amber-500 text-white">
            <h1 className="text-2xl">Mangar</h1>
            </Link>
            <Link to="https://animesonlinecc.to/search/Dragon+Ball" className="hover:text-amber-500 text-white">
            <h1 className="text-2xl">Assitir Online Gratis</h1>
            </Link>
            <Link to="https://web.dragonball-api.com/" className="hover:text-amber-500 text-white">
            <h1 className="text-2xl">Referencias API</h1>
            </Link>
            </div>
        </div>
    )
}