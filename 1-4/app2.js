//1-4 app.jpにもう1度取り組んでみた
let user_hand = prompt("グー・チョキ・パーから選んでください");
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert("グー・チョキ・パーのいずれかを出してください。");
  user_hand = prompt("グー・チョキ・パーから選んでください");
}


let js_hand = random_hand();

let judge = winlose(user_hand, js_hand);

if(user_hand == null){
  alert("またチャレンジしてね")
}else{
  alert(`あなたは${user_hand}を出し、
javascriptは${js_hand}を出したため、
結果は${judge}です。`);
}

function random_hand(){
  let hand_num;
  let hand;
  hand_num = Math.floor(Math.random() * 3)
  if(hand_num == 0){
    hand = "グー";
  }else if(hand_num == 1){
    hand = "チョキ";
  }else if(hand_num == 2){
    hand = "パー";
  }
  return hand
}

function winlose(user, js){
  let wljudge;
  if(user == "グー"){
    if(js == "グー"){
      wljudge = "あいこ";
    }else if(js == "チョキ"){
      wljudge = "勝ち";
    }else if(js == "パー"){
      wljudge = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      wljudge = "負け";
    }else if(js == "チョキ"){
      wljudge = "あいこ";
    }else if(js == "パー"){
      wljudge = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      wljudge = "勝ち";
    }else if(js == "チョキ"){
      wljudge = "負け";
    }else if(js == "パー"){
      wljudge = "あいこ";
    }
  }
  return wljudge;
}