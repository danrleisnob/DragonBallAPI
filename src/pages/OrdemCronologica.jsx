import { Link } from "react-router-dom";
import LinksDeAtividades from "../components/header/header";

export default function OrdemCronologica(){

    return(
        <div className="flex flex-col h-screen items-center justify-center">
            <LinksDeAtividades />
            <div className='mb-20 flex items-center justify-center w-full'>
                <Link to="/dragonbal">
                    <button className='flex items-center justify-center text-xl h-12 w-40 rounded-xl text-white bg-sky-500 hover:bg-sky-700 mr-4'>Personagens</button>
                </Link>
                <Link to="/planetas">
                    <button className='flex items-center justify-center text-xl h-12 w-40 rounded-xl text-white bg-sky-500 hover:bg-sky-700 mr-4'>Planetas</button>
                </Link>
                <Link to="/transformacoes">
                    <button className='flex items-center justify-center text-xl h-12 w-40 rounded-xl text-white bg-sky-500 hover:bg-sky-700 mr-4'>Transformações</button>
                </Link>
                <Link to="/cronologia">
                    <button className='flex items-center justify-center text-xl h-12 w-40 rounded-xl text-white bg-sky-500 hover:bg-sky-700 mr-4'>Ordem cronológica</button>
                </Link>
            </div>

        <div className="w-[80%] flex flex-col items-center justify-center ml-40 gap-8">

        <h1 className="font-bold text-3xl"> Assistindo Dragon Ball na ordem correta</h1>
               <p> Agora que você já sabe quais 3 séries da franquia Dragon Ball são oficialmente parte da história, aqui está a ordem recomendada para assistir Dragon Ball de acordo com a cronologia das séries principais:</p>
                <h1 className="font-bold text-3xl">1. Dragon Ball</h1>
                <p> Nada melhor do que começar pelo começo! A primeira saga de Dragon Ball apresenta a infância e as primeiras aventuras de Goku. Aqui, Goku conhece personagens como Bulma, Mestre Kame, Yamcha e Kuririn. Uma das principais diferenças para as demais sagas, é que essa, apelidada de Dragon Ball Clássico, é muito mais focado na comédia e menos no combate, ainda que ele seja bem presente.</p>
                <h1 className="font-bold text-3xl">2. Dragon Ball Z</h1>
                <p>Após concluir Dragon Ball, continue com Dragon Ball Z. Esta série marca a transição de Goku da infância para a idade adulta e apresenta uma abordagem mais séria e épica à história. Essa é sem dúvidas a saga mais popular da história de Goku e seus amigos, além de também ser o ponto a história ficou muito mais focada em combates, deixando mais de lado a comédia presente na saga clássica. Aqui Goku enfrenta ameaças cósmicas capazes de destruir o mundo, como os Saiyajins, Freeza, os Andróides e Majin Buu. Aqui, Goku também atinge a icônica transformação de Super Saiyajin.</p>

                <h1 className="font-bold text-3xl">3. Dragon Ball Super</h1>
                <p>Dragon Ball Super é a sequência direta de Dragon Ball Z e introduz novos personagens, como Beerus, o Deus da Destruição, e Whis. A série explora o multiverso e as batalhas entre os guerreiros mais poderosos de diferentes universos. É uma adição emocionante ao cânone de Dragon Ball e eleva ainda mais o que foi apresentando em Dragon Ball Z, agora dando espaço para deuses e criaturas capazes de destruir dimensões.</p>

                <h1 className="font-bold text-3xl">Spin-offs e outras séries</h1>
                <p>Além das séries principais, a franquia Dragon Ball também inclui algumas séries que não fazem parte da cronologia oficial, mas que ainda são divertidas de assistir:</p>

                <h1 className="font-bold text-3xl">Dragon Ball GT</h1>
                <p>Dragon Ball GT é uma continuação não canônica que segue Goku, a sua neta Pan e Trunks, em uma jornada pelo espaço após Goku ser transformado em criança novamente. Embora não seja considerada parte da história principal, alguns fãs ainda a apreciam e ela adiciona inimigos memoráveis, além de ter apresentado o icônico Super Saiyajin Nível 4, que é para muitos, até hoje o melhor design de transformação de Goku.</p>

                <h1 className="font-bold text-3xl">Dragon Ball Heroes</h1>
                <p>Dragon Ball Heroes é uma série promocional baseada em um jogo de arcade. Ela apresenta batalhas épicas e encontros inusitados entre personagens de diferentes períodos de tempo e dimensões. Embora não seja uma parte essencial da história, essa série é muito recomendada para os mais fanáticos pela obra, pois ela conta com episódios mais curtos e apresenta combates, parcerias e fusões que os fãs sempre sonharam em ver.</p>

                <h1 className="font-bold text-3xl">Filmes de Dragon Ball</h1>
                <p>Além das séries, a franquia Dragon Ball possui uma série de filmes emocionantes que complementam a história e oferecem aventuras únicas. Alguns deles são completamente fillers, ou seja, não impactam em nada a história, enquanto outros apresenta pequenas partes realmente relevantes e mais recentemente, alguns filmes são completamente canônicos.</p>
                <ul>
                    <li>Filmes de Dragon Ball (Clássico)</li>
                    <li>Dragon Ball: A Lenda de Shenlong (1986)</li>
                    <li>Dragon Ball: O Castelo do Diabo (1987)</li>
                    <li>Dragon Ball: Uma Aventura Mística (1988)</li>
                    <li>Dragon Ball: Em Busca do Poder (1996)</li>
                    <li>Filmes de Dragon Ball Z</li>
                    <li>Dragon Ball Z: Devolva-me Gohan (1989)</li>
                    <li>Dragon Ball Z: O Homem Mais Forte do Mundo (1990)</li>
                    <li>Dragon Ball Z: A Árvore do Poder (1990)</li>
                    <li>Dragon Ball Z: Goku, o Super Saiyajin (1991)</li>
                    <li>Dragon Ball Z: A Vingança de Cooler (1991)</li>
                    <li>Dragon Ball Z: O Retorno de Cooler (1992)</li>
                    <li>Dragon Ball Z: O Retorno dos Andróides (1992)</li>
                    <li>Dragon Ball Z: O Poder Invencível (1993)</li>
                    <li>Dragon Ball Z: Batalha Nos Dois Mundos (1993)</li>
                    <li>Dragon Ball Z: A Volta do Guerreiro (1994)</li>
                    <li>Dragon Ball Z: O Combate Final Bio-Broly (1994)</li>
                    <li>Dragon Ball Z: O Renascimento da Fusão (1995)</li>
                    <li>Dragon Ball Z: O Golpe do Dragão (1996)</li>
                    <li>Dragon Ball Z: A Batalha dos Deuses (2013)</li>
                    <li>Dragon Ball Z: O Renascimento de Freeza (2015)</li>
                </ul>

                <h1 className="font-bold text-3xl">Filmes de Dragon Ball Super</h1>
                <ul>
                    <li>Dragon Ball Super: Broly (2018)</li>
                    <li>Dragon Ball Super: Super Hero (2022)</li>
                </ul>

                <p>Assistir à franquia Dragon Ball na ordem correta pode ser uma experiência emocionante para os fãs de anime e mangá. Comece com a série original, siga para Dragon Ball Z e termine com Dragon Ball Super para desfrutar da história completa de Goku e seus amigos.</p>
        </div>
        </div>
    )
}