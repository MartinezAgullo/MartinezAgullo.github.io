---
layout: post
title: CV
description: "Full CV of Pablo Martínez Agulló: agentic AI systems, GenAI engineering and a PhD in Physics on the ATLAS experiment at CERN."
permalink: /cv/
lang: en
translation: /cv_esp/
font_awesome: true
body_class: cv-page
---


<!-- Begin CV body -->
<!-- Page Container -->
<div class="container cv-margin-top" style="width: 100%;">

  <!-- Tabs -->
  <div class="cv-bar">
    <button class="cv-bar-item cv-button tablink cv-teal" onclick="openTab(event, 'Contact')">Profile</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Experience')">Experience</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Education')">Education</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Skills')">Skills</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Outreach')">Outreach</button>
  </div>

  <!-- Contact Tab -->
  <div id="Contact" class="container tab" style="display: block;">
    <h2>Profile</h2>
    <div class="cv-container profile">
      <div class="image-hover-container contact__photo">
          <img src="../images/pma_formal_LowRes.webp" width="900" height="600" class="image-normal" alt="Pablo Mart&iacute;nez Agull&oacute;">
          <img src="../images/pma_informal_LowRes.webp" width="900" height="600" class="image-hover" alt="Pablo Mart&iacute;nez Agull&oacute;">
      </div>
      <p class="profile__text">I build agentic AI systems and take them from prototype to production. At Indra's innovation lab I design planning and decision-support agents for defence and commercial products, from single agents to multi-agent networks, often running open-weight models on edge hardware so the whole loop keeps working with no connectivity. Before that I shipped GenAI products at Mercadona on Google Cloud.</p>
      <p class="profile__text">My background is a PhD in Physics on the ATLAS experiment at CERN, working on top-quark and Higgs analyses. That is where I learned to handle data at scale and to be careful about what a result actually proves, a habit that matters as much with language models as it did with collision data.</p>
      <dl class="contact">
        <dt class="contact__label">Location</dt>
        <dd class="contact__value">{{ site.author.location }}</dd>
        <dt class="contact__label">Email</dt>
        <dd class="contact__value"><a href="mailto:pablo.martinez.agullo@gmail.com">pablo.martinez.agullo@gmail.com</a></dd>
        <dt class="contact__label">Phone</dt>
        <dd class="contact__value">{{ site.author.phone }}</dd>
      </dl>
    </div>
  </div> <!-- End Contact Tab -->

  <!-- Experience Tab -->
  <div id="Experience" class="container tab">
    <h2>Experience</h2>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Senior artificial intelligence engineer</h3>
        <p class="job__org"><a href="https://www.indracompany.com/" target="_blank">Indra</a></p>
        <p class="job__meta">Sept 2025 - Present</p>
        <p class="job__meta">Madrid, Spain</p>
      </header>
      <p>Member of the AI research team in the innovation laboratory, designing GenAI agent systems for defence and commercial applications. Focused on planning and decision-support agents, covering both single-agent and multi-agent architectures across prototype to near-production deployments. Builds custom MCP servers to expose domain tooling and orchestrates agent pipelines across internally developed agent networks. Part of the work sits on the optimisation side: planning and resource-allocation problems are formulated as QUBO/Ising models and solved with quantum annealing (D-Wave), then exposed to the planning agents as callable tools. Several of these systems are deployed at the edge, running local open-weight LLMs on constrained hardware such as Raspberry Pi boards and NVIDIA DGX Spark units, so the full agent loop keeps working in disconnected or bandwidth-limited environments. Some of these agents act on physical systems: one flies a real drone from mission orders given in natural language, driven by a local LLM. Most projects operate at TRL 2–5. I was also part of the team that secured an externally funded research collaboration between Indra and the CSIC.
      </p>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Artificial intelligence engineer</h3>
        <p class="job__org"><a href="https://info.mercadona.es/en/mercadonait" target="_blank">Mercadona</a></p>
        <p class="job__meta">Sept 2024 - Sept 2025</p>
        <p class="job__meta">Valencia, Spain</p>
      </header>
      <p>Designed and deployed AI-driven solutions within Mercadona's IT Innovation Team, primarily leveraging Generative AI. Notable projects include a RAG-based chatbot (LangChain, Gemini, FAISS, DialogFlow CX) and an application that extracts structured data from product label images (Gemini, Kafka, SQL). I followed hexagonal architecture and CLEAN/SOLID principles, using tools like FastAPI, Docker, Kubernetes, and GCP. I have also contributed to a mathematical optimization project, automating the company’s workforce scheduling system using Pyomo and Gurobi.
      </p>
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Physics researcher - Data analyst</h3>
        <p class="job__org"><a href="https://webific.ific.uv.es/web/en" target="_blank">Instituto de Física Corpuscular (IFIC)</a> &middot; <a href="https://home.cern/" target="_blank">European Laboratory for Particle Physics (CERN)</a></p>
        <p class="job__meta">Sep 2019 - May 2024</p>
        <p class="job__meta">Valencia, Spain | Geneva, Switzerland</p>
      </header>
      <!-- <span class="cv-teal">Current</span> -->
      <!-- Foundational knowledge of CUDA and Verilog, enhancing my capability to work with AI-dedicated infrastructures. -->
      <p>Predoctoral Researcher at the ATLAS group (IFIC and CERN), analyzing large-volume data from the ATLAS detector at the Large Hadron Collider. Developed, optimized, and integrated supervised Machine Learning models (BDT, Neural Networks) utilizing advanced statistical techniques. Contributed to expanding some packages of the main ATLAS software (Athena) and co-developed the post-processing software to exploit our NTuple data. Presented findings at national and international conferences and participated in data acquisition as part of the ATLAS Control Room team.
      <br>
      Part of the research carried out during this period can be found in the papers <a href="https://link.springer.com/article/10.1007/JHEP10(2025)093">JHEP 10 (2025) 093</a> and <a href="https://cds.cern.ch/record/2957351">ATLAS-CONF-2026-002</a>.
      <br>
      This work was partially funded by the competitive ACIF scholarship from the Generalitat Valenciana.
      <br>
      Refer to my <a href="https://martinezagullo.github.io/publications/">publication record</a> during these years.</p>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Faculty lecturer</h3>
        <p class="job__org"><a href="https://www.uv.es/uvweb/chemistry/en/faculty-chemistry-1285849471169.html" target="_blank">University of Valencia</a></p>
        <p class="job__meta">Feb 2020 - Sep 2021</p>
        <p class="job__meta">Valencia, Spain</p>
      </header>
      <p>Faculty Lecturer (PDI) in the Chemistry degree program, teaching Electromagnetism and Laboratory Techniques (Physics II) (2019–2021), via in-person and online instruction, reaching over 100 students across two cohorts. Focused on building student foundations in physics and statistics.</p>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Consultant - Data scientist</h3>
        <p class="job__org"><a href="https://www.capgemini.com/" target="_blank">Capgemini</a></p>
        <p class="job__meta">Feb 2019 - Sep 2019</p>
        <p class="job__meta">Valencia, Spain</p>
      </header>
      <p>Consultant on the Insights & Data team. Developed a sentiment analysis tool based on web scraping and NLP.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Physics researcher - Data analyst and developer</h3>
        <p class="job__org"><a href="https://webific.ific.uv.es/web/en" target="_blank">Instituto de Física Corpuscular (IFIC)</a> &middot; <a href="https://home.cern/" target="_blank">European Laboratory for Particle Physics (CERN)</a></p>
        <p class="job__meta">Dec 2017 - Jan 2019</p>
        <p class="job__meta">Valencia, Spain | Geneva, Switzerland</p>
      </header>
      <p>Predoctoral Researcher on the ATLAS experiment at CERN. Developed data analysis and visualization software during the initial phase of doctoral research. Engineered and optimized the full-stack web application to monitor the alignment of the ATLAS detector. The resulting tool was widely adopted by the collaboration: it went into production in 2019 and remains in use today, seven years on.
      Part of the work developed during this tenure has been included in the paper <a href="https://link.springer.com/article/10.1007/JHEP11(2022)040">JHEP 11 (2022) 040</a>.
      </p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Physics researcher - Data analyst (Internship)</h3>
        <p class="job__org"><a href="https://webific.ific.uv.es/web/en" target="_blank">Instituto de Física Corpuscular (IFIC)</a></p>
        <p class="job__meta">Apr 2017 - Sep 2017</p>
        <p class="job__meta">Valencia, Spain</p>
      </header>
      <p>Internship funded by the Severo Ochoa scholarship, conducting research on top quark physics for my master's thesis with the ATLAS group. Developed Python scripts for data extraction and statistical analyses, using Git for version control.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Outreach researcher (Internship)</h3>
        <p class="job__org"><a href="https://www.esa.int/" target="_blank">European Space Agency (ESA)</a></p>
        <p class="job__meta">Jun 2016 - Sep 2016</p>
        <p class="job__meta">Leiden, Netherlands</p>
      </header>
      <p>Awarded the LEAPS scholarship to work with the Universe Awareness (UNAWE) group at ESA and Leiden University. Built an NLP tool for sentiment analysis, and <a href="https://www.unawe.org/updates/unawe-update-2016-37/">studied</a> how the licensing terms of scientific products affect their reach in outreach.
      Part of this work was included in <a href="https://www.capjournal.org/issues/20/">CAPjournal 20 (2016) 5</a>.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Physics researcher - Data Analyst (Internship)</h3>
        <p class="job__org"><a href="https://www.institut3a.physik.rwth-aachen.de/cms/~jgoo/institut3a/?lidx=1" target="_blank">RWTH Aachen University</a></p>
        <p class="job__meta">Feb 2016 - Jun 2016</p>
        <p class="job__meta">Aachen, Germany</p>
      </header>
      <p>Conducted research at the Physics Institute III A of RWTH Aachen University, analysing LHC data from the CMS experiment. Work focused on searching for muon signatures as potential dark matter candidates, grounded in quantum field theory. Analyses implemented in Python, C++, and Bash.
      These studies were compiled, together with others, in <a href="https://link.springer.com/article/10.1007/JHEP06(2018)128">JHEP 06 (2018) 128</a>.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Physics researcher - Data Analyst (Internship)</h3>
        <p class="job__org"><a href="https://webific.ific.uv.es/web/en" target="_blank">Instituto de Física Corpuscular (IFIC)</a></p>
        <p class="job__meta">Nov 2014 - Jul 2015</p>
        <p class="job__meta">Valencia, Spain</p>
      </header>
      <p>External internship for my Physics degree at the Neutrino Experiment with a Xenon TPC (NEXT), where I analyzed data from silicon detectors to calibrate scientific instruments. Worked with photomultiplier tubes, silicon photomultipliers, lasers, and vacuum systems.
      This work contributed to the papers <a href="https://iopscience.iop.org/article/10.1088/1748-0221/10/02/C02039">JINST 10 (2015) C02039</a> and <a href="https://inspirehep.net/literature/1468317">PoS PhotoDet2015 (2016) 034</a>.</p><br>
    </div>
  </div> <!-- End Experience Tab -->

  <!-- Education Tab -->
  <div id="Education" class="container tab">
    <h2>Education</h2>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">PhD in Physics</h3>
        <p class="job__org">University of Valencia</p>
        <p class="job__meta">2019 - 2024</p>
      </header>
      <p>Earned a <a href="https://www.uv.es/uvweb/atomic-molecular-nuclear-physics-department/en/doctoral-studies-/phd-programmes-related-department/doctoral-studies-programme-physics-1285858319539.html" target="_blank">Doctorate in Physics</a>, specializing in Particle Physics and data analysis using advanced machine learning techniques at the Instituto de Física Corpuscular (IFIC). My thesis explored the interaction between the Higgs boson and the top quark, an interaction relevant to fundamental questions such as matter-antimatter asymmetry.</p><br>
      <p>PhD thesis: <a href="https://repository.cern/records/gwqbx-yhe04" target="_blank">Search for the Higgs boson produced in association with a top quark using &tau; leptons with ATLAS</a></p>
      <!-- <div class="pdf-container">
       <iframe src="https://repository.cern/records/gwqbx-yhe04/preview/CERN-THESIS-2024-018.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">PhD thesis — See record: <a href="https://cds.cern.ch/record/2892621" target="_blank">Here</a></p> -->
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">MSc in Advanced Physics</h3>
        <p class="job__org">University of Valencia</p>
        <p class="job__meta">2016 - 2017</p>
      </header>
      <p>Completed a <a href="https://www.uv.es/uvweb/universidad/es/estudios-postgrado/masteres-oficiales/oferta-masteres-oficiales/master-universitario-fisica-avanzada-1285848941532/Titulacio.html?id=1285855672391&p2=2" target="_blank">Master of Science in Advanced Physics</a>, specializing in Nuclear and Particle Physics as well as Theoretical Physics. This program was geared towards developing R&D expertise, with a strong emphasis on statistics, data visualization, computation, and quantitative analysis. My master's thesis, which focused on the data from the ATLAS experiment to study the top quark, was supported by a Severo Ochoa scholarship.</p><br>
      <p>Master's thesis: <a href="https://repository.cern/records/bv467-d1f06" target="_blank">Optimisation of selection criteria of <em>t</em>-channel single-top-quark events at &radic;s = 13 TeV for studies of anomalous couplings in the <em>Wtb</em> vertex</a></p>
      <!-- <div class="pdf-container">
       <iframe src="https://repository.cern/records/bv467-d1f06/preview/CERN-THESIS-2017-156.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">Master's thesis — See record: <a href="https://cds.cern.ch/record/2285874" target="_blank">Here</a></p>
      <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Bachelor's Degree in Physics</h3>
        <p class="job__org">RWTH Aachen University</p>
        <p class="job__meta">2015 - 2016</p>
      </header>
      <p>Completed a year of graduate-level physics <a href="https://www.rwth-aachen.de/cms/root/studium/vor-dem-studium/studiengaenge/liste-aktuelle-studiengaenge/studiengangbeschreibung/~bojy/physik-m-sc/?lidx=1" target="_blank">courses</a> and bachelor's thesis research during an Erasmus exchange. Thesis involved the analysis of CMS experiment data at CERN in a search for dark matter signatures.</p><br>
      <p>Bachelor's thesis: <a href="https://cds.cern.ch/record/2286284" target="_blank">Search for dark matter in proton-proton collision events with a muon and missing transverse energy in the CMS detector with &radic;s = 13 TeV</a></p>
      <!-- <div class="pdf-container">
      <iframe src="https://cds.cern.ch/record/2286284/files/fulltext.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">Bachelor thesis — See record: <a href="https://cds.cern.ch/record/2286284" target="_blank">Here</a></p> -->
      <!-- 	Search for dark matter in proton-proton collision events with a muon and missing transverse energy in the CMS detector with s= 13 TeV -->
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <header class="job__head">
        <h3 class="job__role">Bachelor's Degree in Physics</h3>
        <p class="job__org">University of Valencia</p>
        <p class="job__meta">2011 - 2015</p>
      </header>
      <p>Graduated with a <a href="https://www.uv.es/uvweb/college/en/undergraduate-studies/undergraduate-studies-/degree-programmes-offered/degree-physics-1285846094474/Titulacio.html?id=1285847387274" target="_blank">Degree in Physics</a>: 258 ECTS credits against the 240 required, the surplus taken as optional coursework out of interest. Established a foundation in theoretical physics, advanced mathematics and computational problem-solving. The Faculty of Physics at the University of Valencia was ranked as the top physics department in Spain according to the Shanghai ranking during my tenure.</p><br>
    </div>
  </div> <!-- End Education Tab --> 
  <div id="Skills" class="container tab">
    <h2>Skills</h2>
    <!-- Programming Languages -->
    <div class="cv-container skill-section">
      <h3>Programming Languages</h3>
      <p class="skill-note">Python throughout, from LHC data analysis to production AI systems. C++ during the PhD, contributing to the ATLAS simulation software. A significant share of the code I ship is now written with AI assistance, which shifts my time towards design and review.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Python.png" alt="Python" class="skill-icon" loading="lazy" decoding="async">
          <span>Python</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Cpp.png" alt="C++" class="skill-icon" loading="lazy" decoding="async">
          <span>C++</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Bash.png" alt="Shell" class="skill-icon" loading="lazy" decoding="async">
          <span>Shell</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/R.png" alt="R" class="skill-icon" loading="lazy" decoding="async">
          <span>R</span>
        </div>
      </div>
      <h4>Operating Systems</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/OS_MacOS.svg" alt="macOS" class="skill-icon" loading="lazy" decoding="async">
          <span>macOS</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/OS_Linux.svg" alt="Linux" class="skill-icon" loading="lazy" decoding="async">
          <span>Linux</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/OS_Windows.svg" alt="Windows" class="skill-icon" loading="lazy" decoding="async">
          <span>Windows</span>
        </div>
      </div>
    </div>
    <!-- Agentic AI & LLM Systems -->
    <div class="cv-container skill-section">
      <h3>Agentic AI &amp; LLM Systems</h3>
      <h4>Agent Frameworks &amp; Orchestration</h4>
      <p class="skill-note">Multi-agent systems: planning and decision-support, metacognitive and federated architectures. Frameworks earn their place in rapid prototyping; beyond that I tend to orchestrate without one, which keeps the control flow explicit.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/LangGraph.svg" alt="LangGraph" class="skill-icon" loading="lazy" decoding="async">
          <span>LangGraph</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LangChain.svg" alt="LangChain" class="skill-icon" loading="lazy" decoding="async">
          <span>LangChain</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/CrewAI.png" alt="CrewAI" class="skill-icon" loading="lazy" decoding="async">
          <span>CrewAI</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/AutoGen.jpg" alt="AutoGen" class="skill-icon" loading="lazy" decoding="async">
          <span>AutoGen</span>
        </div>
        <!-- <div class="skill-square">
          <img src="../images/Logos/Bert.webp" alt="BERT" class="skill-icon" loading="lazy" decoding="async">
          <span>BERT</span>
        </div> -->
        <!-- <div class="skill-square">
          <img src="../images/Logos/LLaMA.png" alt="LLaMA" class="skill-icon" loading="lazy" decoding="async">
          <span>LLaMA</span>
        </div> -->
      </div>
      <h4>Agent Protocols</h4>
      <p class="skill-note">Mainly MCP: custom servers that expose domain tooling to agents behind a stable interface. Also Agent Skills for packaging reusable procedures, and A2A for agent-to-agent communication.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/MCP.svg" alt="MCP" class="skill-icon" loading="lazy" decoding="async">
          <span>MCP</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/A2A.svg" alt="A2A" class="skill-icon" loading="lazy" decoding="async">
          <span>A2A</span>
        </div>
      </div>
      <h4>Edge &amp; On-Device AI</h4>
      <p class="skill-note">Open-weight models served locally with Ollama, vLLM and llama.cpp, on hardware ranging from Raspberry Pi boards to NVIDIA DGX Spark units. Several target denied environments, where the full agent loop must run without connectivity. Among them, a UAV flown autonomously by an on-board agent.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Ollama.svg" alt="Ollama" class="skill-icon" loading="lazy" decoding="async">
          <span>Ollama</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LLaMA.png" alt="Open-weight models" class="skill-icon" loading="lazy" decoding="async">
          <span>Open-weight models</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/MQTT.png" alt="Edge messaging" class="skill-icon" loading="lazy" decoding="async">
          <span>Edge messaging</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/RaspberryPi.svg" alt="Raspberry Pi" class="skill-icon" loading="lazy" decoding="async">
          <span>Raspberry Pi</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/vLLM.png" alt="vLLM" class="skill-icon" loading="lazy" decoding="async">
          <span>vLLM</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/llama_cpp.svg" alt="llama.cpp" class="skill-icon" loading="lazy" decoding="async">
          <span>llama.cpp</span>
        </div>
      </div>
      <h4>Hosted LLM Providers</h4>
      <p class="skill-note">OpenAI, Anthropic and Gemini in production work. I benchmark candidates on the actual task before committing, rather than defaulting to the largest available.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/repos/OpenAI.png" alt="OpenAI" class="skill-icon" loading="lazy" decoding="async">
          <span>OpenAI</span>
        </div>
        <div class="skill-square">
          <img src="../images/repos/Claude.svg" alt="Anthropic" class="skill-icon" loading="lazy" decoding="async">
          <span>Anthropic</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Gemini.png" alt="Gemini" class="skill-icon" loading="lazy" decoding="async">
          <span>Gemini</span>
        </div>
        <!-- <div class="skill-square">
          <img src="../images/Logos/DialogFlow.svg" alt="DialogFlow CX" class="skill-icon" loading="lazy" decoding="async">
          <span>DialogFlow CX</span>
        </div> -->
      </div>
      <h4>RAG &amp; Knowledge Systems</h4>
      <p class="skill-note">An internal assistant at Mercadona answering employee questions on company policy: LangChain and Gemini over a FAISS index, served through DialogFlow CX on GCP.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Meta.png" alt="FAISS" class="skill-icon" loading="lazy" decoding="async">
          <span>FAISS</span>
        </div>
      </div>
      <h4>Observability &amp; Evaluation</h4>
      <p class="skill-note">OpenTelemetry in every agentic project, except LangGraph ones, where I use LangSmith.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/LangChain.svg" alt="LangSmith" class="skill-icon" loading="lazy" decoding="async">
          <span>LangSmith</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/OTel.png" alt="OpenTelemetry" class="skill-icon" loading="lazy" decoding="async">
          <span>OpenTelemetry</span>
        </div>
      </div>
      <h4>Data Validation</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Pydantic.png" alt="Pydantic" class="skill-icon" loading="lazy" decoding="async">
          <span>Pydantic</span>
        </div>
      </div>
    </div>
    <!-- Machine Learning -->
    <div class="cv-container skill-section">
      <h3>Machine Learning</h3>
      <p class="skill-note">Mostly from the ATLAS experiment at CERN, on petabyte-scale data: classifiers for event selection and for signal-versus-background separation, where the background outnumbers the signal by several orders of magnitude. Also working experience with computer vision and reinforcement learning.</p>
      <h4>Data Manipulation</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Pandas.png" alt="Pandas" class="skill-icon" loading="lazy" decoding="async">
          <span>Pandas</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/NumPy.svg" alt="NumPy" class="skill-icon" loading="lazy" decoding="async">
          <span>NumPy</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/ROOT.png" alt="ROOT" class="skill-icon" loading="lazy" decoding="async">
          <span>ROOT</span>
        </div>
      </div>
      <h4>Frameworks</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/TensorFlow.svg" alt="TensorFlow" class="skill-icon" loading="lazy" decoding="async">
          <span>TensorFlow</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/PyTorch.png" alt="PyTorch" class="skill-icon" loading="lazy" decoding="async">
          <span>PyTorch</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/XGBoost.png" alt="XGBoost" class="skill-icon" loading="lazy" decoding="async">
          <span>XGBoost</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Scikit-Learn.png" alt="Scikit-Learn" class="skill-icon" loading="lazy" decoding="async">
          <span>Scikit-Learn</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Keras.png" alt="Keras" class="skill-icon" loading="lazy" decoding="async">
          <span>Keras</span>
        </div>
      </div>
      <h4>Visualization &amp; Analysis</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Matplotlib.png" alt="Matplotlib" class="skill-icon" loading="lazy" decoding="async">
          <span>Matplotlib</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Seaborn.svg" alt="Seaborn" class="skill-icon" loading="lazy" decoding="async">
          <span>Seaborn</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Plotly.png" alt="Plotly" class="skill-icon" loading="lazy" decoding="async">
          <span>Plotly</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/SciPy.png" alt="SciPy" class="skill-icon" loading="lazy" decoding="async">
          <span>SciPy</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/BeautifulSoup.png" alt="BeautifulSoup" class="skill-icon" loading="lazy" decoding="async">
          <span>BeautifulSoup</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/SQL.png" alt="SQL" class="skill-icon" loading="lazy" decoding="async">
          <span>SQL</span>
        </div>
      </div>
    </div>
    <!-- Software Engineering for AI -->
    <div class="cv-container skill-section">
      <h3>Software Engineering for AI</h3>
      <h4>Cloud &amp; MLOps</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/GCP.svg" alt="GCP" class="skill-icon" loading="lazy" decoding="async">
          <span>GCP</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/VertexAI.svg" alt="Vertex AI" class="skill-icon" loading="lazy" decoding="async">
          <span>Vertex AI</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Docker.png" alt="Docker" class="skill-icon" loading="lazy" decoding="async">
          <span>Docker</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Kubernetes.svg" alt="Kubernetes" class="skill-icon" loading="lazy" decoding="async">
          <span>Kubernetes</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Spinnaker.svg" alt="Spinnaker" class="skill-icon" loading="lazy" decoding="async">
          <span>Spinnaker</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/CloudBees.png" alt="CloudBees" class="skill-icon" loading="lazy" decoding="async">
          <span>CloudBees</span>
        </div>
      </div>
      <h4>Data Engineering</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Kafka.png" alt="Kafka" class="skill-icon" loading="lazy" decoding="async">
          <span>Kafka</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/MQTT.png" alt="MQTT" class="skill-icon" loading="lazy" decoding="async">
          <span>MQTT</span>
        </div>
      </div>
      <h4>Web &amp; APIs</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Flask.png" alt="Flask" class="skill-icon" loading="lazy" decoding="async">
          <span>Flask</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Django.svg" alt="Django" class="skill-icon" loading="lazy" decoding="async">
          <span>Django</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/FastAPI.png" alt="FastAPI" class="skill-icon" loading="lazy" decoding="async">
          <span>FastAPI</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Gradio.png" alt="Gradio" class="skill-icon" loading="lazy" decoding="async">
          <span>Gradio</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Web_HTML.png" alt="HTML" class="skill-icon" loading="lazy" decoding="async">
          <span>HTML</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Web_CSS.png" alt="CSS" class="skill-icon" loading="lazy" decoding="async">
          <span>CSS</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Web_JavaScript.png" alt="JavaScript" class="skill-icon" loading="lazy" decoding="async">
          <span>JavaScript</span>
        </div>
        <!-- <div class="skill-square">
          <img src="../images/Logos/CherryPy.png" alt="CherryPy" class="skill-icon" loading="lazy" decoding="async">
          <span>CherryPy</span>
        </div> -->
      </div>
    </div>
    <!-- Optimisation -->
    <div class="cv-container skill-section">
      <h3>Optimisation</h3>
      <p class="skill-note">Workforce scheduling at Mercadona, modelled in Pyomo and solved with Gurobi. At Indra, resource allocation for medical evacuation in mass-casualty scenarios, formulated as QUBO/Ising models, solved with quantum annealing on D-Wave and exposed to the planning agents as a callable tool.</p>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Pyomo.png" alt="Pyomo" class="skill-icon" loading="lazy" decoding="async">
          <span>Pyomo</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Gurobi.png" alt="Gurobi" class="skill-icon" loading="lazy" decoding="async">
          <span>Gurobi</span>
        </div>
      </div>
    </div>
    <!-- Tools & Others -->
    <div class="cv-container skill-section">
      <h3>Supporting Tools</h3>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/GitHub.png" alt="GitHub" class="skill-icon" loading="lazy" decoding="async">
          <span>GitHub</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/GitLab.png" alt="GitLab" class="skill-icon" loading="lazy" decoding="async">
          <span>GitLab</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LaTeX.png" alt="LaTeX" class="skill-icon" loading="lazy" decoding="async">
          <span>LaTeX</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Matlab.png" alt="Matlab" class="skill-icon" loading="lazy" decoding="async">
          <span>Matlab</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Poetry.svg" alt="Poetry" class="skill-icon" loading="lazy" decoding="async">
          <span>Poetry</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/UV.png" alt="UV" class="skill-icon" loading="lazy" decoding="async">
          <span>UV</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Jupyter.svg" alt="Jupyter" class="skill-icon" loading="lazy" decoding="async">
          <span>Jupyter</span>
        </div>
      </div>
    </div>
    <!-- Languages -->
    <h2>Languages</h2>
    <div class="cv-container skill-section">
    <dl class="langs">
      <dt class="langs__name">Spanish</dt>
      <dd class="langs__level">Native</dd>
      <dt class="langs__name">Catalan</dt>
      <dd class="langs__level">Native</dd>
      <dt class="langs__name">English</dt>
      <dd class="langs__level">C1&ndash;C2<span class="langs__note">Thesis, publications and conference talks in English</span></dd>
      <dt class="langs__name">German</dt>
      <dd class="langs__level">A1</dd>
    </dl>
    </div>
  </div><!-- End Skills Tab -->


  <div id="Outreach" class="container tab">
  <h2>Outreach</h2>
  <div class="cv-container">
    <!--<p>Concurrently, I engage in science communication during my free time, delivering talks at schools, participating in science fairs, and contributing to a science podcast.</p>-->
    <p>As a passionate advocate for science and education, I believe in the importance of making complex ideas accessible to everyone. Throughout my career, I have actively engaged in various outreach activities aimed at bridging the gap between the scientific community and the public. From public lectures and podcasts to organizing science fairs and workshops, my goal has always been to inspire curiosity, foster understanding, and encourage the next generation of thinkers and innovators. Here, you’ll find a collection of my outreach efforts, showcasing my commitment to sharing knowledge and promoting scientific literacy in a meaningful and impactful way.</p>
    <br>
    <p style="margin-bottom: 0;"> Below, you’ll find a collection of links to some of my outreach efforts.  These resources reflect my commitment to sharing knowledge and promoting scientific literacy, offering a glimpse into the diverse ways I engage with audiences beyond the academic world.</p>
    <ul style="margin-top: 0;">
      <li>Host of the outreach event <a href="https://indico.ific.uv.es/event/7737/" target="_blank">CERN: 70 años de colaboración internacional desvelando los misterios del Universo</a> (800+ assistants, 2025).</li>
      <li>Speaker and host of the public event <a href="https://www.eventbrite.es/e/entradas-10o-aniversario-del-descubrimiento-del-boson-de-higgs-360545710927?aff=oddtdtcreator" target="_blank">10º aniversario del descubrimiento del bosón de Higgs</a> (700+ assistants, 2022).</li>
      <li>Contributor to the physics podcast <a href="https://www.ivoox.com/audios-canal-oscilador-armonico_s0_f21440131_p2_1.html?o=all" target="_blank">Oscilador Armónico</a>.</li>
      <li>Interview by fisicamr about LHCRun3: <a href="https://www.instagram.com/reel/Cfo9nBwp6y2/" target="_blank">Instagram post</a>.</li>
      <li>Outreach talks for high schools: <a href="https://github.com/MartinezAgullo/Public/blob/main/Charla_Divulgativa_Instituto.pdf" target="_blank">Outreach talk</a>.</li>
    </ul>
    <br>
    <div style="text-align: center;">
      <img src="../images/Poster_70_CERN_b.jpeg" alt="CERN 70 Years Poster" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); margin-bottom: 5px;" loading="lazy" decoding="async">
      <p>Outreach event: 70 años del CERN</p>
    </div>
    <br>
    <iframe frameborder='0' allowfullscreen='' scrolling='no' height='200' style='width:100%;' src='https://www.ivoox.com/player_ej_125008443_6_1.html?c1=e0d223' loading='lazy'></iframe>
    <div style="text-align: center;">
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/1jRGUzXbCfc?si=XfaxNAgYcCXWuscC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <p>Outreach event 10º aniversario del descubrimiento del bosón de Higgs</p>
    </div>
    <!-- <br>
    <div style="text-align: center;">
      <blockquote class="instagram-media cv-center" data-instgrm-permalink="https://www.instagram.com/reel/Cfo9nBwp6y2/" data-instgrm-version="14" style="max-width: 540px; width: 100%; margin: auto; margin-bottom: 5px;">
        <a href="https://www.instagram.com/reel/Cfo9nBwp6y2/"></a>
      </blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
      <p>Interview by fisicamr about LHCRun3</p>
    </div> -->
  </div>
  <br>
</div> <!-- End Outreach Tab -->

</div> <!-- End Page Container -->

<!-- begin footer -->
<footer class="container cv-center cv-margin-top">
  <p>
    <a href="{{ site.baseurl }}/bio/CV_ENG.pdf" title="link to CV" target="_blank" class="cv-button cv-margin-top">
      <i class="fa fa-download"></i> Download CV PDF
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

