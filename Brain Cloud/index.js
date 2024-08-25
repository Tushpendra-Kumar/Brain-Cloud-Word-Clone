function randInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) ) + min;
  }
  
  let words = document.getElementsByTagName("P");
  
  for (let i = 0; i < words.length; i++){
    let newX = randInt(30, 70);
    let newY = randInt(20, 80);
  
    let topValue = "calc("+ newY.toString() + "% - 1ex)";
    let leftValue = newX.toString() + "%";
  
    words[i].style.top = topValue;
    words[i].style.left = leftValue;
  }
  
  setInterval(function updateWordsPositions(){
    for (let i = 0; i < words.length; i++){
      if (randInt(0, 25) < 7){
        continue;
      }
      
      let newX = randInt(30, 70);
      let newY = randInt(20, 80);
      
      let topValue = "calc("+ newY.toString() + "% - 1ex)";
      let leftValue = newX.toString() + "%";
      
      words[i].style.top = topValue;
      words[i].style.left = leftValue;
    }
  }, 5000);