import musculacao from "../assets/musculacao.jpg";
import financeiro from "../assets/financeiro.jpg";
import trilha from "../assets/trilha.jpg";
import filosofia from "../assets/filosofia.jpg";
import programacao from "../assets/programacao.jpg"

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
                title:"Investimentos",
                figure:financeiro,
                linkName:"",
                nameLink:"Investimentos",
                description:"Durante um tempo na minha vida eu me dediquei a prática do Day Trade, contudo entre ganhos e perdas percebi que isso não é a minha verdadeira vontade. Apesar de ter deixado disso para sempre, eu mantive o gosto por investimentos e mercado financeiro. Hoje em dia eu faço aportes mensais de ativos financeiros, acompanho relatórios e balanços das empresas que investigo e tento me manter o mais atualizado possível (textos, vídeos ...) no que diz respeito ao mercado financeiro. Apesar de já ter operado DayTrader, os assuntos cujos quais mais me desperta interesse sobre esse tema hoje em dia são aqueles que permeiam os seguintes tópicos: Mercado de Ações,Buy and Hold, BitCoin, Acumulo de Patrimônio no Longo Prazo entre outros."
            },
            {
                title:"Desenvolvimento de Software",
                figure:programacao,
                linkName:"",
                nameLink:"Desenvolvimento de Software",
                description:"Uma das coisas que eu mais gosto de fazer é desenvolver sistemas. Faço isso tanto profissionalmente quanto como hobbie. Hoje eu programa em PHP e JavaScript, mas já desenvolvi sistemas em Java, C#, Python entre outras linguagens. O mesmo ocorre no que diz respeito a frameworks como Laravel, SpringBoot, Vue JS e Flask. Não existem limites para o meu interesse na área, estou sempre investigando e estudando novas Linguagens de Computador, novas estruturas de organização de Sistemas (Design Patters) e novos Frameworks, tanto com objetivos profissionais como com objetivos pessoais. Hoje tenho como meta a conquista de certificações na área de PHP e de Java."
            }, 
            {
                title:"Musculação",
                figure:musculacao,
                linkName:"http://www.freepik.com",
                nameLink:"Por: Designed by javi_indy / Freepik",
                description:"Eu dedico parte do meu tempo livre à prática da musculação. Isso consiste em treinos de cinco a seis vez na semana, as vezes no horário do almoço as vezes depois do horário de trabalho. Não apenas a prática do exercício, mas acompanho o esporte constantemente, leio fóruns e textos, acompanho vídeos entre outras formas de média em relação a musculação"
            }, 
            {
                title:"Filosofia",
                figure:filosofia,
                linkName:"",
                nameLink:"Filosofia",
                description:"Eu gosto de ler textos e livros de grandes filósofos. Gosto muito dos textos de Platão (A República, por exemplo) e de Aristóteles. Eu tenho um especial gosto pelos Estoicos como Sêneca, Epiteto e Marco Aurélio. O Niilismo ativo de Nietzche também é de interesse meu. Além dos Filósofos tradicionais, aprecio pensadores de outras áreas tais como Sigmund Freud e Jung. No que tange a pensadores brasileiros atuais, acompanho Mario Cortella, Leandro Karnal contudo o pensador cujo qual eu tenho maior afinidade e interesse é o Luis Felipe Pondé."
            }, 
            {
                title:"Trilha e Passeio na Natureza",
                figure:trilha,
                linkName:"",
                nameLink:"Trilhas na natureza",
                description:"Eu gosto de fazer trilhas e passeios ao longo da natureza. Constantemente vou com meu carro até parques, cachoeiras, praias entre outros a fim de ter um momento contemplativo em sossego. A trilha do Itupava, Monte do Anhangava, Monte Marumbi (Estação, Rochedinho, Tigre) estão entre as trilhas que eu costumo fazer. Os Parques como Recanto dos Papagaios, Jardim Botânico e Passaúna estão entre aqueles cujos quais eu visito periodicamente. No que diz respeito as praias, eu constantemente desço para o litoral do Paraná (Shangri la , Matinhos) e de Santa Catarina (Itapoá, Florianópolis)"
            } 
        ],
        generalTitleOfCurriculo:"Meu Currículo",
        curriculo:{
            academy:{
                title:"Formação e Conhecimentos",
                body:[
                    {   
                        institution:"Universidade Tecnológica Federal do Paraná",
                        course:"Mestrado em Informática Industrial",
                        period:"2017-2019",
                        finalDocumentName:"Um Modelo Conceitual Para Cenários de Acidentes em Atividades de Manutenção"
                    },
                    {
                        institution:"Universidade Federal do Paraná",
                        course:"Engenhari Elétrica",
                        period:"2011-2016",
                        finalDocumentName:"Um Modelo Conceitual Para Cenários de Acidentes em Atividades de Manutenção"                        
                    }
                ]
            },
            hability: {
                title:"Habilidades",
                body:[
                    {
                        name:"Linguagens de Programação",
                        list:[                             
                            "PHP (framework: Laravel, Codeigniter Wordpress)",
                            "JavaScript (Vue Js - Vuetify,jQuery,React, Vanila)",
                            "Node Js (em formato TypeScript)",
                            "Java (conhecimentos em SpringBoot, JPA Hibernete)",
                            "Python (Flask, Panda, TensorFlow)"
                        ]
                    },
                    {
                        name:"Inglês",
                        list:[
                            "Entende, escreve e lê bem. Fala com certa fluência."
                        ]
                    },
                    { 
                        name:"Metodologias e Práticas em Desenvolvimento de Software.",
                        list:[
                            "Design Pattern, em SOLID  e em Métodos Ágeis."
                        ]
                    },
                    {
                        name:"Demais Tecnologias",
                        list:[
                            "Banco de Dados: MySQL, PostGreSQL, RedShift, ElasticSearch, SQLite e MongoDB.", 
                            "Servidores: Apache2 em Debian.", 
                            "Sistema de Controle de Versão: Git (GitHub e VSTS Visual Studios).", 
                            "Container: Docker.", 
                            "Editores: Vim, Sublime, Eclipse, Visual Studio (preferência por Sublime com plugin Vim).",
                            "Escrita de Documentos: Latex (preferência), OpenOffice, Microsoft Office."
                        ]
                    }
                ]
            },
            profissionalExperience:{
                title:"Experiência Profissional",
                body:[
                    {
                        name:"Desenvolvedor PHP Sênio",
                        company:"Econet",
                        description:"(Regime CLT) Avalia requisitos, planeja arquitetura e efetua o desenvolvimento de aplicações Web. Soma-se a isso a elaboração de teste unitários, criação de ambientes para o funcionamento das aplicações e manutenção dos sistemas em produção."
                    },
                    {
                        name:"Analista Desenvolvedor Full Stack Sênior",
                        company:"Rentcars",
                        description:"(Regime CLT) Desenvolvimento e Manutenção de Sistemas Web. Atividades consiste nos seguintes pontos: Analisar os requisitos, efetuar um planejamento da solução, conceber a arquitetura, desenvolver o código, efetuar testes e acompanhar o deploy."
                    },
                    {
                        name:"Professor Universitário de Computação",
                        company:"Facet Faculdades",
                        description:"(Regime PJ) Ministro aulas presenciais de Engenharia de Software (para Bacharelado em Sistemas de Informação) e de Informática Aplicada (para Administração e Ciências Contábeis) com caráter tanto prático bem como acadêmico."
                    },
                    {
                        name:"Software Development Specialist",
                        company:"Alhambra-Eidos",
                        description:"(Regime PJ) Desenvolvimento e Manutenção de Sistemas Web. Atividades consiste nos seguintes pontos: Analisar os requisitos, efetuar um planejamento da solução, conceber a arquitetura, desenvolver o código, efetuar testes e acompanhar o deploy."
                    },
                    {
                        name:"Pesquisador em Engenharia de Sistemas",
                        company:"Institutos Lactec",
                        description:"(Regime Bolsista) Manutenção e Desenvolvimento de Sistemas. Trabalhou​ no projeto P&D RV2 Copel (desenvolvimento de um jogo sério para o treinamento de eletricistas de linha viva) com modelagem de conhecimento para elaboração de arquitetura de sistemas. Para isso, fez uso de técnicas de inteligência artificial forte (ontologia e sistemas multiagentes)."
                    }
                ]
            }
        }      
    }
}