var out = "";
var num = [];
var op = "";
var s = "";

function add_number(n)
{
    s += n;
    out += n;
    //num[i] = n;
    console.log(out, n);
    var box = document.getElementById("resultado");
    box.value = out;
}

function add_operator(o)
{
    num[0] = parseInt(s, 10)
    out += o;
    op = o;
    s = "";
    console.log(out, op);
    var box = document.getElementById("resultado");
    box.value = out;
}

function result()
{
    num[1] = parseInt(s, 10)
    var box = document.getElementById("resultado");
    out = "";
    s = "";
    
    if(op == '+')
    {
        box.value = num[0] + num[1];
    }
    else if(op == '-')
    {
        box.value = num[0] - num[1];
    }
    else if(op == '*')
    {
        box.value = num[0] * num[1];
    }
    else if(op == '/')
    {
        var k = num[0] / num[1];
        if(k == "Infinity")
        {
            alert("NO SE PUEDE!!!!");
        }
        else{
            box.value = k;
        }
    }
}
