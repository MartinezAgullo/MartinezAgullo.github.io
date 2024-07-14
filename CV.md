---
layout: post
title: CV
description: CV
permalink: /cv/
---

<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ site.title }}</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <style>
        html, body, h1, h2, h3, h4, h5, h6 { font-family: "Roboto", sans-serif; }
        .tab { display: none; }
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
    </style>
</head>

<!-- Begin CV body -->
<body class="w3-light-grey"> 

<!-- Page Container -->
<div class="w3-content w3-margin-top" style="max-width:1900px;margin: 20px auto;padding: 0 5px;">

  <!-- Tabs -->
  <div class="w3-bar w3-black">
    <button class="w3-bar-item w3-button tablink w3-teal" onclick="openTab(event, 'Profile')">Profile</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event, 'Experience')">Experience</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event, 'Education')">Education</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event, 'Skills')">Skills</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event, 'Outreach')">Outreach</button>
  </div>

  <!-- Profile Tab -->
  <div id="Profile" class="w3-container w3-white w3-card tab" style="display: block;">
    <h2>Profile</h2>
    <div class="w3-container w3-text-grey w3-card-4">
      <div class="w3-display-container image-hover-container">
          <img src="../images/pma_formal.png" class="image-normal" alt="Avatar">
          <img src="../images/pma_informal.png" class="image-hover" alt="Avatar">
          <!-- <div class="w3-display-bottomleft w3-container w3-text-black">
              <h2>{{ site.author.name }}</h2>
          </div> -->
      </div>
      <br>
      <div class="w3-container">
        <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large icon-black"></i>{{ site.author.job_title }}</p>
        <p><i class="fa fa-home fa-fw w3-margin-right w3-large icon-black"></i>{{ site.author.location }}</p>
        <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large icon-black"></i><a href="mailto:pablo.martinez.agullo@gmail.com">pablo.martinez.agullo@gmail.com</a></p>
        <p><i class="fa fa-phone fa-fw w3-margin-right w3-large icon-black"></i>{{ site.author.phone }}</p>
      </div>
    <br>  
    </div>
    <br>
  </div> <!-- End Profile Tab -->

  <!-- Experience Tab -->
  <div id="Experience" class="w3-container w3-white w3-card tab">
    <h2>Experience</h2>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Physics researcher - Data analyst</b></h5>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</h6>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>European Laboratory for Particle Physics (CERN)</h6>
      <h6><i class="fa fa-map-marker fa-fw w3-margin-right icon-black"></i>Valencia, Spain | Geneva, Switzerland</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Sep 2019 - Apr 2024</h6>
      <!-- <span class="w3-tag w3-teal w3-round">Current</span> -->
      <p>I was a predoctoral researcher at the ATLAS group of the Instituto de Física Corpuscular (IFIC), working between Valencia (Spain) and Geneva (Switzerland). My main responsibility involved analysing large volumes of data from the ATLAS detector at the Large Hadron Collider. For this, I used advanced statistical techniques and focused on developing, optimising, and integrating supervised machine learning models, specifically Boosted Decision Trees (BDT) and Neural Networks (NN). I also gained foundational knowledge in CUDA and Verilog, enhancing my capability to work with AI-dedicated infrastructures. My role extended to collaborative software development using version control systems like GitLab, GitHub, and SVN. I contributed to expanding some packages of the main ATLAS software (athena) and co-developed the post-processing software to exploit our NTuple data. I actively participated in presenting our findings at national and international conferences and was involved in data acquisition as part of the ATLAS Control Room team.
      <br>
      This work was partially funded by the competitive and prestigious ACIF scholarship from the Generalitat Valenciana.</p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Faculty lecturer</b></h5>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>University of Valencia</h6>
      <h6><i class="fa fa-map-marker fa-fw w3-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Feb 2020 - Sep 2021</h6>
      <p>I have served as a lecturer (PDI) in the Chemistry degree program, teaching subjects such as Electromagnetism and Laboratory Techniques (Physics II) during the academic years 2019/2020 and 2020/2021, combining both in-person and online instruction. Besides, I have provided private tutoring in various engineering disciplines for nearly a decade.</p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Consultant - Data scientist</b></h5>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>Capgemini</h6>
      <h6><i class="fa fa-map-marker fa-fw w3-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Feb 2020 - Sep 2021</h6>
      <p>Consultant on the Insights & Data team. Development of a sentiment analysis tool based on web scraping and Natural Language Processing (NLP).</p><br>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Physics researcher - Data analyst and developer</b></h5>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</h6>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>European Laboratory for Particle Physics (CERN)</h6>
      <h6><i class="fa fa-map-marker fa-fw w3-margin-right icon-black"></i>Valencia, Spain | Geneva, Switzerland</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Dec 2017 - Jan 2019</h6>
      <p>Predoctoral researcher at the ATLAS experiment at the European Laboratory for Particle Physics (CERN). During the initial stage of my doctoral research, I developed a software dedicated to data analysis and visualization. Additionally, I worked on the development and optimization of both the backend and frontend of the web application for monitoring the alignment of the ATLAS detector. This experience allowed me to enhance my skills in web programming and application development. The resulting tool has been widely adopted and used within the collaboration.</p><br>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Physics researcher - Data analyst (Internship)</b></h5>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</h6>
      <h6><i class="fa fa-map-marker fa-fw w3-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Apr 2017 - Sep 2017</h6>
      <p>I received the prestigious Severo Ochoa collaboration scholarship at centres of excellence to conduct my research on top quark physics with the ATLAS group at the Instituto de Física Corpuscular. This project was part of my master's thesis work.</p><br>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Outreach researcher (Internship)</b></h5>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>European Space Agency (ESA)</h6>
      <h6><i class="fa fa-map-marker fa-fw w3-margin-right icon-black"></i>Leiden, Netherlands</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Jun 2016 - Sep 2016</h6>
      <p>I received the LEAPS scholarship to participate in science communication and outreach projects with the Universe Awareness (UNAWE) group at the European Space Agency (ESA) and Leiden University. There I developed a tool for natural language processing (NLP).</p><br>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Physics researcher - Data analyst (Internship)</b></h5>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>RWTH Aachen University</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Feb 2016 - Jun 2016</h6>
      <h6><i class="fa fa-map-marker fa-fw w3-margin-right icon-black"></i>Aachen, Germany</h6>
      <p>Description</p><br>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Physics researcher - Data analyst (Internship)</b></h5>
      <h6><i class="fa fa-briefcase fa-fw w3-margin-right icon-black"></i>Instituto de Física Corpuscular (IFIC)</h6>
      <h6><i class="fa fa-map-marker fa-fw w3-margin-right icon-black"></i>Valencia, Spain</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Nov 2014 - Jul 2021</h6>
      <p>External internship for the Physics degree at the Neutrino Experiment with a Xenon TPC (NEXT). Analysis of data from silicon detectors for instrument calibration. Worked with photomultiplier tubes (PMTs) and silicon photomultipliers (SiPMs).</p><br>
    </div>
  </div> <!-- End Experience Tab -->

  <!-- Education Tab -->
  <div id="Education" class="w3-container w3-white w3-card tab">
    <h2>Education</h2>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>PhD in Physics</b></h5>
      <h6><i class="fa fa-university fa-fw w3-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>2019 - 2024</h6>
      <p>Earned a Doctorate in Physics, specialising in Particle Physics and data analysis using advanced machine learning techniques. Conducted extensive research at CERN within the ATLAS experiment, contributing to major discoveries and tool development.</p>
       <div class="pdf-container">
      <iframe src="https://cds.cern.ch/record/2892621/files/CERN-THESIS-2024-018.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">PhD thesis. See record: <a href="https://cds.cern.ch/record/2892621" target="_blank">Here</a></p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>MSc in Advanced Physics</b></h5>
      <h6><i class="fa fa-university fa-fw w3-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>2016 - 2017</h6>
      <p>Completed a Master of Science in Advanced Physics, with a two specialisations: Nuclear and Particle Physics, and Theoretical Physics.
      The master foccused on becoming a researcher and an R&D expert. Strong emphasis on statistics, data analysis, computation, and quantitative analysis.
      My master thesis foccused on the analysis on the data from ATLAS in order to study the top quark.</p>
       <div class="pdf-container">
      <iframe src="https://cds.cern.ch/record/2285874/files/CERN-THESIS-2017-156.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">Master thesis. See record: <a href="https://cds.cern.ch/record/2285874" target="_blank">Here</a></p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Bachelor's Degree in Physics</b></h5>
      <h6><i class="fa fa-university fa-fw w3-margin-right icon-black"></i>RWTH Aachen University</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>2015 - 2016</h6>
      <p>Erasmus stay at the RWTH Aachen University, the largest university of technology in Germany and one of the most renowned in Europe. Here I did my bachelor thesis analysing data from the CMS experiment of CERN. </p><br>
      <div class="pdf-container">
      <iframe src="https://cds.cern.ch/record/2286284/files/fulltext.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div>
      <p class="pdf-footnote">Bachelor thesis. See record: <a href="https://cds.cern.ch/record/2286284" target="_blank">Here</a></p>
      <!-- 	Search for dark matter in proton-proton collision events with a muon and missing transverse energy in the CMS detector with s= 13 TeV -->
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Bachelor's Degree in Physics</b></h5>
      <h6><i class="fa fa-university fa-fw w3-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>2011 - 2015</h6>
      <p>Completed a Bachelor's Degree in Physics, obtaining 258 ECTs. During my studies I developed the ability of solving complex problems and thinking outside the box. I also gained strong mathematical skills as well as basics in computation.
      At this time, the Faculty of Physics of the UV was listed as the best one in Spain according to the Shangai ranking.</p><br>
    </div>
  </div> <!-- End Education Tab -->


  <!-- Skills Tab -->
  <div id="Skills" class="w3-container w3-white w3-card tab">
    <h2>Skills</h2>
    <div class="w3-container skill-section">
      <h3>Coding languages</h3>
      <div class="skill-box">
        <img src="../images/Logos/Python.png" alt="Python" class="skill-icon">
        <span>Python</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/Cpp.png" alt="C++" class="skill-icon">
        <span>C++</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/Bash.png" alt="Shell" class="skill-icon">
        <span>Shell</span>
      </div>
    </div>
    <div class="w3-container skill-section">
      <h3>Data Science</h3>
      <h4>Data Manipulation</h4>
      <div class="skill-box">
        <img src="../images/Logos/ROOT.png" alt="ROOT" class="skill-icon">
        <span>ROOT</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/Pandas.png" alt="Pandas" class="skill-icon">
        <span>Pandas</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/NumPy.svg" alt="NumPy" class="skill-icon">
        <span>NumPy</span>
      </div>
      <h4>Machine Learning</h4>
      <div class="skill-box">
        <img src="../images/Logos/XGBoost.png" alt="XGBoost" class="skill-icon">
        <span>XGBoost</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/PyTorch.png" alt="PyTorch" class="skill-icon">
        <span>PyTorch</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/TMVA.png" alt="TMVA" class="skill-icon">
        <span>TMVA</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/Scikit-Learn.png" alt="Scikit-Learn" class="skill-icon">
        <span>Scikit-Learn</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/Keras.png" alt="Keras" class="skill-icon">
        <span>Keras</span>
      </div>
      <h4>Data Visualization, Analysis, and Scraping</h4>
      <div class="skill-box">
        <img src="../images/Logos/Matplotlib.png" alt="Matplotlib" class="skill-icon">
        <span>Matplotlib</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/SciPy.png" alt="SciPy" class="skill-icon">
        <span>SciPy</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/BeautifulSoup.png" alt="BeautifulSoup" class="skill-icon">
        <span>BeautifulSoup</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/SQL.png" alt="SQL" class="skill-icon">
        <span>SQL</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/R.png" alt="R" class="skill-icon">
        <span>R</span>
      </div>
    </div> <!-- Closes Data Science -->
    <div class="w3-container skill-section">
      <h3>Others</h3>
      <div class="skill-box">
        <img src="../images/Logos/GitHub.png" alt="GitHub" class="skill-icon">
        <span>GitHub</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/GitLab.png" alt="GitLab" class="skill-icon">
        <span>GitLab</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/LaTeX.png" alt="LaTeX" class="skill-icon">
        <span>LaTeX</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/CherryPy.png" alt="CherryPy" class="skill-icon">
        <span>CherryPy</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/Flask.png" alt="Flask" class="skill-icon">
        <span>Flask</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/Web_CSS.png" alt="CSS" class="skill-icon">
        <span>CSS</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/Web_JavaScript.png" alt="JavaScript" class="skill-icon">
        <span>JavaScript</span>
      </div>
      <div class="skill-box">
        <img src="../images/Logos/Matlab.png" alt="Matlab" class="skill-icon">
        <span>Matlab</span>
      </div>
    </div> <!-- closes Others -->
    <h2>Languages</h2>
    <!-- <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p> -->
          <p>Spanish
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
          </div></p>
          <br>
          <p>Enlglish
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:95%"></div>
          </div></p>
          <br>
          <p>Catalan
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:95%"></div>
          </div></p>
          <br>
          <p>German
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>
          </div></p>
          <br>
  </div><!-- End Skills Tab (general) -->  
  <div id="Outreach" class="w3-container w3-white w3-card tab">
  <h2>Outreach</h2>
  <div class="w3-container">
    <p>Concurrently, I engage in science communication during my free time, delivering talks at schools, participating in science fairs, and contributing to a science podcast.</p>
    <br>
    <p style="margin-bottom: 0;">Links to:</p>
    <ul style="margin-top: 0;">
      <li>Speaker/host of the public event <a href="https://www.eventbrite.es/e/entradas-10o-aniversario-del-descubrimiento-del-boson-de-higgs-360545710927?aff=oddtdtcreator" target="_blank">10º aniversario del descubrimiento del bosón de Higgs</a> (700+ asistentes, 2022).</li>
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
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/Cfo9nBwp6y2/" data-instgrm-version="14" style="max-width: 540px; width: 100%; margin: auto;">
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
<footer class="w3-container w3-teal w3-center w3-margin-top">
<p><a href="{{ site.baseurl }}/bio/CV_ENG_.pdf" title="link to CV" target="_blank" class="w3-button w3-black w3-margin-top"><i class="fa fa-download"></i> Download CV PDF</a></p>
</footer>
<!-- end footer -->

<script>
function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-teal", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " w3-teal";
}
</script>

</body>
<!-- End CV body -->

</html>
