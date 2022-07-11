//contains demos of drawing shapes
//shape 1
/*
*
*
**
***
****
*****
*/
function draw_shape_1_method1(n){
    var str = '';
    for (var i=0; i<n; i++){
        str += '*';
        console.log(str);
    }
}
function draw_shape_1_method2(n){
    for (var str='*'; str.length <= n; str += '*') console.log(str);
}
draw_shape_1_method1(5);

//shape 2: export a matrix NxN with numbers layout as below
/*
*1
*1  2
*1  2   3
*1  2   3   4
*1  2   3   4   5
*/
function draw_shape_2_method1(n){
    for (var i=1; i<=n; i++){
        var str = '';
        for(var j=1; j<=i; j++)
            str += j + '\t';
        console.log(str);
    }

}
draw_shape_2_method1(5);

//shape 3: export a matrix NxN with numbers layout as below
/*
*               1
*           1   2
*       1   2   3
*   1   2   3   4
*1  2   3   4   5
*/
function draw_shape_3_method1(n){
    for (var i=1; i<=n; i++){
        var str = '';
        for (var j=1; j<=n-i;j++)
            str += '\t';
        for (var k=1; k<=i; k++)
            str += k + '\t';
        console.log(str);
    }
}
draw_shape_3_method1(5);