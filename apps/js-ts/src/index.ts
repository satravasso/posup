import LOLServerStatus from "@posup/lol-server-status";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

const lol = new LOLServerStatus(process.env.RIOT_API_KEY || "", "br1");
lol.getServerStatus().then((res) => console.log(res));
