/* EN is canonical. Translate text nodes without destroying links or markup. */
(() => {
'use strict';
const rows = [
["Illustrative photo","Foto ilustrativa","Foto ilustrativa"],
["A chapter at NoVerde.","Um capítulo na NoVerde.","Un capítulo en NoVerde."],
["With colleagues in 2019, celebrating NoVerde’s third anniversary.","Com colegas em 2019, celebrando o terceiro aniversário da NoVerde.","Con colegas en 2019, celebrando el tercer aniversario de NoVerde."],
["Global professional connections","Conexões profissionais globais","Conexiones profesionales globales"],
["Teal: in-person experience. Blue rings: remote collaboration. Purple: remote customer work. Country lists below provide the same information.","Verde: experiência presencial. Círculos azuis: colaboração remota. Roxo: trabalho remoto com clientes. As listas de países abaixo apresentam as mesmas informações.","Verde: experiencia presencial. Círculos azules: colaboración remota. Morado: trabajo remoto con clientes. Las listas de países abajo presentan la misma información."],
["In person","Presencial","Presencial"],
["Remote collaboration","Colaboração remota","Colaboración remota"],
["Remote · customers","Remoto · clientes","Remoto · clientes"],
["Select a country to highlight its connection.","Selecione um país para destacar sua conexão.","Seleccione un país para destacar su conexión."],
["Professional connections through customers, colleagues, business travel and places I have lived.","Conexões profissionais com clientes, colegas, viagens a trabalho e lugares onde morei.","Conexiones profesionales con clientes, colegas, viajes de trabajo y lugares donde he vivido."],
["Brazil","Brasil","Brasil"],
["United Kingdom","Reino Unido","Reino Unido"],
["Spain","Espanha","España"],
["United States","Estados Unidos","Estados Unidos"],
["Mexico","México","México"],
["Canada","Canadá","Canadá"],
["Colombia","Colômbia","Colombia"],
["Malaysia","Malásia","Malasia"],
["Australia","Austrália","Australia"],
["India","Índia","India"],
["reported increase in checkout conversion","aumento reportado na conversão do checkout","aumento reportado en la conversión del checkout"],
["Selected career impact and scale · documented in CVs and project accounts.","Impacto e escala da carreira · documentados em currículos e relatos de projetos.","Impacto y escala profesional · documentados en currículos y relatos de proyectos."],
["Hierarchical forecasting","Previsão hierárquica","Previsión jerárquica"],
["Optimization","Otimização","Optimización"],
["Cloud architecture","Arquitetura em nuvem","Arquitectura en la nube"],
["Recommendations & search","Recomendações e busca","Recomendaciones y búsqueda"],
["Online experimentation","Experimentação online","Experimentación en línea"],
["Credit scoring","Modelagem de crédito","Modelado crediticio"],
["Feature engineering","Engenharia de atributos","Ingeniería de variables"],
["Origination simulation","Simulação de originação","Simulación de originación"],
["Graph modeling","Modelagem de grafos","Modelado de grafos"],
["Churn prediction","Previsão de churn","Predicción de abandono"],
["Text analytics","Análise de texto","Análisis de texto"],
["Statistical forecasting","Previsão estatística","Previsión estadística"],
["Customer insights","Inteligência de clientes","Inteligencia de clientes"],
["Implemented and analyzed online experiments on checkout pages, with a 15% increase in conversion reported in my OfferFit CV.","Implementei e analisei experimentos online em páginas de checkout, com aumento de 15% na conversão reportado no meu currículo OfferFit.","Implementé y analicé experimentos en línea en páginas de checkout, con un aumento del 15% en conversión reportado en mi currículo OfferFit."],
["My OfferFit CV reports a 15% increase in checkout conversion from online experiments I implemented and analyzed at Grupo SBF. The CV does not include the baseline conversion rate, experiment dates or sample sizes; this is a CV-reported result.","Meu currículo OfferFit relata um aumento de 15% na conversão do checkout a partir de experimentos online que implementei e analisei no Grupo SBF. O currículo não inclui a taxa de conversão inicial, as datas dos experimentos ou os tamanhos das amostras; trata-se de um resultado reportado no currículo.","Mi currículo OfferFit reporta un aumento del 15% en la conversión del checkout a partir de experimentos en línea que implementé y analicé en Grupo SBF. El currículo no incluye la tasa de conversión inicial, las fechas de los experimentos ni los tamaños de muestra; es un resultado reportado en el currículo."],
["Source: Fernando Barbosa - OfferFit.docx and matching PDF · Grupo SBF · Online Experimentation & User Experience.","Fonte: Fernando Barbosa - OfferFit.docx e PDF correspondente · Grupo SBF · Online Experimentation & User Experience.","Fuente: Fernando Barbosa - OfferFit.docx y PDF correspondiente · Grupo SBF · Online Experimentation & User Experience."],
  [
    "Home",
    "Início",
    "Inicio"
  ],
  [
    "Experience",
    "Experiência",
    "Experiencia"
  ],
  [
    "Portfolio",
    "Portfólio",
    "Portafolio"
  ],
  [
    "Writing",
    "Artigos",
    "Artículos"
  ],
  [
    "Connect",
    "Contato",
    "Contacto"
  ],
  [
    "Skip to content",
    "Ir para o conteúdo",
    "Saltar al contenido"
  ],
  [
    "Main navigation",
    "Navegação principal",
    "Navegación principal"
  ],
  [
    "Lead Scientist at FICO",
    "Lead Scientist na FICO",
    "Lead Scientist en FICO"
  ],
  [
    "Better decisions.",
    "Melhores decisões.",
    "Mejores decisiones."
  ],
  [
    "Through applied AI.",
    "Com IA aplicada.",
    "Con IA aplicada."
  ],
  [
    "I connect models, business decisions and the people who make them.",
    "Conecto modelos, decisões de negócio e as pessoas responsáveis por elas.",
    "Conecto modelos, decisiones de negocio y las personas que las toman."
  ],
  [
    "My work spans credit decision systems, global forecasting and optimization—from the underlying mathematics to solution architecture and delivery.",
    "Meu trabalho abrange sistemas de decisão de crédito, previsão global e otimização — da matemática à arquitetura e à entrega de soluções.",
    "Mi trabajo abarca sistemas de decisión crediticia, previsión global y optimización: desde las matemáticas hasta la arquitectura y la entrega de soluciones."
  ],
  [
    "Explore my experience",
    "Explore minha experiência",
    "Explore mi experiencia"
  ],
  [
    "Applied AI &",
    "IA aplicada e",
    "IA aplicada y"
  ],
  [
    "decision science",
    "ciência da decisão",
    "ciencia de decisiones"
  ],
  [
    "São Paulo, Brazil",
    "São Paulo, Brasil",
    "São Paulo, Brasil"
  ],
  [
    "International customer collaboration",
    "Colaboração internacional com clientes",
    "Colaboración internacional con clientes"
  ],
  [
    "LinkedIn profile",
    "Perfil no LinkedIn",
    "Perfil de LinkedIn"
  ],
  [
    "institutions in",
    "instituições no",
    "instituciones en"
  ],
  [
    "FICO customer pipeline",
    "pipeline de clientes FICO",
    "el pipeline de clientes de FICO"
  ],
  [
    "FICO products in",
    "produtos FICO no",
    "productos FICO en"
  ],
  [
    "customer work",
    "trabalho com clientes",
    "el trabajo con clientes"
  ],
  [
    "ongoing proofs",
    "provas de valor",
    "pruebas de valor"
  ],
  [
    "of value at FICO",
    "em andamento na FICO",
    "en curso en FICO"
  ],
  [
    "project contributors led",
    "colaboradores liderados",
    "colaboradores liderados"
  ],
  [
    "across two IFF programs",
    "em dois programas na IFF",
    "en dos programas de IFF"
  ],
  [
    "Selected experience",
    "Experiência selecionada",
    "Experiencia seleccionada"
  ],
  [
    "A career built around",
    "Uma carreira construída em torno",
    "Una carrera centrada en"
  ],
  [
    "the decision.",
    "da decisão.",
    "la decisión."
  ],
  [
    "Explore the work, the responsibility and the technical thinking behind it.",
    "Conheça o trabalho, as responsabilidades e o raciocínio técnico por trás de cada projeto.",
    "Conozca el trabajo, las responsabilidades y el razonamiento técnico de cada proyecto."
  ],
  [
    "Network intelligence",
    "Inteligência de redes",
    "Inteligencia de redes"
  ],
  [
    "Global operations",
    "Operações globais",
    "Operaciones globales"
  ],
  [
    "Financial decisions",
    "Decisões financeiras",
    "Decisiones financieras"
  ],
  [
    "AI for financial decisions",
    "IA para decisões financeiras",
    "IA para decisiones financieras"
  ],
  [
    "I help financial institutions and fintechs translate AI requirements into solution designs, working alongside customer teams on technology evaluation and architecture.",
    "Ajudo instituições financeiras e fintechs a transformar requisitos de IA em soluções, colaborando com suas equipes na avaliação tecnológica e na arquitetura.",
    "Ayudo a instituciones financieras y fintechs a convertir requisitos de IA en soluciones, colaborando con sus equipos en la evaluación tecnológica y la arquitectura."
  ],
  [
    "Credit underwriting",
    "Análise de crédito",
    "Evaluación crediticia"
  ],
  [
    "Credit limit management",
    "Gestão de limites de crédito",
    "Gestión de límites de crédito"
  ],
  [
    "Solution architecture",
    "Arquitetura de soluções",
    "Arquitectura de soluciones"
  ],
  [
    "Customer pipeline covering more than 30 institutions and 10 FICO products, including three ongoing proofs of value.",
    "Pipeline de clientes envolvendo mais de 30 instituições e 10 produtos FICO, com três provas de valor em andamento.",
    "Pipeline de clientes que abarca más de 30 instituciones y 10 productos FICO, con tres pruebas de valor en curso."
  ],
  [
    "Collaboration across Latin America, Australia, India, Malaysia, Europe and the UK.",
    "Colaboração com clientes na América Latina, Austrália, Índia, Malásia, Europa e Reino Unido.",
    "Colaboración con clientes en América Latina, Australia, India, Malasia, Europa y Reino Unido."
  ],
  [
    "Connecting customer objectives with what the technology can achieve and how it can be applied.",
    "Conectando os objetivos dos clientes às possibilidades da tecnologia e à sua aplicação.",
    "Conectando los objetivos del cliente con las posibilidades de la tecnología y su aplicación."
  ],
  [
    "These figures describe the scope of customer work, rather than booked revenue or completed deployments.",
    "Esses números descrevem o escopo do trabalho com clientes, e não receita contratada ou implantações concluídas.",
    "Estas cifras describen el alcance del trabajo con clientes, no ingresos contratados ni implementaciones completadas."
  ],
  [
    "IFF · Data science delivery leadership",
    "IFF · Liderança na entrega de ciência de dados",
    "IFF · Liderazgo en la entrega de ciencia de datos"
  ],
  [
    "Forecasting & resource decisions",
    "Previsão e decisões sobre recursos",
    "Previsión y decisiones sobre recursos"
  ],
  [
    "I led approximately eight project contributors across two global programs, taking responsibility for infrastructure, architectural choices and cloud implementation.",
    "Liderei aproximadamente oito colaboradores em dois programas globais, com responsabilidade pela infraestrutura, pelas escolhas arquiteturais e pela implementação em nuvem.",
    "Lideré aproximadamente a ocho colaboradores en dos programas globales, con responsabilidad sobre la infraestructura, las decisiones arquitectónicas y la implementación en la nube."
  ],
  [
    "5 contributors",
    "5 colaboradores",
    "5 colaboradores"
  ],
  [
    "3 contributors",
    "3 colaboradores",
    "3 colaboradores"
  ],
  [
    "BioActives optimization",
    "Otimização de BioActives",
    "Optimización de BioActives"
  ],
  [
    "A live configuration-as-software tool for simulating scenarios in global production.",
    "Uma ferramenta operacional de configuração como software para simular cenários de produção global.",
    "Una herramienta operativa de configuración como software para simular escenarios de producción global."
  ],
  [
    "Cellulosics forecasting",
    "Previsão para Cellulosics",
    "Previsión para Cellulosics"
  ],
  [
    "Hierarchical forecasts updated daily to give the global business more frequent visibility.",
    "Previsões hierárquicas atualizadas diariamente para ampliar a visibilidade do negócio global.",
    "Previsiones jerárquicas actualizadas a diario para dar mayor visibilidad al negocio global."
  ],
  [
    "Explore the forecasting field note",
    "Explore a nota técnica de previsão",
    "Explore la nota técnica de previsión"
  ],
  [
    "Nextel · Proprietary model development",
    "Nextel · Desenvolvimento de modelo proprietário",
    "Nextel · Desarrollo de modelo propietario"
  ],
  [
    "Churn through a network lens",
    "Churn sob a perspectiva de redes",
    "Churn desde la perspectiva de redes"
  ],
  [
    "I developed Favorites, a graph-based churn model investigating how an influential customer's departure changes risk signals in their close network.",
    "Desenvolvi o Favorites, um modelo de churn baseado em grafos que investigava como a saída de um cliente influente altera sinais de risco na sua rede próxima.",
    "Desarrollé Favorites, un modelo de churn basado en grafos que investigaba cómo la salida de un cliente influyente cambia las señales de riesgo en su red cercana."
  ],
  [
    "The work drew on message-passing intuition, contagion mathematics and probabilistic graphical models. I used NetworkX and experimented with graph databases and visualization.",
    "O trabalho se apoiava na intuição de passagem de mensagens, na matemática de contágio e em modelos gráficos probabilísticos. Usei NetworkX e explorei bancos de dados de grafos e visualizações.",
    "El trabajo se apoyaba en la intuición del paso de mensajes, las matemáticas del contagio y los modelos gráficos probabilísticos. Utilicé NetworkX y exploré bases de datos de grafos y visualizaciones."
  ],
  [
    "My recalled historical ROC-AUC is approximately 0.80–0.85. The original evaluation artifacts are unavailable. The public demonstration uses synthetic data and does not reproduce that result.",
    "Minha lembrança do ROC-AUC histórico é de aproximadamente 0,80–0,85. Os artefatos da avaliação original não estão disponíveis. A demonstração pública usa dados sintéticos e não reproduz esse resultado.",
    "Mi recuerdo del ROC-AUC histórico es de aproximadamente 0,80–0,85. Los artefactos de la evaluación original no están disponibles. La demostración pública utiliza datos sintéticos y no reproduce ese resultado."
  ],
  [
    "Explore the network demonstration",
    "Explore a demonstração de redes",
    "Explore la demostración de redes"
  ],
  [
    "Working across cultures",
    "Trabalhando entre culturas",
    "Trabajando entre culturas"
  ],
  [
    "Global perspective.",
    "Perspectiva global.",
    "Perspectiva global."
  ],
  [
    "Practical collaboration.",
    "Colaboração prática.",
    "Colaboración práctica."
  ],
  [
    "Customer work across regions, together with FICO events and training in Mexico and the United States, has shaped how I listen, communicate and adapt.",
    "O trabalho com clientes de diferentes regiões, junto a eventos e treinamentos FICO no México e nos Estados Unidos, moldou minha forma de ouvir, comunicar e me adaptar.",
    "El trabajo con clientes de distintas regiones, junto con eventos y formación de FICO en México y Estados Unidos, ha dado forma a mi manera de escuchar, comunicarme y adaptarme."
  ],
  [
    "I value cultural awareness, clear expectations and efficient remote collaboration across teams and time zones.",
    "Valorizo a sensibilidade cultural, expectativas claras e a colaboração remota eficiente entre equipes e fusos horários.",
    "Valoro la sensibilidad cultural, las expectativas claras y la colaboración remota eficiente entre equipos y husos horarios."
  ],
  [
    "Latin America",
    "América Latina",
    "América Latina"
  ],
  [
    "Europe & UK",
    "Europa e Reino Unido",
    "Europa y Reino Unido"
  ],
  [
    "Asia-Pacific",
    "Ásia-Pacífico",
    "Asia-Pacífico"
  ],
  [
    "Portuguese",
    "Português",
    "Portugués"
  ],
  [
    "English",
    "Inglês",
    "Inglés"
  ],
  [
    "Spanish",
    "Espanhol",
    "Español"
  ],
  [
    "Native",
    "Nativo",
    "Nativo"
  ],
  [
    "Fluent",
    "Fluente",
    "Fluido"
  ],
  [
    "Proficient",
    "Proficiente",
    "Competente"
  ],
  [
    "Ideas in practice",
    "Ideias na prática",
    "Ideas en la práctica"
  ],
  [
    "Writing to clarify",
    "Escrever para esclarecer",
    "Escribir para aclarar"
  ],
  [
    "the work.",
    "o trabalho.",
    "el trabajo."
  ],
  [
    "Before the AI pilot: clarify the decision",
    "Antes do piloto de IA: esclareça a decisão",
    "Antes del piloto de IA: aclare la decisión"
  ],
  [
    "Decision brief on LinkedIn ↗",
    "Nota sobre decisões no LinkedIn ↗",
    "Nota sobre decisiones en LinkedIn ↗"
  ],
  [
    "Applied data science & technical practice",
    "Ciência de dados aplicada e prática técnica",
    "Ciencia de datos aplicada y práctica técnica"
  ],
  [
    "Essays on Medium ↗",
    "Artigos no Medium ↗",
    "Artículos en Medium ↗"
  ],
  [
    "Public portfolio",
    "Portfólio público",
    "Portafolio público"
  ],
  [
    "Inspect the thinking.",
    "Explore o raciocínio.",
    "Explore el razonamiento."
  ],
  [
    "Demonstrations, code and field notes.",
    "Demonstrações, código e notas técnicas.",
    "Demostraciones, código y notas técnicas."
  ],
  [
    "Networks / synthetic demonstration",
    "Redes / demonstração sintética",
    "Redes / demostración sintética"
  ],
  [
    "How risk travels through a network",
    "Como o risco se propaga por uma rede",
    "Cómo se propaga el riesgo por una red"
  ],
  [
    "Explore a message-passing illustration of connected churn signals.",
    "Explore uma ilustração de passagem de mensagens entre sinais de churn conectados.",
    "Explore una ilustración del paso de mensajes entre señales de churn conectadas."
  ],
  [
    "Interactive demo ↗",
    "Demonstração interativa ↗",
    "Demostración interactiva ↗"
  ],
  [
    "Source",
    "Código",
    "Código"
  ],
  [
    "Total",
    "Total",
    "Total"
  ],
  [
    "Group A",
    "Grupo A",
    "Grupo A"
  ],
  [
    "Group B",
    "Grupo B",
    "Grupo B"
  ],
  [
    "Forecasting / technical field note",
    "Previsão / nota técnica",
    "Previsión / nota técnica"
  ],
  [
    "Forecasts that add up",
    "Previsões que fecham a conta",
    "Previsiones que cuadran"
  ],
  [
    "Hierarchy, coherence and reconciliation, with a synthetic interactive example.",
    "Hierarquia, coerência e reconciliação, com um exemplo interativo sintético.",
    "Jerarquía, coherencia y reconciliación, con un ejemplo interactivo sintético."
  ],
  [
    "Read & explore ↗",
    "Leia e explore ↗",
    "Lea y explore ↗"
  ],
  [
    "Agents / research prototype",
    "Agentes / protótipo de pesquisa",
    "Agentes / prototipo de investigación"
  ],
  [
    "Credit-agent experiments ↗",
    "Experimentos com agentes de crédito ↗",
    "Experimentos con agentes de crédito ↗"
  ],
  [
    "Synthetic banking data, SQL agents and LangGraph. Personal research, separate from FICO products.",
    "Dados bancários sintéticos, agentes SQL e LangGraph. Pesquisa pessoal, independente dos produtos FICO.",
    "Datos bancarios sintéticos, agentes SQL y LangGraph. Investigación personal, independiente de los productos FICO."
  ],
  [
    "Economics / open data tooling",
    "Economia / ferramentas de dados abertos",
    "Economía / herramientas de datos abiertos"
  ],
  [
    "A Python client for IBGE aggregate data, from metadata discovery to pandas DataFrames.",
    "Um cliente Python para dados agregados do IBGE, da descoberta de metadados a DataFrames pandas.",
    "Un cliente Python para datos agregados del IBGE, desde el descubrimiento de metadatos hasta DataFrames de pandas."
  ],
  [
    "Let's connect",
    "Vamos conversar",
    "Conversemos"
  ],
  [
    "What decision",
    "Qual decisão",
    "¿En qué decisión"
  ],
  [
    "are you working on?",
    "você está trabalhando?",
    "está trabajando?"
  ],
  [
    "Applied AI leadership, financial decision systems and substantive technical collaboration. Based in Brazil; open to international opportunities.",
    "Liderança em IA aplicada, sistemas de decisão financeira e colaboração técnica. Baseado no Brasil; aberto a oportunidades internacionais.",
    "Liderazgo en IA aplicada, sistemas de decisión financiera y colaboración técnica. Radicado en Brasil; abierto a oportunidades internacionales."
  ],
  [
    "Start a conversation",
    "Inicie uma conversa",
    "Inicie una conversación"
  ],
  [
    "Professional views are my own. Employer names describe experience.",
    "As opiniões profissionais são pessoais. Os nomes das empresas descrevem minha experiência.",
    "Las opiniones profesionales son personales. Los nombres de empresas describen mi experiencia."
  ],
  [
    "Career timeline",
    "Trajetória profissional",
    "Trayectoria profesional"
  ],
  [
    "Career",
    "Carreira",
    "Carrera"
  ],
  [
    "All experience",
    "Experiência completa",
    "Experiencia completa"
  ],
  [
    "View portfolio",
    "Veja o portfólio",
    "Ver portafolio"
  ],
  [
    "View experience",
    "Veja a experiência",
    "Ver experiencia"
  ],
  [
    "Selected work",
    "Trabalhos selecionados",
    "Trabajos seleccionados"
  ],
  [
    "Research & writing",
    "Pesquisa e artigos",
    "Investigación y artículos"
  ],
  [
    "Back to portfolio",
    "Voltar ao portfólio",
    "Volver al portafolio"
  ],
  [
    "Back to home",
    "Voltar ao início",
    "Volver al inicio"
  ],
  [
    "Current",
    "Atual",
    "Actual"
  ],
  [
    "Present",
    "Atual",
    "Actual"
  ],
  [
    "Previous",
    "Anterior",
    "Anterior"
  ],
  [
    "Read more",
    "Leia mais",
    "Leer más"
  ],
  [
    "Learn more",
    "Saiba mais",
    "Más información"
  ],
  [
    "Play",
    "Iniciar",
    "Iniciar"
  ],
  [
    "Pause",
    "Pausar",
    "Pausar"
  ],
  [
    "Step",
    "Avançar",
    "Avanzar"
  ],
  [
    "Reset",
    "Reiniciar",
    "Reiniciar"
  ],
  [
    "Method",
    "Método",
    "Método"
  ],
  [
    "Base",
    "Base",
    "Base"
  ],
  [
    "Current output",
    "Resultado atual",
    "Resultado actual"
  ],
  [
    "Independent forecasts",
    "Previsões independentes",
    "Previsiones independientes"
  ],
  [
    "Bottom-up",
    "De baixo para cima",
    "De abajo hacia arriba"
  ],
  [
    "Top-down",
    "De cima para baixo",
    "De arriba hacia abajo"
  ],
  [
    "Reconciliation",
    "Reconciliação",
    "Reconciliación"
  ],
  [
    "Hierarchical forecasting",
    "Previsão hierárquica",
    "Previsión jerárquica"
  ],
  [
    "References",
    "Referências",
    "Referencias"
  ],
  [
    "Research context",
    "Contexto científico",
    "Contexto científico"
  ],
  [
    "Career, companies and delivery responsibilities.",
    "Carreira, empresas e responsabilidades de entrega.",
    "Trayectoria, empresas y responsabilidades de entrega."
  ],
  [
    "Interactive demonstrations, code and technical field notes.",
    "Demonstrações interativas, código e notas técnicas.",
    "Demostraciones interactivas, código y notas técnicas."
  ],
  [
    "Ideas on applied AI and decision science.",
    "Ideias sobre IA aplicada e ciência da decisão.",
    "Ideas sobre IA aplicada y ciencia de decisiones."
  ],
  [
    "International opportunities and professional conversations.",
    "Oportunidades internacionais e conversas profissionais.",
    "Oportunidades internacionales y conversaciones profesionales."
  ],
  [
    "The experience behind the work.",
    "A experiência por trás do trabalho.",
    "La experiencia detrás del trabajo."
  ],
  [
    "A chronological view of my work across agriculture, telecom, banking, retail, fintech, industry and financial decision systems.",
    "Uma visão cronológica do meu trabalho em agricultura, telecomunicações, bancos, varejo, fintechs, indústria e sistemas de decisão financeira.",
    "Una visión cronológica de mi trabajo en agricultura, telecomunicaciones, banca, comercio minorista, fintechs, industria y sistemas de decisión financiera."
  ],
  [
    "Customer Insights Analyst",
    "Analista de inteligência de clientes",
    "Analista de inteligencia de clientes"
  ],
  [
    "Data Scientist",
    "Cientista de dados",
    "Científico de datos"
  ],
  [
    "Data Science Specialist",
    "Especialista em ciência de dados",
    "Especialista en ciencia de datos"
  ],
  [
    "Data Scientist III",
    "Cientista de dados III",
    "Científico de datos III"
  ],
  [
    "Lead Data Scientist",
    "Líder de ciência de dados",
    "Líder de ciencia de datos"
  ],
  [
    "Lead Scientist",
    "Lead Scientist",
    "Lead Scientist"
  ],
  [
    "From 2022",
    "Desde 2022",
    "Desde 2022"
  ],
  [
    "Developed statistical forecasts and customer-insight tools using R, SQL and VBA; analyzed Portuguese NPS feedback and improved reporting and data collection for agricultural decisions.",
    "Desenvolvi previsões estatísticas e ferramentas de inteligência de clientes com R, SQL e VBA; analisei comentários de NPS em português e aprimorei relatórios e a coleta de dados para decisões agrícolas.",
    "Desarrollé previsiones estadísticas y herramientas de inteligencia de clientes con R, SQL y VBA; analicé comentarios de NPS en portugués y mejoré informes y recopilación de datos para decisiones agrícolas."
  ],
  [
    "Built churn and credit-risk models with Python, R, PySpark and PostgreSQL; created data pipelines and analytical tools supporting customer-retention decisions.",
    "Construí modelos de churn e risco de crédito com Python, R, PySpark e PostgreSQL; criei pipelines de dados e ferramentas analíticas para decisões de retenção de clientes.",
    "Construí modelos de churn y riesgo de crédito con Python, R, PySpark y PostgreSQL; creé pipelines de datos y herramientas analíticas para decisiones de retención de clientes."
  ],
  [
    "Developed credit-scoring and behavioral models, addressed model drift, and maintained ETL workflows supporting lending and risk monitoring.",
    "Desenvolvi modelos de pontuação de crédito e comportamento, tratei a degradação de modelos e mantive fluxos ETL para concessão de crédito e monitoramento de risco.",
    "Desarrollé modelos de puntuación crediticia y comportamiento, abordé la degradación de modelos y mantuve flujos ETL para concesión de crédito y seguimiento del riesgo."
  ],
  [
    "Developed association-rule and search models with Python, GCP and BigQuery; designed online experiments for checkout and product discovery.",
    "Desenvolvi modelos de regras de associação e busca com Python, GCP e BigQuery; desenhei experimentos online para checkout e descoberta de produtos.",
    "Desarrollé modelos de reglas de asociación y búsqueda con Python, GCP y BigQuery; diseñé experimentos en línea para el proceso de compra y el descubrimiento de productos."
  ],
  [
    "Built an end-to-end credit-underwriting pipeline, developed real-time analytics with Apache Pinot and Kafka, and worked on A/B testing and credit monitoring.",
    "Construí um pipeline completo de análise de crédito, desenvolvi análises em tempo real com Apache Pinot e Kafka e trabalhei com testes A/B e monitoramento de crédito.",
    "Construí un pipeline completo de evaluación crediticia, desarrollé análisis en tiempo real con Apache Pinot y Kafka y trabajé con pruebas A/B y seguimiento crediticio."
  ],
  [
    "Dates follow the supplied career records. Year-level dates are used where résumé versions differ.",
    "As datas seguem os registros profissionais fornecidos. Onde as versões do currículo divergem, são apresentados apenas os anos.",
    "Las fechas siguen los registros profesionales facilitados. Cuando las versiones del currículum difieren, se indican solo los años."
  ]
];
rows.push(...[["FIELD NOTE / HIERARCHICAL FORECASTING","NOTA TÉCNICA / PREVISÃO HIERÁRQUICA","NOTA TÉCNICA / PREVISIÓN JERÁRQUICA"],["Forecasts that","Previsões que","Previsiones que"],["add up.","fecham a conta.","cuadran."],["A forecast is a decision system when every level must agree: the global outlook, the business unit, and the underlying series.","Uma previsão se torna um sistema de decisão quando todos os níveis precisam concordar: a visão global, a unidade de negócio e as séries de base.","Una previsión se convierte en un sistema de decisión cuando todos los niveles deben concordar: la perspectiva global, la unidad de negocio y las series de base."],["Explore forecast reconciliation ↓","Explore a reconciliação de previsões ↓","Explore la reconciliación de previsiones ↓"],["GLOBAL TOTAL","TOTAL GLOBAL","TOTAL GLOBAL"],["GROUP A","GRUPO A","GRUPO A"],["GROUP B","GRUPO B","GRUPO B"],["One coherent view","Uma visão coerente","Una visión coherente"],["at every level.","em todos os níveis.","en todos los niveles."],["01 / THE PROBLEM","01 / O PROBLEMA","01 / EL PROBLEMA"],["One business. Many views of demand.","Um negócio. Muitas visões da demanda.","Un negocio. Muchas perspectivas de la demanda."],["Teams forecast at different levels for different decisions. If each series is modeled independently, the global forecast may not equal the sum of its components. That gap creates avoidable disagreement in planning, capacity and inventory conversations.","Equipes fazem previsões em diferentes níveis para diferentes decisões. Se cada série for modelada de forma independente, a previsão global pode diferir da soma dos componentes. Essa diferença gera divergências evitáveis no planejamento de capacidade e estoques.","Los equipos elaboran previsiones a distintos niveles para distintas decisiones. Si cada serie se modela de forma independiente, la previsión global puede diferir de la suma de sus componentes. Esa diferencia genera discrepancias evitables en la planificación de capacidad e inventario."],["DELIVERY EXPERIENCE","EXPERIÊNCIA DE ENTREGA","EXPERIENCIA DE ENTREGA"],["Daily","Diária","Diaria"],["hierarchical forecasting for the global Cellulosics business at IFF","previsão hierárquica para o negócio global de Cellulosics na IFF","previsión jerárquica para el negocio global de Cellulosics en IFF"],["At IFF, I led a three-person project team delivering a hierarchical forecasting tool that produced daily predictions for the global Cellulosics business. My work included the forecasting architecture, cloud implementation and project infrastructure.","Na IFF, liderei uma equipe de projeto de três pessoas na entrega de uma ferramenta de previsão hierárquica com previsões diárias para o negócio global de Cellulosics. Meu trabalho incluiu arquitetura de previsão, implementação em nuvem e infraestrutura do projeto.","En IFF, lideré un equipo de proyecto de tres personas que entregó una herramienta de previsión jerárquica con predicciones diarias para el negocio global de Cellulosics. Mi trabajo incluyó arquitectura de previsión, implementación en la nube e infraestructura del proyecto."],["This page demonstrates the reconciliation problem with invented series and values. It contains no IFF data, model, source code, accuracy result or production design.","Esta página demonstra o problema de reconciliação com séries e valores fictícios. Não contém dados, modelos, código, resultados de acurácia ou projetos de produção da IFF.","Esta página demuestra el problema de reconciliación con series y valores ficticios. No contiene datos, modelos, código, resultados de precisión ni diseños de producción de IFF."],["01 / STRUCTURE","01 / ESTRUTURA","01 / ESTRUCTURA"],["Make the hierarchy explicit","Explicite a hierarquia","Explicite la jerarquía"],["Represent how lower-level series aggregate. A summing matrix encodes which components contribute to each total.","Represente como as séries dos níveis inferiores se agregam. Uma matriz de soma define quais componentes contribuem para cada total.","Represente cómo se agregan las series de niveles inferiores. Una matriz de suma define qué componentes contribuyen a cada total."],["02 / MODEL","02 / MODELO","02 / MODELO"],["Forecast at useful levels","Preveja nos níveis relevantes","Prevea en los niveles relevantes"],["NeuralForecast provides neural forecasting models, including NHITS. Model choice still needs time-aware validation against strong baselines.","NeuralForecast oferece modelos neurais de previsão, incluindo NHITS. A escolha exige validação temporal contra boas referências.","NeuralForecast ofrece modelos neuronales de previsión, incluido NHITS. La elección exige validación temporal frente a buenas referencias."],["03 / RECONCILE","03 / RECONCILIAR","03 / RECONCILIAR"],["Restore coherence","Restabeleça a coerência","Restablezca la coherencia"],["Reconciliation maps base forecasts to values that obey the hierarchy. Coherence is guaranteed by construction; improved accuracy must be measured.","A reconciliação transforma previsões de base em valores que respeitam a hierarquia. A coerência é garantida pela construção; a melhora na acurácia deve ser medida.","La reconciliación transforma previsiones de base en valores que respetan la jerarquía. La coherencia se garantiza por construcción; la mejora de precisión debe medirse."],["02 / INTERACTIVE DEMO","02 / DEMONSTRAÇÃO INTERATIVA","02 / DEMOSTRACIÓN INTERACTIVA"],["Where did the total come from?","De onde veio o total?","¿De dónde salió el total?"],["Switch methods to see how a fictional global total and its groups change. All base forecasts, series labels and proportions below are synthetic.","Alterne os métodos para observar as mudanças em um total global fictício e seus grupos. Todas as previsões de base, rótulos e proporções abaixo são sintéticos.","Cambie de método para observar las variaciones en un total global ficticio y sus grupos. Todas las previsiones de base, etiquetas y proporciones son sintéticas."],["Reconciliation method","Método de reconciliação","Método de reconciliación"],["Independent base forecasts","Previsões de base independentes","Previsiones de base independientes"],["Top-down · illustrative shares","De cima para baixo · proporções ilustrativas","De arriba hacia abajo · proporciones ilustrativas"],["OLS projection · identity error weights","Projeção OLS · pesos de erro identidade","Proyección OLS · pesos de error identidad"],["Hierarchy","Hierarquia","Jerarquía"],["Value profile","Perfil de valores","Perfil de valores"],["Base forecasts are produced independently; parent and child values may not add up.","As previsões de base são produzidas de forma independente; os valores dos níveis superiores e inferiores podem não somar corretamente.","Las previsiones de base se producen de forma independiente; los valores de niveles superiores e inferiores pueden no sumar correctamente."],["COHERENCE CHECK","VERIFICAÇÃO DE COERÊNCIA","COMPROBACIÓN DE COHERENCIA"],["Largest parent-to-child difference","Maior diferença entre pai e filhos","Mayor diferencia entre padre e hijos"],["Choose a method to inspect how the hierarchy behaves.","Escolha um método para observar o comportamento da hierarquia.","Elija un método para observar el comportamiento de la jerarquía."],["Read this carefully:","Leia com atenção:","Lea con atención:"],["this is an in-browser teaching example, not a trained NeuralForecast model. It uses fixed, invented point forecasts to explain coherence. Its OLS option is a simple least-squares projection with identity error weights; it is not covariance-estimated MinT or evidence that reconciliation improves accuracy.","este é um exemplo didático no navegador, e não um modelo NeuralForecast treinado. Ele usa previsões pontuais fixas e fictícias para explicar a coerência. A opção OLS é uma projeção de mínimos quadrados com pesos de erro identidade; não é MinT com covariância estimada nem evidência de melhora na acurácia.","este es un ejemplo didáctico en el navegador, no un modelo NeuralForecast entrenado. Utiliza previsiones puntuales fijas y ficticias para explicar la coherencia. La opción OLS es una proyección de mínimos cuadrados con pesos de error identidad; no es MinT con covarianza estimada ni evidencia de mejora de precisión."],["03 / RECONCILIATION CHOICES","03 / ESCOLHAS DE RECONCILIAÇÃO","03 / OPCIONES DE RECONCILIACIÓN"],["Coherence is a constraint. Accuracy is a test.","Coerência é uma restrição. Acurácia exige avaliação.","La coherencia es una restricción. La precisión exige evaluación."],["Bottom-up sums bottom-level forecasts. Top-down allocates an aggregate forecast using proportions. MinT methods choose coherent values using forecast-error covariance assumptions. Each approach has tradeoffs; compare them out of sample at the levels and horizons where decisions are made.","Bottom-up soma previsões do nível inferior. Top-down distribui uma previsão agregada usando proporções. Métodos MinT escolhem valores coerentes com hipóteses sobre a covariância dos erros de previsão. Cada abordagem envolve escolhas; compare-as fora da amostra, nos níveis e horizontes em que as decisões são tomadas.","Bottom-up suma previsiones del nivel inferior. Top-down distribuye una previsión agregada mediante proporciones. Los métodos MinT eligen valores coherentes con supuestos sobre la covarianza de los errores de previsión. Cada enfoque implica compromisos; compárelos fuera de muestra en los niveles y horizontes donde se toman decisiones."],["Preserve the leaves","Preserve as folhas","Conserve las hojas"],["Allocate from the top","Distribua a partir do topo","Distribuya desde arriba"],["Use error structure","Use a estrutura dos erros","Utilice la estructura de errores"],["Keep the bottom-level forecasts, then sum upward. Straightforward and coherent; aggregate-level information from separate forecasts is not used.","Mantenha as previsões do nível inferior e some para cima. Simples e coerente; não utiliza informações de previsões independentes dos níveis agregados.","Conserve las previsiones del nivel inferior y sume hacia arriba. Simple y coherente; no utiliza información de previsiones independientes de los niveles agregados."],["Forecast the aggregate, then distribute it down the hierarchy. The shares matter and can obscure bottom-level patterns.","Preveja o agregado e distribua pela hierarquia. As proporções importam e podem ocultar padrões dos níveis inferiores.","Prevea el agregado y distribúyalo por la jerarquía. Las proporciones importan y pueden ocultar patrones de los niveles inferiores."],["Project base forecasts onto the coherent space while accounting for forecast-error covariance. Estimating that structure well is part of the modeling work.","Projete as previsões de base no espaço coerente considerando a covariância dos erros. Estimar bem essa estrutura faz parte da modelagem.","Proyecte las previsiones de base en el espacio coherente considerando la covarianza de errores. Estimar bien esa estructura forma parte del modelado."],["04 / SOURCES","04 / FONTES","04 / FUENTES"],["Read the method, not just the output.","Conheça o método além do resultado.","Conozca el método además del resultado."],["These references explain the library workflow, reconciliation methods and the statistical basis for MinT.","Estas referências explicam o fluxo da biblioteca, os métodos de reconciliação e a base estatística do MinT.","Estas referencias explican el flujo de la biblioteca, los métodos de reconciliación y la base estadística de MinT."],["OFFICIAL TUTORIAL","TUTORIAL OFICIAL","TUTORIAL OFICIAL"],["OFFICIAL DOCUMENTATION","DOCUMENTAÇÃO OFICIAL","DOCUMENTACIÓN OFICIAL"],["LIBRARY METHODS","MÉTODOS DA BIBLIOTECA","MÉTODOS DE LA BIBLIOTECA"],["PEER-REVIEWED RESEARCH","PESQUISA REVISADA POR PARES","INVESTIGACIÓN REVISADA POR PARES"],["Open the tutorial ↗","Abra o tutorial ↗","Abra el tutorial ↗"],["Read the introduction ↗","Leia a introdução ↗","Lea la introducción ↗"],["Browse the library ↗","Explore a biblioteca ↗","Explore la biblioteca ↗"],["Read the paper ↗","Leia o artigo ↗","Lea el artículo ↗"],["References establish methods and context; they do not validate the historical IFF project or its results. The demo is synthetic. No accuracy improvement is claimed.","As referências fundamentam métodos e contexto; não validam o projeto histórico da IFF nem seus resultados. A demonstração é sintética. Não há alegação de melhora na acurácia.","Las referencias fundamentan métodos y contexto; no validan el proyecto histórico de IFF ni sus resultados. La demostración es sintética. No se afirma una mejora de precisión."],["CONTINUE EXPLORING","CONTINUE EXPLORANDO","SIGA EXPLORANDO"],["Forecasting starts with the decision.","A previsão começa pela decisão.","La previsión comienza por la decisión."],["Back to the portfolio ↗","Voltar ao portfólio ↗","Volver al portafolio ↗"],["Browse the route files ↗","Explore os arquivos da página ↗","Explore los archivos de la página ↗"],["Connect on LinkedIn ↗","Conecte-se no LinkedIn ↗","Conecte en LinkedIn ↗"],["NETWORK SCIENCE · INTERACTIVE DEMONSTRATION","CIÊNCIA DE REDES · DEMONSTRAÇÃO INTERATIVA","CIENCIA DE REDES · DEMOSTRACIÓN INTERACTIVA"],["When one node","Quando um nó","Cuando un nodo"],["moves,","muda,","cambia,"],["who feels it?","quem sente?","¿quién lo siente?"],["A synthetic network makes one idea visible: a change in one influential member can alter the risk signal around them.","Uma rede sintética torna uma ideia visível: uma mudança em um membro influente pode alterar o sinal de risco ao seu redor.","Una red sintética hace visible una idea: un cambio en un miembro influyente puede alterar la señal de riesgo a su alrededor."],["Explore the message-passing intuition behind network-aware churn analysis. The graph and values below are invented for demonstration.","Explore a intuição de passagem de mensagens na análise de churn em redes. O grafo e os valores abaixo são fictícios para fins de demonstração.","Explore la intuición del paso de mensajes en el análisis de churn en redes. El grafo y los valores son ficticios para fines de demostración."],["Explore the simulation","Explore a simulação","Explore la simulación"],["A small signal","Um pequeno sinal","Una pequeña señal"],["can travel far.","pode chegar longe.","puede llegar lejos."],["WEIGHTED TIES","CONEXÕES PONDERADAS","CONEXIONES PONDERADAS"],["PASSING SIGNALS","TRANSMISSÃO DE SINAIS","TRANSMISIÓN DE SEÑALES"],["CHANGING EXPOSURE","EXPOSIÇÃO EM MUDANÇA","EXPOSICIÓN CAMBIANTE"],["01 / PLAY WITH THE NETWORK","01 / EXPLORE A REDE","01 / EXPLORE LA RED"],["Start with one signal.","Comece com um sinal.","Comience con una señal."],["Choose a starting node. Step through a few rounds and watch its neighbors—and their neighbors—receive weighted messages.","Escolha um nó inicial. Avance algumas rodadas e observe seus vizinhos — e os vizinhos deles — receberem mensagens ponderadas.","Elija un nodo inicial. Avance algunas rondas y observe cómo sus vecinos — y los vecinos de estos — reciben mensajes ponderados."],["SYNTHETIC NETWORK","REDE SINTÉTICA","RED SINTÉTICA"],["Lower exposure","Menor exposição","Menor exposición"],["Rising exposure","Exposição crescente","Exposición creciente"],["Elevated exposure","Exposição elevada","Exposición elevada"],["Tie strength","Força da conexão","Fuerza de conexión"],["SCENARIO CONTROLS","CONTROLES DO CENÁRIO","CONTROLES DEL ESCENARIO"],["Initial signal","Sinal inicial","Señal inicial"],["Message strength","Intensidade da mensagem","Intensidad del mensaje"],["Muted","Fraca","Débil"],["Strong","Forte","Fuerte"],["▶ Play","▶ Iniciar","▶ Iniciar"],["Step →","Avançar →","Avanzar →"],["MOST EXPOSED · EXCLUDING SEED","MAIS EXPOSTO · EXCLUINDO O NÓ INICIAL","MÁS EXPUESTO · EXCLUYENDO EL NODO INICIAL"],["Choose Play or Step to begin.","Escolha Iniciar ou Avançar para começar.","Elija Iniciar o Avanzar para comenzar."],["Each round updates every member at once from the previous round’s signals.","Cada rodada atualiza todos os membros ao mesmo tempo a partir dos sinais da rodada anterior.","Cada ronda actualiza todos los miembros al mismo tiempo a partir de las señales de la ronda anterior."],["02 / THE MECHANISM","02 / O MECANISMO","02 / EL MECANISMO"],["A simple","Uma regra simples","Una regla simple"],["message rule.","de mensagens.","de mensajes."],["Each member sends a fraction of their current signal along each tie. A noisy-OR combines incoming messages while preserving an individual baseline.","Cada membro envia uma fração do seu sinal atual por cada conexão. Uma regra noisy-OR combina as mensagens recebidas preservando uma linha de base individual.","Cada miembro envía una fracción de su señal actual por cada conexión. Una regla noisy-OR combina los mensajes recibidos conservando una línea de base individual."],["synthetic baseline risk for member i","risco de base sintético do membro i","riesgo de base sintético del miembro i"],["the message-strength control","controle de intensidade da mensagem","control de intensidad del mensaje"],["tie strength from member j to i","força da conexão do membro j ao i","fuerza de conexión del miembro j al i"],["member j’s signal in the current round","sinal do membro j na rodada atual","señal del miembro j en la ronda actual"],["This compact rule is for explanation, not inference. Real churn models need validated data, leakage controls, calibration, time-aware evaluation, governance and a clear intervention policy.","Esta regra compacta serve para explicação, não para inferência. Modelos reais de churn exigem dados validados, controles de vazamento, calibração, avaliação temporal, governança e uma política clara de intervenção.","Esta regla compacta sirve para explicar, no para inferir. Los modelos reales de churn requieren datos validados, controles de fuga, calibración, evaluación temporal, gobernanza y una política clara de intervención."],["03 / THE PROFESSIONAL STORY","03 / A EXPERIÊNCIA PROFISSIONAL","03 / LA EXPERIENCIA PROFESIONAL"],["Built from a real question.","Nascido de uma pergunta real.","Nacido de una pregunta real."],["Shown with a new example.","Ilustrado com um novo exemplo.","Ilustrado con un nuevo ejemplo."],["At Nextel, I developed a proprietary graph-based churn model called","Na Nextel, desenvolvi um modelo proprietário de churn baseado em grafos chamado","En Nextel, desarrollé un modelo propietario de churn basado en grafos llamado"],[". It drew on network influence, message-passing ideas and probabilistic graphical models to examine how churn by an influential member could change risk across their close network. I explored graph tooling including NetworkX and graph databases.",". Ele usava influência em redes, passagem de mensagens e modelos gráficos probabilísticos para examinar como a saída de um membro influente poderia alterar o risco em sua rede próxima. Explorei ferramentas como NetworkX e bancos de dados de grafos.",". Utilizaba influencia en redes, paso de mensajes y modelos gráficos probabilísticos para examinar cómo la salida de un miembro influyente podría cambiar el riesgo en su red cercana. Exploré herramientas como NetworkX y bases de datos de grafos."],["Historical ROC-AUC, as recalled by the author.","ROC-AUC histórico, conforme lembrança do autor.","ROC-AUC histórico, según el recuerdo del autor."],["The original model, evaluation data and artifacts are unavailable, so this figure has not been independently verified or reproduced here.","O modelo original, os dados e os artefatos de avaliação não estão disponíveis; portanto, esse número não foi verificado de forma independente nem reproduzido aqui.","El modelo original, los datos y los artefactos de evaluación no están disponibles; por ello, esta cifra no se ha verificado de forma independiente ni reproducido aquí."],["Important boundary","Limite importante","Límite importante"],["This public demo is a new, synthetic teaching example. It is not the proprietary Favorites algorithm, its source code, its parameters, or a reproduction of its performance. No customer, carrier or subscriber data is included.","Esta demonstração pública é um novo exemplo didático sintético. Não é o algoritmo proprietário Favorites, seu código, seus parâmetros nem uma reprodução de seu desempenho. Não inclui dados de clientes, operadoras ou assinantes.","Esta demostración pública es un nuevo ejemplo didáctico sintético. No es el algoritmo propietario Favorites, su código, sus parámetros ni una reproducción de su rendimiento. No incluye datos de clientes, operadores o abonados."],["04 / RESEARCH CONTEXT","04 / CONTEXTO CIENTÍFICO","04 / CONTEXTO CIENTÍFICO"],["Ideas with a research trail.","Ideias com base científica.","Ideas con base científica."],["These sources ground the modeling concepts and the telecom use case. They are context for this demonstration, not validation of the historical Favorites model.","Estas fontes fundamentam os conceitos de modelagem e o caso de telecomunicações. Dão contexto à demonstração, sem validar o modelo histórico Favorites.","Estas fuentes fundamentan los conceptos de modelado y el caso de telecomunicaciones. Aportan contexto a la demostración, sin validar el modelo histórico Favorites."],["Predictive association does not by itself establish causal peer influence. These publications provide scientific context; they do not verify or reproduce Favorites or its recalled 0.80–0.85 ROC-AUC.","Associação preditiva, por si só, não estabelece influência causal entre pares. Estas publicações oferecem contexto científico; não verificam nem reproduzem o Favorites ou seu ROC-AUC lembrado de 0,80–0,85.","La asociación predictiva no establece por sí sola influencia causal entre pares. Estas publicaciones aportan contexto científico; no verifican ni reproducen Favorites ni su ROC-AUC recordado de 0,80–0,85."],["KEEP EXPLORING","CONTINUE EXPLORANDO","SIGA EXPLORANDO"],["Good models begin","Bons modelos começam","Los buenos modelos comienzan"],["with better questions.","com perguntas melhores.","con mejores preguntas."],["Source code on GitHub ↗","Código-fonte no GitHub ↗","Código fuente en GitHub ↗"],["Connect with Fernando ↗","Conecte-se com Fernando ↗","Conecte con Fernando ↗"],["Synthetic illustration · No customer data · Personal work","Ilustração sintética · Sem dados de clientes · Trabalho pessoal","Ilustración sintética · Sin datos de clientes · Trabajo personal"]]);
rows.push(...[["Product Management Intern","Estagiário em gestão de produtos","Becario de gestión de productos"],["2025–Present","2025–Atual","2025–Actual"],["Ⅱ Pause","Ⅱ Pausar","Ⅱ Pausar"],["CORE","CENTRAL","CENTRAL"],["PERIPHERY","PERIFERIA","PERIFERIA"],["BRIDGE","PONTE","PUENTE"],["Global total","Total global","Total global"],["Bottom-up preserves each leaf forecast, then sums components to every parent.","Bottom-up preserva cada previsão no nível inferior e soma os componentes para cada nível superior.","Bottom-up conserva cada previsión del nivel inferior y suma los componentes para cada nivel superior."],["Top-down preserves the synthetic global forecast and allocates it using invented historical shares.","Top-down preserva a previsão global sintética e a distribui usando proporções históricas fictícias.","Top-down conserva la previsión global sintética y la distribuye con proporciones históricas ficticias."],["OLS projects all seven base values onto the coherent space, treating base errors as equally weighted and uncorrelated.","OLS projeta os sete valores de base no espaço coerente, com erros de base de mesmo peso e sem correlação.","OLS proyecta los siete valores de base en el espacio coherente, con errores de base de igual peso y sin correlación."],["Every parent equals the sum of its children in this synthetic example.","Cada nível superior equivale à soma de seus componentes neste exemplo sintético.","Cada nivel superior equivale a la suma de sus componentes en este ejemplo sintético."],["FIELD NOTES","NOTAS TÉCNICAS","NOTAS TÉCNICAS"],["/ APPLIED AI","/ IA APLICADA","/ IA APLICADA"],["FOUNDATIONS · PROBABILISTIC MODELS","FUNDAMENTOS · MODELOS PROBABILÍSTICOS","FUNDAMENTOS · MODELOS PROBABILÍSTICOS"],["FOUNDATIONS · MESSAGE PASSING","FUNDAMENTOS · PASSAGEM DE MENSAGENS","FUNDAMENTOS · PASO DE MENSAJES"],["APPLICATION · TELECOM CHURN","APLICAÇÃO · CHURN EM TELECOM","APLICACIÓN · CHURN EN TELECOM"],["EVALUATION · NETWORK DESIGN","AVALIAÇÃO · DESENHO DA REDE","EVALUACIÓN · DISEÑO DE RED"],["A comprehensive reference on model representation, inference and learning.","Uma referência abrangente sobre representação de modelos, inferência e aprendizado.","Una referencia completa sobre representación de modelos, inferencia y aprendizaje."],["Nixtla’s worked example demonstrates HINT with NHITS and compares BottomUp and MinTrace reconciliation on a public tourism hierarchy.","O exemplo da Nixtla demonstra HINT com NHITS e compara as reconciliações BottomUp e MinTrace em uma hierarquia pública de turismo.","El ejemplo de Nixtla demuestra HINT con NHITS y compara las reconciliaciones BottomUp y MinTrace en una jerarquía pública de turismo."],["Overview of neural model families, probabilistic forecasts and the library’s workflow.","Visão geral das famílias de modelos neurais, previsões probabilísticas e fluxo da biblioteca.","Visión general de las familias de modelos neuronales, previsiones probabilísticas y flujo de la biblioteca."],["Python methods include BottomUp, TopDown, MiddleOut, MinTrace, ERM and probabilistic reconciliation tools.","Os métodos em Python incluem BottomUp, TopDown, MiddleOut, MinTrace, ERM e ferramentas de reconciliação probabilística.","Los métodos en Python incluyen BottomUp, TopDown, MiddleOut, MinTrace, ERM y herramientas de reconciliación probabilística."],["NIXTLA · PYTHON WORKFLOW SKETCH","NIXTLA · ESBOÇO DE FLUXO EM PYTHON","NIXTLA · ESBOZO DE FLUJO EN PYTHON"],["MODEL ≠ RECONCILER","MODELO ≠ RECONCILIADOR","MODELO ≠ RECONCILIADOR"],["Open the runnable Python example ↗","Abra o exemplo executável em Python ↗","Abra el ejemplo ejecutable en Python ↗"],["Workflow sketch based on Nixtla’s current tutorial. Dataset preparation and fitted residuals are omitted; adapt to the actual hierarchy, forecasting horizon and library versions before running.","Esboço baseado no tutorial atual da Nixtla. A preparação dos dados e os resíduos ajustados foram omitidos; adapte à hierarquia, ao horizonte e às versões das bibliotecas antes de executar.","Esbozo basado en el tutorial actual de Nixtla. Se omiten la preparación de datos y los residuos ajustados; adapte a la jerarquía, al horizonte y a las versiones de las bibliotecas antes de ejecutar."],["Fernando Barbosa · Applied AI & Decision Science","Fernando Barbosa · IA aplicada e ciência da decisão","Fernando Barbosa · IA aplicada y ciencia de decisiones"]]);
rows.push(...[["Interactive demonstration","Demonstração interativa","Demostración interactiva"],["Forecasting page navigation","Navegação da página de previsão","Navegación de la página de previsión"],["Forecasting","Previsão","Previsión"],["Network Signal — Message Passing Demo","Sinal em rede — Demonstração de passagem de mensagens","Señal en red — Demostración de paso de mensajes"],["Animated synthetic member network","Rede sintética animada de membros","Red sintética animada de miembros"],["Twelve fictional members connected by weighted ties. A selected member begins with elevated churn risk; messages update neighboring risk estimates over each round.","Doze membros fictícios conectados por relações ponderadas. Um membro selecionado começa com risco elevado de churn; mensagens atualizam as estimativas de risco dos vizinhos a cada rodada.","Doce miembros ficticios conectados por relaciones ponderadas. Un miembro seleccionado comienza con riesgo elevado de churn; los mensajes actualizan las estimaciones de riesgo de los vecinos en cada ronda."],["Choose initial signal node","Escolha o nó do sinal inicial","Elija el nodo de señal inicial"],["“Factor graphs and the sum-product algorithm.” A foundational treatment of local message passing for probabilistic inference. The demo’s noisy-OR update is a different, simplified rule.","“Factor graphs and the sum-product algorithm.” Uma referência fundamental sobre passagem local de mensagens para inferência probabilística. A atualização noisy-OR da demonstração é uma regra diferente e simplificada.","“Factor graphs and the sum-product algorithm.” Una referencia fundamental sobre el paso local de mensajes para inferencia probabilística. La actualización noisy-OR de la demostración es una regla diferente y simplificada."],["“Social network analysis for customer churn prediction.” Studies relational learning and network effects in real telecom churn data.","“Social network analysis for customer churn prediction.” Estuda aprendizado relacional e efeitos de rede em dados reais de churn em telecomunicações.","“Social network analysis for customer churn prediction.” Estudia aprendizaje relacional y efectos de red en datos reales de churn en telecomunicaciones."],["“Social network analytics for churn prediction in telco.” Across eight call-detail datasets, network construction affected results; collective inference did not improve performance in their benchmark.","“Social network analytics for churn prediction in telco.” Em oito conjuntos de registros de chamadas, a construção da rede afetou os resultados; a inferência coletiva não melhorou o desempenho no benchmark dos autores.","“Social network analytics for churn prediction in telco.” En ocho conjuntos de registros de llamadas, la construcción de la red afectó los resultados; la inferencia colectiva no mejoró el rendimiento en el benchmark de los autores."],["“Optimal forecast reconciliation for hierarchical and grouped time series through trace minimization.” The MinT paper in the Journal of the American Statistical Association.","“Optimal forecast reconciliation for hierarchical and grouped time series through trace minimization.” O artigo sobre MinT no Journal of the American Statistical Association.","“Optimal forecast reconciliation for hierarchical and grouped time series through trace minimization.” El artículo sobre MinT en el Journal of the American Statistical Association."],["Risk at the next round equals one minus the individual baseline survival multiplied by the survival from every incoming message.","O risco na próxima rodada equivale a um menos a sobrevivência individual de base multiplicada pela sobrevivência de cada mensagem recebida.","El riesgo en la próxima ronda equivale a uno menos la supervivencia individual de base multiplicada por la supervivencia de cada mensaje recibido."],["Illustration of a total forecast connected to two groups and four component series","Ilustração de uma previsão total conectada a dois grupos e quatro séries componentes","Ilustración de una previsión total conectada a dos grupos y cuatro series componentes"],["Selected scope of work","Escopo de trabalho selecionado","Alcance de trabajo seleccionado"],["Open network churn demonstration","Abra a demonstração de churn em redes","Abra la demostración de churn en redes"],["Open hierarchical forecasting field note","Abra a nota técnica de previsão hierárquica","Abra la nota técnica de previsión jerárquica"],["A weighted network of connected nodes","Uma rede ponderada de nós conectados","Una red ponderada de nodos conectados"],["A hierarchy with a total, two groups and four leaves","Uma hierarquia com um total, dois grupos e quatro folhas","Una jerarquía con un total, dos grupos y cuatro hojas"]]);
rows.push(...[["Research","Pesquisa","Investigación"],["UNICAMP research","Pesquisa na UNICAMP","Investigación en UNICAMP"],["Learning to decide under constraints.","Aprender a decidir sob restrições.","Aprender a decidir con restricciones."],["My master's research explored reinforcement learning for fraud prevention in crop insurance—connecting statistical signals, sequential decisions and a limited budget.","Minha pesquisa de mestrado explorou aprendizado por reforço para prevenção de fraudes no seguro agrícola, conectando sinais estatísticos, decisões sequenciais e um orçamento limitado.","Mi investigación de maestría exploró el aprendizaje por refuerzo para prevenir fraudes en seguros agrícolas, conectando señales estadísticas, decisiones secuenciales y un presupuesto limitado."],["Master's in Digital Agriculture","Mestrado em Agricultura Digital","Maestría en Agricultura Digital"],["UNICAMP · Campinas · 2021–2023","UNICAMP · Campinas · 2021–2023","UNICAMP · Campinas · 2021–2023"],["Explore the research code","Explore o código da pesquisa","Explore el código de investigación"],["Thesis defense at FEAGRI / UNICAMP, Campinas, 2023.","Defesa de dissertação na FEAGRI / UNICAMP, Campinas, 2023.","Defensa de tesis en FEAGRI / UNICAMP, Campinas, 2023."],["Fernando at his UNICAMP thesis defense with two other participants","Fernando em sua defesa de dissertação na UNICAMP com outros dois participantes","Fernando en su defensa de tesis en UNICAMP con otros dos participantes"],["The research question","A pergunta de pesquisa","La pregunta de investigación"],["How should a policy make a sequence of insurance decisions when each choice changes the remaining budget?","Como uma política deve tomar decisões sequenciais de seguro quando cada escolha altera o orçamento restante?","¿Cómo debería una política tomar decisiones secuenciales de seguro cuando cada elección cambia el presupuesto restante?"],["The thesis brought together my interests in economics, machine learning and decision-making. The public gym-insurance repository contains InsurEnv, an experimental environment for studying insurance-claim decisions with reinforcement learning.","A dissertação reuniu meus interesses em economia, aprendizado de máquina e tomada de decisão. O repositório público gym-insurance contém o InsurEnv, um ambiente experimental para estudar decisões sobre sinistros com aprendizado por reforço.","La tesis reunió mis intereses en economía, aprendizaje automático y toma de decisiones. El repositorio público gym-insurance contiene InsurEnv, un entorno experimental para estudiar decisiones sobre reclamaciones de seguros mediante aprendizaje por refuerzo."],["Thesis title","Título da dissertação","Título de la tesis"],["Reinforcement Learning Applied to Fraud Prevention for Crop Insurance","Aprendizado por Reforço aplicado à Prevenção contra Fraudes no Seguro Agrícola","Aprendizaje por refuerzo aplicado a la prevención del fraude en seguros agrícolas"],["Inside the research","Por dentro da pesquisa","Dentro de la investigación"],["From data to a decision policy.","Dos dados a uma política de decisão.","De los datos a una política de decisión."],["Prepare the insurance data","Preparar os dados de seguro","Preparar los datos de seguros"],["The repository includes data-preparation scripts and a sample selection for soybean insurance in Paraná, Brazil.","O repositório inclui scripts de preparação de dados e seleção de uma amostra de seguros de soja no Paraná.","El repositorio incluye scripts de preparación de datos y selección de una muestra de seguros de soja en Paraná, Brasil."],["Represent the decision environment","Representar o ambiente de decisão","Representar el entorno de decisión"],["InsurEnv combines claim features, budget usage, approval history and statistical signals in a Gym-style environment with two actions.","O InsurEnv reúne atributos dos sinistros, uso do orçamento, histórico de aprovação e sinais estatísticos em um ambiente no estilo Gym com duas ações.","InsurEnv combina atributos de las reclamaciones, uso del presupuesto, historial de aprobación y señales estadísticas en un entorno de estilo Gym con dos acciones."],["Define the learning signal","Definir o sinal de aprendizado","Definir la señal de aprendizaje"],["The environment's reward compares Benford-distance measures for selected claim values. A wallet component tracks decisions and the available budget.","A recompensa do ambiente compara medidas de distância de Benford para os valores dos sinistros selecionados. Um componente de carteira registra decisões e o orçamento disponível.","La recompensa del entorno compara medidas de distancia de Benford para los valores seleccionados. Un componente de cartera registra decisiones y presupuesto disponible."],["Study a learned policy","Estudar uma política aprendida","Estudiar una política aprendida"],["The public code includes a TensorFlow/Keras Deep Q-Network agent with experience replay, a target network and exploration, alongside scripts for random-agent comparisons and experiment analysis.","O código público inclui um agente Deep Q-Network em TensorFlow/Keras com replay de experiências, rede-alvo e exploração, além de scripts para comparação com agentes aleatórios e análise de experimentos.","El código público incluye un agente Deep Q-Network en TensorFlow/Keras con repetición de experiencias, red objetivo y exploración, además de scripts para comparar con agentes aleatorios y analizar experimentos."],["What the signal means","O significado do sinal","El significado de la señal"],["Benford conformity is a statistical proxy. Confirmed fraud labels are needed to measure fraud-detection performance. Reward improvement alone does not establish that fraudulent claims have been identified.","A conformidade com Benford é um indicador estatístico indireto. Rótulos de fraude confirmada são necessários para medir o desempenho de detecção. Melhorar a recompensa, por si só, não comprova a identificação de sinistros fraudulentos.","La conformidad con Benford es un indicador estadístico indirecto. Se necesitan etiquetas de fraude confirmado para medir la detección. Mejorar la recompensa, por sí solo, no demuestra la identificación de reclamaciones fraudulentas."],["Read the implementation","Leia a implementação","Lea la implementación"],["Research you can inspect.","Pesquisa que você pode explorar.","Investigación que puede explorar."],["Environment & reward","Ambiente e recompensa","Entorno y recompensa"],["Budget & decision history","Orçamento e histórico de decisões","Presupuesto e historial de decisiones"],["DQN agent","Agente DQN","Agente DQN"],["Data preparation","Preparação dos dados","Preparación de datos"],["Research prototype. The source links document the experimental design; no reproduced benchmark or production result is presented here.","Protótipo de pesquisa. Os links de código documentam o desenho experimental; esta página não apresenta um benchmark reproduzido nem um resultado de produção.","Prototipo de investigación. Los enlaces al código documentan el diseño experimental; esta página no presenta un benchmark reproducido ni resultados de producción."],["Beyond the code","Além do código","Más allá del código"],["A personal chapter in a technical journey.","Um capítulo pessoal em uma trajetória técnica.","Un capítulo personal en una trayectoria técnica."],["These photographs bring the university and the defense day into the story behind the work.","Estas fotografias trazem a universidade e o dia da defesa para a história por trás do trabalho.","Estas fotografías incorporan la universidad y el día de la defensa a la historia detrás del trabajo."],["A visit to the UNICAMP campus.","Uma visita ao campus da UNICAMP.","Una visita al campus de UNICAMP."],["Fernando standing beside the UNICAMP campus sign","Fernando ao lado do monumento com o nome UNICAMP","Fernando junto al letrero del campus de UNICAMP"],["A moment after the thesis defense.","Um momento após a defesa da dissertação.","Un momento después de la defensa de tesis."],["Fernando with another participant after his thesis defense","Fernando com outro participante após sua defesa de dissertação","Fernando con otro participante después de su defensa de tesis"],["The research behind my practice.","A pesquisa por trás da minha prática.","La investigación detrás de mi práctica."],["At UNICAMP, I explored reinforcement learning for crop-insurance fraud prevention. The research connects my economics background with the design of decision systems.","Na UNICAMP, explorei aprendizado por reforço para prevenção de fraudes no seguro agrícola. A pesquisa conecta minha formação em economia ao desenho de sistemas de decisão.","En UNICAMP, exploré el aprendizaje por refuerzo para prevenir fraudes en seguros agrícolas. La investigación conecta mi formación en economía con el diseño de sistemas de decisión."],["Read the UNICAMP research story","Leia a história da pesquisa na UNICAMP","Lea la historia de la investigación en UNICAMP"],["Reinforcement learning / academic research","Aprendizado por reforço / pesquisa acadêmica","Aprendizaje por refuerzo / investigación académica"],["Insurance decisions under constraints","Decisões de seguro sob restrições","Decisiones de seguros con restricciones"],["UNICAMP master's research and the public gym-insurance environment, exploring sequential decisions and statistical reward design.","Pesquisa de mestrado na UNICAMP e o ambiente público gym-insurance, explorando decisões sequenciais e o desenho de recompensas estatísticas.","Investigación de maestría en UNICAMP y el entorno público gym-insurance, explorando decisiones secuenciales y el diseño de recompensas estadísticas."],["Education & research","Formação e pesquisa","Formación e investigación"],["Economics & International Trade","Economia e Comércio Internacional","Economía y Comercio Internacional"],["Research at UNICAMP | Fernando Barbosa","Pesquisa na UNICAMP | Fernando Barbosa","Investigación en UNICAMP | Fernando Barbosa"]]);
rows.push(...[["My role was at Monsanto in 2014–2016. Bayer acquired Monsanto in 2018.","Minha atuação foi na Monsanto em 2014–2016. A Bayer adquiriu a Monsanto em 2018.","Mi trabajo fue en Monsanto en 2014–2016. Bayer adquirió Monsanto en 2018."],["My role was at Noverde in 2019–2021. Dotz acquired Noverde in 2022.","Minha atuação foi na Noverde em 2019–2021. A Dotz adquiriu a Noverde em 2022.","Mi trabajo fue en Noverde en 2019–2021. Dotz adquirió Noverde en 2022."],["Grupo SBF brings together Centauro and Fisia, Nike’s official distributor in Brazil. These brands describe the group context; my employment was with Grupo SBF.","O Grupo SBF reúne Centauro e Fisia, distribuidora oficial da Nike no Brasil. As marcas contextualizam o grupo; meu vínculo foi com o Grupo SBF.","Grupo SBF reúne a Centauro y Fisia, distribuidora oficial de Nike en Brasil. Estas marcas describen el contexto del grupo; mi empleo fue en Grupo SBF."],["The people behind the work","As pessoas por trás do trabalho","Las personas detrás del trabajo"],["A career is built with people.","Uma carreira se constrói com pessoas.","Una carrera se construye con personas."],["Noverde · 2019 / A chapter in credit and behavioral modeling.","Noverde · 2019 / Uma etapa em modelos de crédito e comportamento.","Noverde · 2019 / Una etapa en modelos de crédito y comportamiento."],["Noverde · 2019 / Celebrating the company’s third anniversary with colleagues.","Noverde · 2019 / Celebrando três anos da empresa com colegas.","Noverde · 2019 / Celebrando el tercer aniversario de la empresa con colegas."],["UNICAMP · 2023 / Master’s thesis defense in Digital Agriculture.","UNICAMP · 2023 / Defesa do mestrado em Agricultura Digital.","UNICAMP · 2023 / Defensa de la maestría en Agricultura Digital."],["Noverde · 2019 / Science advances through collaboration.","Noverde · 2019 / A ciência avança com colaboração.","Noverde · 2019 / La ciencia avanza con colaboración."],["From research to delivery","Da pesquisa à entrega","De la investigación a la entrega"],["Technical depth. Shared responsibility.","Profundidade técnica. Responsabilidade compartilhada.","Profundidad técnica. Responsabilidad compartida."],["From graph-based churn at Nextel to global forecasting at IFF and international financial decision systems at FICO, I connect scientific reasoning with the teams and decisions it needs to serve.","De churn em grafos na Nextel à previsão global na IFF e sistemas de decisão financeira internacionais na FICO, conecto raciocínio científico às equipes e decisões que ele precisa apoiar.","Desde churn con grafos en Nextel hasta previsiones globales en IFF y sistemas internacionales de decisión financiera en FICO, conecto el razonamiento científico con los equipos y decisiones que debe apoyar."],["During my master’s in Digital Agriculture, I studied reinforcement learning for crop-insurance fraud prevention. The gym-insurance repository documents that research direction, connecting economic constraints with sequential decision-making.","No mestrado em Agricultura Digital, estudei aprendizado por reforço para prevenção de fraudes em seguros agrícolas. O repositório gym-insurance documenta essa linha de pesquisa, conectando restrições econômicas à tomada de decisões sequenciais.","Durante mi maestría en Agricultura Digital, estudié aprendizaje por refuerzo para prevenir fraudes en seguros agrícolas. El repositorio gym-insurance documenta esa línea de investigación, conectando restricciones económicas con decisiones secuenciales."],["Academic research, with subsequent repository experiments. The code is not a validated fraud-detection product.","Pesquisa acadêmica, com experimentos posteriores no repositório. O código não é um produto validado de detecção de fraudes.","Investigación académica, con experimentos posteriores en el repositorio. El código no es un producto validado de detección de fraude."],["Where this work comes from","De onde vem este trabalho","De dónde viene este trabajo"],["See the career timeline","Ver a trajetória profissional","Ver la trayectoria profesional"],["As a Data Scientist at IFF, I led three project contributors delivering daily hierarchical forecasts for the global Cellulosics business. I owned architectural choices, infrastructure and cloud implementation within that project.","Como cientista de dados na IFF, liderei três participantes na entrega de previsões hierárquicas diárias para o negócio global de celulósicos. Fui responsável pelas escolhas arquiteturais, infraestrutura e implementação em nuvem do projeto.","Como científico de datos en IFF, lideré a tres participantes en la entrega de previsiones jerárquicas diarias para el negocio global de celulósicos. Asumí las decisiones de arquitectura, infraestructura e implementación en la nube del proyecto."],["This public example explains the forecasting problem using synthetic data. It does not expose IFF’s production system or establish which libraries were used there.","Este exemplo público explica o problema com dados sintéticos. Ele não expõe o sistema de produção da IFF nem estabelece quais bibliotecas foram usadas lá.","Este ejemplo público explica el problema con datos sintéticos. No expone el sistema de producción de IFF ni establece qué bibliotecas se utilizaron allí."],["Where this work comes from","De onde vem este trabalho","De dónde viene este trabajo"],["See the career timeline","Ver a trajetória profissional","Ver la trayectoria profesional"],["At Nextel, I developed Favorites: a proprietary graph-based churn model exploring how an influential customer’s departure changes risk in their close network. I used NetworkX and explored graph databases and visualization.","Na Nextel, desenvolvi o Favorites: um modelo proprietário de churn baseado em grafos que explorava como a saída de um cliente influente altera o risco em sua rede próxima. Usei NetworkX e explorei bancos de grafos e visualização.","En Nextel, desarrollé Favorites: un modelo propietario de churn basado en grafos que exploraba cómo la salida de un cliente influyente modifica el riesgo en su red cercana. Utilicé NetworkX y exploré bases de datos de grafos y visualización."],["The animation is a new synthetic teaching example inspired by that experience. It is not the original model or a reproduction of its performance.","A animação é um novo exemplo didático sintético inspirado nessa experiência. Não é o modelo original nem uma reprodução de seu desempenho.","La animación es un nuevo ejemplo didáctico sintético inspirado en esa experiencia. No es el modelo original ni una reproducción de su rendimiento."],["Where this work comes from","De onde vem este trabalho","De dónde viene este trabajo"],["See the career timeline","Ver a trajetória profissional","Ver la trayectoria profesional"],["My work on customer solution design at FICO and credit underwriting at Cora provides the professional context for these experiments: translating a credit question into data, analysis and a decision workflow.","Meu trabalho em desenho de soluções para clientes na FICO e concessão de crédito na Cora oferece o contexto profissional destes experimentos: transformar uma pergunta de crédito em dados, análise e um fluxo de decisão.","Mi trabajo en diseño de soluciones para clientes en FICO y evaluación crediticia en Cora aporta el contexto profesional de estos experimentos: convertir una pregunta de crédito en datos, análisis y un flujo de decisión."],["Independent research on synthetic data. The dates identify relevant roles, not prototype development dates. No deployment at either employer is claimed.","Pesquisa independente com dados sintéticos. As datas identificam funções relevantes, não as datas de desenvolvimento do protótipo. Não há alegação de implantação em nenhuma das empresas.","Investigación independiente con datos sintéticos. Las fechas identifican puestos relevantes, no fechas de desarrollo del prototipo. No se afirma una implantación en ninguna de las empresas."],["Where this work comes from","De onde vem este trabalho","De dónde viene este trabajo"],["See the career timeline","Ver a trajetória profissional","Ver la trayectoria profesional"],["My Economics and International Trade studies at PUC-SP (2011–2015) provide the foundation for this public-data tooling: making Brazilian economic statistics easier to discover and analyze with Python.","Minha formação em Economia e Comércio Internacional na PUC-SP (2011–2015) fundamenta este trabalho com dados públicos: facilitar a descoberta e análise de estatísticas econômicas brasileiras com Python.","Mi formación en Economía y Comercio Internacional en PUC-SP (2011–2015) fundamenta este trabajo con datos públicos: facilitar la búsqueda y el análisis de estadísticas económicas brasileñas con Python."],["A personal open-source project. No employer application or project development period is established here.","Um projeto pessoal de código aberto. Não se estabelece aqui uma aplicação em empresa nem o período de desenvolvimento.","Un proyecto personal de código abierto. Aquí no se establece una aplicación empresarial ni el período de desarrollo."],["Where this work comes from","De onde vem este trabalho","De dónde viene este trabajo"],["See the career timeline","Ver a trajetória profissional","Ver la trayectoria profesional"],["Credit-agent experiments","Experimentos com agentes de crédito","Experimentos con agentes de crédito"],["From a business question to inspectable analytical steps.","De uma pergunta de negócio a etapas analíticas verificáveis.","De una pregunta de negocio a pasos analíticos verificables."],["What the repository explores","O que o repositório explora","Qué explora el repositorio"],["Synthetic banking data in SQLite, natural-language SQL agents and a LangGraph workflow connecting analytical objectives, metrics, evidence and reporting.","Dados bancários sintéticos em SQLite, agentes SQL em linguagem natural e um fluxo LangGraph que conecta objetivos analíticos, métricas, evidências e relatórios.","Datos bancarios sintéticos en SQLite, agentes SQL en lenguaje natural y un flujo LangGraph que conecta objetivos analíticos, métricas, evidencia e informes."],["A practical bridge between economic questions and public data.","Uma ponte prática entre perguntas econômicas e dados públicos.","Un puente práctico entre preguntas económicas y datos públicos."],["From metadata to analysis","Dos metadados à análise","De los metadatos al análisis"],["This Python client supports discovery of IBGE aggregate metadata and retrieval into pandas DataFrames. The repository includes source code and an example notebook.","Este cliente Python apoia a descoberta de metadados de agregados do IBGE e sua obtenção em DataFrames pandas. O repositório inclui código-fonte e um notebook de exemplo.","Este cliente Python permite descubrir metadatos de agregados del IBGE y obtenerlos en DataFrames pandas. El repositorio incluye código fuente y un notebook de ejemplo."],["Professional context: FICO · 2025–Present","Contexto profissional: FICO · 2025–Presente","Contexto profesional: FICO · 2025–Actualidad"],["Independent open-source work","Trabalho independente de código aberto","Trabajo independiente de código abierto"],["Economics & public data","Economia e dados públicos","Economía y datos públicos"],["Monsanto · Bayer","Monsanto · Bayer","Monsanto · Bayer"],["Noverde · Dotz","Noverde · Dotz","Noverde · Dotz"]]);
rows.push(...[["While still a Product Management Intern at Monsanto, I initiated a simple NLP approach to producers’ and customers’ NPS responses. I used word counts and text-similarity analysis to surface relevant relationships in open-ended feedback.","Ainda como estagiário de Gestão de Produtos na Monsanto, tomei a iniciativa de aplicar uma abordagem simples de PLN às respostas de NPS de produtores e clientes. Usei contagens de palavras e análise de similaridade textual para identificar relações relevantes nos comentários abertos.","Aún como pasante de Gestión de Productos en Monsanto, tomé la iniciativa de aplicar un enfoque sencillo de PLN a las respuestas de NPS de productores y clientes. Utilicé recuentos de palabras y análisis de similitud textual para identificar relaciones relevantes en los comentarios abiertos."],["My reports helped marketing understand what customers were reporting, including tone, slang and regional language across Monsanto’s corn, soybean and cotton businesses and their brands.","Meus relatórios ajudaram o marketing a compreender os relatos dos clientes, incluindo tom, gírias e linguagem regional nos negócios de milho, soja e algodão da Monsanto e suas marcas.","Mis informes ayudaron a marketing a comprender los comentarios de los clientes, incluidos el tono, las expresiones coloquiales y el lenguaje regional en los negocios de maíz, soja y algodón de Monsanto y sus marcas."],["Explore the customer-language case study","Explore o estudo de caso sobre a linguagem dos clientes","Explore el caso sobre el lenguaje de los clientes"],["At Banco Votorantim, I worked on two modeling problems: conventional credit-risk modeling for write-off and customer-churn prediction. For churn, my work spanned target definition through model deployment, working within the bank’s developing data-science infrastructure at the time.","No Banco Votorantim, trabalhei em dois problemas de modelagem: risco de crédito tradicional para write-off e previsão de churn de clientes. No churn, atuei da definição da variável-alvo à implantação do modelo, dentro da infraestrutura de ciência de dados que o banco estava desenvolvendo à época.","En Banco Votorantim, trabajé en dos problemas de modelado: riesgo crediticio tradicional para write-off y predicción de churn de clientes. En churn, mi trabajo abarcó desde la definición de la variable objetivo hasta el despliegue del modelo, dentro de la infraestructura de ciencia de datos que el banco desarrollaba en aquel momento."],["Listening to the language of agriculture","Ouvindo a linguagem do campo","Escuchar el lenguaje del campo"],["An early initiative in text analytics, built around the words customers actually used.","Uma iniciativa em análise de texto, construída a partir das palavras que os clientes realmente usavam.","Una iniciativa temprana de análisis de texto, construida a partir de las palabras que los clientes realmente utilizaban."],["Product Management Intern · 2014–2015","Estagiário de Gestão de Produtos · 2014–2015","Pasante de Gestión de Productos · 2014–2015"],["From feedback to marketing insight","Dos comentários à compreensão do cliente","De los comentarios a la comprensión del cliente"],["Start with open-ended NPS responses","Partir de respostas abertas de NPS","Partir de respuestas abiertas de NPS"],["Look beyond the score to what producers and customers describe in their own words.","Olhar além da nota para o que produtores e clientes descrevem com suas próprias palavras.","Mirar más allá de la puntuación hacia lo que productores y clientes describen con sus propias palabras."],["Count words and compare texts","Contar palavras e comparar textos","Contar palabras y comparar textos"],["Use simple word-frequency and similarity analysis to discover relationships worth investigating.","Usar análises simples de frequência de palavras e similaridade para descobrir relações que merecem investigação.","Utilizar análisis sencillos de frecuencia de palabras y similitud para descubrir relaciones que merecen investigación."],["Interpret language in context","Interpretar a linguagem no contexto","Interpretar el lenguaje en su contexto"],["Read findings alongside regional expressions, slang, tone and the different crop and brand contexts.","Ler os achados junto às expressões regionais, gírias, tom e diferentes contextos de culturas e marcas.","Interpretar los hallazgos junto con expresiones regionales, lenguaje coloquial, tono y los distintos contextos de cultivos y marcas."],["Make the findings useful to marketing","Tornar os achados úteis para o marketing","Hacer que los hallazgos sean útiles para marketing"],["This retrospective is based on my account of the work. The original code, customer responses and reports are not published here. Tone was part of the interpretation; no automated sentiment-classification result or measured commercial lift is claimed.","Este relato retrospectivo se baseia na minha descrição do trabalho. O código original, as respostas dos clientes e os relatórios não são publicados aqui. O tom fazia parte da interpretação; não se alega um resultado de classificação automática de sentimento nem um ganho comercial medido.","Este relato retrospectivo se basa en mi descripción del trabajo. Aquí no se publican el código original, las respuestas de clientes ni los informes. El tono formaba parte de la interpretación; no se afirma un resultado de clasificación automática de sentimientos ni una mejora comercial medida."],["Initiative before a formal data-science role","Iniciativa antes de uma função formal em ciência de dados","Iniciativa antes de un puesto formal en ciencia de datos"],["I saw an opportunity to apply computational methods to qualitative customer feedback while still an intern. The contribution was connecting a practical text-analysis approach with a business team’s need to understand its customers.","Ainda como estagiário, identifiquei uma oportunidade de aplicar métodos computacionais aos comentários qualitativos dos clientes. A contribuição foi conectar uma abordagem prática de análise textual à necessidade de uma equipe de negócio de compreender seus clientes.","Aún como pasante, identifiqué una oportunidad de aplicar métodos computacionales a los comentarios cualitativos de los clientes. La contribución fue conectar un enfoque práctico de análisis textual con la necesidad de un equipo de negocio de comprender a sus clientes."],["NLP / Customer insights","PLN / Inteligência de clientes","PLN / Inteligencia de clientes"]]);
rows.push(...[["Independent experiment · Fernando Barbosa","Experimento independente · Fernando Barbosa","Experimento independiente · Fernando Barbosa"],["An independent experiment I created to explore synthetic banking data, SQL agents and analytical workflows. This is my personal research, with no employer affiliation.","Um experimento independente que criei para explorar dados bancários sintéticos, agentes SQL e fluxos analíticos. É uma pesquisa pessoal, sem vínculo com empregadores.","Un experimento independiente que creé para explorar datos bancarios sintéticos, agentes SQL y flujos analíticos. Es una investigación personal, sin afiliación empresarial."],["Independent research","Pesquisa independente","Investigación independiente"],["A personal exploration","Uma exploração pessoal","Una exploración personal"],["Synthetic banking data, SQL agents and LangGraph. An independent experiment by Fernando Barbosa.","Dados bancários sintéticos, agentes SQL e LangGraph. Um experimento independente de Fernando Barbosa.","Datos bancarios sintéticos, agentes SQL y LangGraph. Un experimento independiente de Fernando Barbosa."],["Product Management Intern","Estagiário de Gestão de Produtos","Pasante de Gestión de Productos"],["Acquired by Bayer in 2018","Adquirida pela Bayer em 2018","Adquirida por Bayer en 2018"],["Illustrative word network","Rede ilustrativa de palavras","Red ilustrativa de palabras"],["What repeats. What connects.","O que se repete. O que se conecta.","Qué se repite. Qué se conecta."],["Node area represents word count. Switch the edges to compare words appearing in the same response with examples of related meanings.","A área dos nós representa a contagem de palavras. Alterne as arestas para comparar palavras na mesma resposta com exemplos de significados relacionados.","El área de los nodos representa el recuento de palabras. Cambie las aristas para comparar palabras en la misma respuesta con ejemplos de significados relacionados."],["Shared responses","Respostas compartilhadas","Respuestas compartidas"],["Meaning relationships","Relações de significado","Relaciones de significado"],["Word frequencies and relationships in invented feedback","Frequências e relações entre palavras em comentários fictícios","Frecuencias y relaciones entre palabras en comentarios ficticios"],["Seven Portuguese terms. Larger circles mean more occurrences. Solid lines show shared responses; dashed lines show manually selected meaning relationships.","Sete termos em português. Círculos maiores indicam mais ocorrências. Linhas contínuas mostram respostas compartilhadas; linhas tracejadas mostram relações de significado selecionadas manualmente.","Siete términos en portugués. Círculos mayores indican más apariciones. Las líneas continuas muestran respuestas compartidas; las discontinuas muestran relaciones de significado seleccionadas manualmente."],["Word counts","Contagens de palavras","Recuentos de palabras"],["Read the eight invented responses","Leia as oito respostas fictícias","Lea las ocho respuestas ficticias"],["Synthetic Portuguese examples, created for this illustration. Counts use exact words after lowercasing and removing punctuation. Solid edge weight is the number of shared responses. Dashed semantic links are manually curated examples, not an embedding model, an inferred finding or the original Monsanto analysis.","Exemplos sintéticos em português, criados para esta ilustração. As contagens usam palavras exatas após conversão para minúsculas e remoção de pontuação. O peso das arestas contínuas é o número de respostas compartilhadas. As ligações semânticas tracejadas são exemplos selecionados manualmente, não um modelo de embeddings, um achado inferido ou a análise original da Monsanto.","Ejemplos sintéticos en portugués, creados para esta ilustración. Los recuentos usan palabras exactas tras convertir a minúsculas y quitar puntuación. El peso de las aristas continuas es el número de respuestas compartidas. Los enlaces semánticos discontinuos son ejemplos seleccionados manualmente, no un modelo de embeddings, un hallazgo inferido ni el análisis original de Monsanto."],["Solid lines: words found in the same invented response. Thicker lines mean more shared responses.","Linhas contínuas: palavras presentes na mesma resposta fictícia. Linhas mais grossas indicam mais respostas compartilhadas.","Líneas continuas: palabras presentes en la misma respuesta ficticia. Líneas más gruesas indican más respuestas compartidas."],["Dashed lines: manually selected meaning relationships — atendimento–suporte and qualidade–desempenho. Frequency alone does not establish semantic similarity.","Linhas tracejadas: relações de significado selecionadas manualmente — atendimento/suporte e qualidade/desempenho. Frequência, sozinha, não estabelece similaridade semântica.","Líneas discontinuas: relaciones de significado seleccionadas manualmente — atención/soporte y calidad/rendimiento. La frecuencia por sí sola no establece similitud semántica."]]);
rows.push(...[["I helped build Cora’s credit-card portfolio from the ground up, engineering the end-to-end underwriting pipeline and the analytical foundations for credit decisions and portfolio monitoring.","Ajudei a construir a carteira de cartões de crédito da Cora do zero, desenvolvendo o pipeline de concessão de ponta a ponta e as bases analíticas para decisões de crédito e acompanhamento da carteira.","Ayudé a construir la cartera de tarjetas de crédito de Cora desde cero, desarrollando el pipeline de evaluación crediticia de extremo a extremo y las bases analíticas para las decisiones de crédito y el seguimiento de la cartera."],["Credit from the ground up","Crédito construído do zero","Crédito construido desde cero"],["Designed and deployed the underwriting pipeline, connecting credit assessment with operational execution and default monitoring. The work combined credit modeling with the engineering needed to make decisions usable in a growing product.","Desenhei e implantei o pipeline de concessão, conectando avaliação de crédito, execução operacional e monitoramento de inadimplência. O trabalho combinou modelagem de crédito com a engenharia necessária para tornar as decisões utilizáveis em um produto em expansão.","Diseñé y desplegué el pipeline de evaluación crediticia, conectando el análisis de crédito, la ejecución operativa y el seguimiento de impagos. El trabajo combinó modelado crediticio con la ingeniería necesaria para hacer utilizables las decisiones en un producto en expansión."],["Real-time analytics engineering","Engenharia de análise em tempo real","Ingeniería de análisis en tiempo real"],["Built a real-time analytics prototype with Apache Pinot and Kafka, working with engineering teams on infrastructure and monitoring. This was hands-on exploration of streaming data and analytical serving for operational decisions.","Construí um protótipo de análise em tempo real com Apache Pinot e Kafka, trabalhando com equipes de engenharia em infraestrutura e monitoramento. Foi uma exploração prática de dados em streaming e disponibilização de consultas analíticas para decisões operacionais.","Construí un prototipo de análisis en tiempo real con Apache Pinot y Kafka, trabajando con equipos de ingeniería en infraestructura y seguimiento. Fue una exploración práctica de datos en streaming y consultas analíticas para decisiones operativas."],["Experimentation and acquisition","Experimentação e aquisição","Experimentación y adquisición"],["Designed and analyzed A/B tests and applied statistical inference to customer-acquisition questions, collaborating with engineering and product teams to turn analytical findings into decisions.","Desenhei e analisei testes A/B e apliquei inferência estatística a questões de aquisição de clientes, colaborando com equipes de engenharia e produto para transformar achados analíticos em decisões.","Diseñé y analicé pruebas A/B y apliqué inferencia estadística a cuestiones de adquisición de clientes, colaborando con equipos de ingeniería y producto para convertir hallazgos analíticos en decisiones."],["Credit-card underwriting","Concessão de cartões de crédito","Evaluación crediticia de tarjetas"],["Data infrastructure","Infraestrutura de dados","Infraestructura de datos"],["Nike via Fisia · Grupo SBF","Nike via Fisia · Grupo SBF","Nike vía Fisia · Grupo SBF"],["Part of Dotz since 2022","Parte da Dotz desde 2022","Parte de Dotz desde 2022"]]);
rows.push(...[["UNICAMP · 2023 / At my master’s thesis defense.","UNICAMP · 2023 / Na defesa da minha dissertação de mestrado.","UNICAMP · 2023 / En la defensa de mi tesis de maestría."],["Direct contact","Contato direto","Contacto directo"],["Let’s talk.","Vamos conversar.","Conversemos."],["I welcome conversations about applied AI leadership, credit decision systems, forecasting and technical collaboration.","Estou aberto a conversas sobre liderança em IA aplicada, sistemas de decisão de crédito, previsão e colaboração técnica.","Estoy abierto a conversaciones sobre liderazgo en IA aplicada, sistemas de decisión crediticia, previsión y colaboración técnica."],["Send a message","Envie uma mensagem","Envíe un mensaje"],["Your name","Seu nome","Su nombre"],["Your email","Seu email","Su correo electrónico"],["Company or organization (optional)","Empresa ou organização (opcional)","Empresa u organización (opcional)"],["Message","Mensagem","Mensaje"],["Your name, email and message are processed by FormSubmit and forwarded to Fernando’s inbox.","Seu nome, email e mensagem são processados pelo FormSubmit e encaminhados à caixa de entrada de Fernando.","Su nombre, correo y mensaje son procesados por FormSubmit y enviados a la bandeja de entrada de Fernando."],["Send message","Enviar mensagem","Enviar mensaje"]]);
rows.push(...[["International customer collaboration","Colaboração internacional com clientes","Colaboración internacional con clientes"],["Regional markers show customer collaboration in Latin America, Europe and the UK, India, Malaysia and Australia. Brazil is my base. They do not represent offices or residence.","Marcadores regionais indicam colaboração com clientes na América Latina, Europa e Reino Unido, Índia, Malásia e Austrália. Minha base é o Brasil. Não representam escritórios ou residência.","Los marcadores regionales indican colaboración con clientes en América Latina, Europa y Reino Unido, India, Malasia y Australia. Mi base es Brasil. No representan oficinas ni residencia."],["Based in Brazil. Working across borders.","Baseado no Brasil. Atuando além das fronteiras.","Desde Brasil. Colaborando más allá de las fronteras."],["Customer collaboration across Latin America, Europe & the UK, India, Malaysia and Australia.","Colaboração com clientes na América Latina, Europa e Reino Unido, Índia, Malásia e Austrália.","Colaboración con clientes en América Latina, Europa y Reino Unido, India, Malasia y Australia."],["Portuguese · native","Português · nativo","Portugués · nativo"],["English · fluent","Inglês · fluente","Inglés · fluido"],["Spanish · proficient","Espanhol · proficiente","Español · competente"],["Global practice","Atuação global","Práctica global"],["Clear communication. Cultural awareness. Effective remote collaboration.","Comunicação clara. Sensibilidade cultural. Colaboração remota eficaz.","Comunicación clara. Sensibilidad cultural. Colaboración remota eficaz."]]);
rows.push(...[["At Banco Votorantim, I combined predictive modeling with practical data engineering for customer retention and write-off collections. My work covered the full path from target definition and feature design to reusable pipelines and model deployment.","No Banco Votorantim, combinei modelagem preditiva e engenharia de dados aplicada à retenção de clientes e à cobrança de créditos em write-off. Minha atuação cobriu da definição do alvo e criação de variáveis até pipelines reutilizáveis e implantação dos modelos.","En Banco Votorantim, combiné modelado predictivo e ingeniería de datos aplicada a la retención de clientes y la recuperación de créditos en write-off. Mi trabajo abarcó desde la definición del objetivo y el diseño de variables hasta pipelines reutilizables y el despliegue de modelos."],["Churn models built for iteration and deployment","Modelos de churn preparados para evolução e implantação","Modelos de churn preparados para iteración y despliegue"],["Created modular R scripts with database connections and reusable functions for data preparation, feature engineering and target sampling. This structure let me adapt model inputs, compare hypotheses and deploy models within the bank’s developing analytics infrastructure.","Criei scripts modulares em R com conexões a bancos de dados e funções reutilizáveis para preparação de dados, engenharia de variáveis e amostragem do alvo. Essa estrutura permitia adaptar entradas dos modelos, comparar hipóteses e implantar modelos na infraestrutura analítica que o banco estava desenvolvendo.","Creé scripts modulares en R con conexiones a bases de datos y funciones reutilizables para preparación de datos, ingeniería de variables y muestreo del objetivo. Esta estructura permitía adaptar las entradas, comparar hipótesis y desplegar modelos en la infraestructura analítica que el banco desarrollaba."],["Feature engineering for write-off collections","Engenharia de variáveis para cobrança de write-off","Ingeniería de variables para recuperación de write-off"],["Developed predictive models for write-off collection strategies, using feature creation and selection both before and during training. The work focused on extracting useful signals from financial data to support recovery decisions.","Desenvolvi modelos preditivos para estratégias de cobrança de créditos em write-off, com criação e seleção de variáveis antes e durante o treinamento. O foco foi extrair sinais úteis dos dados financeiros para apoiar decisões de recuperação.","Desarrollé modelos predictivos para estrategias de recuperación de créditos en write-off, creando y seleccionando variables antes y durante el entrenamiento. El foco fue extraer señales útiles de datos financieros para apoyar decisiones de recuperación."],["Data pipelines that supported the models","Pipelines de dados que sustentavam os modelos","Pipelines de datos que sustentaban los modelos"],["Built data-integration and ETL workflows with PySpark and PostgreSQL, alongside R and Python modeling work. These pipelines supported preparation of transactional data for collection and customer-retention analysis.","Construí fluxos de integração de dados e ETL com PySpark e PostgreSQL, junto ao trabalho de modelagem em R e Python. Esses pipelines apoiavam a preparação de dados transacionais para análises de cobrança e retenção de clientes.","Construí flujos de integración de datos y ETL con PySpark y PostgreSQL, junto al trabajo de modelado en R y Python. Estos pipelines apoyaban la preparación de datos transaccionales para análisis de recuperación y retención de clientes."],["Feature engineering","Engenharia de variáveis","Ingeniería de variables"],["Model deployment","Implantação de modelos","Despliegue de modelos"]]);
rows.push(...[["records processed with BigQuery","registros processados com BigQuery","registros procesados con BigQuery"],["monthly lending portfolio supported","carteira mensal de crédito apoiada","cartera mensual de crédito apoyada"],["institutions in customer pipeline","instituições no pipeline de clientes","instituciones en el pipeline de clientes"],["contributors led across two programs","participantes liderados em dois programas","participantes liderados en dos programas"],["Selected career scale · scope documented in CVs and project accounts.","Escala de atuação · escopo documentado em currículos e relatos de projetos.","Escala profesional · alcance documentado en currículos y relatos de proyectos."],["Context & sources","Contexto e fontes","Contexto y fuentes"],["Speaking, events & learning","Palestras, eventos e aprendizado","Charlas, eventos y aprendizaje"],["Beyond the code","Além do código","Más allá del código"],["Sharing applied AI ideas and learning with international peers.","Compartilhando ideias de IA aplicada e aprendendo com colegas internacionais.","Compartiendo ideas de IA aplicada y aprendiendo con colegas internacionales."],["Explore the events","Explore os eventos","Explore los eventos"],["Speaker","Palestrante","Ponente"],["Presented FICO Focused Language Models and their application to analytical decisions in financial services.","Apresentei os Focused Language Models da FICO e sua aplicação a decisões analíticas no setor financeiro.","Presenté los Focused Language Models de FICO y su aplicación a decisiones analíticas en servicios financieros."],["Event participation","Participação em evento","Participación en evento"],["Participated in FICO Forum in Mexico, extending my professional exchange across Latin America.","Participei do FICO Forum no México, ampliando o intercâmbio profissional na América Latina.","Participé en FICO Forum en México, ampliando mi intercambio profesional en América Latina."],["Conference participation","Participação em conferência","Participación en conferencia"],["Attended FICO World in Orlando as part of my international professional practice.","Participei do FICO World em Orlando como parte da minha atuação profissional internacional.","Asistí a FICO World en Orlando como parte de mi práctica profesional internacional."],["Event participation","Participação em evento","Participación en evento"],["Participated in FICO Success in Atlanta, connecting with international colleagues.","Participei do FICO Success em Atlanta, em contato com colegas internacionais.","Participé en FICO Success en Atlanta, conectando con colegas internacionales."],["FICO training","Treinamento FICO","Formación FICO"],["Professional development","Desenvolvimento profissional","Desarrollo profesional"],["Training in San Diego formed part of my ongoing development with FICO technology and international teams.","O treinamento em San Diego fez parte do meu desenvolvimento contínuo com tecnologias FICO e equipes internacionais.","La formación en San Diego formó parte de mi desarrollo continuo con tecnologías FICO y equipos internacionales."],["Applied AI in conversation with the people who build and use it.","IA aplicada em diálogo com quem a desenvolve e utiliza.","IA aplicada en conversación con quienes la desarrollan y utilizan."],["The OfferFit CV records processing more than 100 million records with BigQuery during my Grupo SBF role. This is data-processing scope, not a measured revenue outcome.","O currículo OfferFit registra o processamento de mais de 100 milhões de registros com BigQuery durante minha atuação no Grupo SBF. É escopo de processamento de dados, não um resultado de receita medido.","El currículo OfferFit registra el procesamiento de más de 100 millones de registros con BigQuery durante mi trabajo en Grupo SBF. Es alcance de procesamiento de datos, no un resultado de ingresos medido."],["The FICO and OfferFit CVs describe ETL and analytical work supporting a R$2.5 million monthly lending portfolio at Noverde. This is portfolio scope, not my budget or personal revenue.","Os currículos FICO e OfferFit descrevem trabalho de ETL e análise apoiando uma carteira mensal de crédito de R$2,5 milhões na Noverde. É escopo da carteira, não meu orçamento ou receita pessoal.","Los currículos FICO y OfferFit describen trabajo de ETL y análisis apoyando una cartera mensual de crédito de R$2,5 millones en Noverde. Es alcance de la cartera, no mi presupuesto ni ingresos personales."],["My October 2026 account describes a customer pipeline of more than 30 financial institutions and fintechs. Pipeline scope does not mean signed customers or completed deployments.","Meu relato de outubro de 2026 descreve um pipeline de mais de 30 instituições financeiras e fintechs. Escopo de pipeline não significa clientes contratados ou implantações concluídas.","Mi relato de octubre de 2026 describe un pipeline de más de 30 instituciones financieras y fintechs. El alcance del pipeline no significa clientes contratados ni implementaciones finalizadas."],["Approximately five contributors on BioActives optimization and three on Cellulosics forecasting. This describes project leadership across two programs, not eight formal direct reports.","Aproximadamente cinco participantes em otimização de BioActives e três em previsão de celulósicos. Isso descreve liderança de projetos em dois programas, não oito subordinados formais diretos.","Aproximadamente cinco participantes en optimización de BioActives y tres en previsión de celulósicos. Describe liderazgo de proyectos en dos programas, no ocho subordinados directos formales."],["The context behind the numbers","O contexto por trás dos números","El contexto detrás de los números"],["Career scope, with definitions and sources.","Escopo profissional, com definições e fontes.","Alcance profesional, con definiciones y fuentes."],["Sources are my supplied CVs and project accounts. These figures have not been independently audited.","As fontes são meus currículos fornecidos e relatos de projetos. Esses números não foram auditados de forma independente.","Las fuentes son mis currículos y relatos de proyectos. Estas cifras no han sido auditadas de forma independiente."]]);
rows.push(...[["Cellulosics forecasting ↗","Previsão de celulósicos ↗","Previsión de celulósicos ↗"],["10+ releases","10+ versões entregues","10+ versiones entregadas"],["With user acceptance testing and coordinated delivery.","Com testes de aceitação dos usuários e entregas coordenadas.","Con pruebas de aceptación de usuarios y entregas coordinadas."],["44,000+ test cases","44.000+ casos de teste","44.000+ casos de prueba"],["Automated analysis with ML-driven vendor risk models, alongside the optimization and forecasting programs.","Análise automatizada com modelos de risco de fornecedores, além dos programas de otimização e previsão.","Análisis automatizado con modelos de riesgo de proveedores, además de los programas de optimización y previsión."],["30+ institutions · 10 products","30+ instituições · 10 produtos","30+ instituciones · 10 productos"],["Customer solution design","Desenho de soluções para clientes","Diseño de soluciones para clientes"],["3 ongoing proofs of value","3 provas de valor em andamento","3 pruebas de valor en curso"],["Technology in practice","Tecnologia na prática","Tecnología en la práctica"],["Working alongside customer teams on AI evaluation, architecture and financial decision use cases.","Colaboração com equipes dos clientes em avaliação de IA, arquitetura e casos de decisão financeira.","Colaboración con equipos de clientes en evaluación de IA, arquitectura y casos de decisión financiera."],["International collaboration","Colaboração internacional","Colaboración internacional"],["Across markets and cultures","Entre mercados e culturas","Entre mercados y culturas"],["On stage, in conversation.","No palco, em diálogo.","En el escenario, en diálogo."],["Presented at FICO Forum in Mexico, sharing the stage and exchanging perspectives with financial-services professionals.","Apresentação no FICO Forum no México, compartilhando o palco e perspectivas com profissionais de serviços financeiros.","Presentación en FICO Forum en México, compartiendo el escenario y perspectivas con profesionales de servicios financieros."],["The experiment, at a glance","O experimento em poucas palavras","El experimento de un vistazo"],["A claim is also a choice about what comes next.","Um sinistro também é uma escolha sobre o que vem depois.","Un siniestro también es una elección sobre lo que viene después."],["Approving one claim uses resources that are no longer available for the next. I explored this as a sequence of decisions: observe a case, choose an action, update the budget, and learn from the resulting signal.","Aprovar um sinistro consome recursos que deixam de estar disponíveis para o próximo. Explorei isso como uma sequência de decisões: observar um caso, escolher uma ação, atualizar o orçamento e aprender com o sinal resultante.","Aprobar un siniestro consume recursos que dejan de estar disponibles para el siguiente. Exploré una secuencia de decisiones: observar un caso, elegir una acción, actualizar el presupuesto y aprender de la señal resultante."],["Paraná · Soybean","Paraná · Soja","Paraná · Soja"],["The public sample script selects soybean records from Paraná in the processed PSR history.","O script público seleciona registros de soja do Paraná no histórico processado do PSR.","El script público selecciona registros de soja de Paraná en el historial procesado del PSR."],["2 actions","2 ações","2 acciones"],["The environment represents approval and rejection, with a wallet tracking the budget and decision history.","O ambiente representa aprovação e rejeição, com uma carteira que acompanha orçamento e histórico de decisões.","El entorno representa aprobación y rechazo, con una cartera que registra el presupuesto y las decisiones."],["4 context signals","4 sinais de contexto","4 señales de contexto"],["Budget used, approval ratio, and Benford distances with and without the latest selected case supplement the claim features.","Orçamento utilizado, proporção de aprovações e distâncias de Benford com e sem o último caso selecionado complementam os atributos do sinistro.","Presupuesto utilizado, proporción de aprobaciones y distancias de Benford con y sin el último caso seleccionado complementan los atributos del siniestro."],["Inspect the sample selection ↗","Veja a seleção da amostra ↗","Vea la selección de la muestra ↗"],["A closer look at the statistical signal","O sinal estatístico em detalhe","La señal estadística en detalle"],["Why look at the digits?","Por que observar os dígitos?","¿Por qué observar los dígitos?"],["Benford’s law describes a pattern in the leading digits of many naturally occurring numerical datasets. Smaller leading digits are more common. The experiment uses distance from a Benford distribution as part of its reward design.","A lei de Benford descreve um padrão nos primeiros dígitos de muitos conjuntos numéricos naturais. Dígitos iniciais menores são mais frequentes. O experimento usa a distância de uma distribuição de Benford no desenho da recompensa.","La ley de Benford describe un patrón en los primeros dígitos de muchos conjuntos numéricos naturales. Los dígitos iniciales menores son más frecuentes. El experimento usa la distancia de una distribución de Benford en el diseño de la recompensa."],["This first-digit chart explains the idea. The implementation uses a three-digit Benford-distance calculation. These are theoretical probabilities, not measured insurance data or research results.","Este gráfico do primeiro dígito explica a ideia. A implementação usa uma distância de Benford com três dígitos. São probabilidades teóricas, não dados observados de seguros nem resultados da pesquisa.","Este gráfico del primer dígito explica la idea. La implementación usa una distancia de Benford con tres dígitos. Son probabilidades teóricas, no datos observados de seguros ni resultados de la investigación."],["Benford’s law · theoretical first-digit probabilities","Lei de Benford · probabilidades teóricas do primeiro dígito","Ley de Benford · probabilidades teóricas del primer dígito"],["What this work contributes","A contribuição deste trabalho","La contribución de este trabajo"],["Economics, statistics and learning in one decision environment.","Economia, estatística e aprendizado em um ambiente de decisão.","Economía, estadística y aprendizaje en un entorno de decisión."],["The contribution is an inspectable experimental setup: data preparation, a budget-aware environment, a statistical reward and a DQN learning agent. It makes the assumptions behind sequential insurance decisions explicit.","A contribuição é uma estrutura experimental inspecionável: preparação de dados, ambiente com restrição orçamentária, recompensa estatística e agente DQN. Ela explicita as premissas das decisões sequenciais de seguros.","La contribución es una estructura experimental inspeccionable: preparación de datos, entorno con restricción presupuestaria, recompensa estadística y agente DQN. Explicita los supuestos de las decisiones secuenciales de seguros."],["Compare policies","Comparar políticas","Comparar políticas"],["The repository includes random-agent comparisons and DQN experiments, making a baseline part of the research design.","O repositório inclui comparações com agentes aleatórios e experimentos DQN, incorporando uma referência ao desenho da pesquisa.","El repositorio incluye comparaciones con agentes aleatorios y experimentos DQN, incorporando una referencia al diseño de la investigación."],["Read the trade-offs","Interpretar os compromissos","Interpretar los compromisos"],["Reward, budget consumption and approval history describe different aspects of the policy. They need to be interpreted together.","Recompensa, consumo de orçamento e histórico de aprovações descrevem aspectos diferentes da política e precisam ser interpretados juntos.","Recompensa, consumo de presupuesto e historial de aprobaciones describen distintos aspectos de la política y deben interpretarse juntos."],["Establish real-world validity","Estabelecer validade prática","Establecer validez práctica"],["Confirmed fraud labels and independent evaluation are needed before drawing conclusions about detection performance.","Rótulos de fraude confirmada e avaliação independente são necessários para concluir sobre o desempenho de detecção.","Se necesitan etiquetas de fraude confirmado y evaluación independiente para concluir sobre el rendimiento de detección."]]);
rows.push(...[["Try the decision problem","Explore o problema de decisão","Explore el problema de decisión"],["One budget. A sequence of choices.","Um orçamento. Uma sequência de escolhas.","Un presupuesto. Una secuencia de elecciones."],["A short, synthetic illustration of the budget constraint. You choose the actions; no trained agent or fraud prediction is running here.","Uma breve ilustração sintética da restrição orçamentária. Você escolhe as ações; nenhum agente treinado ou previsão de fraude está em execução aqui.","Una breve ilustración sintética de la restricción presupuestaria. Usted elige las acciones; no hay un agente entrenado ni predicción de fraude en ejecución."],["Conceptual notation: claim features, budget, approval history and statistical distances form the state. The policy seeks cumulative reward; this is not a measured performance result.","Notação conceitual: atributos do sinistro, orçamento, histórico de aprovações e distâncias estatísticas formam o estado. A política busca recompensa acumulada; isso não é um resultado medido de desempenho.","Notación conceptual: atributos del siniestro, presupuesto, historial de aprobaciones y distancias estadísticas forman el estado. La política busca recompensa acumulada; no es un resultado medido de rendimiento."]]);
rows.push(...[["Example dataset · 12 invented Portuguese NPS comments from corn, soybean and cotton producers. No real customer data.","Base de exemplo · 12 comentários NPS fictícios em português de produtores de milho, soja e algodão. Nenhum dado real de clientes.","Datos de ejemplo · 12 comentarios NPS ficticios en portugués de productores de maíz, soja y algodón. Sin datos reales de clientes."],["Crop","Cultura","Cultivo"],["All crops","Todas as culturas","Todos los cultivos"],["Clear word selection","Limpar seleção de palavra","Borrar selección de palabra"],["Choose a crop, then select a word to see the comments behind it.","Escolha uma cultura e selecione uma palavra para ver os comentários associados.","Elija un cultivo y seleccione una palabra para ver los comentarios asociados."],["Example input · producer comments","Entrada de exemplo · comentários de produtores","Entrada de ejemplo · comentarios de productores"],["Illustrative photograph ·","Fotografia ilustrativa ·","Fotografía ilustrativa ·"]]);
rows.push(...[["At Grupo SBF, I combined recommendation and search modeling, online experimentation and large-scale data processing to improve the digital retail experience.","No Grupo SBF, combinei modelos de recomendação e busca, experimentação online e processamento de dados em larga escala para melhorar a experiência no varejo digital.","En Grupo SBF, combiné modelos de recomendación y búsqueda, experimentación online y procesamiento de datos a gran escala para mejorar la experiencia de comercio digital."],["Discovery & recommendations","Descoberta e recomendações","Descubrimiento y recomendaciones"],["Association rules and search","Regras de associação e busca","Reglas de asociación y búsqueda"],["Developed modified association-rule models and search algorithms with Python, GCP and BigQuery, connecting analytical models to product discovery.","Desenvolvi modelos de regras de associação modificadas e algoritmos de busca com Python, GCP e BigQuery, conectando modelos analíticos à descoberta de produtos.","Desarrollé modelos de reglas de asociación modificadas y algoritmos de búsqueda con Python, GCP y BigQuery, conectando modelos analíticos con el descubrimiento de productos."],["Experimentation","Experimentação","Experimentación"],["Checkout experience","Experiência de checkout","Experiencia de checkout"],["Implemented and analyzed online experiments on checkout pages to evaluate conversion and customer experience.","Implementei e analisei experimentos online em páginas de checkout para avaliar conversão e experiência do cliente.","Implementé y analicé experimentos online en páginas de checkout para evaluar conversión y experiencia del cliente."],["100M+ records","100M+ registros","100M+ registros"],["BigQuery at retail scale","BigQuery na escala do varejo","BigQuery a escala del comercio"],["Processed over 100 million records in BigQuery and worked on query performance and search functionality.","Processei mais de 100 milhões de registros no BigQuery e trabalhei no desempenho de consultas e na funcionalidade de busca.","Procesé más de 100 millones de registros en BigQuery y trabajé en el rendimiento de consultas y la funcionalidad de búsqueda."],["Scope documented in my OfferFit CV. The record count describes data processed, not unique customers.","Escopo documentado no meu currículo OfferFit. A contagem se refere a registros processados, não a clientes únicos.","Alcance documentado en mi currículo OfferFit. La cifra corresponde a registros procesados, no a clientes únicos."]]);
rows.push(...[["Xper. From datasets to origination decisions.","Xper. Dos dados às decisões de originação.","Xper. De los datos a las decisiones de originación."],["I built MLflow-based software to connect the modeling process across credit products.","Desenvolvi um software baseado em MLflow para conectar a modelagem entre produtos de crédito.","Desarrollé un software basado en MLflow para conectar la modelización entre productos de crédito."],["The work behind the tool","O trabalho por trás da ferramenta","El trabajo detrás de la herramienta"],["One workflow for the modeling lifecycle.","Um fluxo para o ciclo de modelagem.","Un flujo para el ciclo de modelización."],["I developed Xper, MLflow-based software for orchestrating the modeling workflow across credit-origination products: dataset discovery, availability checks, cleaning, feature engineering, hyperparameter tuning and acquisition-funnel simulation.","Desenvolvi o Xper, um software baseado em MLflow para orquestrar a modelagem entre produtos de originação de crédito: descoberta de bases, checagem de disponibilidade, limpeza, engenharia de atributos, ajuste de hiperparâmetros e simulação do funil de aquisição.","Desarrollé Xper, un software basado en MLflow para orquestar la modelización entre productos de originación de crédito: descubrimiento de datos, comprobación de disponibilidad, limpieza, ingeniería de atributos, ajuste de hiperparámetros y simulación del embudo de adquisición."],["The aim was to make the process easier to orchestrate and connect model experiments with acquisition decisions.","O objetivo era facilitar a orquestração e conectar experimentos de modelos às decisões de aquisição.","El objetivo era facilitar la orquestación y conectar experimentos de modelos con decisiones de adquisición."],["Retrospective based on my account of Xper. The original implementation and customer data are not published here.","Relato baseado na minha experiência com o Xper. A implementação original e os dados de clientes não são publicados aqui.","Relato basado en mi experiencia con Xper. La implementación original y los datos de clientes no se publican aquí."],["Workflow","Fluxo de trabalho","Flujo de trabajo"],["From available data to a decision policy.","Dos dados disponíveis a uma política de decisão.","De los datos disponibles a una política de decisión."],["Discover datasets","Descobrir bases","Descubrir datos"],["Check & clean","Verificar e limpar","Verificar y limpiar"],["Engineer features","Criar atributos","Crear atributos"],["Tune models","Ajustar modelos","Ajustar modelos"],["Simulate originations","Simular originações","Simular originaciones"],["Conceptual workflow based on the original tool’s scope. This diagram does not expose its internal architecture.","Fluxo conceitual baseado no escopo da ferramenta original. O diagrama não expõe sua arquitetura interna.","Flujo conceptual basado en el alcance de la herramienta original. El diagrama no expone su arquitectura interna."],["Interactive example","Exemplo interativo","Ejemplo interactivo"],["Explore the acquisition trade-off.","Explore as escolhas na aquisição.","Explore las decisiones de adquisición."],["Adjust the maximum estimated default probability and customer take-up rate. Watch the same synthetic applicant pool move through an origination funnel.","Ajuste a probabilidade máxima estimada de inadimplência e a adesão dos clientes. Veja a mesma base sintética percorrer um funil de originação.","Ajuste la probabilidad máxima estimada de impago y la aceptación de clientes. Observe la misma base sintética recorrer un embudo de originación."],["New illustrative simulation, not the original Xper interface. No model is trained here. Expected defaults are the sum of synthetic probabilities, not observed outcomes or a credit-policy recommendation.","Nova simulação ilustrativa, não a interface original do Xper. Nenhum modelo é treinado aqui. Inadimplências esperadas são calculadas a partir de probabilidades sintéticas, não de resultados observados nem de uma recomendação de crédito.","Nueva simulación ilustrativa, no la interfaz original de Xper. No se entrena ningún modelo. Los impagos esperados se calculan con probabilidades sintéticas, no con resultados observados ni una recomendación crediticia."],["Why this mattered in my work","Por que isso importava no meu trabalho","Por qué importaba en mi trabajo"],["Reusable modeling process","Processo de modelagem reutilizável","Proceso de modelización reutilizable"],["Connected data preparation, experimentation and tuning in one cross-product workflow.","Conectei preparação de dados, experimentação e ajustes em um fluxo entre produtos.","Conecté preparación de datos, experimentación y ajustes en un flujo entre productos."],["Business interpretation","Interpretação de negócio","Interpretación de negocio"],["Extended the discussion beyond a model metric to acquisition and origination scenarios.","Ampliei a discussão das métricas do modelo para cenários de aquisição e originação.","Amplié la discusión desde métricas del modelo hacia escenarios de adquisición y originación."],["See my NoVerde experience ↗","Veja minha experiência na NoVerde ↗","Vea mi experiencia en NoVerde ↗"],["Modeling infrastructure","Infraestrutura de modelagem","Infraestructura de modelización"],["Xper · from data to decisions ↗","Xper · dos dados às decisões ↗","Xper · de los datos a las decisiones ↗"],["A shared workflow connecting model development with origination strategy.","Um fluxo compartilhado que conecta desenvolvimento de modelos à estratégia de originação.","Un flujo compartido que conecta desarrollo de modelos con estrategia de originación."],["Credit & behavior","Crédito e comportamento","Crédito y comportamiento"],["Models in a changing market","Modelos em um mercado em mudança","Modelos en un mercado cambiante"],["Addressed model drift, developed credit-scoring and behavioral models, and maintained ETL workflows supporting a R$2.5M monthly lending portfolio.","Tratei desvio de modelos, desenvolvi modelos de crédito e comportamento e mantive fluxos ETL para uma carteira mensal de R$2,5 milhões.","Abordé la deriva de modelos, desarrollé modelos de crédito y comportamiento y mantuve flujos ETL para una cartera mensual de R$2,5 millones."],["FICO FLM proofs of value","Provas de valor com FICO FLM","Pruebas de valor con FICO FLM"],["Working with customers on language-model proofs of value, translating financial-services requirements into evaluation plans and solution architectures using FICO FLM.","Atuação com clientes em provas de valor de modelos de linguagem, traduzindo requisitos financeiros em planos de avaliação e arquiteturas com FICO FLM.","Trabajo con clientes en pruebas de valor de modelos de lenguaje, traduciendo requisitos financieros en planes de evaluación y arquitecturas con FICO FLM."],["Transaction intelligence","Inteligência transacional","Inteligencia transaccional"],["Real-time fraud use cases","Casos de fraude em tempo real","Casos de fraude en tiempo real"],["Customer-facing work on foundation-model applications to high-frequency, real-time transaction fraud, connecting model capabilities with customer data and decision requirements.","Atuação com clientes em aplicações de modelos fundacionais à fraude transacional de alta frequência em tempo real, conectando capacidades dos modelos aos dados e requisitos de decisão.","Trabajo con clientes en aplicaciones de modelos fundacionales al fraude transaccional de alta frecuencia en tiempo real, conectando capacidades de los modelos con datos y requisitos de decisión."],["An MLflow-based modeling workflow, with an interactive origination-funnel illustration.","Um fluxo de modelagem baseado em MLflow, com uma ilustração interativa do funil de originação.","Un flujo de modelización basado en MLflow, con una ilustración interactiva del embudo de originación."]]);
const dictionaries = {pt: new Map(rows.map(r => [r[0],r[1]])), es: new Map(rows.map(r => [r[0],r[2]]))};
const normalize = value => value.replace(/\s+/g,' ').trim();
const query = new URL(location.href).searchParams.get('lang');
const lang = ['en','pt','es'].includes(query) ? query : 'en';
function translate(value) {
 if(lang === 'en') return value;
 const key=normalize(value);const found=dictionaries[lang]?.get(key);if(found) return found;
 const pt=lang==='pt';
 let m;
 if((m=key.match(/^ROUND (\d+)$/))) return (pt?'RODADA ':'RONDA ')+m[1];
 if((m=key.match(/^([\d.]+) units$/))) return m[1]+(pt?' unidades':' unidades');
 if((m=key.match(/^([AB]) · Series (\d+)$/))) return m[1]+(pt?' · Série ':' · Serie ')+m[2];
 if((m=key.match(/^Member ([A-L]) · (.+)$/))) return (pt?'Membro ':'Miembro ')+m[1]+' · '+({'highly connected':pt?'muito conectado':'muy conectado',peripheral:pt?'periférico':'periférico',bridge:pt?'ponte':'puente',core:'central'}[m[2]] || m[2]);
 if((m=key.match(/^Synthetic risk signal after (\d+) rounds?\.$/))) return (pt?'Sinal de risco sintético após ':'Señal de riesgo sintética después de ')+m[1]+(pt?(m[1]==='1'?' rodada.':' rodadas.'):(m[1]==='1'?' ronda.':' rondas.'));
 if((m=key.match(/^(\d+) MEMBERS \/ (\d+) TIES$/))) return m[1]+(pt?' MEMBROS / ':' MIEMBROS / ')+m[2]+(pt?' CONEXÕES':' CONEXIONES');
 if(key.startsWith('Global gap ')) return key.replace('Global gap ',pt?'Diferença global ':'Diferencia global ').replace('Group A gap ',pt?'Diferença no Grupo A ':'Diferencia en Grupo A ').replace('Group B gap ',pt?'Diferença no Grupo B ':'Diferencia en Grupo B ');
 if(key.startsWith('Synthetic member ')) return key.replace('Synthetic member ',pt?'Membro sintético ':'Miembro sintético ').replace('illustrative risk signal ',pt?'sinal de risco ilustrativo ':'señal de riesgo ilustrativa ').replace('illustrative signal ',pt?'sinal ilustrativo ':'señal ilustrativa ').replace(' percent. Select as initial signal.',pt?' por cento. Selecione como sinal inicial.':' por ciento. Seleccione como señal inicial.').replace('core','central').replace('periphery',pt?'periferia':'periferia').replace('bridge',pt?'ponte':'puente').replace(' position',pt?' posição':' posición');
 if((m=key.match(/^Tie strength ([\d.]+) between members ([A-L]) and ([A-L])$/))) return (pt?'Força da conexão ':'Fuerza de conexión ')+m[1]+(pt?' entre os membros ':' entre los miembros ')+m[2]+(pt?' e ':' y ')+m[3];
 return value;
}
document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
window.portfolioLanguage = lang;
window.portfolioTranslate = translate;
const ignore = node => node.parentElement?.closest('script,style,code,pre,[data-no-translate],.language-switch');
function translateText(root) {
 const walker = document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let node;
 while ((node = walker.nextNode())) {
  if(ignore(node)) continue;
  const text = node.nodeValue; const replacement = translate(text);
  if(replacement !== text) node.nodeValue = text.match(/^\s*/)[0] + replacement + text.match(/\s*$/)[0];
 }
 root.querySelectorAll?.('[aria-label],[title],[placeholder]').forEach(el => ['aria-label','title','placeholder'].forEach(attr => {
  if(el.hasAttribute(attr) && !el.closest('[data-no-translate],.language-switch')) el.setAttribute(attr,translate(el.getAttribute(attr)));
 }));
}
translateText(document.body);
const titles = {pt:{'Applied AI & Decision Science':'IA aplicada e ciência da decisão','Experience':'Experiência','Portfolio':'Portfólio','Writing':'Artigos','Connect':'Contato','Hierarchical Forecasting':'Previsão hierárquica','Network Churn':'Churn em redes'},es:{'Applied AI & Decision Science':'IA aplicada y ciencia de decisiones','Experience':'Experiencia','Portfolio':'Portafolio','Writing':'Artículos','Connect':'Contacto','Hierarchical Forecasting':'Previsión jerárquica','Network Churn':'Churn en redes'}};
document.title = translate(document.title);
for (const [source,target] of Object.entries(titles[lang] || {})) document.title = document.title.replace(source,target);
function localizeLinks(root) {
 root.querySelectorAll('a[href]').forEach(link => {
  if(link.closest('.language-switch')) return;
  const href=link.getAttribute('href');
  if(!href || href.startsWith('#')) return;
  let url; try {url = new URL(href,location.href);} catch {return;}
  if(url.origin !== location.origin || !['http:','https:'].includes(url.protocol)) return;
  // Only documents; do not modify downloads or assets.
  if(/\.(?:pdf|zip|py|js|css|png|jpe?g|svg|csv|json)$/i.test(url.pathname)) return;
  if(lang !== 'en') url.searchParams.set('lang',lang); else url.searchParams.delete('lang');
  link.href=url.pathname+url.search+url.hash;
 });
}
localizeLinks(document);
if(lang !== 'en') {
 const observer = new MutationObserver(records => {
  // Only text, accessible labels, and newly inserted content matter;
  // ignore graph animation attributes so motion does not trigger translation.
  if (!records.some(r => r.type !== 'childList' || [...r.addedNodes].some(n => n.nodeType === 3 || (n.nodeType === 1 && n.textContent.trim())))) return;
  observer.disconnect();
  translateText(document.body);
  observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','placeholder']});
 });
 observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','placeholder']});
}
const existingSelect = document.querySelector('#language-select');
if (existingSelect) {
 existingSelect.value = lang;
 existingSelect.setAttribute('aria-label',lang === 'en' ? 'Language' : 'Idioma');
 existingSelect.addEventListener('change', () => {
  const next = new URL(location.href); next.searchParams.set('lang',existingSelect.value); location.assign(next.href);
 });
}
if (!existingSelect && !document.querySelector('.language-switch')) {
 const switcher = document.createElement('nav'); switcher.className='language-switch';
 switcher.setAttribute('aria-label',lang==='pt'?'Idioma':lang==='es'?'Idioma':'Language');
 switcher.style.cssText='display:flex;gap:.6rem;align-items:center;font-size:.75rem;flex-wrap:wrap';
 for (const [key,label,title] of [['en','EN','English'],['pt','PT','Português'],['es','ES','Español']]) {
  const a=document.createElement('a');const url=new URL(location.href);url.searchParams.set('lang',key);
  a.href=url.pathname+url.search+url.hash;a.textContent=label;a.hreflang=key;a.lang=key;a.title=title;
  a.setAttribute('aria-label',title);a.style.cssText='padding:.25rem .4rem;text-decoration:none;border:1px solid transparent;border-radius:3px';
  if(key===lang){a.setAttribute('aria-current','true');a.style.borderColor='currentColor';a.style.fontWeight='700';}
  switcher.append(a);
 }
 const header=document.querySelector('.masthead') || document.querySelector('header');
 if(header) header.append(switcher); else document.body.prepend(switcher);
}
})();
