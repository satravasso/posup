import soxia from "@posup/soixa";

soxia
  .get(
    "https://br1.api.riotgames.com/lol/status/v4/platform-data?api_key=RGAPI-06485261-d9b1-40ae-a1b8-3674e1b67a10"
  )
  .then((res) => console.log(res));
