//Pagina Criptografar


var textoentrada = document.getElementById("txtentrada");
var textosaida = document.getElementById("txtsaida");
var copiar = document.getElementById("btncopy");
var limpar = document.getElementById("btnlimp");
var cripto = document.getElementById("btncri");



function copiartxt(){

    navigator.clipboard.writeText(textosaida.value);
    
}

function limpartxt(){

    document.getElementById("txtentrada").value="";
    document.getElementById("txtsaida").value="";

}


function encriptartxt() {

    var fraseEncriptada = textoentrada.value;
    fraseEncriptada = fraseEncriptada
   
      .replaceAll("A", "#")
      .replaceAll("E", "$")
      .replaceAll("I", "%")
      .replaceAll("O", "¨")
      .replaceAll("U", "&")
      .replaceAll("Á", "*")
      .replaceAll("À", "(")
      .replaceAll("É", ")")
      .replaceAll("Ó", "-")
      .replaceAll("Í", "_")
      .replaceAll("Ú", "+")
      .replaceAll("Q", "=")
      .replaceAll("W", "§")
      .replaceAll("R", "`")
      .replaceAll("T","´")
      .replaceAll("Y","{")
      .replaceAll("P","[")
      .replaceAll("S","ª")
      .replaceAll("D", "^")
      .replaceAll("F", "~")
      .replaceAll("G", "}")
      .replaceAll("H","]")
      .replaceAll("J", "º")
      .replaceAll("K", "<")
      .replaceAll("L", ",")
      .replaceAll("Ç", ">")
      .replaceAll("Z", ".")
      .replaceAll("X", ":")
      .replaceAll("C", ";")
      .replaceAll("V", "☺")
      .replaceAll("B", "/")
      .replaceAll("N", "°")
      .replaceAll("M", "♂")
      //minusculas
      .replaceAll("a", "☻")
      .replaceAll("e", "▬")
      .replaceAll("i", "Ì")
      .replaceAll("o", "╬")
      .replaceAll("u", "♥")
      .replaceAll("á", "♣")
      .replaceAll("à", "§")
      .replaceAll("é", "♦")
      .replaceAll("ó", "♠")
      .replaceAll("í", "•")
      .replaceAll("ú", "◘")
      .replaceAll("q", "☼")
      .replaceAll("w", "♫")
      .replaceAll("r", "↓")
      .replaceAll("t","◄")
      .replaceAll("y","♂")
      .replaceAll("p","↕")
      .replaceAll("s","♪")
      .replaceAll("d", "∟")
      .replaceAll("f", "™")
      .replaceAll("g", "©")
      .replaceAll("h","®")
      .replaceAll("j", "β")
      .replaceAll("k", "Ϋ")
      .replaceAll("l", "∂")
      .replaceAll("ç", "∆")
      .replaceAll("z", "⅛")
      .replaceAll("x", "⅜")
      .replaceAll("c", "⅝")
      .replaceAll("v", "⅞")
      .replaceAll("b", "₧")
      .replaceAll("n", "")
      .replaceAll("m", "░")
      //numeros
      .replaceAll("1", "Ő")
      .replaceAll("2","Ĩ")
      .replaceAll("3","ĕ")
      .replaceAll("4", "Đ")
      .replaceAll("5", "Ø")
      .replaceAll("6","Ð")
      .replaceAll("7","Æ")
      .replaceAll("8","¿")
      .replaceAll("9","±")
      .replaceAll("0","▓")

    textosaida.value = fraseEncriptada;

  }



cripto.addEventListener("click", (event) => {
    event.preventDefault();
    encriptartxt();
  });


limpar.onclick = limpartxt;

copiar.onclick = copiartxt;


