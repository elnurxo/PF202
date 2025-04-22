// FOOTBALL LEAGUE API
// const API_URL = "https://v3.football.api-sports.io/leagues";
// fetch(API_URL, {
//   method: "GET",
//   headers: {
//     //API-KEY
//     "x-rapidapi-key": "ec5335db51b37b810de66abc4f8365d2",
//     "x-rapidapi-host": "v3.football.api-sports.io",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.response[0]);
//   });

//JSON-SERVER (testing local API)
fetch("https://680775d4e81df7060eba6154.mockapi.io/api/groups")
  .then((res) => res.json())
  .then((groups) => {
    console.log(groups);
  });
