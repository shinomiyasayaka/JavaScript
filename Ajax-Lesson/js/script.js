//(１２章)
//「Ajax（エージャックス）...JavaScriptの非同期通信を使って、Webサーバ間とデータのやり取りを行います。
//ちなみにAjaxとは、「Asynchronous JavaScript + XML」の略です（Asynchronous：非同期）。
//Ajaxを用いて、都市名を入力したときに都市の天気情報が表示されるプログラムを作成

//「Ajax」では、JavaScriptを使って、非同期にサーバー間での通信を行います。
//非同期通信」では、サーバにリクエストを送ったときに、サーバからの結果を待たずに画面が書き換えられます。この技術を実装しているのが、Ajaxです。
//Ajaxの仕組みは１２章で確認

//「Web API」とは
//API（Application Programming Interface）...サービス提供者がそのサービスを利用するためのインタフェースです。
//「Web API」は、WebサーバやWebブラウザ用のAPIです。
//Web APIでは、API提供者とAPI利用者のやり取りをWeb上で行うので、プログラミング言語が異なるアプリケーションでも連携できるのが特徴です。
//異なる言語間でも連携できることから、Web API同士を組み合わせて別の価値を生み出すことも可能です（マッシュアップ）。
//Web APIの基本になるのは、この「リクエストとレスポンス」です

//JSON（JavaScript Object Notation）は、テキストベースのデータ交換フォーマットです。
//クライアントとサーバ間で「リクエストとレスポンス」を行うには、クライアント（人間）もサーバ（マシン）も互いに理解できるデータ形式にする必要があります。
//Ajaxの非同期通信には、かつてはXMLが使われていました。しかし、XML形式はタグ数が多くて煩雑だったため、現在では、JSONを用いるのが一般的になっています。




// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "bd6a6c959aca822da4f2d649ccea04ea";
$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    });  
  });
});


//「検索」ボタンがクリックされたときの処理を、それ以後の行に記述
//$.ajax()は、Ajaxを実装するメソッドです。
//オプション（パラメータ）も設定できます。今回は、urlとdataTypeの2つを設定しています。
//url:...APIにリクエストするURLを指定します。
//$('#cityname').val()で#citynameの値を受け取り、URLを結合させています。（val()は、HTMLのvalue属性を取得するメソッド）
//dataType...レスポンスとして取得したいデータの型を指定します。今回はJSONで受け取りたいので、 dataType : 'jsonp',と記述します。

//.done()...通信に成功した場合、.fail()...失敗した場合に記述するメソッドです。

//$('#place').text(data.name);以下、同じフォーマットが続いていますね。
//$('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換されます。
//たとえば、最高気温（temp_max）を取得したい場合は、"data.JSONのオブジェクト名.プロパティ名"で取得しています。(１２章参照)

//$(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加されます。
//これにより、天気のアイコンを表示することができます。
//なお、アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".pngです。