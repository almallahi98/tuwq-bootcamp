
//1
function revNum(num)
{
   return parseInt(String(num)
   .split("")
   .reverse()
   .join(""), 10);
}
//2
function upp(str)
{
    let words = str.split(" ");
    
   return words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
}
//3
function vowels(str){
    let count=0;
    for(let i=0; i <= str.length;i++)
    {
        if(str.charAt(i).includes("a")||str.charAt(i).includes("e") || str.charAt(i).includes("i") || str.charAt(i).includes("u"))
        {
            count++;
        }
        
    }
    return count;

}
//4
function prime(num)
{
    if(num%num==0 || num <= 1)
    {
        console.log("the number: "+ num +" is prime");
    }
}
//5
function logest(str)
{
    let words = str.split(" ");
    let longest="";
     words.map((word) => { 
        if(word.length > longest.length)
        {
            return longest=word;
        } 
        
     });
     return longest;
}
//6
function sooort(str)
{
    //error
    
   // return str.sort((a, b) => a.str.localeCompare(b.str));
}

//7
function sum(num1,num2)
{
    return num1+num2;
}
//8
function clacAge(num)
{
    return num*360;
}
//9
function convertH2s(num)
{
    return ((num*60)*60);
}
//10
function lessthenzero(num)
{
    if(num<=0)
    {
        return true;
    }
}
//11
function num_of_digits(num)
{
    return String(num).length;
}
//12
function obj2arr(obj)
{
    return Object.keys(obj);
}
//13
function paths(num)
{
    //error
    for(let i=num; i>=1 ;i--)
    {
       num += num * (i - 1);
       //console.log("e: "+i+"equals "+num = num * (i - 1));

    }
   return num;
}
//14
function doubleletters(str)
{
    for(let i=0 ; i<str.length ;i++)
    {
        let x=str.slice(i+1);
        let com= str.charAt(i);
        return x.includes(com);
    }
}

//15
function getDate()
{
    return Date();
}
//16
function getDays(str,str2)
{
    return ((Math.abs(new Date(str)-new Date(str2)))/ (1000 * 3600 * 24));
}

//18
function larg(num,num1)
{
    
    if(num>num1)
    {
        return num;
    }else
    {
        return num1;
    }
}