const InsertionSort = (array)=> {
for (let i= 1 ; i < array.length ; i ++ ){
    let first = array[i];
    let j = i - 1 ;
    while ( j >=0 && array[j]>first){
        array[j+1] = array[j] ;
        j-- ; 
    }
    array[j+1]=first ;
}

return array ;
}
console.log(InsertionSort([2 , 6 , 8 , 5 , 4 , 1 , 0 , 89 ,51 , 9 ]))