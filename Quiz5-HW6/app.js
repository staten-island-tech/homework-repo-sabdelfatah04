const list = document.querySelectorAll('li');
    const listArray = Array.prototype.slice.call(list);
    console.log(listArray);  //// Select all the list items on the page and convert to array (array from)
    
  

    const listFlexbox = listArray.filter(item => {
      item = item.textContent;
      return item.includes('Flexbox') == true;
    });

    console.log(listFlexbox);   // Filter for only the elements that contain the word 'Flexbox' hint use textContent (filter method)

  

    const listTimeStamp = listArray.map(item => {
      const timeStamp = item.dataset.time;
      return timeStamp;
    });

    console.log(listTimeStamp); // map down to a list of time strings Hint look up dataset mdn and think 'time'... you will need to create a new variable called filtered 
  
  
    
    const listTimeStampSeconds = listTimeStamp.map(timeCode => {
      const parts = timeCode.split(':');
      //console.log(parts);
      return Number(parts[0]*60) + Number(parts[1]);
    })    // map to an array of seconds, 

    console.log(listTimeStampSeconds); 