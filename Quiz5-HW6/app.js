const list = Array.from(document.querySelectorAll('li'));
    console.log(list);  //// Select all the list items on the page and convert to array (array from)
    
  

    const listFlexbox = list.filter(item => item.textContent == "Flexbox Video");

    console.log(listFlexbox);   // Filter for only the elements that contain the word 'Flexbox' hint use textContent (filter method)

  

    const listTime = listFiltered.map(obj => {
      return obj.dataset.time;
    });

    console.log(listTime); // map down to a list of time strings Hint look up dataset mdn and think 'time'... you will need to create a new variable called filtered 
  
  
    
    const listTimeSeconds = listTime.map(timeCode => {
      const parts = timeCode.split(':');
      //console.log(parts);
      return Number(parts[0]*60) + Number(parts[1]);
    })    // map to an array of seconds, 

    console.log(listTimeSeconds); 