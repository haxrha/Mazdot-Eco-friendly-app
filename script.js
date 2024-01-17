document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const url = document.getElementById("linkInput").value;

  // Send an HTTP GET request to the URL using fetch()
  //const proxyUrl = `https://cors-anywhere.herokuapp.com/${url_important}`;

  fetch(`https://api.websitecarbon.com/site?url=${url}`)
    .then(response => response.text())
    .then(htmlContent => {
      // Print or process the HTML content as needed
      console.log(htmlContent);
      const jsondata = JSON.parse(htmlContent);
      const grams = jsondata.statistics.co2.grid.grams;
      const energy_s = jsondata.statistics.energy;
      const percentile_s = jsondata.cleanerThan;
      document.getElementById("data-co2-grams").innerText = `Grams ${grams.toFixed(4)}`
      document.getElementById("energy-use").innerText = `Energy:${energy_s.toFixed(4)}`
      document.getElementById("percentile").innerText = `Your cleanliness is in the ${percentile_s * 100}th percentile of all websites`;
      document.getElementById("p-1").innerText = "Using ecohost would improve by 9%"
      document.getElementById("p-2").innerText = "Get rid of uneccessary content such as,images and other multimedia"
      document.getElementById("p-3").innerText = "Lazy Loading images"
    })


    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });

});