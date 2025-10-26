---
layout: post
title: CV
description: CV
permalink: /cv/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ site.title }}</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        .tab { display: none; }
        .tab.active { display: block; }
        .icon-black { color: black !important; }
        .skill-box {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
            height: 70px;
        }
        .skill-icon {
            max-height: 100%;
            margin-right: 15px;
        }
        .skill-section {
            margin-bottom: 20px;
        }
        .skill-section h3 {
            margin-bottom: 10px;
            color: #333;
        }
        .container {
            width: 100%;
            margin: 20px auto;
            padding: 0 5px;
            box-sizing: border-box;
        }
        .tabs {
            background-color: black;
            overflow: hidden;
        }
        .tabs button {
            background-color: inherit;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
            font-size: 17px;
            color: white;
        }
        .tabs button:hover {
            background-color: #ddd;
            color: black;
        }
        .tabs button.active {
            background-color: #009688;
            color: white;
        }
        .tab-content {
            padding: 6px 12px;
            border-top: none;
        }
    </style>
</head>

<!-- Begin CV body -->
<body class="cv-light-grey" style="width: 100%;"> 

<!-- Page Container -->
<div class="container cv-margin-top" style="width: 100%;">

  <!-- Tabs -->
  <div class="cv-bar cv-black">
    <button class="cv-bar-item cv-button tablink cv-teal" onclick="openTab(event, 'Contact')">Profile</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Experience')">Experience</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Education')">Education</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Skills')">Skills</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Outreach')">Outreach</button>
  </div>

  <!-- Contact Tab -->
  <div id="Contact" class="container cv-white cv-card tab" style="display: block;">
    <h2>Contact</h2>
    <div class="cv-container cv-text-grey cv-card-4">
      <div class="cv-display-container image-hover-container">
          <img src="../images/pma_formal.png" class="image-normal" alt="Avatar">
          <img src="../images/pma_informal.png" class="image-hover" alt="Avatar">
          <!-- <div class="cv-display-bottomleft container cv-text-black">
              <h2>{{ site.author.name }}</h2>
          </div> -->
      </div>
      <br>
      <div class="cv-container">
        <!-- <p><i class="fa fa-briefcase fa-fw cv-margin-right cv-large icon-black"></i>{{ site.author.job_title }}</p> -->
        <p><i class="fa fa-home fa-fw cv-margin-right cv-large icon-black"></i> {{ site.author.location }}</p>
        <p><i class="fa fa-envelope fa-fw cv-margin-right cv-large icon-black"></i> <a href="mailto:pablo.martinez.agullo@gmail.com">pablo.martinez.agullo@gmail.com</a></p>
        <p><i class="fa fa-phone fa-fw cv-margin-right cv-large icon-black"></i> {{ site.author.phone }}</p>
      </div>
    <br>  
    </div>
    <br>
  </div> <!-- End Contact Tab -->

  <!-- Experience Tab -->
  <div id="Experience" class="container cv-white cv-card tab">
    <h2>Experience</h2>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Senior artificial intelligence engineer</b></h4></p>
      <p><h6><a href="https://www.indracompany.com/" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Indra</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Sept 2025 - Present</h6></p>
      <p>Member of the AI-research team in the innovation laboratory. My research focuses on developing AI agents for both the defense and commercial sectors. Most projects are developed at Technology Readiness Level (TRL) below 5.
      </p>
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Artificial intelligence engineer</b></h4></p>
      <p><h6><a href="https://info.mercadona.es/en/mercadonait" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Mercadona</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Sept 2024 - Sept 2025</h6></p>
      <p>Designed and deployed AI-driven solutions within Mercadona's IT Innovation Team, primarily leveraging Generative AI. Notable projects include a RAG-based chatbot (LangChain, Gemini, FAISS, DialogFlow CX) and an application that extracts structured data from product label images (Gemini, Kafka, SQL). I followed hexagonal architecture and CLEAN/SOLID principles, using tools like FastAPI, Docker, Kubernetes, and GCP. I have also contributed to a mathematical optimization project, automating the company’s workforce scheduling system using Pyomo.
      </p>
      <p>Collaborated with internal clients to define business requirements and deliver scalable AI solutions. Led technical discovery and helped align project roadmaps with organizational goals.
      </p>
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data analyst</b></h4></p>
      <p><h6><a href="https://webific.ific.uv.es/web/en" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</a></h6>
      <h6><a href="https://home.cern/" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>European Laboratory for Particle Physics (CERN)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain | Geneva, Switzerland</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Sep 2019 - May 2024</h6></p>
      <!-- <span class="cv-tag cv-teal cv-round">Current</span> -->
      <p>Predoctoral Researcher at the ATLAS group (IFIC and CERN), analyzing large-volume data from the ATLAS detector at the Large Hadron Collider. Developed, optimized, and integrated supervised Machine Learning models (BDT, Neural Networks) utilizing advanced statistical techniques. Proficient in Python and C++, with experience in Shell, R, and SQL. Used major ML frameworks such as PyTorch, TensorFlow, and XGBoost. Foundational knowledge of CUDA and Verilog, enhancing my capability to work with AI-dedicated infrastructures. My role extended to collaborative software development using version control systems like GitLab, GitHub, and SVN. Contributed to expanding some packages of the main ATLAS software (Athena) and co-developed the post-processing software to exploit our NTuple data. Presented findings at national and international conferences and participated in data acquisition as part of the ATLAS Control Room team.
      <br>
      Part of the research carried out during this period can be found in the paper <a href="https://arxiv.org/abs/2508.14695">ATLAS Collaboration. "Search for the production of a Higgs boson in association with a single top quark in $ pp $ collisions at $\sqrt {s}= 13$ TeV with the ATLAS detector." arXiv preprint arXiv:2508.14695 (2025)</a>.
      <br>
      This work was partially funded by the competitive ACIF scholarship from the Generalitat Valenciana.
      <br>
      Refer to my <a href="https://martinezagullo.github.io/publications/">publication record</a> during these years.</p>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Faculty lecturer</b></h4></p>
      <p><h6><a href="https://www.uv.es/uvweb/chemistry/en/faculty-chemistry-1285849471169.html" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>University of Valencia</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Feb 2020 - Sep 2021</h6></p>
      <p>Faculty Lecturer (PDI) in the Chemistry degree program, teaching Electromagnetism and Laboratory Techniques (Physics II) (Academic Years 2019/2020 and 2020/2021) via in-person and online instruction. Focused on building student foundations in physics and statistics. Also provided private tutoring across various engineering disciplines for nearly a decade.</p>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Consultant - Data scientist</b></h4></p>
      <p><h6><a href="https://www.capgemini.com/" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Capgemini</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Feb 2019 - Sep 2019</h6></p>
      <p>Consultant on the Insights & Data team. Developed a sentiment analysis tool based on web scraping and Natural Language Processing (NLP).</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data analyst and developer</b></h4></p>
      <p><h6><a href="https://webific.ific.uv.es/web/en" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</a></h6>
      <h6><a href="https://home.cern/" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>European Laboratory for Particle Physics (CERN)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain | Geneva, Switzerland</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Dec 2017 - Jan 2019</h6></p>
      <p>Predoctoral Researcher on the ATLAS experiment at CERN. Developed data analysis and visualization software during the initial phase of doctoral research. Engineered and optimized the full-stack web application to monitor the alignment of the ATLAS detector. The resulting tool was widely adopted by the collaboration.
      Part of the work developed during this tenure has been included in the paper <a href="https://link.springer.com/article/10.1007/JHEP11(2022)040">J. High Energ. Phys. 2022, 40 (2022)</a>.
      </p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data analyst (Internship)</b></h4></p>
      <p><h6><a href="https://webific.ific.uv.es/web/en" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Apr 2017 - Sep 2017</h6></p>
      <p>During my internship, funded by the prestigious Severo Ochoa scholarship, I conducted research on top quark physics for my master's thesis with the ATLAS group. Developed and refined Python scripts for data extraction and statistical analyses. I was also responsible for maintaining and updating codebases on Git, ensuring robust version control practices.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Outreach researcher (Internship)</b></h4></p>
      <p><h6><a href="https://www.esa.int/" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>European Space Agency (ESA)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Leiden, Netherlands</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Jun 2016 - Sep 2016</h6></p>
      <p>Awarded the LEAPS scholarship to engage in science communication and outreach with the Universe Awareness (UNAWE) group at ESA and Leiden University. Developed a natural language processing (NLP) tool and conducted <a href="https://www.unawe.org/updates/unawe-update-2016-37/">research</a> on scientific product policies.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data Analyst (Internship)</b></h4></p>
      <p><h6><a href="https://www.institut3a.physik.rwth-aachen.de/cms/~jgoo/institut3a/?lidx=1" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>RWTH Aachen University</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Aachen, Germany</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Feb 2016 - Jun 2016</h6></p>
      <p>Conducted research at the Physics Institute III A of RWTH Aachen University. Engaged in the analysis of the LHC data recorded by the CMS experiment.
      Used Bash Scripting, Python, and C++ to handle complex data analyses.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data Analyst (Internship)</b></h4></p>
      <p><h6><a href="https://webific.ific.uv.es/web/en" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Nov 2014 - Jul 2015</h6></p>
      <p>External internship for my Physics degree at the Neutrino Experiment with a Xenon TPC (NEXT), where I analyzed data from silicon detectors to calibrate scientific instruments. Worked with photomultiplier tubes (PMTs), silicon photomultipliers (SiPMs), lasers, and vacuum systems.</p><br>
    </div>
  </div> <!-- End Experience Tab -->

  <!-- Education Tab -->
  <div id="Education" class="container cv-white cv-card tab">
    <h2>Education</h2>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>PhD in Physics</b></h4></p>
      <p><h6><i class="fa fa-university fa-fw cv-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>2019 - 2024</h6></p>
      <p>Earned a <a href="https://www.uv.es/uvweb/atomic-molecular-nuclear-physics-department/en/doctoral-studies-/phd-programmes-related-department/doctoral-studies-programme-physics-1285858319539.html" target="_blank">Doctorate in Physics</a>, specializing in Particle Physics and data analysis using advanced machine learning techniques at the Instituto de Física Corpuscular (IFIC). My thesis explored the interaction between the Higgs boson and the top quark, an interaction relevant to fundamental questions such as matter-antimatter asymmetry.</p></p><br>
      <p>See record: <a href="https://repository.cern/records/gwqbx-yhe04" target="_blank">Here</a></p>
      <!-- <div class="pdf-container">
       <iframe src="https://repository.cern/records/gwqbx-yhe04/preview/CERN-THESIS-2024-018.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">PhD thesis — See record: <a href="https://cds.cern.ch/record/2892621" target="_blank">Here</a></p> -->
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>MSc in Advanced Physics</b></h4></p>
      <p><h6><i class="fa fa-university fa-fw cv-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>2016 - 2017</h6></p>
      <p>Completed a <a href="https://www.uv.es/uvweb/universidad/es/estudios-postgrado/masteres-oficiales/oferta-masteres-oficiales/master-universitario-fisica-avanzada-1285848941532/Titulacio.html?id=1285855672391&p2=2" target="_blank">Master of Science in Advanced Physics</a>, specializing in Nuclear and Particle Physics as well as Theoretical Physics. This program was geared towards developing R&D expertise, with a strong emphasis on statistics, data visualization, computation, and quantitative analysis. My master's thesis, which focused on the data from the ATLAS experiment to study the top quark, was supported by a Severo Ochoa scholarship.</p><br>
      <p>See record: <a href="https://repository.cern/records/bv467-d1f06" target="_blank">Here</a></p>
      <!-- <div class="pdf-container">
       <iframe src="https://repository.cern/records/bv467-d1f06/preview/CERN-THESIS-2017-156.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">Master's thesis — See record: <a href="https://cds.cern.ch/record/2285874" target="_blank">Here</a></p>
      <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Bachelor's Degree in Physics</b></h4></p>
      <p><h6><i class="fa fa-university fa-fw cv-margin-right icon-black"></i>RWTH Aachen University</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>2015 - 2016</h6></p>
      <p>Completed a year of graduate-level physics <a href="https://www.rwth-aachen.de/cms/root/studium/vor-dem-studium/studiengaenge/liste-aktuelle-studiengaenge/studiengangbeschreibung/~bojy/physik-m-sc/?lidx=1" target="_blank">courses</a> and bachelor's thesis research during an Erasmus exchange. Thesis involved the analysis of CMS experiment data at CERN in a search for dark matter signatures.</p><br>
      <p>See record: <a href="https://cds.cern.ch/record/2286284" target="_blank">Here</a></p>
      <!-- <div class="pdf-container">
      <iframe src="https://cds.cern.ch/record/2286284/files/fulltext.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">Bachelor thesis — See record: <a href="https://cds.cern.ch/record/2286284" target="_blank">Here</a></p> -->
      <!-- 	Search for dark matter in proton-proton collision events with a muon and missing transverse energy in the CMS detector with s= 13 TeV -->
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Bachelor's Degree in Physics</b></h4></p>
      <p><h6><i class="fa fa-university fa-fw cv-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>2011 - 2015</h6></p>
      <p>Graduated with a <a href="https://www.uv.es/uvweb/college/en/undergraduate-studies/undergraduate-studies-/degree-programmes-offered/degree-physics-1285846094474/Titulacio.html?id=1285847387274" target="_blank">Degree in Physics</a>, completing 258 ECTS credits. Established a foundational mastery of theoretical physics concepts, advanced mathematics, and computational problem-solving The Faculty of Physics at the University of Valencia was ranked as the top physics department in Spain according to the Shanghai ranking during my tenure.</p><br>
    </div>
  </div> <!-- End Education Tab --> 
  <div id="Skills" class="container cv-white cv-card tab">
    <h2>Skills</h2>
    <!-- Programming Languages -->
    <div class="cv-container skill-section">
      <h3>Programming Languages</h3>
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
      </div>
    </div>
    <!-- Data Science & Machine Learning -->
    <div class="cv-container skill-section">
      <h3>Data Science & Machine Learning</h3>
      <h4>Data Manipulation</h4>
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
      <h4>Machine Learning</h4>
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
      <h4>Generative AI & Foundation Models</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Bert.webp" alt="BERT" class="skill-icon">
          <span>BERT</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LLaMA.png" alt="LLaMA" class="skill-icon">
          <span>LLaMA</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LangChain.png" alt="LangChain" class="skill-icon">
          <span>LangChain</span>
        </div>
      </div>
      <h4>Data Visualization, Analysis & Scraping</h4>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Matplotlib.png" alt="Matplotlib" class="skill-icon">
          <span>Matplotlib</span>
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
        <div class="skill-square">
          <img src="../images/Logos/R.png" alt="R" class="skill-icon">
          <span>R</span>
        </div>
      </div>
    </div>
    <!-- AI Infrastructure & Orchestration -->
    <div class="cv-container skill-section">
      <h3>AI Infrastructure & Orchestration</h3>
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Gemini.png" alt="Gemini" class="skill-icon">
          <span>Gemini</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/VertexAI.svg" alt="Vertex AI" class="skill-icon">
          <span>Vertex AI</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/DialogFlow.svg" alt="DialogFlow CX" class="skill-icon">
          <span>DialogFlow CX</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Meta.png" alt="FAISS" class="skill-icon">
          <span>FAISS</span>
        </div>
      </div>
    </div>
    <!-- Software Engineering for AI -->
    <div class="cv-container skill-section">
      <h3>Software Engineering for AI</h3>
      <!-- <p class="cv-light-grey">Tools and frameworks I use to build, deploy, and scale AI-powered applications.</p> -->
      <h4>Cloud & DevOps</h4>  <!-- Cloud & DevOps -->
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/GCP.svg" alt="GCP" class="skill-icon">
          <span>GCP</span>
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
      <h4>Data Engineering</h4> <!-- Data Engineering  -->
      <div class="skills-grid">
        <div class="skill-square">
          <img src="../images/Logos/Kafka.png" alt="Kafka" class="skill-icon">
          <span>Kafka</span>
        </div>
      </div>
      <h3>Web & Application Development</h3> <!-- Web & Application Development -->
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
          <img src="../images/Logos/gradio.png" alt="Gradio" class="skill-icon">
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
        <div class="skill-square">
          <img src="../images/Logos/CherryPy.png" alt="CherryPy" class="skill-icon">
          <span>CherryPy</span>
        </div>
      </div>
    </div>
    <!-- Tools & Others -->
    <div class="cv-container skill-section">
      <h3>Supporting Tools</h3>
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
          <img src="../images/Logos/Pyomo.png" alt="Pyomo" class="skill-icon">
          <span>Pyomo</span>
        </div>
      </div>
    </div>
    <!-- Languages -->
    <h2>Languages</h2>
    <div class="cv-container skill-section">
      <p>Spanish
      <div class="cv-light-grey cv-round-xlarge">
        <div class="cv-round-xlarge cv-teal" style="height:24px;width:100%"></div>
      </div></p><br>
      <p>English
      <div class="cv-light-grey cv-round-xlarge">
        <div class="cv-round-xlarge cv-teal" style="height:24px;width:95%"></div>
      </div></p><br>
      <p>Catalan
      <div class="cv-light-grey cv-round-xlarge">
        <div class="cv-round-xlarge cv-teal" style="height:24px;width:95%"></div>
      </div></p><br>
      <p>German
      <div class="cv-light-grey cv-round-xlarge">
        <div class="cv-round-xlarge cv-teal" style="height:24px;width:25%"></div>
      </div></p><br>
    </div>
  </div><!-- End Skills Tab -->


  <div id="Outreach" class="container cv-white cv-card tab">
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
      <img src="../images/Poster_70_CERN_b.jpeg" alt="CERN 70 Years Poster" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); margin-bottom: 5px;">
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
    <a href="{{ site.baseurl }}/bio/CV_ENG_.pdf" title="link to CV" target="_blank" class="cv-button cv-margin-top">
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

</body>
<!-- End CV body -->

</html>
