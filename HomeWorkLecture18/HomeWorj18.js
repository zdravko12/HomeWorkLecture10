

// 12 slajd  so fech <-------------
let getDatafech = function (path) {
    fetch(path, {
      headers: {
        "Content-Type": "text/xml"
      }
    })
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(xml => SetXMLData(xml))
    .catch(err => console.log("Error fetching XML file:", err));
  };
  
  function SetXMLData(xml) {
    console.log(xml);
    const x = xml.getElementsByTagName("CD");
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
      
    }
    document.getElementById("demo").innerHTML = table;
  }
  
  
  
  // 13 slajd so xml  <-------------
  
  function getXMlFile() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {myFunction(this);}
    xhttp.open("GET", "catalog.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table="<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }
  
  
  