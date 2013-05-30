english version is in preparation.


# AAModal

## 概要

javascriptの連想配列を利用して、  
「ある要素をクリックしたらそれに連動してある要素がモーダルで出てくる」  
ということを汎用的に簡単に設定できるようにしました。  

現在のスクロール位置、モーダルの中の縦幅と横幅を自動的に取得し、  
Windowの中央にモーダルが表示されるように設定しています。

スマートフォンにも対応しています。  


## 使い方

### js内

Javascriptの中で`"hoge":"fuga"`のような形でボタン部分とモーダル部分のidを紐付けを設定します。  

'modalTarget'と'globalModalTarget'という2種類のオブジェクトを用意しております。  
各ページにそれぞれ使うものと全ページに適用するものとで使い分けられます。

### html内

ボタン部分は  
```
<button id="hoge">ぼたん</button>
```
モーダル部分は  
```
<div id="fuga" class="modalWrap">
  <div class="modalBody">
    モーダルの中身
  </div>
</div>
```
という風に記述してください。  

上記2つのidとは別に、モーダル部分に`class="modalWrap"`は必須です。  
また、ページ内に`<div class="modalBK"></div>`を用意することで、  
モーダルが出たときに後ろに黒い幕を引くことができます。

`class="modalBK"`もしくは`class="close"`が設定されている要素をクリックすることで  
モーダルを消すことができます。

### css内

main.cssに`div.modalWrap`と`div.modalWrap > div`についての記述がありますがここは書き換えないようにお願いします。  

別途、その直下のdivのclassの命名/cssの適用は自由です。  
