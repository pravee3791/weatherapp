

function updateWeather(data,callback) {
  
console.log(data)

   var  url= 'https://api.openweathermap.org/data/2.5/forecast?lat='+data.lat+'&lon='+data.lng+'&APPID=20628584bff8af6f425763fa7a030acc'
    fetch(url,{
        headers : { 
          'Accept': 'application/json'
         }
  
      })  
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.log('Looks like there was a problem. Status Code: ' +  
            response.status);  
          return;  
        }

        // Examine the text in the response  
        response.json().then(function(data) {  		        
          // Parse data
          //console.log(data);
        callback(data)

         

        });  
      }  
    )  
    .catch(function(err) {  
      console.log('Fetch Error :-S', err); 
    });

}

export default {
    updateWeather,
  


};
