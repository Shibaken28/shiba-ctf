var log = document.getElementById('timestamp');
var input = document.getElementById('flag');
var button = document.getElementById('submit');
var problemID = document.getElementById('problemID');
const correct = {"test1":"75ad0e5e54549dee7a3a34fc5a98706b0db72205b56ce5a4e88e5b9a194d1d45",
"test2":"c845c0c47d085a3443211a88ab3bf58ea3b2b0c0c67fa69a9bec1446e3a690f3",
"shortest":"793f75d9db176335166e3d8db7b9c902d17c8b7d05011ccf110e354488b0bb03"
};

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



