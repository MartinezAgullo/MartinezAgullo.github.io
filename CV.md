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
           Programing Languages border-top: none;
        }
    </style>
</head>

<!-- Begin CV body -->
<body class="cv-light-grey" style="width: 100%;"> 

<!-- Page Container -->
<div class="container cv-margin-top" style="width: 100%;">

  <!-- Tabs -->
  <div class="cv-bar cv-black">
    <button class="cv-bar-item cv-button tablink cv-teal" onclick="openTab(event, 'Profile')">Profile</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Experience')">Experience</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Education')">Education</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Skills')">Skills</button>
    <button class="cv-bar-item cv-button tablink" onclick="openTab(event, 'Outreach')">Outreach</button>
  </div>

  <!-- Profile Tab -->
  <div id="Profile" class="container cv-white cv-card tab" style="display: block;">
    <h2>Profile</h2>
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
        <p><i class="fa fa-briefcase fa-fw cv-margin-right cv-large icon-black"></i>{{ site.author.job_title }}</p>
        <p><i class="fa fa-home fa-fw cv-margin-right cv-large icon-black"></i>{{ site.author.location }}</p>
        <p><i class="fa fa-envelope fa-fw cv-margin-right cv-large icon-black"></i><a href="mailto:pablo.martinez.agullo@gmail.com">pablo.martinez.agullo@gmail.com</a></p>
        <p><i class="fa fa-phone fa-fw cv-margin-right cv-large icon-black"></i>{{ site.author.phone }}</p>
      </div>
    <br>  
    </div>
    <br>
  </div> <!-- End Profile Tab -->

  <!-- Experience Tab -->
  <div id="Experience" class="container cv-white cv-card tab">
    <h2>Experience</h2>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data analyst</b></h4></p>
      <p><h6><a href="https://webific.ific.uv.es/web/en" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</a></h6>
      <h6><a href="https://home.cern/" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>European Laboratory for Particle Physics (CERN)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain | Geneva, Switzerland</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Sep 2019 - Apr 2024</h6></p>
      <!-- <span class="cv-tag cv-teal cv-round">Current</span> -->
      <p>I was a predoctoral researcher at the ATLAS group of the Instituto de Física Corpuscular (IFIC), working between Valencia (Spain) and Geneva (Switzerland). My main responsibility involved analysing large volumes of data from the ATLAS detector at the Large Hadron Collider. For this, I used advanced statistical techniques and focused on developing, optimising, and integrating supervised machine learning models, specifically Boosted Decision Trees (BDT) and Neural Networks (NN).  My preferred languages are Python and C++ but I have also used Shell, R and SQL. I have used libraries such as PyTorch, Keras, XGBoost, Pandas, NumPy, Matplotlib, Scikit-Learn, SciPy, etc. I also gained foundational knowledge in CUDA and Verilog, enhancing my capability to work with AI-dedicated infrastructures. My role extended to collaborative software development using version control systems like GitLab, GitHub, and SVN. I contributed to expanding some packages of the main ATLAS software (athena) and co-developed the post-processing software to exploit our NTuple data. I actively participated in presenting our findings at national and international conferences and was involved in data acquisition as part of the ATLAS Control Room team.
      <br>
      This work was partially funded by the competitive and prestigious ACIF scholarship from the Generalitat Valenciana.
      <br>
      Feel free to check my <a href="https://martinezagullo.github.io/publications/">Publication record</a> during these years.</p>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Faculty lecturer</b></h4></p>
      <p><h6><a href="https://www.uv.es/uvweb/chemistry/en/faculty-chemistry-1285849471169.html" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>University of Valencia</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Feb 2020 - Sep 2021</h6></p>
      <p>I have served as a lecturer (PDI) in the Chemistry degree programme, teaching subjects such as Electromagnetism and Laboratory Techniques (Physics II) during the academic years 2019/2020 and 2020/2021, combining both in-person and online instruction. Moreover, I have provided private tutoring in various engineering disciplines for nearly a decade.</p>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Consultant - Data scientist</b></h4></p>
      <p><h6><a href="https://www.capgemini.com/" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Capgemini</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Feb 2019 - Sep 2019</h6></p>
      <p>Consultant on the Insights & Data team. Development of a sentiment analysis tool based on web scraping and Natural Language Processing (NLP).</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data analyst and developer</b></h4></p>
      <p><h6><a href="https://webific.ific.uv.es/web/en" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</a></h6>
      <h6><a href="https://home.cern/" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>European Laboratory for Particle Physics (CERN)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain | Geneva, Switzerland</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Dec 2017 - Jan 2019</h6></p>
      <p>Predoctoral researcher at the ATLAS experiment at the European Laboratory for Particle Physics (CERN). During the initial stage of my doctoral research, I developed a software dedicated to data analysis and visualisation. Additionally, I worked on the development and optimisation of both the backend and frontend of the web application for monitoring the alignment of the ATLAS detector. This experience allowed me to enhance my skills in web programming and application development. The resulting tool has been widely adopted and used within the collaboration.
      Part of the work that I developed during this tenure has been included in the paper <a href="https://link.springer.com/article/10.1007/JHEP11(2022)040">J. High Energ. Phys. 2022, 40 (2022)</a>.
      </p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data analyst (Internship)</b></h4></p>
      <p><h6><a href="https://webific.ific.uv.es/web/en" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Apr 2017 - Sep 2017</h6></p>
      <p>The Instituto de Física Corpuscular (IFIC) is a collaborative research center operated by the Spanish Research Council (CSIC) and the University of Valencia, focusing on fundamental studies in particle, astroparticle, and nuclear physics. During my internship, supported by the prestigious Severo Ochoa scholarship, I conducted research on top quark physics for my master's thesis with the ATLAS group. My role included developing and refining Python scripts to extract maximum information from the data, conducting statistical analyses, and enhancing data analysis methodologies. I was also responsible for maintaining and updating codebases on Git, ensuring robust version control.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Outreach researcher (Internship)</b></h4></p>
      <p><h6><a href="https://www.esa.int/" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>European Space Agency (ESA)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Leiden, Netherlands</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Jun 2016 - Sep 2016</h6></p>
      <p>I was awarded the LEAPS scholarship for engaging in science communication and outreach with the Universe Awareness (UNAWE) group at ESA and Leiden University. During this time, I developed a natural language processing (NLP) tool and conducted <a href="https://www.unawe.org/updates/unawe-update-2016-37/">research</a> on scientific product policies.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data analyst (Internship)</b></h4></p>
      <p><h6><a href="https://www.institut3a.physik.rwth-aachen.de/cms/~jgoo/institut3a/?lidx=1" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>RWTH Aachen University</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Aachen, Germany</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Feb 2016 - Jun 2016</h6></p>
      <p>At the Physics Institute III A of RWTH Aachen University, I engaged in analysing LHC data recorded by the CMS experiment. This role was part of an international collaboration requiring strong mathematical foundations and extensive coding skills. I utilised Bash Scripting, Python, and C++ to handle complex data analyses, further honing my technical expertise in a demanding research environment.</p><br>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Physics researcher - Data analyst (Internship)</b></h4></p>
      <p><h6><a href="https://webific.ific.uv.es/web/en" target="_blank" style="text-decoration: none; color: inherit;"><i class="fa fa-briefcase fa-fw cv-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</a></h6>
      <h6><i class="fa fa-map-marker fa-fw cv-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>Nov 2014 - Jul 2015</h6></p>
      <p>My initial foray into research was an external internship for my Physics degree at the Neutrino Experiment with a Xenon TPC (NEXT), where I analysed data from silicon detectors to calibrate scientific instruments. During this tenure, I not only worked with photomultiplier tubes (PMTs) and silicon photomultipliers (SiPMs) but also employed lasers and vacuum systems.</p><br>
    </div>
  </div> <!-- End Experience Tab -->

  <!-- Education Tab -->
  <div id="Education" class="container cv-white cv-card tab">
    <h2>Education</h2>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>PhD in Physics</b></h4></p>
      <p><h6><i class="fa fa-university fa-fw cv-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>2019 - 2024</h6></p>
      <p>I earned a <a href="https://www.uv.es/uvweb/atomic-molecular-nuclear-physics-department/en/doctoral-studies-/phd-programmes-related-department/doctoral-studies-programme-physics-1285858319539.html" target="_blank">Doctorate in Physics</a>, specialising in Particle Physics and data analysis using advanced machine learning techniques at the Instituto de Física Corpuscular (IFIC). My extensive research at CERN within the ATLAS experiment contributed to the scientific program and the development of analytical tools. My thesis explored the interaction between the Higgs boson and the top quark, an interaction with the potential to shed light on fundamental physics questions like matter-antimatter asymmetry. Additionally, I completed several courses in Machine Learning and Statistics to further enhance my analytical skills.</p>
       <div class="pdf-container">
      <iframe src="https://cds.cern.ch/record/2892621/files/CERN-THESIS-2024-018.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">PhD thesis. See record: <a href="https://cds.cern.ch/record/2892621" target="_blank">Here</a></p>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>MSc in Advanced Physics</b></h4></p>
      <p><h6><i class="fa fa-university fa-fw cv-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>2016 - 2017</h6></p>
      <p>I completed a <a href="https://www.uv.es/uvweb/universidad/es/estudios-postgrado/masteres-oficiales/oferta-masteres-oficiales/master-universitario-fisica-avanzada-1285848941532/Titulacio.html?id=1285855672391&p2=2" target="_blank">Master of Science in Advanced Physics</a>, specialising in Nuclear and Particle Physics as well as Theoretical Physics. This program was geared towards developing R&D expertise, with a strong emphasis on statistics, data analysis, data visualisation, computation, and quantitative analysis. My master's thesis, which focused on the data from the ATLAS experiment to study the top quark, was supported by a prestigious Severo Ochoa scholarship.</p>
       <div class="pdf-container">
      <iframe src="https://cds.cern.ch/record/2285874/files/CERN-THESIS-2017-156.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">Master thesis. See record: <a href="https://cds.cern.ch/record/2285874" target="_blank">Here</a></p>
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Bachelor's Degree in Physics</b></h4></p>
      <p><h6><i class="fa fa-university fa-fw cv-margin-right icon-black"></i>RWTH Aachen University</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>2015 - 2016</h6></p>
      <p>During my Erasmus exchange at RWTH Aachen University, Germany's largest technical university and a prestigious European institution, I took courses of the <a href="https://www.rwth-aachen.de/cms/root/studium/vor-dem-studium/studiengaenge/liste-aktuelle-studiengaenge/studiengangbeschreibung/~bojy/physik-m-sc/?lidx=1" target="_blank">M.Sc. in Physics</a> and conducted my bachelor's thesis. It involved analysing data from the CMS experiment at CERN in order to look for dark matter production.</p><br>
      <div class="pdf-container">
      <iframe src="https://cds.cern.ch/record/2286284/files/fulltext.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">Bachelor thesis. See record: <a href="https://cds.cern.ch/record/2286284" target="_blank">Here</a></p>
      <!-- 	Search for dark matter in proton-proton collision events with a muon and missing transverse energy in the CMS detector with s= 13 TeV -->
      <!-- <hr> -->
    </div>
    <br>
    <div class="cv-container">
      <p><h4 class="cv-opacity"><b>Bachelor's Degree in Physics</b></h4></p>
      <p><h6><i class="fa fa-university fa-fw cv-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="cv-text-teal"><i class="fa fa-calendar fa-fw cv-margin-right icon-black"></i>2011 - 2015</h6></p>
      <p>I graduated with a <a href="https://www.uv.es/uvweb/college/en/undergraduate-studies/undergraduate-studies-/degree-programmes-offered/degree-physics-1285846094474/Titulacio.html?id=1285847387274" target="_blank">Degree in Physics</a>, earning 258 ECTs. Throughout my studies, I honed my ability to tackle complex problems and cultivated innovative thinking. My strong mathematical and computational skills were developed during this time, significantly contributing to my academic success. Notably, the Faculty of Physics at the University of Valencia was ranked as the top physics department in Spain according to the Shanghai ranking during my tenure.</p><br>
    </div>
  </div> <!-- End Education Tab --> 
  <!-- Skills Tab -->
  <div id="Skills" class="container cv-white cv-card tab">
    <h2>Skills</h2>
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
    <div class="cv-container skill-section">
      <h3>Data Science</h3>
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
          <img src="../images/Logos/XGBoost.png" alt="XGBoost" class="skill-icon">
          <span>XGBoost</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/PyTorch.png" alt="PyTorch" class="skill-icon">
          <span>PyTorch</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/TMVA.png" alt="TMVA" class="skill-icon">
          <span>TMVA</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Scikit-Learn.png" alt="Scikit-Learn" class="skill-icon">
          <span>Scikit-Learn</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Keras.png" alt="Keras" class="skill-icon">
          <span>Keras</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LLaMA.png" alt="LLaMA" class="skill-icon">
          <span>LLaMA</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LangChain.png" alt="LangChain" class="skill-icon">
          <span>LangChain</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Bert.webp" alt="Bert" class="skill-icon">
          <span>Bert</span>
        </div>
      </div>
      <h4>Data Visualisation, Analysis, and Scraping</h4>
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
    </div> <!-- Closes Data Science -->
    <div class="cv-container skill-section">
      <h3>Others</h3>
      <div class="skills-grid">
      <div class="skill-square">
          <img src="../images/Logos/GitLab.png" alt="GitLab" class="skill-icon">
          <span>GitLab</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/GitHub.png" alt="GitHub" class="skill-icon">
          <span>GitHub</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/LaTeX.png" alt="LaTeX" class="skill-icon">
          <span>LaTeX</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Flask.png" alt="Flask" class="skill-icon">
          <span>Flask</span>
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
        <div class="skill-square">
          <img src="../images/Logos/CherryPy.png" alt="CherryPy" class="skill-icon">
          <span>CherryPy</span>
        </div>
        <div class="skill-square">
          <img src="../images/Logos/Matlab.png" alt="Matlab" class="skill-icon">
          <span>Matlab</span>
        </div>
      </div>
    </div> <!-- closes Others -->
    <h2>Languages</h2>
    <div class="cv-container skill-section">
    <!-- <p class="cv-large cv-text-theme"><b><i class="fa fa-globe fa-fw cv-margin-right cv-text-teal"></i>Languages</b></p> -->
          <p>Spanish
          <div class="cv-light-grey cv-round-xlarge">
            <div class="cv-round-xlarge cv-teal" style="height:24px;width:100%"></div>
          </div></p>
          <br>
          <p>English
          <div class="cv-light-grey cv-round-xlarge">
            <div class="cv-round-xlarge cv-teal" style="height:24px;width:95%"></div>
          </div></p>
          <br>
          <p>Catalan
          <div class="cv-light-grey cv-round-xlarge">
            <div class="cv-round-xlarge cv-teal" style="height:24px;width:95%"></div>
          </div></p>
          <br>
          <p>German
          <div class="cv-light-grey cv-round-xlarge">
            <div class="cv-round-xlarge cv-teal" style="height:24px;width:25%"></div>
          </div></p>
          <br>
    </div>
  </div><!-- End Skills Tab (general) -->  

  <div id="Outreach" class="container cv-white cv-card tab">
  <h2>Outreach</h2>
  <div class="cv-container">
    <!--<p>Concurrently, I engage in science communication during my free time, delivering talks at schools, participating in science fairs, and contributing to a science podcast.</p>-->
    <p>As a passionate advocate for science and education, I believe in the importance of making complex ideas accessible to everyone. Throughout my career, I have actively engaged in various outreach activities aimed at bridging the gap between the scientific community and the public. From public lectures and podcasts to organizing science fairs and workshops, my goal has always been to inspire curiosity, foster understanding, and encourage the next generation of thinkers and innovators. Here, you’ll find a collection of my outreach efforts, showcasing my commitment to sharing knowledge and promoting scientific literacy in a meaningful and impactful way.</p>
    <br>
    <p style="margin-bottom: 0;"> Below, you’ll find a collection of links to some of my outreach efforts.  These resources reflect my commitment to sharing knowledge and promoting scientific literacy, offering a glimpse into the diverse ways I engage with audiences beyond the academic world.</p>
    <ul style="margin-top: 0;">
      <li>Speaker and host of the public event <a href="https://www.eventbrite.es/e/entradas-10o-aniversario-del-descubrimiento-del-boson-de-higgs-360545710927?aff=oddtdtcreator" target="_blank">10º aniversario del descubrimiento del bosón de Higgs</a> (700+ assistants, 2022).</li>
      <li>Contributor to the physics podcast <a href="https://www.ivoox.com/audios-canal-oscilador-armonico_s0_f21440131_p2_1.html?o=all" target="_blank">Oscilador Armónico</a>.</li>
      <li>Interview by fisicamr about LHCRun3: <a href="https://www.instagram.com/reel/Cfo9nBwp6y2/" target="_blank">Instagram post</a>.</li>
      <li>Outreach talks for high schools: <a href="https://github.com/MartinezAgullo/Public/blob/main/Charla_Divulgativa_Instituto.pdf" target="_blank">Outreach talk</a>.</li>
    </ul>
    <br>
    <iframe frameborder='0' allowfullscreen='' scrolling='no' height='200' style='width:100%;' src='https://www.ivoox.com/player_ej_125008443_6_1.html?c1=e0d223' loading='lazy'></iframe>
    <div style="text-align: center;">
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/1jRGUzXbCfc?si=XfaxNAgYcCXWuscC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <p>Outreach event 10º aniversario del descubrimiento del bosón de Higgs</p>
    </div>
    <br>
    <div style="text-align: center;">
      <blockquote class="instagram-media cv-center" data-instgrm-permalink="https://www.instagram.com/reel/Cfo9nBwp6y2/" data-instgrm-version="14" style="max-width: 540px; width: 100%; margin: auto;">
        <a href="https://www.instagram.com/reel/Cfo9nBwp6y2/"></a>
      </blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
      <p>Interview by fisicamr about LHCRun3</p>
    </div>
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
