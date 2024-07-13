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
<body class="w3-light-grey">

<!-- Page Container -->
<div class="w3-content w3-margin-top" style="max-width:1400px;">

  <!-- Tabs -->
  <div class="w3-bar w3-black">
    <button class="w3-bar-item w3-button tablink w3-teal" onclick="openTab(event, 'Profile')">Profile</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event, 'Experience')">Experience</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event, 'Education')">Education</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event, 'Skills')">Skills</button>
  </div>

  <!-- Profile Tab -->
  <div id="Profile" class="w3-container w3-white w3-card tab" style="display: block;">
    <h2>Profile</h2>
    <div class="w3-container w3-text-grey w3-card-4">
      <div class="w3-display-container">
        <img src="../images/pma.jpg" style="width:100%" alt="Avatar">
        <div class="w3-display-bottomleft w3-container w3-text-black">
          <h2>{{ site.author.name }}</h2>
        </div>
      </div>
      <br>
      <div class="w3-container">
        <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large icon-black"></i> PhD in Physics</p>
        <p><i class="fa fa-home fa-fw w3-margin-right w3-large icon-black"></i>{{ site.author.location }}</p>
        <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large icon-black"></i> pablo.martinez.agullo@gmail.com </p>
        <p><i class="fa fa-phone fa-fw w3-margin-right w3-large icon-black"></i> +34 616747286</p>
      </div>
    <br>  
    </div>
  </div>

  <!-- Experience Tab -->
  <div id="Experience" class="w3-container w3-white w3-card tab">
    <h2>Experience</h2>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
      <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Mar 2012 - Dec 2014</h6>
      <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Jun 2010 - Mar 2012</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>
    </div>
  </div>

  <!-- Education Tab -->
  <div id="Education" class="w3-container w3-white w3-card tab">
    <h2>Education</h2>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>PhD in Physics</b></h5>
      <h6><i class="fa fa-university fa-fw w3-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>2019 - 2024</h6>
      <p>Earned a Doctorate in Physics, specialising in Particle Physics and data analysis using advanced machine learning techniques. Conducted extensive research at CERN within the ATLAS experiment, contributing to major discoveries and tool development.</p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>MSc in Advanced Physics</b></h5>
      <h6><i class="fa fa-university fa-fw w3-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>2016 - 2017</h6>
      <p>Completed a Master of Science in Advanced Physics, focusing on computational models and quantitative analysis, which laid the foundation for my PhD research.</p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>Bachelor's Degree in Physics</b></h5>
      <h6><i class="fa fa-university fa-fw w3-margin-right icon-black"></i>University of Valencia</h6>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>2011 - 2015</h6>
      <p>Obtained a Bachelor's Degree in Physics, engaging in various projects that involved complex problem solving and experimental physics.</p><br>
    </div>
  </div>


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
          <p>Spanish</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
          </div>
          <p>Enlglish</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:95%"></div>
          </div>
          <p>Catalan</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:95%"></div>
          </div>
          <p>German</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>
          </div>
          <br>
  
  </div>

  <!-- End Page Container -->
</div>

<footer class="w3-container w3-teal w3-center w3-margin-top">
<p><a href="{{ site.baseurl }}/bio/CV_ENG_.pdf" title="link to CV" target="_blank" class="w3-button w3-black w3-margin-top"><i class="fa fa-download"></i> Download CV PDF</a></p>
</footer>

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
</html>
