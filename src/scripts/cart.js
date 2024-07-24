function setLogoandName(logourl, name) {
    document.getElementById("company-logo").src = logourl;
  
    document.getElementById("company-name-03").innerHTML = name;
    document.getElementById("company-name").innerHTML = name;
  } 
  
  document.addEventListener('DOMContentLoaded', () => {
      "use strict"
  
      //creating some constant variable 
      const logo_url = "assets/components/logo.png";
      const company_name = "Kaikuttai";
  
      setLogoandName(logo_url, company_name);
  });