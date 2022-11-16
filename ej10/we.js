
function ordena(array, num)
{
    var copia = [];
    for(var i = 0; i < array.length; i++){
        copia.push(array[i]);
    }
    if(num)
    {
        for(var i = 0; i < copia.length; i++){
            for(var j = 0; j < copia.length - 1; j++){
                if(copia[j] > copia[j+1]){
                    var aux = copia[j];
                    copia[j] = copia[j+1];
                    copia[j+1] = aux;
                }
            }
        }
    }else{
        for(var i = 0; i < copia.length; i++){
            for(var j = 0; j < copia.length - 1; j++){
                if(copia[j].toLowerCase() > copia[j+1].toLowerCase()){
                    var aux = copia[j];
                    copia[j] = copia[j+1];
                    copia[j+1] = aux;
                }
            }
        }
    }
    return copia;
}
ordena([3, 2, 30, 4], true);  // devuelve un array nuevo ordenado numéricamente [2, 3, 4, 30] 

 ordena([3, 2, 30, 4], false);  // devuelve un array nuevo ordenado alfabéticamente [2, 3, 30, 4]

