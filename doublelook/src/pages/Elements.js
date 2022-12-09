var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

function reset(){
    var all = count = nx*ny;
    var halfAll = all/2;
    var tmp = [];
    for(var i = 0; i < halfAll; i++){
        var c = symbols.charAt(Math.floor(Math.random()*35));
        tmp.push(c);
        tmp.push(c);
    }

    for(var i = all-1;i>=0;i--){
        var r = Math.floor(Math.random()*i);
        var c = tmp.splice(r,1);
        var y = Math.floor(i/nx);
        varx = i-y*nx;
        fc(x+1,y+1).innerHTML = c;
    }
}