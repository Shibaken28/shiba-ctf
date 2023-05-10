
const problems = {
  welcome: {
    title: "welcome",
    description: "ようこそshibe CTF Gymへ！<br>このwebサイトはGitHub Pagesを使用しています． <br> ソースコードは<a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf\">Github</a>で公開されています．",
    flag: "ab2322a0c82f2ee8c51b53cc4bf2ea645ca3b13a3705456558fea08188da3bdf",
    tag: [],
    point: 1,
  },
  r1: {
    title: "radix starter 1",
    description: "次の10進数を2進数に変換してください．<h2>18</h2>答えをsctf{}で囲んで提出してください",
    flag: "f352fd85b34886496aef938d08c2b60cd9cda3870768042617975c06b86ca3a3",
    tag: ["math","binary"],
    point: 1,
  },
  r2: {
    title: "radix starter 2",
    description: "次の10進数を2進数に変換してください．<h2>13579</h2>答えをsctf{}で囲んで提出してください．",
    flag: "0e98d4832885603bb28701e442290da6b213d4df12960f66566b38f342162516",
    tag: ["math","binary"],
    point: 1,
  },
  r3: {
    title: "radix starter 3",
    description: "次の2進数を10進数に変換してください．<h2>10111</h2>答えをsctf{}で囲んで提出してください．",
    flag: "d0c42c7d44a594512c1aad0d7cc7604e9039557754c4254d4a3d9f687949bf50",
    tag: ["math","binary"],
    point: 1,
  },
  r4: {
    title: "radix starter 4",
    description: "次の2進数を10進数に変換してください．<h2>1100110010101010</h2>答えをsctf{}で囲んで提出してください．",
    flag: "7e2d05875d22552e03e80025c36930eb5ba187df200c09afe00ecc6ba804d70d",
    tag: ["math","binary"],
    point: 1,
  },
  r5: {
    title: "radix starter 5",
    description: "次の16進数を10進数に変換してください．<h2>3b</h2>答えをsctf{}で囲んで提出してください．",
    flag: "5ebcd416e47a9c5982600e2edf873c6b18fce6e8ead904a86a3e41b81bf8ca72",
    tag: ["math","binary"],
    point: 1,
  },
  r6: {
    title: "radix starter 6",
    description: "「a」の文字コードは10進数で97です．これを16進数に直してください．<br>答えをsctf{}で囲んで提出してください．",
    flag: "72b92f7c24d51fffed5022318b39e39e9bd65f4c484e67b798c8f66a272b0b4c",
    tag: ["math","binary"],
    point: 1,
  },
  r7: {
    title: "radix starter 7",
    description: "次の9進数で表された数を10進数に変換してください．<h2>8128</h2>答えをsctf{}で囲んで提出してください．",
    flag: "8990b3a5a29c7d80b94b05134542346c69c4fcf9ce5a2e57b75902a4c60baf94",
    tag: ["math","binary"],
    point: 1,
  },
  r8: {
    title: "radix starter 8",
    description: "1の後ろに0が64個並んだ数を2進数と見たとき，その値を10進数に変換してください．答えをsctf{}で囲んで提出してください．",
    flag: "27837e6161144e800bc112f02984af37e1a0392cfc079101609d27dd23cf04e8",
    tag: ["math","binary"],
    point: 1,
  },
  cls1: {
    title: "Romantic",
    description: "eofr{wuymsgd3_d0y4zfuo}",
    flag: "dcef058ed7c93dd464f93412bc3f1d85a78db8fe260cb234f5c7bd7132f50632",
    point: 10,
  },
  cls2: {
    title: "SOS",
    description: ".-.. .. -.-. . -. ... .<br>答えをsctf{}で囲んで提出してください．",
    flag: "8c8062228f8efadcde54ac9f552cc1c0391e712ae01b3ba83560937aea365b97",
    point: 10,
  },
  cls3: {
    title: "No meaning",
    description: "qlhzzoq qodjfsz hsf fxqsidroex afrjewz rjhr jhyf gffx pzfw ves qfxrpsofz re zfqpsf zfqsfr afzzhufz. rjfzf qodjfsz hsf ghzfw ex ahrjfahroqhl hluesorjaz, rshxzvesaoxu dlhoxrfcr oxre pxsfhwhglf qodjfsrfcr, sfhwhglf exli gi rjezf korj rjf wfqsidroex mfi. fchadlfz ev qlhzzoq qodjfsz oxqlpwf rjf qhfzhs qodjfs, kjoqj sfdlhqfz fhqj lfrrfs ox rjf dlhoxrfcr korj h vocfw xpagfs ev dezoroexz wekx rjf hldjhgfr; rjf youfxfsf qodjfs, kjoqj pzfz aplrodlf qhfzhs qodjfsz ghzfw ex h mfikesw; rjf dlhivhos qodjfs, kjoqj fxqsidrz dhosz ev lfrrfsz pzoxu h 5c5 usow; rjf shol vfxqf qodjfs, kjoqj sfhsshxufz dlhoxrfcr lfrrfsz; hxw rjf fxouah ahqjoxf, kjoqj khz vhaepzli qshqmfw gi hllofw qewfgsfhmfsz wpsoxu keslw khs oo. gi rjf khi, jfsf oz vlhu: zqrv{dlhoxrfcr_lfrrfsz_zpgzrorprfw_korj_wovvfsfxr_qodjfsrfcr_lfrrfsz}",
    flag: "3539859e4c5866b2607175d9399892753aa5287cfb21fa4591e1776cc8908c7e",
    point: 30,
  },
  cls4: {
    title: "Zigzag",
    description: "slc5r4ndc1__11_u335udn}t@f3p_@c__y_34fr3chr_34d_0r7{n35n75",
    flag: "86b4dde04b595569eb1232f27636746e4366930db990f6667517a3f14e25b3ab",
    point: 30,
  },
  cls5: {
    title: "Cylinder",
    description: "s{__05pcy440t3t0r_d3rfu3g_p}",
    flag: "d6a843f2f1dfb41c85ac3111ba6532addfd1de3611eb969faf3487f809b748dd",
    point: 20,
  },
  cls6: {
    title: "Square",
    description:`
cipher text: wmeijredxjjpkaamkimutbhxedxhgrmgjw
<br>
key: esp
<br>
<br>
<img class="image" src="./img/square.png" width="60%">
<br>
<a href="https://ja.wikipedia.org/wiki/%E3%83%B4%E3%82%A3%E3%82%B8%E3%83%A5%E3%83%8D%E3%83%AB%E6%9A%97%E5%8F%B7" target="_blank">画像出典: フリー百科事典『ウィキペディア（Wikipedia）』Vigenère cipher</a>
<br>
復元した文字列をそのままsctf{}で囲んで提出してください．
`,
    flag: "9d23a7a803a48dd9663095fce5c378408a14ba4334721a445290876fde2fde78",
    point: 20,
  },
  mdn1: {
    title: "Numbers",
    description: "115, 99, 116, 102, 123, 78, 117, 109, 98, 101, 114, 115, 95, 97, 114, 101, 95, 97, 95, 99, 111, 109, 109, 111, 110, 95, 108, 97, 110, 103, 117, 97, 103, 101, 125",
    flag: "bee90dc6e18e563c8f39766710dbcdf605109acda1397f665d54a7f349013201",
    point: 20,
  },
  mdn2: {
    title: "long_to_bytes",
    description: "<a target=\"_blank\" href=\"https://pycryptodome.readthedocs.io/en/latest/index.html\">pycryptodome</a> ライブラリのlong_to_bytes関数を知っていますか．これは文字列を整数に変換する代表的な方法のうちの一つです．<br>1279736731193177234995154651896954849329117386600140361605729277808417294476644446533121189156265083663343198097886984854368748206461<br>P.S. どのような原理で変換されているかを確認してみましょう",
    flag: "b26cb5a2cf9706ab1bc1db5d60ac875307118593e5117852c6d460b2c9e25443",
    point: 20,
  },
  mdn4: {
    title: "Compression",
    description: "c2N0ZntiYXNlNjRfZW5jMGRlZF9zN3JpbmdfMTVfYmVpbmdfb25lfQ==",
    flag: "5d14a4a48af8443aa3a57a85194f093d1fd7410ddfd8ca6683dbefd0888d8077",
    point: 20,
  },
  mdn5: {
    title: "Compression 2",
    description: "ONRXIZT3IJAHGM27GMZV6MJVL5AHMM3SPFPTKZLDOVZGKXZTNZRTAZBRNZTV6ZRQOJPW2QDOPFYHK4TQGA2TG427MJ2TOXZRORPW2QDZL5XDAN27MIZV6N3IGNPWMQDTG4ZXGN27GBXDGX3GGBZEA3DML42TI5DVIA3TCMDOGV6Q====",
    flag: "fc7c2fd8e6e2440da8b83415b416f064a1ef39d51b274ccbe668d8f507a82058",
    point: 20,
  },
  mdn6: {
    title: "Kanji",
    description: "籼籬籽籯粄籛簹籽籉籽簺簹籷籨簺簾籨簾簺籶籹籵簼籨簯簼籯籯簼籬籀簺籿簼粆",
    flag: "601a3e6774c1a26ce97cee758227bcdb22091fc8176ed1ca23fe3caff33860ca",
    point: 30,
  },
  mdn7: {
    title: "Numbers 2",
    description: "163,143,164,146,173,60,143,67,64,154,137,156,165,155,142,63,162,65,137,100,162,63,137,67,150,63,137,142,63,163,67,137,167,100,171,137,67,60,137,63,156,143,60,144,63,137,144,100,67,63,175",
    flag: "32f1ef993950aba91e7fc65a0728c5717cf83c2cd1d99d0838fbd5cad47a2a7b",
    point: 30,
  },
  mdn9: {
    title : "Emoji cipher",
    description: "🍳🍣🍴🍦🍻🌳🍭🌰🍪🌱🍟🍣🍯🍭🌳🍟🍦🍲🌰🍭🍟🍪🌴🍰🍡🍮🍽",
    flag: "20a87bdea693654cdff92ca9e05c39e0391a337c235280aa010d8ffca2061edf",
    tag: [],
    point: 30,
  },
  mdn8: {
    title: "http",
    description: "sctf%7B%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%A7%E3%82%82ok%7D",
    flag: "02bef8e99505357ff8dca270fee051da6927994013aeedd52308e430cf922887",
    point: 20,
  },
  mdn10: {
    title: "Sanity Check",
    description:`
Just Sanity Check (Except for certain people)
<br>
<br>
<img class="image" src="./img/lol.png" width="90%">
<br>
`,
    flag: "b904c47e6aebbe836084ca0244e42509e48c9aaa79ec8056ce8a828138b0f9ef",
    point: 5,
  },

  mdn3: {
    title: "AES starter",
    description: "AES暗号を知っていますか?<br>iv = ffffffffffffffffffffffffffffffff<br>key = 01230123012301230123012301230123<br>mode = CBC<br>enc = f47fda4253994089ee89c8f0b76d3991d36c9085cb0ffaa06781fb56dd7fe9a4",
    flag: "e713df524228168d6c56be2883ce92993ffa85c9ae63924c11a3b4f97d5e9b7d",
    point: 30,
  },
  AES1: {
    title : "Beginner's AES",
    description:
`
フラグをあるkeyを用いてECBモードで暗号化すると次の値になりました．<br>
b6506e08641d53366fdbfa35e8549e24d7666bdf3cbad130ddeb8eb1d0c7b58a
<br>
暗号化するときに使ったkeyを使って，復号をしてくれるサイトがあります．
<a target="_blank" href="./Interactive/ECBchall.html"> 復元サイト </a>
<br>ただし，上記の値は入力として受け付けません！
`,
    flag: "ce5d0f28041afbd66167f54bf13049e10c5b2e8b6300e0182d4f058dfd17ddd0",
    tag: ["AES"],
    point: 50,
  },
  padding: {
    title : "Padding Escapade",
    description:
`
データ長を16(bytes)の倍数にするための，paddingという技術があります．<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Padding/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Padding/output.txt">output.txt</a>
<br>
P.S. 本問題で使用されているPaddingは，PKCS#7という方式です．
`,
    flag: "530a471535069ae525599639810b14947987689562d13f96ad83b74b8fbb84f7",
    tag: ["AES", "Padding"],
    point: 70,
  },
  Equ1: {
    title : "Equation 1",
    description: "次の$x$に関する方程式を解いてください．<br> $$3158x=162030664$$ <br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "c7ecffd904d968e54b1765daef3d637112b634ebf36fc794057ee258c7c37ed7",
    tag: ["math","PPC"],
    point: 20,
  },
  Equ2: {
    title : "Equation 2",
    description: "次の$x$に関する方程式を解いてください．<br> $$x^2=3386439659231533906596$$ <br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "bacec195a95aa0bb97621ba289de74264c474491dc661ed4948a2f3873432226",
    tag: ["math","PPC"],
    point: 30,
  },
  Equ3: {
    title : "Equation 3",
    description: "次で定義される関数$f$において，$f(x)$の値が <a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Equations/Eq3/output.txt\">output.txt</a> となりました． <br> $$f(x)=x^{16}$$ <br> $x$の値を文字列に変換し回答してください",
    flag: "5decb34ca11b6b9c75227e4c50dd0280c46ed1b093115248393b089f74553a01",
    tag: ["math","PPC"],
    point: 50,
  },
  Equ4: {
    title : "Equation 4",
    description: "次で定義される関数$f$において，$f(x)$の値が <a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Equations/Eq4/output.txt\">output.txt</a> となりました． <br> $$f(x)=x^8+x^4+x^2$$ <br> $x$の値を文字列に変換し回答してください",
    flag: "8804933356ff27c27af964740f3e334c2464e5a8dd97bfe3163c8c23951ceb4c",
    tag: ["math","PPC"],
    point: 70,
  },
  math1: {
    title : "Math Class 1",
    description: "次の値はいくつですか．<br> $$1+2+3+4+\\cdots+2022 + 2023$$ <br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "e3ad583e69dc5d3cbd53bf56709bbd0df46b5f00df73a357e0d6331dcf94c85b",
    tag: ["math","PPC"],
    point: 10,
  },
  math2: {
    title : "Math Class 2",
    description: "次の値はいくつですか．<br> $$1+2+3+4+\\cdots+10^{12}$$ <br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "05f8debda8263ece9b6d0bb231543c1076f1ea85cc398ccecdde32b1352d4101",
    tag: ["math","PPC"],
    point: 20,
  },
  math3: {
    title : "Math Class 3",
    description: "次の値の下$10$桁はいくつですか．<br>$$ 8128^{123456789}$$ <br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "bd8e2953685cacfeb5095d3d1b4e233b2edceb9ca81af9014a38a65ac6e65e22",
    tag: ["math","PPC"],
    point: 50,
  },
  math4: {
    title : "Math Class 4",
    description: "次の式を満たす最小の自然数$x$はいくつですか． <br>$$29x \\equiv 1 \\pmod{157} $$ <br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "2fe1e1b695854329083bb79ff7a0fbf42c3bcba85bc771f175bb78a65585b26b",
    tag: ["math","PPC"],
    point: 20,
  },
  math5: {
    title : "Math Class 5",
    description: "次の式を2つの数の最大公約数はいくつですか． <br>14930888045225624011<br> 8204203643581470607<br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "aaff34dba91f3f5d16d1f1da0313a04ba54ed5e700f2a70f8767b22a1b445e82",
    tag: ["math","PPC"],
    point: 50,
  },
  math6: {
    title : "Math Class 6",
    description: "次の式を満たす最小の自然数$x$はいくつですか． <br>$$ 12345678x \\equiv 1 \\pmod{998244353} $$ <br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "46d6886a6566c3b59f9d51dfdef9a213d7c95aab38057675754ec138e39803bc",
    tag: ["math","PPC"],
    point: 70,
  },
  math7: {
    title : "Math Class 7",
    description: "次の式を2つの条件を満たす最小の自然数はいくつですか． <br>・591233で割ったあまりが23 <br>・950753で割ったあまりが19<br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "f39188b8987d7bab5e7fcf45c1c85e3d5e13f6db16a9a2217a2abdcab827c53a",
    tag: ["math","PPC"],
    point: 70,
  },
  RSA0: {
    title: "RSA starter",
    description:`
RSA暗号の復元をしましょう．
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Just-RSA/encode.py">encode.py</a> <a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Just-RSA/output.txt">output.txt</a>`,
    flag: "bafefcc7367216294b5c462fa1860875da2a30d19c6049203cf69a9844380dba",
    tag: ["RSA"],
    point: 70
  },

  XOR0: {
    title : "XOR starter",
    description:
`
フラグの各文字をXORで暗号化しました．
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/XORstarter/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/XORstarter/output.txt">output.txt</a>
`,
    flag: "7e773ad0b7f9cdbe0cfb8c26d329894050e6682110d0293f4b4467fd1601aa60",
    tag: ["binary", "XOR"],
    point: 50,
  },
  XOR: {
    title : "XOR Maze",
    description:`
次の式が成り立つとき，$x$を文字列に変換したものがフラグである．
$$
\\left\\{ \\,
    \\begin{aligned}
    & A \\oplus B \\oplus C\\oplus D \\oplus x &=& 5377641754428678066512987230012515224174\\\\
    & A \\oplus B \\oplus D &=& 11331496562866094130237248094409599670107 \\\\
    & B \\oplus C \\oplus D &=& 29106038454181545728710949998117033276714 \\\\
    & B \\oplus D &=& 2864369635618546361322337675519612189282 
    \\end{aligned}
\\right.
$$
` ,
    flag: "ad7b463c9170e8826cfa9287da62ca1c98ec2cba3e6645086aca4aa5e8a91901",
    tag: ["binary","XOR"],
    point: 70,
  },
  XOR2: {
    title: "XOR XOR XOR",
    description: 
`
XOR, XOR, XOR, and XOR
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/XORXORXOR/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/XORXORXOR/output.txt">output.txt</a>
`,
    flag: "58c5a784c6ee754206843c730eaaeb63bcf5b5843729caa318647fa17a3fa57e",
    tag: ["XOR","binary"],
    point: 100
  },
  rnd1: {
    title : "Foresight? 1",
    description:
`
乱数を使って暗号化をしました．私は優しいので$a,m$を教えてあげます．<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/chall1.py">chall1.py</a>
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/output1.txt">output1.txt</a>
<br>
<br>
線形合同法とは，次のような式で，前の数$x_n$から次の数$x_{n+1}$を生成する方法です．
$$x_{n+1} = (ax_n + b) \\mod m$$
ただし，$\\mod m$は$m$で割ったあまりを表し，$a,b,m$は定数です．
`,
    flag: "67bd0e6c6cdfb5ad714e4c4b0ec1d4b0f21ab1b2ed685cbeac113f26479dc9b9",
    tag: ["random"],
    point: 50,
  },
  rnd2: {
    title : "Foresight? 2",
    description:
`
乱数を使って暗号化をしました．私は優しいので$b,m$を教えてあげます．<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/chall2.py">chall2.py</a>
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/output2.txt">output2.txt</a>
`,
    flag: "24a75c36037012a826592c41171e05e0ff62eefa7dd74b65bfb0dacf494445dc",
    tag: ["random"],
    point: 70,
  },
  rnd3: {
    title : "Foresight? 3",
    description:
`
乱数を使って暗号化をしました．私はちょっと優しいので$m$だけ教えてあげます．<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/chall3.py">chall3.py</a>
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/output3.txt">output3.txt</a>
`,
    flag: "01b768ea02d0dfb4f7ca2e9b87c336050a5f7ecfcfdddd0f0c88140b0a2ea897",
    tag: ["random"],
    point: 100,
  },
  rnd4: {
    title : "Foresight? 4",
    description:
`
乱数を使って暗号化をしました．何も教えません．<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/chall4.py">chall4.py</a>
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/output4.txt">output4.txt</a>
`,
    flag: "486c2592018d19361a64defe0f9c3f6194b2740077888ebcc9b910e91f58df79",
    tag: ["random"],
    point: 200,
  },
  rnd5: {
    title : "Foresight? Final",
    description:
`
乱数を使って暗号化をしました．1つ飛ばしで教えてあげます<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/chall5.py">chall5.py</a>
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Foresight/output5.txt">output5.txt</a>
`,
    flag: "5850312678728a14b64922b1a294c07e34dee66bd053c9e1e010ecb859d79b1f",
    tag: ["random"],
    point: 300,
  },
  modpuzzle: {
    title : "Modular Puzzle",
    description:
`
mod演算は，割り算を逆元とすれば，案外普通の演算と同じように扱えます．
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/modpuzzle/encode.py">encode.py</a>
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/modpuzzle/output.txt">output.txt</a>
`,
    flag: "5efa5ef4336e08dab251162163c62b2cb83e4631272bdf1b86bf41fbea675121",
    tag: ["mod", "math"],
    point: 150,
  },
  RSA1: {
    title: "Each RSA",
    description:`
Each Letter, Each RSA
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Each-RSA/encode.py">encode.py</a> <a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Each-RSA/output.txt">output.txt</a>`,
    flag: "5cb3d3202e6086672c5c9dc8dc64752a36a197eb07534775fcdc6bf16794f61d",
    tag: ["RSA"],
    point: 100
  },
  RSA3: {
    title: "Small RSA",
    description:`
$e$ looks small 
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/small-RSA/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/small-RSA/output.txt">output.txt</a>`,
    flag: "de2f2fbe3f7603d72db615600c0a93f17c6ee4f4448f6a3b2b0b699168eca345",
    tag: ["RSA"],
    point: 100
  },
  lagrange: {
    title: "2D Lagrange",
    description: "二次関数を使って暗号化をしてみました．<br> <a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf/blob/main/problems/2D-Lagrange/encode.py\">encode.py</a> <a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf/blob/main/problems/2D-Lagrange/output.txt\">output.txt</a>",
    flag: "04dda818fa93e94e4c1ed3e7be637eaf24909de43a145500041ed1a3b0f1a5f9",
    tag: ["math","PPC"],
    point: 150,
  },
  RSA2: {
    title: "Common N RSA",
    description:`
RSA but it's common m,N 
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/common-N-RSA/encode.py">encode.py</a> <a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/common-N-RSA/output.txt">output.txt</a>`,
    flag: "ab9e39bbacf42d0428c1b65581c62b0788933c9acf04d97d5e3dead118e6dd57",
    tag: ["RSA"],
    point: 200
  },
  RSA4: {
    title: "Many RSA",
    description:`
I used many RSA.
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/many-RSA/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/many-RSA/output.txt">output.txt</a>`,
    flag: "f8bdfef5e0f048a2e5cb2d9ea4055b5446cc4be35ebd26e5ab7a202213b17735",
    tag: ["RSA"],
    point: 200
  },
  RSA5: {
    title: "Unbalance RSA",
    description:`
This RSA has some strong primes, so it can't be broken by factoring N.
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Unbalance-RSA/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Unbalance-RSA/output.txt">output.txt</a>`,
    flag: "ead54ed475a9fa818448330742518c4863a7c2fd34f04adfe21ae3d9d9e06104",
    tag: ["RSA"],
    point: 200
  },
  RSA6: {
    title: "Cut RSA",
    description:`First, tear p and q in half. Next, attach them together.
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/cut-RSA/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/cut-RSA/output.txt">output.txt</a>`,
    flag: "519737cfafd7918e35372d793d1301a7ad8d8cb84b3e0380a89d471a8c95fca0",
    tag: ["RSA"],
    point: 200
  },
  RSA7: {
    title: "Insufficient RSA",
    description:`There is not much information on this problem, after all, e is not given.
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Insufficient-RSA/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Insufficient-RSA/output.txt">output.txt</a>`,
    flag: "05c7525dc87052b58602c3c09a63399043763014a11263a9a598c8276fe7b629",
    tag: ["RSA"],
    point: 300
  },
  stair: {
    title: "Staircase",
    description:`
Like Infinite Stairway
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/staircase/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/staircase/output.txt">output.txt</a>`,
    flag: "d106d367278bf68be13170b5fc706890fc72a50797b1032fff306b1f0fad8d04",
    tag: ["mod", "math"],
    point: 200
  },
  RSA8: {
    title: "Hyperdefensiveness",
    description:`
    I realized it was dangerous to encrypt each letter individually, so I made it very complicated.
<br>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Hyperdefensiveness/encode.py">encode.py</a>
<a target="_blank" href="https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Hyperdefensiveness/output.txt">output.txt</a>`,
    flag: "532090380c5258a8f051033b9a8b53e2d9f503f46e8672c4a8db0e97ccaa6064",
    tag: ["RSA"],
    point: 500
  },
  next: {
    title: "coming soon ?",
    description: "作者のやる気が出ると問題が追加されます",
    flag: "",
    point: 0,
  },

};



