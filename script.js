
    // ディレクトリ，問題名，得点，ジャンル，追加日，ID
const DB=[
    [["./welcome.html"],["welcome"],[1],["Warmup"],["2022/05/25"],["welcome"]],
    [["./shortestCode.html"],["shortest code"],[100],["Misc"],["2022/05/25"],["shortest"]],
    [["./Art-01.html"],["Art=01"],[100],["Crypto,Puzzle"],["2022/05/27"],["Art-01"]],
    [["./lingual.html"],["1.5linghual"],[100],["Misc"],["2022/05/27"],["lingual"]],
    [["./2D-Lagrange.html"],["2D Lagrange"],[200],["Crypto"],["2022/05/26"],["2D-Lagrange"]],
    [["./rotatedQR.html"],["rotatedQR"],[200],["Crypto"],["2022/05/27"],["rotatedQR"]],
    [["./stol.html"],["stol"],[1],["Warmup"],["2022/05/27"],["stol"]],
    [["./Simple-Encoding.html"],["Simple Encoding"],[2],["Warmup"],["2022/05/25"],["Simple-Encoding"]],
    [["./just-RSA.html"],["Just RSA"],[3],["Crypto,RSA"],["2022/05/25"],["Just-RSA"]],
    [["./small-RSA.html"],["Small RSA"],[2],["Crypto,RSA"],["2022/05/25"],["small-RSA"]],
    [["./Neighboring-RSA.html"],["Neighboring RSA"],[4],["Crypto,RSA"],["2022/05/27"],["Neighboring-RSA"]],
    [["./Leaked-RSA.html"],["Leaked RSA"],[5],["Crypto,RSA"],["2022/05/27"],["Leaked-RSA"]],
];
var problemID = document.getElementById('problemID');

build();
setup();


var log = document.getElementById('timestamp');
var input = document.getElementById('flag');
var button = document.getElementById('submit');
const correct = {"test1":"75ad0e5e54549dee7a3a34fc5a98706b0db72205b56ce5a4e88e5b9a194d1d45",
"test2":"c845c0c47d085a3443211a88ab3bf58ea3b2b0c0c67fa69a9bec1446e3a690f3",
"welcome":"ab2322a0c82f2ee8c51b53cc4bf2ea645ca3b13a3705456558fea08188da3bdf",
"shortest":"793f75d9db176335166e3d8db7b9c902d17c8b7d05011ccf110e354488b0bb03",
"Simple-Encoding":"e6a147e83d81c4368cfabc4914c5ff6581b328a45a60317690e77b3456a59de0",
"Just-RSA":"bafefcc7367216294b5c462fa1860875da2a30d19c6049203cf69a9844380dba",
"small-RSA":"de2f2fbe3f7603d72db615600c0a93f17c6ee4f4448f6a3b2b0b699168eca345",
"2D-Lagrange":"04dda818fa93e94e4c1ed3e7be637eaf24909de43a145500041ed1a3b0f1a5f9",
"Leaked-RSA":"e9df6a4a76f413977e1dc80a705bf3c0c449102cd2ae9a71e5b43d8a954b1b78",
"stol":"c2b6b2aed5b86014c176b1ca9c488b8a58977c248af3d5112835381d7a0ff265",
"Neighboring-RSA":"738ae8a10c65573ee7be42121db5e9ef121d411978cf5925312de726ad289367",
"Art-01":"8f80ddfed80148c35092a888d6c8a51a870aac3a55204e4863a933fd58ee5b37",
"rotatedQR":"e15ef91e294552d1a3af8ec244de989f6a854d52741bbfdd89a9cb96801cdcec",
"lingual":"2014e3092841d61af95c40fad910c330bef70de1ec3701ca613fd54985e631f9",
};

/*
echo 文字列 | sha256sum
date "+%Y/%m/%d %H:%M:%S"
*/
if (button!=null){
  button.addEventListener('click', event => {
  async function sha256(str) {
      // Convert string to ArrayBuffer
      const buff = new Uint8Array([].map.call(str, (c) => c.charCodeAt(0))).buffer;
      // Calculate digest
      const digest = await crypto.subtle.digest('SHA-256', buff);
      return [].map.call(new Uint8Array(digest), x => ('00' + x.toString(16)).slice(-2)).join('');
  }


    var now = new Date();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();
    
    hashed = sha256(input.value);
    hashed.then(value => {
      log.textContent = "Last submission time " + Hour + ":" + Min + ":" + Sec;
      if(value==correct[problemID.textContent]){
        alert("Correct !");
        $.cookie(problemID.textContent, 'correct', { expires: 36500,path:'/' });
      }else{
        alert("Wrong answer!");
      }
    }).catch(err => {
      log.textContent = "unexpected error";
      console.log(err);
    });

  });
}

function build(){
    var target = "#build-table";
    if ($(target).length>0){
        var add = "";
        add+="<tbody>";
        add+="<tr> <td>問題名</td> <td>得点</td> <td>ジャンル</td> <td>追加日</td> <td>解答状況</td> </tr>";
        for(var i=0;i<DB.length;i++){
            add+="<tr>";
            add+="<td> <a target=\"_blank\" href=\""+DB[i][0]+"\">"+DB[i][1]+"</a> </td>";
            add+="<td class=\"score\">"+DB[i][2]+"</td>";
            add+="<td>"+DB[i][3]+"</td>";
            add+="<td>"+DB[i][4]+"</td>";
            add+="<td  class=\"issolved\">"+DB[i][5]+"</td>";
            add+="</tr>";
        }
        add+="</tbody>";
        $(target).append(add);
    }else{
      var titleTarget = $(".titleName");
      var name=""
      for(var i=0;i<DB.length;i++){
          if(DB[i][5]==problemID.textContent){
            name = DB[i][1];
          }
      }
      titleTarget[0].textContent = name+" shiba's CTF";
      titleTarget[1].textContent = name;
      //for(var i=0;i<titleTarget.length;i++){
      //  titleTarget[i].textContent = name;
      //}
      $("#build-form").append("<form><input id=\"flag\" placeholder=\"Please enter the flag\" name=\"flag\" required maxlength=\"100\" size=\"100\"/><input type=\"text\" name=\"dummy\" style=\"display:none;\"><button id=\"submit\" type=\"button\" >submit</button><p id=\"timestamp\"></p></form><br><a class=\"top\" href=\"./index.html\">問題一覧</a>");
    }
}

function setup() {
    var name = $(".issolved");
    var score = $(".score");
    var myScore = $(".myScore");
    if(name.length>0){
      var s=0;
      $.each(name, function(i, v){
          if($.cookie($(v).text())){
              $(v).css('background-color', '#40EEEE');
              s+=parseInt(score[i].textContent);
          }else{
          }
      });
      console.log(s);
      myScore[0].textContent="現在の得点："+s;
    }
}