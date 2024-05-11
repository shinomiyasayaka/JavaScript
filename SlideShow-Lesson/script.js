//(８章)
//プラグインとは...JavaScriptには、機能を拡張する「プラグイン」が多数公開されています。プラグインを導入することで開発効率を上げて便利に活用できます。
//プラグインの１つである「Swiper」の導入方法と使い方を学習.  Swiperを使うことでスライドショーが作れるようになります！
//本章で紹介するSwiperはjQuery不要のJavaScriptのプラグイン

//Swiper（スワイパー）...スライドショーを簡単に作成できるJavaScriptのプラグイン


const swiper = new Swiper('.swiper', {
  //オプションの設定
  loop: true, //最後までスライドしたら最初の画像に戻る
 
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper-pagination', //ページネーションの要素
  },
 
  //ナビゲーションボタン（矢印）表示の設定
  navigation: { 
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  }
});