const problemListElement = document.getElementById("problem-list");
const scoreElement = document.querySelector('.score-value');
const levelElement = document.querySelector('.level-value');
const progressBarFillElement = document.querySelector('.progress-bar-fill');
const nextLevelValueElement = document.querySelector('.next-level-value');


buildProblemList(problems);
updateSolvedStatus();

function buildProblemList(problemList) {
  // problemListElementを空にする
  problemListElement.innerHTML = "";
  for (const problemId in problemList) {
    const problem = problemList[problemId];
    const listItemElement = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    linkElement.setAttribute("class", "problem-link");
    // problem linkをpointによって色分けする
    if (problem.point < 10) {
      linkElement.setAttribute("class", "problem-link diff-baby");
    } else if (problem.point < 50) {
      linkElement.setAttribute("class", "problem-link diff-warmup");
    } else if (problem.point < 100) {
      linkElement.setAttribute("class", "problem-link diff-easy");
    } else if (problem.point < 300) {
      linkElement.setAttribute("class", "problem-link diff-medium");
    } else if (problem.point < 500) {
      linkElement.setAttribute("class", "problem-link diff-hard");
    }else{
      linkElement.setAttribute("class", "problem-link diff-insane");
    }
    linkElement.setAttribute("data-problem", problemId);
    linkElement.textContent = problem.title + "\n" + problem.point;
    listItemElement.appendChild(linkElement);
    problemListElement.appendChild(listItemElement);
  }
  test(problemList);
  updateSolvedStatus();
}


