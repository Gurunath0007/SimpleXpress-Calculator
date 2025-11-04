function calculateInterest() {
  var p = Number(document.getElementById("principal").value);
  var r = Number(document.getElementById("rate").value);
  var t = Number(document.getElementById("time").value);
  var si = (p * r * t) / 100;
  document.getElementById("result").innerText = "Simple Interest: ₹" + si.toFixed(2);
}
