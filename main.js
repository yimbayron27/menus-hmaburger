</style> < script > //* 

  var panel = document.getElementsByClassName("panet-btn");
var section;

for (section = 0; section < panel.length; i++) {
  [section].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelContentC = this.nextElementSibling;
    if (panelContent.style.display === "block") {
      panelContent.style.display = "none";
    } else {
      panelContent.style.display = "block";
    }
  });
}
</script> < /html>
