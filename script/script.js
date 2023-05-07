
const problems = {
  welcome: {
    title: "welcome",
    description: "ようこそshibe CTF Gymへ！<br>このwebサイトはGitHub Pagesを使用しています． <br> ソースコードは<a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf\">Github</a>で公開されています．",
    flag: "ab2322a0c82f2ee8c51b53cc4bf2ea645ca3b13a3705456558fea08188da3bdf",
    tag: [],
    point: 1,
  },
  r1: {
    title: "radix 1",
    description: "次の10進数を2進数に変換してください．<h2>18</h2>答えをsctf{}で囲んで提出してください",
    flag: "f352fd85b34886496aef938d08c2b60cd9cda3870768042617975c06b86ca3a3",
    tag: ["math","binary"],
    point: 1,
  },
  r2: {
    title: "radix 2",
    description: "次の10進数を2進数に変換してください．<h2>13579</h2>答えをsctf{}で囲んで提出してください．",
    flag: "0e98d4832885603bb28701e442290da6b213d4df12960f66566b38f342162516",
    tag: ["math","binary"],
    point: 1,
  },
  r3: {
    title: "radix 3",
    description: "次の2進数を10進数に変換してください．<h2>10111</h2>答えをsctf{}で囲んで提出してください．",
    flag: "d0c42c7d44a594512c1aad0d7cc7604e9039557754c4254d4a3d9f687949bf50",
    tag: ["math","binary"],
    point: 1,
  },
  r4: {
    title: "radix 4",
    description: "次の2進数を10進数に変換してください．<h2>1100110010101010</h2>答えをsctf{}で囲んで提出してください．",
    flag: "7e2d05875d22552e03e80025c36930eb5ba187df200c09afe00ecc6ba804d70d",
    tag: ["math","binary"],
    point: 1,
  },
  r5: {
    title: "radix 5",
    description: "次の16進数を10進数に変換してください．<h2>3b</h2>答えをsctf{}で囲んで提出してください．",
    flag: "5ebcd416e47a9c5982600e2edf873c6b18fce6e8ead904a86a3e41b81bf8ca72",
    tag: ["math","binary"],
    point: 1,
  },
  r6: {
    title: "radix 6",
    description: "「a」の文字コードは10進数で97です．これを16進数に直してください．<br>答えをsctf{}で囲んで提出してください．",
    flag: "72b92f7c24d51fffed5022318b39e39e9bd65f4c484e67b798c8f66a272b0b4c",
    tag: ["math","binary"],
    point: 1,
  },
  r7: {
    title: "radix 7",
    description: "次の9進数で表された数を10進数に変換してください．<h2>8128</h2>答えをsctf{}で囲んで提出してください．",
    flag: "8990b3a5a29c7d80b94b05134542346c69c4fcf9ce5a2e57b75902a4c60baf94",
    tag: ["math","binary"],
    point: 1,
  },
  r8: {
    title: "radix 8",
    description: "1の後ろに0が64個並んだ数を2進数と見たとき，その値を10進数に変換してください．答えをsctf{}で囲んで提出してください．",
    flag: "27837e6161144e800bc112f02984af37e1a0392cfc079101609d27dd23cf04e8",
    tag: ["math","binary"],
    point: 1,
  },
  cls2: {
    title: "Classic 1",
    description: "eofr{wuymsgd3_d0y4zfuo}",
    flag: "dcef058ed7c93dd464f93412bc3f1d85a78db8fe260cb234f5c7bd7132f50632",
    point: 2,
  },
  cls3: {
    title: "Classic 2",
    description: ".-.. .. -.-. . -. ... .<br>答えをsctf{}で囲んで提出してください．",
    flag: "8c8062228f8efadcde54ac9f552cc1c0391e712ae01b3ba83560937aea365b97",
    point: 2,
  },
  mdn1: {
    title: "Modern 1",
    description: "115, 99, 116, 102, 123, 78, 117, 109, 98, 101, 114, 115, 95, 97, 114, 101, 95, 97, 95, 99, 111, 109, 109, 111, 110, 95, 108, 97, 110, 103, 117, 97, 103, 101, 125",
    flag: "bee90dc6e18e563c8f39766710dbcdf605109acda1397f665d54a7f349013201",
    point: 2,
  },
  mdn2: {
    title: "Modern 2",
    description: "<a target=\"_blank\" href=\"https://pycryptodome.readthedocs.io/en/latest/index.html\">pycryptodome</a> ライブラリのlong_to_bytes関数を知っていますか．これは文字列を整数に変換する代表的な方法のうちの一つです．<br>1279736731193177234995154651896954849329117386600140361605729277808417294476644446533121189156265083663343198097886984854368748206461<br>P.S. どのような原理で変換されているかを確認してみましょう",
    flag: "b26cb5a2cf9706ab1bc1db5d60ac875307118593e5117852c6d460b2c9e25443",
    point: 2,
  },
  mdn3: {
    title: "Modern 3",
    description: "AES暗号を知っていますか?<br>iv = ffffffffffffffffffffffffffffffff<br>key = 01230123012301230123012301230123<br>mode = CBC<br>enc = f47fda4253994089ee89c8f0b76d3991d36c9085cb0ffaa06781fb56dd7fe9a4",
    flag: "e713df524228168d6c56be2883ce92993ffa85c9ae63924c11a3b4f97d5e9b7d",
    point: 2,
  },
  mdn4: {
    title: "Modern 4",
    description: "c2N0ZntiYXNlNjRfZW5jMGRlZF9zN3JpbmdfMTVfYmVpbmdfb25lfQ==",
    flag: "5d14a4a48af8443aa3a57a85194f093d1fd7410ddfd8ca6683dbefd0888d8077",
    point: 2,
  },
  mdn5: {
    title: "Modern 5",
    description: "ONRXIZT3IJAHGM27GMZV6MJVL5AHMM3SPFPTKZLDOVZGKXZTNZRTAZBRNZTV6ZRQOJPW2QDOPFYHK4TQGA2TG427MJ2TOXZRORPW2QDZL5XDAN27MIZV6N3IGNPWMQDTG4ZXGN27GBXDGX3GGBZEA3DML42TI5DVIA3TCMDOGV6Q====",
    flag: "fc7c2fd8e6e2440da8b83415b416f064a1ef39d51b274ccbe668d8f507a82058",
    point: 2,
  },
  mdn6: {
    title: "Modern 6",
    description: "籼籬籽籯粄籛簹籽籉籽簺簹籷籨簺簾籨簾簺籶籹籵簼籨簯簼籯籯簼籬籀簺籿簼粆",
    flag: "601a3e6774c1a26ce97cee758227bcdb22091fc8176ed1ca23fe3caff33860ca",
    point: 2,
  },
  mdn7: {
    title: "Modern 7",
    description: "163,143,164,146,173,60,143,67,64,154,137,156,165,155,142,63,162,65,137,100,162,63,137,67,150,63,137,142,63,163,67,137,167,100,171,137,67,60,137,63,156,143,60,144,63,137,144,100,67,63,175",
    flag: "32f1ef993950aba91e7fc65a0728c5717cf83c2cd1d99d0838fbd5cad47a2a7b",
    point: 2,
  },
  Equ1: {
    title : "Equation 1",
    description: "次の$x$に関する方程式を解いてください．<br> $$3158x=162030664$$ <br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "e4e58c5f153cae8d80443ffb50b750f764f6b6074a379c1115302a0645ba8c92",
    tag: ["math","PPC"],
    point: 2,
  },
  Equ2: {
    title : "Equation 2",
    description: "次の$x$に関する方程式を解いてください．<br> $$x^2=3386439659231533906596$$ <br> 答えをそのままsctf{}で囲んで提出してください．",
    flag: "e1a2f1ffacbfd3a10a8ba05d7a86edc4dea7564676dec612bed2b6497298c5d0",
    tag: ["math","PPC"],
    point: 2,
  },
  Equ3: {
    title : "Equation 3",
    description: "次で定義される関数$f$において，$f(x)$の値が <a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Equations/Eq3/output.txt\">output.txt</a> となりました． <br> $$f(x)=x^{16}$$ <br> $x$の値を文字列に変換し回答してください",
    flag: "5decb34ca11b6b9c75227e4c50dd0280c46ed1b093115248393b089f74553a01",
    tag: ["math","PPC"],
    point: 3,
  },
  Equ4: {
    title : "Equation 4",
    description: "次で定義される関数$f$において，$f(x)$の値が <a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf/blob/main/problems/Equations/Eq4/output.txt\">output.txt</a> となりました． <br> $$f(x)=x^8+x^4+x^2+x$$ <br> $x$の値を文字列に変換し回答してください",
    flag: "8804933356ff27c27af964740f3e334c2464e5a8dd97bfe3163c8c23951ceb4c",
    tag: ["math","PPC"],
    point: 4,
  },


  lagrange: {
    title: "2D Lagrange",
    description: "二次関数を使って暗号化をしてみました．<br> <a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf/blob/main/problems/2D-Lagrange/encode.py\">encode.py</a> <a target=\"_blank\" href=\"https://github.com/Shibaken28/shiba-ctf/blob/main/problems/2D-Lagrange/output.txt\">output.txt</a>",
    flag: "",
    tag: ["math","PPC"],
    point: 100,
  },
  next: {
    title: "coming soon ?",
    description: "作者のやる気が出ると問題が追加されます",
    flag: "",
    point: 0,
  },
};



const problemListElement = document.getElementById("problem-list");

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
    $.cookie(problem, 'solved', {expires: 100000}); // cookieに解答状況を記録
    $(this).closest('.problem').find('.answer-message').text('Correct!').css('color', 'green').show(); // 正解メッセージを表示
    $(this).closest('.problem').find('.answer-message').addClass('correct'); 
  } else {
    // 不正解の場合
    $(this).closest('.problem').find('.answer-message').text('Wrong answer. Please try again.').css('color', 'red').show(); // 不正解メッセージを表示
    $(this).closest('.problem').find('.answer-message').addClass('wrong'); 
  }
})


function updateSolvedStatus(){
  $(document).ready(function() {
    $('.problem-link').each(function() {
      var problem = $(this).data('problem');
      if ($.cookie(problem)) {
        $(this).addClass('solved');
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

