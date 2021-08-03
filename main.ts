function stringScore(word: string): number{
    var total =0;
    var one=0,two=0,three=0,four=0,five=0,eight=0,ten=0;
    for(var i=0;i<word.length;i++)
    {
        if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'
        ||word[i]=='u'||word[i]=='l'||word[i]=='n'||word[i]=='r'
        ||word[i]=='s'||word[i]=='t'){

            one=one+1;

        }
        else if(word[i]=='d'||word[i]=='g')
        {
            two=two+2;
        }
        else if(word[i]=='b'||word[i]=='c'||word[i]=='m'||word[i]=='p'){
            three=three+3;
        }
        else if(word[i]=='f'||word[i]=='h'||word[i]=='v'||word[i]=='w'||word[i]=='y'){
            four=four+4;
        }
        else if(word[i]=='k'){
            five=five+5;
        }
        else if(word[i]=='j'||word[i]=='x'){
            eight=eight+8;
        }
        else if(word[i]=='q'||word[i]=='z'){
            ten=ten+10;
        }
    }
    total=one+two+three+four+five+eight+ten;
    return total;
}
console.log(stringScore("cabbage"));
