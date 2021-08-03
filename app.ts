document.getElementById("clickMe").onclick = function () { 
    
    var word = document.getElementById('input').value;
    var score=0;
    word = word.toUpperCase();
    for (let i = 0; i < word.length; i++) {
        var char = word[i];
        //word.charCodeAt(i);
        
        if(char == 'A'||char=='E'||char=='I'||char=='O'||char=='U'||char=='L'||char=='N'||char=='R'||char=='S'||char=='T'){
            score=score+1
        }
        else if(char=='D'||char=='G'){
            score=score+2
        }
        else if(char=='B'||char=='C'||char=='M'||char=='P'){
            score=score+3
        }
        else if(char=='F'||char=='H'||char=='V'||char=='W'||char=='Y'){
            score=score+4
        }
        else if(char=='K'){
            score=score+5
        }
        else if(char=='J'||char=='X'){
            score=score+8
        }
        else if(char=='Q'||char=='Z'){
            score=score+10
        }
        
      }
      
      document.getElementById('score').innerHTML="The score: "+score
};