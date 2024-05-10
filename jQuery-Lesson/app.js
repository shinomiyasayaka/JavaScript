//(４章)
//jQuery（ジェイクエリー）...最も広く使われているJavaScriptライブラリ。
//JavaScriptライブラリ...JavaScriptの処理を簡単に扱えるようにしたプログラム
//jQueryを使うことで、HTML要素の構造や、文字色や背景色などを簡単に変更できるようになります。このため、Webサイトを作成するときに必要不可欠なライブラリになっています。


//1.jQueryを使うメリット①ブラウザが違っても使える....jQueryはブラウザごとの違いを吸収してくれるので、便利

//2.jQueryを使うメリット②HTMLのDOMの操作が簡単...jQueryはHTMLのDOMの操作が簡単です。 DOMとはHTMLの部品だと考えてください。
                                                   //DOM操作の例とは下記の通りです。
                                                      //テキストボックスの中身を取得したり、変更する
                                                      //画面部品の表示をボタン一つで非表示にしたり、再表示させる
                                                      //CSSをユーザー操作に合わせて変更する

//3.jQueryを使うメリット③Ajaxの処理が簡単に記述できる....Ajaxとは、Asynchoronous JavaScript and XMLの略で、直訳すると、「非同期(で動作する)JavaScript」 となります。


//$(document).ready(function () {
  //$('body').html('<h1>Hello jQuery!!</h1>');
//});

//jQueryを読み込ませる
//jQueryを使うには、HTMLと紐づけする必要があります。このとき、HTMLの読み込みが終わってからjQueryが実行されるように記述する必要があります。
//$(document).ready(function () {
  // jQueryプログラムの内容
//});


//処理内容を記述する
//$( セレクタ ).メソッド ( パラメータ );
//$('body').html('<h1>Hello JQuery!!</h1>');

//「セレクタ」...操作の対象になる部分です。セレクタという呼び名は、CSSでおなじみですね。
//「メソッド」...何を行うのかを記述します。今回のコードでは、htmlがメソッドです。
//セレクタとメソッド、さらにパラメータを用いて、「どこに対して何を行うか」を記述
//「bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい」という意味





//(５章)
//「CSSメソッド」...CSSのスタイルをjQueryで変更するとき
//$('セレクタ').css('background-color','#0000FF');

//$(function(){
  //$('.box1').css({
    //'background-color': '#0000FF',
    //'height': '100px'
  //});
//});

//1.上から下へスライドさせる
//box1が最初は非表示になるように、app.cssファイルにdisplay: none;を追加

//$(function(){
  //$('.box1').slideDown();
//});

//2.下から上へスライドさせる
//表示されている要素を隠すアニメーションになるので、app.cssファイル内のdisplay: none;の記述は不要

//$(function(){
  //$('.box1').slideUp();
//});

//1.非表示の要素をjQueryで表示させる
//box1が最初は非表示になるように、app.cssファイルにdisplay: none;を追加

//$(function(){
  //$('.box1').show();
  //$('.box1').css({'background-color': '#0000FF'});
//});

//2.表示されている要素をjQueryで非表示にする
//逆に、表示されている要素を非表示にする方法
//表示されている要素を隠すアニメーションになるので、app.cssファイル内のdisplay: none;の記述は不要

//$(function(){
  //$('.box1').hide();
//});

//4.確認問題
//1.要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更してください。
//2.1.の後、下から上へスライドされるようにしてください。

//$(function (){
  //$('.box1').slideDown(function (){
    //$('.box1').css({
      //'background-color': '#0000FF',
      //'width': '200px',
      //'height': '100px'
    //}).slideUp();
  //});
//});




//$(function(){
  //$('.box1').mouseover(function(){
    //$('.box1').css({'background-color': '#0000FF'});
  //});
//});


//$(function(){
  //$('.box1').mouseover(function(){
    //$('.box1').css({'background-color': '#0000FF'});
  //});
  //$('.box1').mouseout(function(){
    //$('.box1').css({'background-color': '#FF0000'});
  //});
//});


//$(function(){
  //$('.box1').mouseover(function(){
    //$('.box1').addClass('box1-ext');
  //});
  //$('.box1').mouseout(function(){
    //$('.box1').removeClass('box1-ext');
  //});
//});


$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});