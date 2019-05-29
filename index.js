var katzDeliLine = [];

function takeANumber (katzDeliLine,Name) {
  katzDeliLine.push(Name);
  return "Welcome, " + Name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine) {
  if katzDeliLine.length > 0 {
      katzDeliLine.pop()
  }
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");