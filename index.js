var katzDeliLine = [];

function takeANumber (katzDeliLine,Name) {
  katzDeliLine.push(Name);
  return "Welcome, " + Name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine) {
  while (katzDeliLine.length > 0) {
    return katzDeliLine[0];
      katzDeliLine.pop(0);
  } 
  
  if (katzDeliLine.length=0){
    return "There is nobody waiting to be served.";
  }
}
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");