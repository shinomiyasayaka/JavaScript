let hello = 'Hello World';
alert(hello);
//(１章)
//引数の文字列をアラートウィンドウに表示するという関数
//文が単独の行である場合、文末のセミコロンは必須ではありません。行の中に複数の文を記述する場合はセミコロンで区切る必要があります。


//(２章)
//変数の書き方...JavaScriptでは、変数名の前にletを付けることで、変数を宣言.  let 変数名 = 内容 ;

//四則演算／文字列の結合
//四則演算の書き方...alert(4 + 3);   実行すると、アラートウィンドウには「7」が表示
//文字列を結合する...alert('Hello' + 'World');   これで、「Hello」と「World」の文字列が結合されて、「HelloWorld」が表示

//条件分岐...条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行
//let orange = 100;   ←変数
//let apple = 120;    ←変数
//if(orange < apple){
  //alert('みかんの値段がりんごより安い');
//} else if(orange == apple){                    ←else if と記述
  //alert('みかんとりんごが同じ値段');
//} else{
 // alert('みかんの値段がりんごより高い');
//}

//繰り返し処理...JavaScriptで繰り返し処理を行うには、「while文」と「for文」の2つの方法があります。

//while文...条件式が真（true）である間は繰り返し処理が実行されます。
//while(条件){
 //処理
//}.                 引数の条件がtrueの間、波括弧内部の処理が繰り返される。詳しくは２章

//do...while文...条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われます。その後、条件式を評価して、繰り返し処理を続けるか／抜けるかを決めていきます。
//do{
  //最低1回は行われる処理
//}while(条件式);

//for文...決められた回数の処理を繰り返すときに使います。
//for ( 初期値; 条件式; 増減値 ){
  //繰り返し処理
//}                   詳しくは２章（しっかり見ておいた方がいい）


//(２章＿１)
//変数宣言の種類...JavaScriptの変数宣言は3種類
//【var】. var string = "WEBCAMP"
//【let】. let string = "WEBCAMP"
//【const】. const string = "WEBCAMP"
//varを使用する場面は今では、ほとんどありません。varの後に出てきた、letとconstを基本的に使用することになります。

//再宣言...一度、宣言した変数名で再度、変数宣言を行うこと(再宣言を行うことができるのはvarのみ)

//再代入...変数に値を代入した後で、別の値を代入すること(再代入はvarとletで、可能です。constでは再代入ができません。)

//スコープ...変数にはスコープ（有効範囲）というもの。 定義した変数の有効範囲になります。(グローバルスコープ)(ローカルスコープ → 関数スコープ・ブロックスコープ)
//varのスコープ...関数スコープ（ローカルスコープ）、グローバルスコープの変数を宣言できます。
//グローバルスコープ...どこからでも参照できる変数
//関数スコープ...関数の中でvarによって宣言された変数

//letのスコープ・constのスコープ...ブロックスコープ（ローカルスコープ）の変数を宣言することができます。
//ブロックスコープ...ブロックとは() 、{}の組で区切られたものを指します。

//巻き上げ...JavaScriptには変数の巻き上げ（ホイスティング） があります。
//章を確認しながら確認 → 変数の巻き上げとは関数内のどの部分で変数を宣言したとしても、関数冒頭で変数を宣言したことになるというもの

//変数宣言の使い分け
//変数宣言の際に意識すべきことはスコープと、再代入
//昨今は、letとconstを変数宣言に使用していくことになります。
//ループのための変数等やむを得ない場合を除いて、できる限りconstを使った方が良いという考え方が主流
//モダンな開発現場ではconstが9割以上、残りがletといったコードも多く存在

