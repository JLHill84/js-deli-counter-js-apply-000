var katzDeliLine = [];

function takeANumber (katzDeliLine,Name) {
  katzDeliLine.push(Name);
  return "Welcome, " + Name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine) {
  if katzDeliLine.length > 0 {
    return katzDeliLine[0];
      katzDeliLine.pop(0)
  }
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");