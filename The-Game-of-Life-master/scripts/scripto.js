function boton(){
    let emptyCell = '<div class="empty"></div>';
    let fullCell = '<div class="full"></div>';
    let pts = 0;
    let cells = document.getElementById('cells');
    /*
    ^^Definiendo los divs y sus clases que se usarán como células^^
    ^^Tomando del DOM el div con id cells para poner las matrices^^
    ^^pts es para evaluar las reglas del Juego de la Vida^^
    ^^slides sirve para convertir los div en block^^
    */
    var counter = 0;
    let str = '';
    let x = 25;
    let y = 50;
    //^^X es el largo, Y es el alto^^

    let arr = new Array(x);
    let arr2 = new Array(x);
    //^^Se usarán dos matrices para traspasarse los valores entre si^^

    for(let i = 0;i < x;i++){
        arr[i] = new Array(y);
        arr2[i] = new Array(y);
    }
    //^^Creando las matrices^^

    for(let i = 0; i < x; i++){
        for(let h = 0; h < y; h++){
            arr[i][h] = emptyCell;
            arr2[i][h] = emptyCell;
        }
    }
    //^^Llenando las matrices de células muertas^^
    arr[12][17] = fullCell;
    arr[12][18] = fullCell;
    arr[12][19] = fullCell;
    arr[12][20] = fullCell;
    arr[12][21] = fullCell;
    arr[12][22] = fullCell;
    arr[12][23] = fullCell;
    arr[12][24] = fullCell;
    arr[12][30] = fullCell;
    arr[12][31] = fullCell;
    arr[12][32] = fullCell;
    //^^Poniendo un patrón inicial de vivas^^(Se hará de otro modo)

    function gameOfLife(pts, arr, arr2, fullCell, emptyCell, counter, x, y){
        
        str += '<div class="slides" id="d' + counter + '"><br/>';
        for(let i = 0;i < x;i++){
            for(let h = 0;h < y;h++){
                str += arr[i][h];
            }
            str += '<br/>';
        }
        str += '</div>';
        //^^Pinto el estado de la matriz^^
        
        //^^basically what is in the next for()vv in there^^
        for(let i = 1; i < x-1; i++){
            for(let h = 1; h < y-1; h++){
                pts = 0;
                if(arr[i-1][h-1] == fullCell){//group a
            pts++;
            }if(arr[i-1][h] == fullCell){
            pts++;
            }if(arr[i-1][h+1] == fullCell){
            pts++;
            }if(arr[i][h-1] == fullCell){//group b
            pts++;
            }if(arr[i][h+1] == fullCell){
            pts++;
            }if(arr[i+1][h-1] == fullCell){//group c
            pts++;
            }if(arr[i+1][h] == fullCell){
            pts++;
            }if(arr[i+1][h+1] == fullCell){
            pts++;
                }
                //^^Suma pts poco a poco para evaluar la condicion^^

                if( (arr[i][h] == fullCell && pts < 2) || (arr[i][h] == fullCell && pts > 3) ){
                    arr2[i][h] = emptyCell;
                }if( (arr[i][h] == fullCell && pts == 2) || (arr[i][h] == fullCell && pts == 3) ){
                    arr2[i][h] = fullCell;
                }if(arr[i][h] == emptyCell && pts == 3){
                    arr2[i][h] = fullCell;
                }
                //Cambia el estado de las células según las reglas
            }
        }
        for(let i = 1; i < x-1; i++){
            for(let h = 1; h < y-1; h++){
                arr[i][h] = arr2[i][h];
            }
        }
        //Cambio el estado de la matriz original

        return str;
        
    }
    //vv tm es la cantidad de frames que tendrán los clase slidesvv
    let tm = 60;
    for(i = 0; i < tm;i++){
        cells.innerHTML = gameOfLife(pts, arr, arr2, fullCell, emptyCell, counter, x, y);
        counter++;
    } 
    //vv Esto es simplemente un slider vv
    toslide();
    function toslide(){
        let slind = 0;
        slider();
        function slider(){
            
            let slindarray = document.getElementsByClassName("slides");
            
            for(let c = 0; c < slindarray.length; c++){
                slindarray[c].style.display = "none";
            }
            slind++;
            if(slind > slindarray.length){
                slind = 1;
            }
                
            slindarray[slind-1].style.display = "block";
            setTimeout(slider, 50);
        }
    } 
    cells.style.width = "1000px";
    let bot = document.getElementById("bot");
    bot.style.display = "none";
}