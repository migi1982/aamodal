$(function(){

    /*
ボタン部分は
	<button id="hoge">ぼたん</button>
モーダル部分は
	<div id="fuga" class="modalWrap">
		<div class="modalBody">
		モーダルの中身
		</div>
	</div>
という風に記述してください。

Javascriptの中で
    "hoge":"fuga"
のような形でボタン部分とモーダル部分のidを紐付けを設定します。

上記2つのidとは別に、モーダル部分にclass="modalWrap"は必須です。
main.cssに
	div.modalWrap
	と
	div.modalWrap > div
についての記述がありますがここは書き換えないようにお願いします。

別途、その直下のdivのclassの命名/cssの適用は自由です。
*/

    
    
    //モーダルが必要なページに入れる
	// 左がボタンに入れるid、右がモーダル部分に入れるid
	var modalTarget = {
		"btn2":"modal2",
		"btn3":"modal3"
	};

	//共通部分に入れる(メニューのモーダルとか)
	// 左がボタンに入れるid、右がモーダル部分に入れるid
	var globalModalTarget = {
		"btn1":"modal1"
	};

	//実際にモーダルを出す関数
	function modalOn(wn){
        //後ろに黒の膜を引く
        $('div.modalBK').css({'visibility':'visible'});
        //対象の位置を設定
        var mW = $(wn +' > div').outerWidth() / 2;
        var mH = $(wn +' > div').outerHeight() / 2;
       	//上記で設定した値を適用する
        $(wn +' > div').css({
        	'left':-mW,
        	'top':-mH,
        	'visibility':'visible',
        }).animate({'opacity':'1'},'fast');
	};

	//特定のボタンが押されたときにモーダルを出す
	var arr = $.extend(modalTarget,globalModalTarget);
	var key = '';
	for (key in arr){
   		$('#'+ key).click(function(){
			var wn = "#" + modalTarget[this.id];
			modalOn(wn);
		});
	}

	//モーダルを消す。closeかmodalBKというクラスの箇所を押すと消える
    $('.close,.modalBK').click(function(){
        $('div.modalWrap > div').animate({opacity:0,},
            {duration:'fast',complete:
            function() {
                $('div.modalWrap > div').css({'visibility':'hidden'});
                $('div.modalBK').css({'visibility':'hidden'});
            },
        });
    });

});