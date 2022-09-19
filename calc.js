function hitung(operator) {
  let forms = document.getElementById("calcForm"),
    a1 = parseFloat(forms.angka1.value),
    a2 = parseFloat(forms.angka2.value),
    tampil = forms.hasil,
    total;

  if (isNaN(a1) || isNaN(a2)) {
    alert("Masukan Khusus Angka!!");
    return;
  }
  switch (operator) {
    case "+":
      total = a1 + a2;

      break;
    case "-":
      total = a1 - a2;

      break;
    case "*":
      total = a1 * a2;

      break;
    case "/":
      total = a1 / a2;

      break;
    case "^":
      total = Math.pow(a1, a2);

      break;

    default:
      break;
  }
  tampil.value = total;
}
