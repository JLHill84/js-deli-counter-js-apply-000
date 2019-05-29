var katzDeliLine = [];
function takeANumber (katzDeliLine,Name) {
  katzDeliLine.push(Name);
  return katzDeliLine.length+1;
}
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace"); //
takeANumber(katzDeliLine, "Kent");