var log = document.getElementById('timestamp');
var input = document.getElementById('flag');
var button = document.getElementById('submit');
var problemID = document.getElementById('problemID');
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
};

/*
echo 文字列 | sha256sum
date "+%Y/%m/%d %H:%M:%S"
*/

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



