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



//(６章)
//「イベント」...「クリック」する「マウスを移動する」などのように、ブラウザ上でユーザーが実行する動作のこと
//「マウスオーバー（mouseover）」...HTML要素上にマウスカーソルが重なっている状態
//「マウスアウト（mouseout）」...HTML要素からマウスカーソルが外れること
//「マウスオーバー」や「マウスアウト」も、イベントの1つです。
//これらのイベントをjQueryで使うと、たとえば、「リンクにマウスオーバーしたときのみ、別の要素を表示する」といった、アニメーションを作れるようになります。

//jQueryで「マウスオーバー」イベントを設定する
//$('.セレクタ名').イベント名(function(){
  //イベント発生時に行われる処理
//});

//$(function(){
  //$('.box1').mouseover(function(){
    //$('.box1').css({'background-color': '#0000FF'});
  //});
//});

//「マウスアウト」イベントを追加する

//$(function(){
  //$('.box1').mouseover(function(){
    //$('.box1').css({'background-color': '#0000FF'});
  //});
  //$('.box1').mouseout(function(){
    //$('.box1').css({'background-color': '#FF0000'});
  //});
//});

//class属性を追加する/解除する
//.box1-extが、マウスオーバー時に適用されるCSS（class）です。
//マウスオーバーすると.box1-extのclassが追加され、マウスアウトすると.box1-extのclassが外れるという記述

//$(function(){
  //$('.box1').mouseover(function(){
    //$('.box1').addClass('box1-ext');
  //});
  //$('.box1').mouseout(function(){
    //$('.box1').removeClass('box1-ext');
  //});
//});
//class属性の切り替えに使われているのが、addClass( )とremoveClass( )です。
//addClass( )では、対象のHTML要素にclass属性を追加します。
//removeClass( )では、要素に設定されているclass属性が解除されます。

//「マウスクリック」イベントを設定する
//.box1がクリックされたときは、box1-extのclassを追加する
//マウスアウトされたときは、box1-extのclassを削除する

//マウスクリックのイベントには、.click( )もあります。しかし、clickの場合は、クリックされた時点でイベントが終わってしまいます。
//今回は、クリック後に複数のイベントが行われるようにしたいので、onを付けた以下のような書き方をします。
//$(function(){
  //$('.box1').on('click', function(){
    //$('.box1').addClass('box1-ext');
  //});
  //$('.box1').mouseout(function(){
    //$('.box1').removeClass('box1-ext');
  //});
//});



//(７章)
//この書き方では、同じ動作をさせるのに、class名のみ異なるイベントを4つも記述しなければならず、少し面倒です。
//$(function(){
  //$('.bg1').on('click', function(){
    //$('.bg1').slideUp();
  //});

  //$('.bg2').on('click', function(){
    //$('.bg2').slideUp();
  //});

  //$('.bg3').on('click', function(){
    //$('.bg3').slideUp();
  //});

  //$('.bg4').on('click', function(){
    //$('.bg4').slideUp();
  //});
//});

//「this」...イベントが発生した要素のみ変化させたいときに使います。
//thisは、「クリックされた要素」を指しています。
//前のコードでは、それぞれの正方形に個別にclass属性を指定していました。
//今回のコードでは、「box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる」という設定

//$(function(){
  //$('.box1').on('click', function(){
    //$(this).slideUp();
  //});
//});

//「children」...HTML要素直下のすべての子要素を取得するときに使います。
//リスト（ul要素）の子要素であるli要素内の文字列が、黒色から赤色に変化することを確認できます。
//７章を参照してHTML・CSS記述

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});

//「button要素がクリックされたときに、処理を実行してください」の意味
//.children()は、HTML要素直下のすべての子要素を取得します。ここでのchildrenは「ul要素の子要素」、つまり、li要素が対象