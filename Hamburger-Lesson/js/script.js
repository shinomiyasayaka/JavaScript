//(１０章)
//ハンバーガメニューはメニューの領域を少なくできるので、多くのWebサイトで 活用されています。
//特に画面の小さいスマートフォンサイトでは重宝する機能
//本章では、この「ハンバーガーメニュー」を、jQueryを用いて作成

$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

//.toggleClass()でclass属性を切り替える
//.toggleClass()...指定されているclass（ここではactive）をトグル処理するメソッドです。
//トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加されます。
//aタグのclassにはmenu-triggerが指定され、activeは指定されていません。
//このときに.toggleClass()を設定すると、アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除されます。
//このように、.toggleClass()によって、class属性の追加と削除が交互に行われます。
//さらに、.menu-trigger.active span:nth-child(1)～(3)の各CSSによって、activeクラスになったときにアイコンが「×」になるように設定されています。
//$(this)は、7章で学習しましたね。クリックされた要素自身を表します。

//.fadeToggle()　でフェードイン・フェードアウトを切り替える
//.fadeToggle()...要素のフェードイン・フェードアウトを切り替えるメソッドです。このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定します。
//ここでは、#sp-menuが開いたときに、.fadeToggle()が処理されるように設定しています。
//ハンバーガーメニューがクリックされたときに、フェードインとフェードアウトが交互に実行されるようになります。