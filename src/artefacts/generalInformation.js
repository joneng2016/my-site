import musculacao from "../assets/musculacao.jpg";
import financeiro from "../assets/financeiro.jpg";
import trilha from "../assets/trilha.jpg";
import filosofia from "../assets/filosofia.jpg";

export default function generalInformation() {
    return {
        buttonOne:"Bem Vindo",
        buttonTwo:"Interesses",
        buttonThree:"Currículo",
        mainTitle:"Jonathan Morris Samara - Desenvolvedor de Sistemas Web",
        buttonFor:"Contato",
        titleFooter:"Contato",
        function:"Desenvolvedor FullStack",
        specialistLanguage:"Especialista em PHP e JavaScript",
        email:"E-mail: jonathan_samara@hotmail.com",
        cellPhoneOne:"Celular 1 (WhatsApp): +55 (41) 996311759",
        cellPhoneTwo:"Celular 2 (WhatsApp): +55 (41) 996554091",
        welcomeInformation:"Seja Bem Vindo!",
        generalTitleOfInterest:"Meus Interesses Profissionais e Pessoais",
        interest:[
            {
                title:"Filosofia",
                figure:filosofia,
                linkName:"",
                nameLink:"Filosofia",
                description:"Eu gosto de ler textos e livros de grandes filosofos. Gosto muito dos textos de Platão (A República, por exemplo) e de Aristóteles. Eu tenho um especial gosto pelos Estóicos como Sêneca, Epiteto e Marco Aurélio. O Niilismo ativo de Nietzche também é de interesse meu. Além dos Filósofos tradicionais, aprecio pensadores de outras áreas tais como Sigmund Freud e Jung. No que tange a pensadores brasileiros atuais, acompanho Mario Cortella, Leandro Karnal contudo o pensador cujo qual eu tenho maior afinidade e interesse é o Luis Felipe Pondé."
            },  
            {
                title:"Trilha e Passeio na Natureza",
                figure:trilha,
                linkName:"",
                nameLink:"Trilhas na natureza",
                description:"Eu gosto de fazer trilhas e passeios ao longo da natureza. Constantemente vou com meu carro até parques, cachoeiras, praias entre outros a fim de ter um momento contemplativo em sussego. A trilha do Itupava, Monte do Anhangava, Monte Marumbi (Estação, Rochedinho, Tigre) estão entre as trilhas que eu costumo fazer. Os Parques como Recanto dos Papagaios, Jardim Botânico e Passaúna estão entre aqueles cujos quais eu visito periodicamente. No que diz respeito as praias, eu constamenete desco para o litoral do Paraná (Shangri la , Matinhos) e de Santa Catarina (Itapoá, Florianópolis)"
            },
            {
                title:"Investimentos",
                figure:financeiro,
                linkName:"",
                nameLink:"Investimentos",
                description:"Durante um tempo na minha vida eu me dediquei a prática do Day Trade, contudo entre ganhos e perdas percebi que isso não é a minha verdadeira vontade. Apesar de ter deixado disso para sempre, eu mantive o gosto por investimentos e mercado financeiro. Hoje em dia eu faço aportes mensais de ativos financeiros, acompanho relatórios e balanços das empresas que investigo e tento me manter o mais atualizado possível (textos, vídeos ...) no que diz respeito ao mercado financeiro. Apesar de já ter operado DayTrader, os assuntos cujos quais mais me desperta interesse sobre esse tema hoje em dia são aqueles que permeiam os seguintes tópicos: Mercado de Ações,Buy and Hold, BitCoin, Acumulo de Patrimônio no Longo Prazo entre outros."
            },
            {
                title:"Musculação",
                figure:musculacao,
                linkName:"http://www.freepik.com",
                nameLink:"Por: Designed by javi_indy / Freepik",
                description:"Eu dedico parte do meu tempo livre à prática da musculação. Isso consiste em treinos de cinco a seis vez na semana, as vezes no horário do almoço as vezes depois do horário de trabalho. Não apenas a prática do exercício, mas acompanho o esporte constantemente, leio fóruns e textos, acompanho vídeos entre outras formas de média em relação a musculação"
            }                                     
        ]
    }
}