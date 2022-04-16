const deee = document;

deee.addEventListener("DOMContentLoaded", (e) => {
  encrypt("#encriptar");
  decrypt("#desencriptar");
  copy("#copiar");
});

const d = document;

function encrypt(encryptBtn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(encryptBtn)) {
      let text = "";
      text = d.querySelector("#ingresar-texto").value;
      let encryptedMessage = d.getElementById("texto-encriptado");

      if (!text) return console.warn(`you didn't enter a text`);

      let expReg = /^[a-z!,\s]+$/g.test(text);

      let vowelA = "a";
      let vowelE = "e";
      let vowelI = "i";
      let vowelO = "o";
      let vowelU = "u";

      text = text.replace(new RegExp(vowelA, "g"), "AI");
      text = text.replace(new RegExp(vowelE, "g"), "ENTER");
      text = text.replace(new RegExp(vowelI, "g"), "IMES");
      text = text.replace(new RegExp(vowelO, "g"), "OBER");
      text = text.replace(new RegExp(vowelU, "g"), "UFAT");

      return expReg
        ? (encryptedMessage.textContent = text.toLowerCase())
        : alert(
            "Solo puede utilizar letras minúsculas, sin acentos ni caracteres especiales"
          );
    }
  });
}

const de = document;

function decrypt(decryptBtn) {
  de.addEventListener("click", (e) => {
    if (e.target.matches(decryptBtn)) {
      let text = "";
      text = de.querySelector("#ingresar-texto").value;
      let encryptedMessage = de.getElementById("texto-encriptado");

      if (!text) return console.warn(`you didn't enter a text`);

      let expReg = /^[a-z!,\s]+$/g.test(text);

      let vowelA = "ai";
      let vowelE = "enter";
      let vowelI = "imes";
      let vowelO = "ober";
      let vowelU = "ufat";

      text = text.replace(new RegExp(vowelA, "g"), "A");
      text = text.replace(new RegExp(vowelE, "g"), "E");
      text = text.replace(new RegExp(vowelI, "g"), "I");
      text = text.replace(new RegExp(vowelO, "g"), "O");
      text = text.replace(new RegExp(vowelU, "g"), "U");

      return expReg
        ? (encryptedMessage.textContent = text.toLowerCase())
        : alert(
            "Solo puede utilizar letras minúsculas, sin acentos ni caracteres especiales"
          );
    }
  });
}

const dee = document;

function copy(copyBtn) {
  dee.addEventListener("click", (e) => {
    if (e.target.matches(copyBtn)) {
      let copyText = dee.querySelector("#texto-encriptado").textContent;

      navigator.clipboard.writeText(copyText);
    }
  });
}