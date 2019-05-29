var katzDeliLine = [];

function takeANumber (katzDeliLine,Name) {
  katzDeliLine.push(Name);
  return "Welcome, " + Name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing () {
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");