const { WebClient } = require("@slack/web-api");
import { BOT_TOKEN } from "./env";
// import * as schedule from "node-schedule";
// import * as moment from "moment";

const web = new WebClient(BOT_TOKEN);
const conversationId = "slack-bot-testing";

// 1분마다 작동하도록 cron 표현식 수정
const res = web.chat.postMessage({
  channel: conversationId,
  text: "일단 출력 확인 완료",
});

console.log("Message sent: ", res.ts);
