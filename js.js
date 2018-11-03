var n = 0;
 var i, j;

while ((isNaN(n)) || (n < 1)){
  n = +prompt("Введите длину массива");
}

var arr= [];
//заполнение массива случайными числами
for(i = 0; i<n; i++) {
    arr[i]=[]; //инициализация строки
    for(j = 0; j<n; j++){
        arr[i][j] = Math.round(Math.random()*9); //заполнение строки
        document.write( arr[i][j] + "&nbsp;&nbsp;");     
  }
  document.write( "<br />");
}

//Сумма главной диагонали
var sum=0;
for( i = 0; i<n; i++){
    sum = sum + arr[i][i];
}
  document.write( "Сумма главной диагонали = " + sum + "<br />");

//Сумма побочной диагонали
var sum=0;
for( i = 0; i<n; i++){
    sum = sum + arr[i][n-i-1];
}
  document.write( "Сумма побочной диагонали = " + sum + "<br />");

//Сумма половины матрицы без главной диагонали сверху справа
var sum=0;
for( i = 0; i<n; i++){
    for( j = 0; j<n; j++){
        if (i<j){
            sum = sum + arr[i][j];
        }
    }
}
  document.write( "Сумма половины матрицы без главной диагонали сверху справа = " + sum + "<br />");

//Сумма половины матрицы c главной диагональю сверху справа
var sum=0;
for( i = 0; i<n; i++){
    for( j = 0; j<n; j++){
        if (i<=j){
            sum = sum + arr[i][j];
        }
    }
}
  document.write( "Сумма половины матрицы c главной диагональю сверху справа = " + sum + "<br />");



//Сумма половины матрицы без главной диагонали снизу слева
var sum=0;
for( i = 0; i<n; i++){
    for( j = 0; j<n; j++){
        if (i>j){
            sum = sum + arr[i][j];
        }
    }
}
  document.write( "Сумма половины матрицы без главной диагонали снизу слева = " + sum + "<br />");

//Сумма половины матрицы c главной диагональю снизу слева
var sum=0;
for( i = 0; i<n; i++){
    for( j = 0; j<n; j++){
        if (i>=j){
            sum = sum + arr[i][j];
        }
    }
}
  document.write( "Сумма половины матрицы c главной диагональю снизу слева = " + sum + "<br />");

//Сумма половины матрицы без побочной диагонали сверху слева
var sum=0;
for( i = 0; i<n; i++){
    for( j = 0; j<n; j++){
        if (i+j<n-1){
            sum = sum + arr[i][j];
        }
    }
}
  document.write( "Сумма половины матрицы без побочной диагонали сверху слева = " + sum + "<br />");


//Сумма половины матрицы c побочной диагональю сверху слева
var sum=0;
for( i = 0; i<n; i++){
    for( j = 0; j<n; j++){
        if (i+j<=n-1){
            sum = sum + arr[i][j];
        }
    }
}
  document.write( "Сумма половины матрицы c побочной диагональю сверху слева = " + sum + "<br />");


//Сумма половины матрицы без побочной диагонали снизу справа
var sum=0;
for( i = 0; i<n; i++){
    for( j = 0; j<n; j++){
        if (i+j>n-1){
            sum = sum + arr[i][j];
        }
    }
}
  document.write( "Сумма половины матрицы без побочной диагонали снизу справа = " + sum + "<br />");


//Сумма квадрата верх право
var t = +prompt("Введите угловой элемент квадрата верх право", Math.round(n/2));
var sum=0;
for( i = 0; i<t; i++){
    for(j=t; j<n; j++){
            sum = sum + arr[i][j];
        }
    }

  document.write( "Сумма квадрата  верх право = " + sum + "<br />");


  
//Сумма квадрата низ лево
var t = +prompt("Введите угловой элемент квадрата верх право", Math.round(n/2));
var sum=0;
for( i = t; i<n; i++){
    for(j=0; j<t; j++){
            sum = sum + arr[i][j];
        }
    }

  document.write( "Сумма квадрата низ лево = " + sum + "<br />");


  //Сумма строки p
var p = +prompt("Введите номер строки для подсчета суммы", Math.round(n/2));
var sum=0;
var sumUp=0; //выше строки р
var sumDp=0; //ниже строки р

for( i = 0; i<n; i++){
    for( j = 0; j<n; j++){
        if (i==p){
            sum = sum + arr[i][j];
            document.write(" "+i + j );               
        }
        if (i>=p){
            sumUp = sumUp + arr[i][j];           
        }
        if (i<=p){
            sumDp = sumDp + arr[i][j];              
        }
    }
}

  document.write( " Сумма "+p+" строки = " + sum + "<br />");
document.write( " Сумма элементов выше "+p+" строки = " + sumUp + "<br />");
document.write( " Сумма элементов ниже "+p+" строки = " + sumDp + "<br />");

  //Сумма столбца k
var k = +prompt("Введите номер столбца для подсчета суммы", Math.round(n/2));
var sum=0;
var sumRk=0; //правее столбца k 
var sumLk=0; //левее столбца k

for( i = 0; i<n; i++){
    for( j = 0; j<n; j++){
        if (j==k){
            sum = sum + arr[i][j];
            document.write(" "+i + j );               
        }
        if (j>=k){
            sumLk = sumLk + arr[i][j];             
        }
        if (j<=k){
            sumRk = sumRk + arr[i][j];           
        }
    }
}

  document.write( " Сумма "+k+"  столбца = " + sum + "<br />");
  document.write( " Сумма элементов правее "+k+"  столбца = " + sumRk + "<br />");
  document.write( " Сумма элементов левее "+k+"  столбца = " + sumLk + "<br />");

// console.log(arr);