(function() {
  document.getElementById("go").onclick = function() {
    var json = athleticToJSON(document.getElementById("text").value);
    var parsedResult = Papa.unparse(json, {quotes: true});
    var url = "data:text/csv;charset=utf-8;base64," + btoa(parsedResult);
    var download = document.getElementById("downloadLink");
    download.style.display = "block";
    download.href = url;
    download.download = "results.csv";
    console.log(url);
  }
})();
