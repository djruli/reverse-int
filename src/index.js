module.exports = function reverse (n) {
    let num  = Math.abs(n);
    let array = [];
    while(num>0){
    array.push(num%10);
    /*console.log(array);*/
    num=num/10|0;
    /*console.log(num);*/
    }
    /*console.log(array);*/
  /*let result = '';
  const convers = new String(n);
  for (let i = convers.length; i>-1; i--){
    result = result + (convers[i]);
  }
  const strArrr = result.toString();
  const parsed = parseInt(strArrr, 10);
  return parsed;*/


    let result = array.toString().replace(/[,]/g, '');
    let parsed = parseInt(result, 10);
    return parsed;


}
