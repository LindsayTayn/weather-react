import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=97bed167ec49bff56e6c1b63daef9c86&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather </h2>;
}
