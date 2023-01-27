var textoentrada2 = document.getElementById("txtentrada1");
var textosaida2 = document.getElementById("txt2");
var copiar2 = document.getElementById("btncopy2");
var limpar2 = document.getElementById("btnlimp2");
var cripto2 = document.getElementById("btncri1");

function limpartxt2() {

    document.getElementById("txtentrada1").value="";
    document.getElementById("txt2").value="";


}

function copiartxt2() {

    navigator.clipboard.writeText(txtentrada1.value);

}



limpar2.onclick = limpartxt2;
copiar2.onclick = copiartxt2;

function desencriptartexto() {

    var txtdes = textoentrada2.value;
    txtdes = txtdes

      .replaceAll("#","A")
      .replaceAll("$","E")
      .replaceAll("%","I")
      .replaceAll("¨","O")
      .replaceAll("&","U")
      .replaceAll("*","Á")
      .replaceAll("(","À")
      .replaceAll(")","É")
      .replaceAll("-","Ó")
      .replaceAll("_","Í")
      .replaceAll("+","Ú")
      .replaceAll("=","Q")
      .replaceAll("§","W")
      .replaceAll("`","R")
      .replaceAll("´","T")
      .replaceAll("{","Y")
      .replaceAll("[","P")
      .replaceAll("ª","S")
      .replaceAll("^","D")
      .replaceAll("~","F")
      .replaceAll("}","G")
      .replaceAll("]","H")
      .replaceAll("º","J")
      .replaceAll("<","K")
      .replaceAll(",","L")
      .replaceAll(">","Ç")
      .replaceAll(".","Z")
      .replaceAll(":","X")
      .replaceAll(";","C")
      .replaceAll("☺","V")
      .replaceAll("/","B")
      .replaceAll("°","N")
      .replaceAll("♂","M")
      //minusculas
      .replaceAll("☻","a")
      .replaceAll("▬","e")
      .replaceAll("Ì","i")
      .replaceAll("╬","o")
      .replaceAll("♥","u")
      .replaceAll("♣","á")
      .replaceAll("§","à")
      .replaceAll("♦","é")
      .replaceAll("♠","ó")
      .replaceAll("•","í")
      .replaceAll("◘","ú")
      .replaceAll("☼","q")
      .replaceAll("♫","w")
      .replaceAll("↓","r")
      .replaceAll("◄","t")
      .replaceAll("♂","y")
      .replaceAll("↕","p")
      .replaceAll("♪","s")
      .replaceAll("∟","d")
      .replaceAll("™","f")
      .replaceAll("©","g")
      .replaceAll("®","h")
      .replaceAll("β","j")
      .replaceAll("Ϋ","k")
      .replaceAll("∂","l")
      .replaceAll("∆","ç")
      .replaceAll("⅛","z")
      .replaceAll("⅜","x")
      .replaceAll("⅝","c")
      .replaceAll("⅞","v")
      .replaceAll("₧","b")
      .replaceAll("","n")
      .replaceAll("░","m")
      //numeros
      .replaceAll("Ő","1")
      .replaceAll("Ĩ","2")
      .replaceAll("ĕ","3")
      .replaceAll("Đ","4")
      .replaceAll("Ø","5")
      .replaceAll("Ð","6")
      .replaceAll("Æ","7")
      .replaceAll("¿","8")
      .replaceAll("±","9")
      .replaceAll("▓","0")
    
  




    textosaida2.value = txtdes;
  }

  cripto2.addEventListener("click", (event) => {
    event.preventDefault();
    desencriptartexto();
  });
