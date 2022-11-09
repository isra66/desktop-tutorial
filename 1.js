//funcion que ordene 3 números usando if else en  javascript

function ordenar(a, b, c) {
    if (a > b && a > c) {
        if (b > c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b);
        }
    } else if (b > a && b > c) {
        if (a > c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }
    } else if (c > a && c > b) {
        if (a > b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }
    }
}

ordenar(10, 8, 11);

//Cálculo del área de un círculo de radio dado.

function areaCirculo(radio)
{
    return Math.PI * Math.pow(radio,2);
}

console.log(areaCirculo(4));


/*Hacer varios bucles, para conseguir mostrar por consola las secuencias siguientes:

1 2 3 4 5 6 7 8 9 10
5 6 7 8 9 10 11 12 13 14 15
15 14 13 12 ... 1
11 13 15 17 19 21 ... 51
50 47 44 41 38 35 ... mientras sea positivo
-6 -5 -4 -3 -2 -1 0 1 2 3
a b c d e f g
m e n s a j e
*/

function ejercicioBucles()
{
    for (let i=0;i<=10;i++)
    {
        console.log(i,", ");
    }

    for(let j=5;j<=15;j++)
    {
        console.log(j,"," , "\n");
    }

    for(let i=15;i<=1;i--)
    {
        console.log(i,", ","\n");
    }


    for(let i=50;i<=0;i=i-3)
    {
        console.log(i,", ","\n");
    }

    for(let i=-6;i<=3;i++)
    {
        console.log(i,", ","\n");
    }

    for(let i=97;i<=101;i++)
    {
        console.log(String.fromCharCode(i),", ","/n");
    }

    let palabra="mensaje";

    for(let i=0;i<palabra.length;i++)
    {
        console.log(palabra[i]);
    }


}

ejercicioBucles();



function rombo(tamaño) 
{
    let resultado = "";
    for (let i = 0; i < tamaño; i++) 
    {
        for (let j = 0; j < tamaño; j++) 
        {
            
            
        }
        resultado += "\n";
    }
    return resultado;
}


console.log(rombo(8));