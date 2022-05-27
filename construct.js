    // ディレクトリ，問題名，得点，ジャンル，追加日，ID
const DB=[
    [["./welcome.html"],["welcome"],[1],["Warmup"],["2022/05/25"],["welcome"]],
    [["./shortestCode.html"],["shortest code"],[100],["Misc"],["2022/05/25"],["shortest"]],
    [["./Art-01.html"],["Art=01"],[100],["Crypto,Puzzle"],["2022/05/27"],["Art-01"]],
    [["./lingual.html"],["1.5linghual"],[100],["Misc"],["2022/05/27"],["1.5linghual"]],
    [["./2D-Lagrange.html"],["2D Lagrange"],[200],["Crypto"],["2022/05/26"],["2D-Lagrange"]],
    [["./rotatedQR.html"],["rotatedQR"],[200],["Crypto"],["2022/05/27"],["rotatedQR"]],
    [["./stol.html"],["stol"],[1],["Warmup"],["2022/05/27"],["stol"]],
    [["./Simple-Encoding.html"],["Simple Encoding"],[2],["Warmup"],["2022/05/25"],["Simple-Encoding"]],
    [["./just-RSA.html"],["Just RSA"],[3],["Crypto,RSA"],["2022/05/25"],["Just-RSA"]],
    [["./small-RSA.html"],["Small RSA"],[2],["Crypto,RSA"],["2022/05/25"],["small-RSA"]],
    [["./Neighboring-RSA.html"],["Neighboring RSA"],[4],["Crypto,RSA"],["2022/05/27"],["Neighboring-RSA"]],
    [["./Leaked-RSA.html"],["Leaked RSA"],[5],["Crypto,RSA"],["2022/05/27"],["Leaked-RSA"]],
];

build();
setup();

function build(){
    var target = "#build-table";
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
}

function setup() {
    var name = $(".issolved");
    var score = $(".score");
    var myScore = $(".myScore");

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