function filterProblemsByTag(tagName) {
  const filteredProblems = [];
  for (const problemId in problems) {
    const problem = problems[problemId];
    if (problem.tag && problem.tag.includes(tagName)) {
      filteredProblems.push(problem);
    }
  }
  return filteredProblems;
}

function filterProblemsByString(searchText) {
  const filteredProblems = {};

  for (const problemKey in problems) {
    const problem = problems[problemKey];
    const problemTitle = problem.title.toLowerCase();
    const problemTags = problem.tag || [];
    let matched = false;

    if (problemTitle.includes(searchText.toLowerCase())) {
      matched = true;
    } else {
      for (const tag of problemTags) {
        if (tag.toLowerCase().includes(searchText.toLowerCase())) {
          matched = true;
          break;
        }
      }
    }

    if (matched) {
      filteredProblems[problemKey] = problem;
    }
  }

  return filteredProblems;
}



function test(problemList){
  // 問題リンクがクリックされた時の処理
  $('.problem-link').on('click', function(e) {
    //$('.problem-title').text(problem.title);
    //$('.problem-description').text(problem.description);
    {
      const problem = problemList[$(this).data('problem')];
      const problemContainer = document.querySelector('.problem-container');
      const problemTitle = problemContainer.querySelector('.problem-title');
      const problemDescription = problemContainer.querySelector('.problem-description');
      const problemId = problemContainer.querySelector('.problem-id');
      // 問題タイトルを設定
      problemTitle.textContent = problem.title; 
      problemId.textContent = $(this).data('problem');
      // 問題説明を設定
      const problemDescriptionHtml = problem.description;
      problemDescription.innerHTML = problemDescriptionHtml;

      // 問題領域を表示
      //problemContainer.style.display = 'block';
    }
    e.preventDefault(); // リンクのクリックイベントをキャンセル
    var problemName = $(this).data('problem');
    var problemTitle = $('#' + problemName).data('title');
    var problemDescription = $('#' + problemName).html();
    $('.problem-title').text(problemTitle);
    $('.problem-description').html(problemDescription);
    $('.problem-container').fadeIn(500); // 0.5秒かけて表示するアニメーション
    $('.problem').animate({
      'top': '0%',
      'margin-top': -($('.problem').outerHeight() / 2)
    }, 500); // 0.5秒かけてアニメーションさせて中央に表示
    MathJax.typeset();
  });

  // 閉じるボタンがクリックされた時の処理
  $('.close-button').on('click', function() {
    $('.problem-container').fadeOut(500); // 0.5秒かけて非表示にするアニメーション
    $('.problem').find('.answer-message').text(''); // メッセージを空にする
    $('.problem').animate({
      'top': '-100%'
    }, 500); // 0.5秒かけて上にアニメーションさせて非表示にする
  });

  // 問題領域の外側をクリックした時の処理
  $('.problem-container').on('click', function(e) {
    if ($(e.target).hasClass('problem-container')) {
      $('.problem').find('.answer-message').text(''); // メッセージを空にする
      $('.problem-container').fadeOut(500); // 0.5秒かけて非表示にするアニメーション
      $('.problem').animate({
        'top': '-100%'
      }, 500); // 0.5秒かけて上にアニメーションさせて非表示にする
    }
  });
}



