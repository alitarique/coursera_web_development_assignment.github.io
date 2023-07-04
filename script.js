var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (value in names) {
  var temp = names[value];
  // console.log(temp)
  if (temp[0] === "J" || temp[0] === "j") {
    byeSpeaker.speak(temp);
  }
  else {
    helloSpeaker.speak(temp);
  }
}
