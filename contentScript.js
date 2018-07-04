
console.log('Bunmi Interrup App');
// var hasEntertainment = document.body.innerHTML.toLocaleLowerCase().contains('entertainment');

// includes doesnt work on explorer;
var hasEntertainment = document.body.innerHTML.includes('Entertainment');

if (hasEntertainment){
    console.log("Stop Bunmi");
}else{
    console.log("continue Bunmi");
}