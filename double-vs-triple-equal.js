// (==) does't check if its same type or anything whereas (===) will check everything even the type
// if checked with (==) below 1 s always true and 0 is always false but with (===) everything will be false

const first = 1;
const second = true;
if(first === second){
    console.log('Condition is true');
}
else{
    console.log('Condition is false');
}