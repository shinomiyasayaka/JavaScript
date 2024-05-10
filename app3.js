//「関数（function）」...繰り返し使われる一連の処理を1つにまとめたもの
//簡単な関数は、以下のように記述
//function 関数名(){
  //処理内容
//}                                    JavaScriptでは、functionに続けて関数名を書き、{ }内に処理内容を記述

//入力する値...「引数（ひきすう）」、出力される値...「戻り値（もどりち）」
//この関数の結果を出力したいとき...return内に戻り値を渡す。
//function 関数名(引数){
  //処理
  //return 戻り値;
//}


//簡単な関数を記述してみる
// メイン部分
//let alertString;

// 作成した関数を呼び出し、変数へ格納
//alertString = addString("WebCamp");

//変数の中身をアラートで表示する
//alert(alertString);

// 作成した関数
//function addString(strA){
  //let addStr = "Hello " + strA;
  //return addStr;
//}


//複数の関数で表示できるようにする
//let promptStr = prompt('何か好きな文字を入力してください。');

//alert(promptStr);


//let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

//alert('あなたの選んだ手は' + user_hand + 'です。');


//function getJShand(){
  //let js_hand_num = Math.floor( Math.random() * 3 );

  //if(js_hand_num == 0){
    //js_hand = "グー";
  //} else if(js_hand_num == 1){
    //js_hand = "チョキ";
  //} else if(js_hand_num == 2){
    //js_hand = "パー";
  //}

  //return js_hand;
//}


//複数の関数を定義する
// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}