// 解答フォームを送信したときの処理
$('.answer-form').submit(function(event) {
  event.preventDefault(); // デフォルトの送信処理を無効化
  const problem = $(this).closest('.problem-container').find('.problem-id').text().replace("\n", "");
  const answer = $(this).find('.answer-input').val();
  var hash = CryptoJS.SHA256(answer).toString();
  $(this).closest('.problem').find('.answer-message').removeClass('wrong');
  $(this).closest('.problem').find('.answer-message').removeClass('correct');
  if (hash === problems[problem].flag) {
    updateSolvedStatus();
    // 正解の場合
    $.cookie(problem, 'solved', {expires: 1000000}); // cookieに解答状況を記録
    $(this).closest('.problem').find('.answer-message').text('Correct!').css('color', 'green').show(); // 正解メッセージを表示
    $(this).closest('.problem').find('.answer-message').addClass('correct'); 
  } else {
    // 不正解の場合
    $(this).closest('.problem').find('.answer-message').text('Wrong answer. Please try again.').css('color', 'red').show(); // 不正解メッセージを表示
    $(this).closest('.problem').find('.answer-message').addClass('wrong'); 
  }
})

function updateScore(score) {
  let level = calculateLevel(score);
  let nextLevelScore = calculateNextLevelScore(level);
  scoreElement.textContent = score;
  progressBarFillElement.style.width = (score / nextLevelScore) * 100 + '%';
  nextLevelValueElement.textContent = nextLevelScore - score;
  levelElement.textContent = level;
  nextLevelScore = calculateNextLevelScore(level);
}

function calculateLevel(score) {
  return Math.floor(Math.sqrt(score / 10));
}
function calculateNextLevelScore(level) {
  return 10 * Math.pow(level + 1, 2);
}

function updateSolvedStatus(){
  $(document).ready(function() {
    let totalScore = 0;
    $('.problem-link').each(function() {
      var problem = $(this).data('problem');
      if ($.cookie(problem)) {
        $(this).addClass('solved');
        totalScore += problems[problem].point;
        console.log(totalScore);
        updateScore(totalScore);
      }
    });
  });
}



// 検索バーの要素を取得
const searchBar = document.getElementById('search-bar');

// 検索バーの入力値が変化したときに実行する関数
searchBar.addEventListener('input', () => {
  // 検索バーの入力値を取得
  const searchTag = searchBar.value.trim().toLowerCase();

  if (searchTag === '') {
    buildProblemList(problems);
  }else{
    buildProblemList(filterProblemsByString(searchTag));
  }

});

