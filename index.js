// ######################### step 1 #############################
// const submitBtn = document.getElementById('submit-btn');
// submitBtn.addEventListener('click', function(){
//     const inputbtn = document.getElementById('input-btn').value;
//     const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputbtn}&appid=${API_KEY}`;

//     fetch(url)
//     .then(Response => Response.json())
//     .then(data =>{
//         const cityName = data.name;
//         const tem = data.main.temp;
//         const temp = tem-273.15;
//         const description= data.weather[0].description;

//         document.getElementById('city').innerText = cityName;
//         document.getElementById('temp').innerText = temp.toFixed(2);
//         document.getElementById('des').innerText = description;


//     })
//     .catch(res => alert("please Type Right city Name"))
// })


// ######################### step 2 #############################

const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
    const city = document.getElementById('input-btn').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    // console.log(url);
    

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
        
}



const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('dec', temperature.weather[0].main);
   // set weather icon
   const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
   console.log(url)
   const imgIcon = document.getElementById('weather-icon');
   imgIcon.setAttribute('src', url);
}

 
