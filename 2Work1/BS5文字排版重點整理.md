# 重點整理:

Bootstrap5 預設的 font-size 為 16px, line-height 為 1.5
預設的font-family  "Helvetica Neue", Helvetica, Arial, sans-serif -
此外,所有的<p>元素margin-top:0 margin-bottom: 1rem (16px)

## 標題 h1~h6
Bootstrap 中定義了所有的 HTML標題(h1到h6)的樣式。
範例:
<div class="container">
<h1>内容(2.5rem=40px)</h1>
<h2>内容(2rem=32px)</h2>
<h3>内容(1.75rem=28px)</h3>
<h4>内容(1.5rem=24px)</h4>
<h5>内容(1.25rem=20px)</h55>
<h6>内容(1rem=16px)</h6>
</div>

## Display 標題類
Bootstrap 還提供了六個 Display 類來控制標題的樣式:
.display-1, 
.display-2, 
.display-3, 
.display-4,
.display-5,
.display-6 

## 其他類:
.lead 讓段落更突出
.small 指定更小文字(為父元素的85%)
.text-start 靠左對齊
.text-center 居中對齊
.text-end 靠右對齊
.text-nowrap 段落中超出螢幕部分不换行
.text-lowercase 設定文字小寫
.text-uppercase 設定文字大寫
.text-capitalize 設定單詞首字母大寫
.initialism 顯示在 <abbr>元素中的文字以小號字體展示,且可以將小寫字母轉換為大寫字母
.list-unstyled 移除預設的清單樣式,清單項中左對齊(<ul>和<ol>中)。
.list-inline 將所有列表項放置同一行

## 顏色類:

### 文字色彩:
.text-muted:柔和的文字。|
.text-primary:重要的文字。
.text-success:執行成功的文字。
.text-info:代表一些提示資訊的文字。
.text-warning:警告文字。
.text-danger:危險操作文字。
.text-secondary:副標題。
.text-white:白色文字。
.text-dark:深灰色文字。
.text-light:淺灰色文字。
.text-body:黑色文字。
另外也可以設置文字顏色透明度50%可以使用.text-white-50 .text-black-50

### 背景颜色
提供背景顏色的類:
.bg-primary:重要的背景顏色。
.bg-success:執行成功背景顏色。
.bg-info:資訊提示背景顏色。
.bg-warning:警告背景顏色。
.bg-danger:危險背景顏色。
.bg-secondary:副標題背景顏色。
.bg-dark:深灰背景顏色。
.bg-light:淺灰背景顏色。