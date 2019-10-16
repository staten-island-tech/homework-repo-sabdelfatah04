const list = Array.from(document.querySelectorAll('li'));
    console.log(list);  //// Select all the list items on the page and convert to array (array from)
    
  

    const listFlexbox = list.filter(item => item.textContent == "Flexbox Video");

    console.log(listFlexbox);   // Filter for only the elements that contain the word 'Flexbox' hint use textContent (filter method)

  

    const listTime = listFiltered.map(obj => {
      return obj.dataset.time;
    });

    console.log(listTime); // map down to a list of time strings Hint look up dataset mdn and think 'time'... you will need to create a new variable called filtered 
  
  
    
    const listTimeSeconds = listTime.map(time => {
      const code = time.split(':');
      //console.log(code);
      return (parseInt(code[0]*60)) + parseInt(code[1]);
    })    // map to an array of seconds, 
    .reduce ((acc, val) => {
      return acc + val;
    }) ////*new from class
    console.log(listTimeSeconds); 