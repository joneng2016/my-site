import musculacao from "../assets/musculacao.jpg";
import trilha from "../assets/trilha.jpg";

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
                title:"Musculação",
                figure:musculacao,
                linkName:"http://www.freepik.com",
                nameLink:"Por: Designed by javi_indy / Freepik",
                description:"Eu dedico parte do meu tempo livre à prática da musculação. Isso consiste em treinos de cinco a seis vez na semana, as vezes no horário do almoço as vezes depois do horário de trabalho. Não apenas a prática do exercício, mas acompanho o esporte constantemente, leio fóruns e textos, acompanho vídeos entre outras formas de média em relação a musculação"
            },
            {
                title:"Trilha e Passeio na Natureza",
                figure:trilha,
                linkName:"",
                nameLink:"Trilhas na natureza",
                description:"Eu gosto de fazer trilhas e passeios ao longo da natureza. Constantemente vou com meu carro até parques, cachoeiras, praias entre outros a fim de ter um momento contemplativo em sussego. A trilha do Itupava, Monte do Anhangava, Monte Marumbi (Estação, Rochedinho, Tigre) estão entre as trilhas que eu costumo fazer. Os Parques como Recanto dos Papagaios, Jardim Botânico e Passaúna estão entre aqueles cujos quais eu visito periodicamente. No que diz respeito as praias, eu constamenete desco para o litoral do Paraná (Shangri la , Matinhos) e de Santa Catarina (Itapoá, Florianópolis)"
            }                                    
        ]
    }
}