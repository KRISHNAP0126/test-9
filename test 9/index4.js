 let word =["Planes", "Trains", "Automobiles"];

 const letter = word.map(words => {
    
    const firstLetter = words.charAt(0).toUpperCase();
    const restOfWord = words.slice(1).toLowerCase();
    
  });
  console.log(firstLetter + restOfWord)
  