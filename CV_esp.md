---
layout: post
title: CV
description: CV
permalink: /cv_esp/
font_awesome: true
body_class: cv-page
---


<!-- Begin CV body -->
<!-- Page Container -->
<div class="container cv-margin-top" style="width: 100%;">

  <!-- Tabs -->
  <div class="cv-bar">
    <button class="cv-bar-item cv-button tablink cv-teal" onclick="openTab(event, 'Contact')">Perfil</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Experience')">Experiencia</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Education')">Formación</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Skills')">Competencias</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Outreach')">Divulgación</button>
  </div>

  <!-- Contact Tab -->
  <div id="Contact" class="container tab" style="display: block;">
    <h2>Perfil</h2>
    <div class="cv-container profile">
      <div class="image-hover-container contact__photo">
          <img src="../images/pma_formal.png" class="image-normal" alt="Pablo Mart&iacute;nez Agull&oacute;">
          <img src="../images/pma_informal.png" class="image-hover" alt="Pablo Mart&iacute;nez Agull&oacute;">
      </div>
      <p class="profile__text">Construyo sistemas de IA agéntica y los llevo del prototipo a producción. En el laboratorio de innovación de Indra diseño agentes de planificación y apoyo a la decisión para productos de defensa y comerciales, desde agentes individuales hasta redes multiagente, muchos de ellos con modelos de pesos abiertos corriendo en hardware edge para que el ciclo completo siga funcionando sin conectividad. Antes puse en marcha productos de IA generativa en Mercadona sobre Google Cloud.</p>
      <p class="profile__text">Vengo de un doctorado en Física en el experimento ATLAS del CERN, trabajando en análisis del quark top y del bosón de Higgs. Ahí aprendí a manejar datos a gran escala y a tener cuidado con lo que un resultado demuestra realmente, una costumbre que sirve tanto con los modelos de lenguaje como servía con los datos de colisiones.</p>
      <dl class="contact">
        <dt class="contact__label">Ubicaci&oacute;n</dt>
        <dd class="contact__value">{{ site.author.location }}</dd>
        <dt class="contact__label">Email</dt>
        <dd class="contact__value"><a href="mailto:pablo.martinez.agullo@gmail.com">pablo.martinez.agullo@gmail.com</a></dd>
        <dt class="contact__label">Tel&eacute;fono</dt>
        <dd class="contact__value">{{ site.author.phone }}</dd>
      </dl>
    </div>
  </div> <!-- End Contact Tab -->

  <!-- Experience Tab -->
  <div id="Experience" class="container tab">
    <h2>Experiencia</h2>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Senior AI Engineer</h3>
        <p class="job__org"><a href="https://www.indracompany.com/" target="_blank">Indra</a></p>
        <p class="job__meta">Sept 2025 - Actualidad</p>
        <p class="job__meta">Madrid, España</p>
      </header>
      <p>Miembro del equipo de investigación en IA del laboratorio de innovación, donde diseño sistemas de agentes de IA generativa para aplicaciones de defensa y comerciales. Mi trabajo se centra en agentes de planificación y de apoyo a la decisión, abarcando arquitecturas de agente único y multiagente, desde el prototipo hasta despliegues cercanos a producción. Construyo servidores MCP propios para exponer herramientas de dominio y orquesto pipelines de agentes sobre las redes de agentes desarrolladas internamente. Parte del trabajo cae del lado de la optimización: formulo problemas de planificación y asignación de recursos como modelos QUBO/Ising, resueltos mediante quantum annealing (D-Wave), y los expongo a los agentes planificadores como herramientas invocables. Varios de estos sistemas se despliegan en el edge, ejecutando LLMs locales de pesos abiertos sobre hardware limitado como placas Raspberry Pi o unidades NVIDIA DGX Spark, de modo que el ciclo completo del agente sigue operativo en entornos desconectados o con ancho de banda reducido. La mayoría de los proyectos se sitúan en niveles TRL 2–5.
      </p>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Ingeniero de inteligencia artificial</h3>
        <p class="job__org"><a href="https://info.mercadona.es/en/mercadonait" target="_blank">Mercadona</a></p>
        <p class="job__meta">Sept 2024 - Sept 2025</p>
        <p class="job__meta">Valencia, España</p>
      </header>
      <p>Diseño y despliegue de soluciones basadas en IA dentro del equipo de Innovación de IT de Mercadona, principalmente con IA generativa. Entre los proyectos destacados están un chatbot basado en RAG (LangChain, Gemini, FAISS, DialogFlow CX) y una aplicación que extrae datos estructurados a partir de imágenes de etiquetas de producto (Gemini, Kafka, SQL). Trabajé con arquitectura hexagonal y principios CLEAN/SOLID, empleando herramientas como FastAPI, Docker, Kubernetes y GCP. También contribuí a un proyecto de optimización matemática para automatizar el sistema de planificación de turnos de la compañía con Pyomo y Gurobi.
      </p>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Investigador en física - Analista de datos</h3>
        <p class="job__org"><a href="https://webific.ific.uv.es/web/en" target="_blank">Instituto de Física Corpuscular (IFIC)</a> &middot; <a href="https://home.cern/" target="_blank">Laboratorio Europeo de Física de Partículas (CERN)</a></p>
        <p class="job__meta">Sept 2019 - Mayo 2024</p>
        <p class="job__meta">Valencia, España | Ginebra, Suiza</p>
      </header>
      <p>Investigador predoctoral en el grupo ATLAS (IFIC y CERN), analizando grandes volúmenes de datos del detector ATLAS del Gran Colisionador de Hadrones. Desarrollé, optimicé e integré modelos de aprendizaje automático supervisado (BDT, redes neuronales) apoyados en técnicas estadísticas avanzadas. Contribuí a la ampliación de varios paquetes del software principal de ATLAS (Athena) y codesarrollé el software de post-procesado para explotar nuestros datos en formato NTuple. Presenté resultados en congresos nacionales e internacionales y participé en la toma de datos como parte del equipo de la sala de control de ATLAS.
      <br>
      Parte de la investigación realizada en este periodo puede consultarse en los artículos <a href="https://link.springer.com/article/10.1007/JHEP10(2025)093">JHEP 10 (2025) 093</a> y <a href="https://cds.cern.ch/record/2957351">ATLAS-CONF-2026-002</a>.
      <br>
      Este trabajo estuvo financiado parcialmente por la beca competitiva ACIF de la Generalitat Valenciana.
      <br>
      Puedes consultar mi <a href="https://martinezagullo.github.io/publications/">registro de publicaciones</a> de estos años.</p>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Docente universitario</h3>
        <p class="job__org"><a href="https://www.uv.es/uvweb/chemistry/en/faculty-chemistry-1285849471169.html" target="_blank">Universitat de València</a></p>
        <p class="job__meta">Feb 2020 - Sept 2021</p>
        <p class="job__meta">Valencia, España</p>
      </header>
      <p>Personal docente e investigador (PDI) en el grado de Química, impartiendo Electromagnetismo y Técnicas de Laboratorio (Física II) entre 2019 y 2021, en modalidad presencial y en línea. El foco estuvo en construir la base de física y estadística del alumnado.</p>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Consultor - Científico de datos</h3>
        <p class="job__org"><a href="https://www.capgemini.com/" target="_blank">Capgemini</a></p>
        <p class="job__meta">Feb 2019 - Sept 2019</p>
        <p class="job__meta">Valencia, España</p>
      </header>
      <p>Consultor en el equipo de Insights &amp; Data. Desarrollé una herramienta de análisis de sentimiento basada en web scraping y NLP.</p><br>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Investigador en física - Analista de datos y desarrollador</h3>
        <p class="job__org"><a href="https://webific.ific.uv.es/web/en" target="_blank">Instituto de Física Corpuscular (IFIC)</a> &middot; <a href="https://home.cern/" target="_blank">Laboratorio Europeo de Física de Partículas (CERN)</a></p>
        <p class="job__meta">Dic 2017 - Ene 2019</p>
        <p class="job__meta">Valencia, España | Ginebra, Suiza</p>
      </header>
      <p>Investigador predoctoral en el experimento ATLAS del CERN. Desarrollé software de análisis y visualización de datos durante la fase inicial de la tesis doctoral. Diseñé y optimicé la aplicación web completa (backend y frontend) para monitorizar la alineación del detector ATLAS. La herramienta resultante fue adoptada ampliamente por la colaboración.
      Parte del trabajo desarrollado en esta etapa se recoge en el artículo <a href="https://link.springer.com/article/10.1007/JHEP11(2022)040">JHEP 11 (2022) 040</a>.
      </p><br>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Investigador en física - Analista de datos (prácticas)</h3>
        <p class="job__org"><a href="https://webific.ific.uv.es/web/en" target="_blank">Instituto de Física Corpuscular (IFIC)</a></p>
        <p class="job__meta">Abr 2017 - Sept 2017</p>
        <p class="job__meta">Valencia, España</p>
      </header>
      <p>Prácticas financiadas por la beca Severo Ochoa, investigando la física del quark top para mi trabajo de fin de máster con el grupo ATLAS. Desarrollé scripts en Python para la extracción de datos y análisis estadísticos, usando Git para el control de versiones.</p><br>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Investigador en divulgación (prácticas)</h3>
        <p class="job__org"><a href="https://www.esa.int/" target="_blank">Agencia Espacial Europea (ESA)</a></p>
        <p class="job__meta">Jun 2016 - Sept 2016</p>
        <p class="job__meta">Leiden, Países Bajos</p>
      </header>
      <p>Beca LEAPS para trabajar con el grupo Universe Awareness (UNAWE) de la ESA y la Universidad de Leiden. Desarrollé una herramienta de NLP para análisis de sentimiento y <a href="https://www.unawe.org/updates/unawe-update-2016-37/">estudié</a> cómo las licencias de los productos científicos afectan a su alcance divulgativo.
      Parte de este trabajo se incluyó en <a href="https://www.capjournal.org/issues/20/">CAPjournal 20 (2016) 5</a>.</p><br>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Investigador en física - Analista de datos (prácticas)</h3>
        <p class="job__org"><a href="https://www.institut3a.physik.rwth-aachen.de/cms/~jgoo/institut3a/?lidx=1" target="_blank">RWTH Aachen University</a></p>
        <p class="job__meta">Feb 2016 - Jun 2016</p>
        <p class="job__meta">Aquisgrán, Alemania</p>
      </header>
      <p>Investigación en el Instituto de Física III A de la RWTH Aachen, analizando datos del LHC procedentes del experimento CMS. El trabajo se centró en la búsqueda de señales con muones como posibles candidatos a materia oscura, con base en teoría cuántica de campos. Análisis implementados en Python, C++ y Bash.
      Estos estudios quedaron recogidos, junto a otros, en <a href="https://link.springer.com/article/10.1007/JHEP06(2018)128">JHEP 06 (2018) 128</a>.</p><br>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Investigador en física - Analista de datos (prácticas)</h3>
        <p class="job__org"><a href="https://webific.ific.uv.es/web/en" target="_blank">Instituto de Física Corpuscular (IFIC)</a></p>
        <p class="job__meta">Nov 2014 - Jul 2015</p>
        <p class="job__meta">Valencia, España</p>
      </header>
      <p>Prácticas externas del grado de Física en el experimento Neutrino Experiment with a Xenon TPC (NEXT), donde analicé datos de detectores de silicio para calibrar instrumentación científica. Trabajé con fotomultiplicadores, fotomultiplicadores de silicio, láseres y sistemas de vacío.
      Este trabajo contribuyó a los artículos <a href="https://iopscience.iop.org/article/10.1088/1748-0221/10/02/C02039">JINST 10 (2015) C02039</a> y <a href="https://inspirehep.net/literature/1468317">PoS PhotoDet2015 (2016) 034</a>.</p><br>
    </div>
  </div> <!-- End Experience Tab -->

  <!-- Education Tab -->
  <div id="Education" class="container tab">
    <h2>Formación</h2>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Doctorado en Física</h3>
        <p class="job__org">Universitat de València</p>
        <p class="job__meta">2019 - 2024</p>
      </header>
      <p><a href="https://www.uv.es/uvweb/atomic-molecular-nuclear-physics-department/en/doctoral-studies-/phd-programmes-related-department/doctoral-studies-programme-physics-1285858319539.html" target="_blank">Doctorado en Física</a> con especialización en física de partículas y análisis de datos mediante técnicas avanzadas de aprendizaje automático, realizado en el Instituto de Física Corpuscular (IFIC). Mi tesis estudió la interacción entre el bosón de Higgs y el quark top, relevante para cuestiones fundamentales como la asimetría materia-antimateria.</p><br>
      <p>Tesis doctoral: <a href="https://repository.cern/records/gwqbx-yhe04" target="_blank">Search for the Higgs boson produced in association with a top quark using &tau; leptons with ATLAS</a></p>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Máster en Física Avanzada</h3>
        <p class="job__org">Universitat de València</p>
        <p class="job__meta">2016 - 2017</p>
      </header>
      <p><a href="https://www.uv.es/uvweb/universidad/es/estudios-postgrado/masteres-oficiales/oferta-masteres-oficiales/master-universitario-fisica-avanzada-1285848941532/Titulacio.html?id=1285855672391&p2=2" target="_blank">Máster en Física Avanzada</a> con especialidad en física nuclear y de partículas y en física teórica. El programa estaba orientado al I+D, con fuerte énfasis en estadística, visualización de datos, computación y análisis cuantitativo. Mi trabajo de fin de máster, centrado en datos del experimento ATLAS para estudiar el quark top, contó con el apoyo de una beca Severo Ochoa.</p><br>
      <p>Trabajo de fin de máster: <a href="https://repository.cern/records/bv467-d1f06" target="_blank">Optimisation of selection criteria of <em>t</em>-channel single-top-quark events at &radic;s = 13 TeV for studies of anomalous couplings in the <em>Wtb</em> vertex</a></p>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Grado en Física</h3>
        <p class="job__org">RWTH Aachen University</p>
        <p class="job__meta">2015 - 2016</p>
      </header>
      <p>Año de <a href="https://www.rwth-aachen.de/cms/root/studium/vor-dem-studium/studiengaenge/liste-aktuelle-studiengaenge/studiengangbeschreibung/~bojy/physik-m-sc/?lidx=1" target="_blank">asignaturas</a> de posgrado en física y realización del trabajo de fin de grado durante un intercambio Erasmus. La tesis consistió en el análisis de datos del experimento CMS del CERN en busca de señales de materia oscura.</p><br>
      <p>Trabajo de fin de grado: <a href="https://cds.cern.ch/record/2286284" target="_blank">Search for dark matter in proton-proton collision events with a muon and missing transverse energy in the CMS detector with &radic;s = 13 TeV</a></p>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Grado en Física</h3>
        <p class="job__org">Universitat de València</p>
        <p class="job__meta">2011 - 2015</p>
      </header>
      <p><a href="https://www.uv.es/uvweb/college/en/undergraduate-studies/undergraduate-studies-/degree-programmes-offered/degree-physics-1285846094474/Titulacio.html?id=1285847387274" target="_blank">Grado en Física</a>: 258 créditos ECTS frente a los 240 exigidos, el excedente en asignaturas optativas cursadas por interés propio. Aquí construí la base de física teórica, matemáticas avanzadas y resolución computacional de problemas. La Facultad de Física de la Universitat de València fue el mejor departamento de física de España según el ranking de Shanghái durante esos años.</p><br>
    </div>
  </div> <!-- End Education Tab -->
  <div id="Skills" class="container tab">
    <h2>Competencias</h2>
    <!-- Programming Languages -->
    <div class="cv-container skill-section">
      <h3>Lenguajes de programación</h3>
      <p class="skill-note">Python en toda mi trayectoria, del análisis de datos del LHC a sistemas de IA en producción. C++ durante el doctorado, contribuyendo al software de simulación de ATLAS. Una parte importante del código que entrego se escribe hoy con asistencia de IA, lo que desplaza mi tiempo hacia el diseño y la revisión.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Python.png" alt="Python" class="skill-icon">
          <span>Python</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Cpp.png" alt="C++" class="skill-icon">
          <span>C++</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Bash.png" alt="Shell" class="skill-icon">
          <span>Shell</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/R.png" alt="R" class="skill-icon">
          <span>R</span>
        </div>
      </div>
      <h4>Sistemas operativos</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/OS_MacOS.svg" alt="macOS" class="skill-icon">
          <span>macOS</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/OS_Linux.svg" alt="Linux" class="skill-icon">
          <span>Linux</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/OS_Windows.svg" alt="Windows" class="skill-icon">
          <span>Windows</span>
        </div>
      </div>
    </div>
    <!-- Agentic AI & LLM Systems -->
    <div class="cv-container skill-section">
      <h3>IA agéntica y sistemas basados en LLM</h3>
      <h4>Frameworks de agentes y orquestación</h4>
      <p class="skill-note">Sistemas multiagente: planificación y apoyo a la decisión, arquitecturas metacognitivas y federadas. Los frameworks se ganan su sitio en el prototipado rápido; más allá de eso prefiero orquestar sin ninguno, lo que deja el flujo de control a la vista.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/LangGraph.svg" alt="LangGraph" class="skill-icon">
          <span>LangGraph</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LangChain.svg" alt="LangChain" class="skill-icon">
          <span>LangChain</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/CrewAI.png" alt="CrewAI" class="skill-icon">
          <span>CrewAI</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/AutoGen.jpg" alt="AutoGen" class="skill-icon">
          <span>AutoGen</span>
        </div>
        <!-- <div class="skill-square">
          <img src="../images/Logos/Bert.webp" alt="BERT" class="skill-icon">
          <span>BERT</span>
        </div> -->
        <!-- <div class="skill-square">
          <img src="../images/Logos/LLaMA.png" alt="LLaMA" class="skill-icon">
          <span>LLaMA</span>
        </div> -->
      </div>
      <h4>Protocolos de agentes</h4>
      <p class="skill-note">Sobre todo MCP: servidores propios que exponen herramientas de dominio a los agentes tras una interfaz estable. También Agent Skills para empaquetar procedimientos reutilizables y A2A para la comunicación entre agentes.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/MCP.svg" alt="MCP" class="skill-icon">
          <span>MCP</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/A2A.svg" alt="A2A" class="skill-icon">
          <span>A2A</span>
        </div>
      </div>
      <h4>IA en el edge y en dispositivo</h4>
      <p class="skill-note">Modelos de pesos abiertos servidos en local con Ollama, vLLM y llama.cpp, sobre hardware que va de placas Raspberry Pi a unidades NVIDIA DGX Spark. Varios están pensados para entornos denegados, donde el bucle completo del agente debe funcionar sin conectividad. Entre ellos, un UAV pilotado de forma autónoma por un agente embarcado.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Ollama.svg" alt="LLMs locales" class="skill-icon">
          <span>Ollama</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LLaMA.png" alt="Modelos de pesos abiertos" class="skill-icon">
          <span>Modelos abiertos</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/MQTT.png" alt="Mensajería en el edge" class="skill-icon">
          <span>Mensajería edge</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/RaspberryPi.svg" alt="Raspberry Pi" class="skill-icon">
          <span>Raspberry Pi</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/vLLM.png" alt="vLLM" class="skill-icon">
          <span>vLLM</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/llama_cpp.svg" alt="llama.cpp" class="skill-icon">
          <span>llama.cpp</span>
        </div>
      </div>
      <h4>Proveedores de LLM en la nube</h4>
      <p class="skill-note">OpenAI, Anthropic y Gemini en proyectos de producción. Comparo candidatos sobre la tarea real antes de decidir, en lugar de recurrir por defecto al más grande disponible.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/repos/OpenAI.png" alt="OpenAI" class="skill-icon">
          <span>OpenAI</span>
        </div>
        <div class="skill-square">
          <img src="../images/repos/Claude.svg" alt="Anthropic" class="skill-icon">
          <span>Anthropic</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Gemini.png" alt="Gemini" class="skill-icon">
          <span>Gemini</span>
        </div>
        <!-- <div class="skill-square">
          <img src="../images/Logos/DialogFlow.svg" alt="DialogFlow CX" class="skill-icon">
          <span>DialogFlow CX</span>
        </div> -->
      </div>
      <h4>RAG y sistemas de conocimiento</h4>
      <p class="skill-note">Un asistente interno en Mercadona que respondía consultas de empleados sobre política de empresa: LangChain y Gemini sobre un índice FAISS, servido con DialogFlow CX en GCP.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Meta.png" alt="FAISS" class="skill-icon">
          <span>FAISS</span>
        </div>
      </div>
      <h4>Observabilidad y evaluación</h4>
      <p class="skill-note">OpenTelemetry en todos los proyectos agénticos, salvo en los de LangGraph, donde uso LangSmith.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/LangChain.svg" alt="LangSmith" class="skill-icon">
          <span>LangSmith</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/OTel.png" alt="OpenTelemetry" class="skill-icon">
          <span>OpenTelemetry</span>
        </div>
      </div>
      <h4>Validación de datos</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Pydantic.png" alt="Pydantic" class="skill-icon">
          <span>Pydantic</span>
        </div>
      </div>
    </div>
    <!-- Machine Learning -->
    <div class="cv-container skill-section">
      <h3>Aprendizaje automático</h3>
      <p class="skill-note">Sobre todo en el experimento ATLAS del CERN, con datos a escala de petabytes: clasificadores para selección de sucesos y para separar señal de fondo, en escenarios donde el fondo supera a la señal en varios órdenes de magnitud. También experiencia de trabajo con visión por computador y aprendizaje por refuerzo.</p>
      <h4>Manipulación de datos</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Pandas.png" alt="Pandas" class="skill-icon">
          <span>Pandas</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/NumPy.svg" alt="NumPy" class="skill-icon">
          <span>NumPy</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/ROOT.png" alt="ROOT" class="skill-icon">
          <span>ROOT</span>
        </div>
      </div>
      <h4>Frameworks</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/TensorFlow.svg" alt="TensorFlow" class="skill-icon">
          <span>TensorFlow</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/PyTorch.png" alt="PyTorch" class="skill-icon">
          <span>PyTorch</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/XGBoost.png" alt="XGBoost" class="skill-icon">
          <span>XGBoost</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Scikit-Learn.png" alt="Scikit-Learn" class="skill-icon">
          <span>Scikit-Learn</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Keras.png" alt="Keras" class="skill-icon">
          <span>Keras</span>
        </div>
      </div>
      <h4>Visualización y análisis</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Matplotlib.png" alt="Matplotlib" class="skill-icon">
          <span>Matplotlib</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Seaborn.svg" alt="Seaborn" class="skill-icon">
          <span>Seaborn</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Plotly.png" alt="Plotly" class="skill-icon">
          <span>Plotly</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/SciPy.png" alt="SciPy" class="skill-icon">
          <span>SciPy</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/BeautifulSoup.png" alt="BeautifulSoup" class="skill-icon">
          <span>BeautifulSoup</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/SQL.png" alt="SQL" class="skill-icon">
          <span>SQL</span>
        </div>
      </div>
    </div>
    <!-- Software Engineering for AI -->
    <div class="cv-container skill-section">
      <h3>Ingeniería de software para IA</h3>
      <h4>Cloud y MLOps</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/GCP.svg" alt="GCP" class="skill-icon">
          <span>GCP</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/VertexAI.svg" alt="Vertex AI" class="skill-icon">
          <span>Vertex AI</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Docker.png" alt="Docker" class="skill-icon">
          <span>Docker</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Kubernetes.svg" alt="Kubernetes" class="skill-icon">
          <span>Kubernetes</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Spinnaker.svg" alt="Spinnaker" class="skill-icon">
          <span>Spinnaker</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/CloudBees.png" alt="CloudBees" class="skill-icon">
          <span>CloudBees</span>
        </div>
      </div>
      <h4>Ingeniería de datos</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Kafka.png" alt="Kafka" class="skill-icon">
          <span>Kafka</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/MQTT.png" alt="MQTT" class="skill-icon">
          <span>MQTT</span>
        </div>
      </div>
      <h4>Web y APIs</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Flask.png" alt="Flask" class="skill-icon">
          <span>Flask</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Django.svg" alt="Django" class="skill-icon">
          <span>Django</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/FastAPI.png" alt="FastAPI" class="skill-icon">
          <span>FastAPI</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Gradio.png" alt="Gradio" class="skill-icon">
          <span>Gradio</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Web_HTML.png" alt="HTML" class="skill-icon">
          <span>HTML</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Web_CSS.png" alt="CSS" class="skill-icon">
          <span>CSS</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Web_JavaScript.png" alt="JavaScript" class="skill-icon">
          <span>JavaScript</span>
        </div>
        <!-- <div class="skill-square">
          <img src="../images/Logos/CherryPy.png" alt="CherryPy" class="skill-icon">
          <span>CherryPy</span>
        </div> -->
      </div>
    </div>
    <!-- Optimizacion -->
    <div class="cv-container skill-section">
      <h3>Optimización</h3>
      <p class="skill-note">Planificación de turnos en Mercadona, modelada en Pyomo y resuelta con Gurobi. En Indra, asignación de recursos para evacuación médica en escenarios de múltiples víctimas, formulada como modelos QUBO/Ising, resuelta con quantum annealing en D-Wave y expuesta a los agentes de planificación como herramienta invocable.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Pyomo.png" alt="Pyomo" class="skill-icon">
          <span>Pyomo</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Gurobi.png" alt="Gurobi" class="skill-icon">
          <span>Gurobi</span>
        </div>
      </div>
    </div>
    <!-- Tools & Others -->
    <div class="cv-container skill-section">
      <h3>Otras herramientas</h3>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/GitHub.png" alt="GitHub" class="skill-icon">
          <span>GitHub</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/GitLab.png" alt="GitLab" class="skill-icon">
          <span>GitLab</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LaTeX.png" alt="LaTeX" class="skill-icon">
          <span>LaTeX</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Matlab.png" alt="Matlab" class="skill-icon">
          <span>Matlab</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Poetry.svg" alt="Poetry" class="skill-icon">
          <span>Poetry</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/UV.png" alt="UV" class="skill-icon">
          <span>UV</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Jupyter.svg" alt="Jupyter" class="skill-icon">
          <span>Jupyter</span>
        </div>
      </div>
    </div>
    <!-- Languages -->
    <h2>Idiomas</h2>
    <div class="cv-container skill-section">
    <dl class="langs">
      <dt class="langs__name">Español</dt>
      <dd class="langs__level">Nativo</dd>
      <dt class="langs__name">Catalán</dt>
      <dd class="langs__level">Nativo</dd>
      <dt class="langs__name">Inglés</dt>
      <dd class="langs__level">C1&ndash;C2<span class="langs__note">Tesis, publicaciones y congresos en inglés</span></dd>
      <dt class="langs__name">Alemán</dt>
      <dd class="langs__level">A1</dd>
    </dl>
    </div>
  </div><!-- End Skills Tab -->

  <div id="Outreach" class="container tab">
  <h2>Divulgación</h2>
  <div class="cv-container">
    <p>Como defensor de la ciencia y la educación, creo en la importancia de hacer accesibles las ideas complejas. A lo largo de mi carrera he participado en distintas actividades de divulgación con el objetivo de acercar la comunidad científica al público general. Desde conferencias y pódcast hasta la organización de ferias de ciencia y talleres, la meta siempre ha sido despertar curiosidad, favorecer la comprensión y animar a la próxima generación de pensadores e innovadores. Aquí encontrarás una recopilación de esas actividades.</p>
    <br>
    <p style="margin-bottom: 0;">A continuación, algunos enlaces a mi trabajo divulgativo, que dan una idea de las distintas formas en las que me dirijo a públicos fuera del ámbito académico.</p>
    <ul style="margin-top: 0;">
      <li>Presentador del evento divulgativo <a href="https://indico.ific.uv.es/event/7737/" target="_blank">CERN: 70 años de colaboración internacional desvelando los misterios del Universo</a> (800+ asistentes, 2025).</li>
      <li>Ponente y presentador del evento público <a href="https://www.eventbrite.es/e/entradas-10o-aniversario-del-descubrimiento-del-boson-de-higgs-360545710927?aff=oddtdtcreator" target="_blank">10º aniversario del descubrimiento del bosón de Higgs</a> (700+ asistentes, 2022).</li>
      <li>Colaborador del pódcast de física <a href="https://www.ivoox.com/audios-canal-oscilador-armonico_s0_f21440131_p2_1.html?o=all" target="_blank">Oscilador Armónico</a>.</li>
      <li>Entrevista de fisicamr sobre el LHC Run 3: <a href="https://www.instagram.com/reel/Cfo9nBwp6y2/" target="_blank">publicación de Instagram</a>.</li>
      <li>Charlas divulgativas en institutos: <a href="https://github.com/MartinezAgullo/Public/blob/main/Charla_Divulgativa_Instituto.pdf" target="_blank">charla divulgativa</a>.</li>
    </ul>
    <br>
    <div style="text-align: center;">
      <img src="../images/Poster_70_CERN_b.jpeg" alt="Cartel 70 años del CERN" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); margin-bottom: 5px;">
      <p>Evento divulgativo: 70 años del CERN</p>
    </div>
    <br>
    <iframe frameborder='0' allowfullscreen='' scrolling='no' height='200' style='width:100%;' src='https://www.ivoox.com/player_ej_125008443_6_1.html?c1=e0d223' loading='lazy'></iframe>
    <div style="text-align: center;">
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/1jRGUzXbCfc?si=XfaxNAgYcCXWuscC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <p>Evento divulgativo: 10º aniversario del descubrimiento del bosón de Higgs</p>
    </div>
  </div>
  <br>
</div> <!-- End Outreach Tab -->

</div> <!-- End Page Container -->

<!-- begin footer -->
<footer class="container cv-center cv-margin-top">
  <p>
    <a href="{{ site.baseurl }}/bio/CV_ESP.pdf" title="link to CV" target="_blank" class="cv-button cv-margin-top">
      <i class="fa fa-download"></i> Descargar CV en PDF
    </a>
  </p>
</footer>
<!-- end footer -->

<!-- JavaScript for Tab Functionality -->
<script>
function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" cv-teal", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " cv-teal";
}
</script>

<!-- End CV body -->

