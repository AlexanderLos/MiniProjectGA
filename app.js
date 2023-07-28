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
  


