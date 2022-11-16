
/*
    1.- Haz una función llamada ordena, tendrá 2 parámetros de entrada: el primero, será el array que deseamos ordenar; el segundo, nos indica si usaremos ordenación numérica (true) o alfabética(false). Esta función no modifica el array de entrada y devuelve un array nuevo ordenado de menor a mayor. No podéis usar sort ni cualquier otra función que haga la ordenación por vosotros. Prueba su funcionamiento con los siguientes ejemplos de uso:
*/



//ordena([3, 2, 30, 4], true);  // devuelve un array nuevo ordenado numéricamente [2, 3, 4, 30] 

//ordena([3, 2, 30, 4], false);  // devuelve un array nuevo ordenado alfabéticamente [2, 3, 30, 4]




/*
2-Haz una función llamada tajada, se trata de hacer nuestra propia versión del método slice de los arrays. La función tendrá 3 parámetros: el array, principio y final. Devuelve un nuevo array copiando los elementos desde principio hasta final (sin incluir final). No podéis usar ningún método de los arrays para solucionar este ejercicio. Prueba su funcionamiento con los siguientes ejemplos de uso:
*/

function tajada(arr,principio,final)
{
    copia=arr;
    resul=[];
    if(Array.isArray(arr))
    {
        for(i=principio;i<final;i++)
        {
            resul.push(copia[i])
            
        }
    return resul;
    }else console.log("eres poco listo")
}

console.log(tajada([3, 2, 30, 4], 1, 3)); // Devuelve un array nuevo [2, 30];


/*
3.- Hacer una función llamada romboHueco que dibujará en la consola  un rombo hueco dado el tamaño de su parte creciente. Ejemplo, para tamaño 4 se mostrará (pongo . en lugar de espacio para que se aprecien mejor los espacios):
*/

function romboHueco(num)
{
   
    let espacios=num-1;
    let asteriscos=1;
    let string;
    let rombo="";
    if(typeof num==="number" || num<1 || num != null)
    {
        for (let i=1;i<=num;i++)
        {
            string="";

            for (let j=1;j<=espacios;j++)
            {
                string+=".";
            }

            for (let j=1;j<=asteriscos;j++)
            {
                if (j==1 || j==asteriscos)
                {
                    string+="*";
                }
                else
                {
                    string+=".";
                }
            }

            asteriscos+=2;
            espacios-=1;

            rombo+= string+"\n";

        }

        //PARTE DE ABAJO
        espacios=1;
        asteriscos=(num*2)-3;

        for (let i=1;i<=num-1;i++)
        {
            string="";
            for (let j=1;j<=espacios;j++)
            {
                string+=".";
            }

            for (let j=1;j<=asteriscos;j++)
            {
                if (j==1 || j==asteriscos)
                {
                    string+="*";
                }
                else
                {
                    string+=".";
                }
            }

            asteriscos-=2;
            espacios+=1;
            rombo+=string + "\n";
        }
        (console.log(rombo))
    
        
    }else console.log("ERES POCO LISTO");
}
a="grg";
romboHueco();