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
      <div class="w3-container">
        <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large icon-black"></i>{{ site.author.job_title }}</p>
        <p><i class="fa fa-home fa-fw w3-margin-right w3-large icon-black"></i>{{ site.author.location }}</p>
        <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large icon-black"></i>{{ site.author.email }}</p>
        <p><i class="fa fa-phone fa-fw w3-margin-right w3-large icon-black"></i>{{ site.author.phone }}</p>
      </div>
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
      <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>Forever</h6>
      <p>Web Development! All I need to know in one place</p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>London Business School</b></h5>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>2013 - 2015</h6>
      <p>Master Degree</p>
      <hr>
    </div>
    <div class="w3-container">
      <h5 class="w3-opacity"><b>School of Coding</b></h5>
      <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right icon-black"></i>2010 - 2013</h6>
      <p>Bachelor Degree</p><br>
    </div>
  </div>

  <!-- End Page Container -->
</div>

<!--
<footer class="w3-container w3-teal w3-center w3-margin-top">
  <p>Find me on social media.</p>
  <i class="fa fa-facebook-official w3-hover-opacity icon-black"></i>
  <i class="fa fa-instagram w3-hover-opacity icon-black"></i>
  <i class="fa fa-snapchat w3-hover-opacity icon-black"></i>
  <i class="fa fa-pinterest-p w3-hover-opacity icon-black"></i>
  <i class="fa fa-twitter w3-hover-opacity icon-black"></i>
  <i class="fa fa-linkedin w3-hover-opacity icon-black"></i>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
</footer>
-->

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
