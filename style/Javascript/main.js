
//API from  OpenWheither
const apiKey="6501aef500cdca9e03687c58608c3bd9";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrl2="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

//Appealing of html elements
const searchBox=document.querySelector(".Search input");
const searchBtn=document.querySelector(".Search button");
const weatherImg=document.querySelector(".weather-icon");
const firstDays=document.querySelector(".firstday ");
const secondDays=document.querySelector(".secondday ");
const thirdDays=document.querySelector(" .thirdday ");
const fourthDays=document.querySelector(".fourthday ");
const fifthDays=document.querySelector(".fifthday ");
const degreeFirstDays=document.querySelector(".daysNumber div .tem1 ");
const degreeSecondDays=document.querySelector(".daysNumber div .tem2 ");
const degreeThirdDays=document.querySelector(".daysNumber div .tem3 ");
const degreeFourthDays=document.querySelector(".daysNumber div .tem4 ");
const degreeFifthDays=document.querySelector(".daysNumber div .tem5 ");

//function ton call open weather data, changing data to Json and giving html elements values. Condition to display images

async function CheckWeather(city){
    const response= await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display='block';
        document.querySelector(".Weather").style.display='none'
    }else{
        var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+'km/h';
  

    if(data.weather[0].main==="Clouds"){
        weatherImg.src="style/images/clouds.png";
     

        

    }
    else if(data.weather[0].main==='Clear' || data.weather[0].main==='Haze'){
        weatherImg.src='./style/images/clear.png'
        
    }
    else if(data.weather[0].main==='Rain'){
        weatherImg.src="./style/images/rain.png";
        
        
    }
    else if(data.weather[0].main==='Drizzle'){
        weatherImg.src='./style/images/drizzle.png'
        
    }
    else if(data.weather[0].main==='Mist'){
        weatherImg.src='./style/images/mist.png'
        
    }
    document.querySelector(".Weather").style.display="block";
    document.querySelector(".error").style.display='none';
    }


    
}

searchBtn.addEventListener('click',()=>{
    CheckWeather(searchBox.value);
    CheckWeather5day(searchBox.value);
})


// function to predict 5 days after 
 
const d= new Date();
const weekday=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
function CheckDay(day){
   if(day+d.getDay()>6){
       return day + d.getDay()-7;
   }
   else{
       return day +d.getDay();
   }
   

}

////function ton call open weather data, changing data to Json and giving html elements values.

async function CheckWeather5day(daysWeather){
   const response= await fetch(apiUrl2 +daysWeather+ `&appid=${apiKey}`);
   if(response.status==404){
       document.querySelector(".error").style.display='block';
       document.querySelector(".Weather").style.display='none';

   }
   else{
       var dataDays=await response.json();
       console.log(dataDays.list[0].main.temp)

       console.log(weekday[CheckDay(0)])
       firstDays.innerHTML=weekday[CheckDay(0)];
       document.querySelector(".tem1").innerHTML=Math.round(dataDays.list[0].main.temp) +"°C";
       secondDays.innerHTML=weekday[CheckDay(1)];
       document.querySelector(".tem2").innerHTML=Math.round(dataDays.list[1].main.temp) +"°C";
       thirdDays.innerHTML=weekday[CheckDay(2)];
       document.querySelector(".tem3").innerHTML=Math.round(dataDays.list[2].main.temp) +"°C";
       fourthDays.innerHTML=weekday[CheckDay(3)];
       document.querySelector(".tem4").innerHTML=Math.round(dataDays.list[3].main.temp) +"°C";
       fifthDays.innerHTML=weekday[CheckDay(4)];
       document.querySelector(".tem5").innerHTML=Math.round(dataDays.list[4].main.temp) +"°C";


         

       
   }
   
  
};




