// let qoute = document.getElementById()

window.onload = (e) => {
    function fetchData(id) {
      const apiURL = `https://type.fit/api/quotes`;
      fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        console.log(`Fetched Data from: ${apiURL}`, data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }
    fetchData('');
    
    
    // function fetchData(id) {
    //     const apiURL = `https://type.fit/api/quotes`;
    //     fetch(apiURL)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error("Failed to fetch");
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log("Fetched Data:", data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     });
    //   }
    //   fetchData('');
  
  
  
  };
  

  // Author
  // Text

  // What did I do yesterday that helped the development team meet the sprint goal?

  // What will I do today to help the development team meet the sprint goal?

  // Do I see any impediment that prevents me or the development team from meeting the sprint goal?

  

