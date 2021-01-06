var wumpus = [
    [2,1],
    [3,1],
    [3,3]
];

var pit = [
    [1,2],
    [2,2]
];

var world = {
    height: 3,
    width: 3
}

function worldGen(h, w) {
    world.height = h - 1;
    world.width = w - 1;
}

function check(a, obj) {
    if(a[0] > world.height || a[1] > world.width || a[0] < 0 || a[1] < 0) return;
    else obj.push(a);
}

var stench = [];
function stenchGen() {
    for(var i in wumpus) {
        var x = wumpus[i];
        check([x[0] - 1, x[1]], stench);
        check([x[0] + 1, x[1]], stench);
        check([x[0], x[1] + 1], stench);
        check([x[0], x[1] - 1], stench);
    }
}
stenchGen();

var breeze = [];
function breezeGen() {
    for(var i in pit) {
        var x = pit[i];
        check([x[0] - 1, x[1]], breeze);
        check([x[0] + 1, x[1]], breeze);
        check([x[0], x[1] + 1], breeze);
        check([x[0], x[1] - 1], breeze);
    }
}
breezeGen();

function moveCheck(e) {
    if(e.code == 'ArrowUp') {
        if(agentPosi.col >= world.height) {
            alert("Invalid move, WATCH IT");
            return;
        }
        for(i in wumpus) {                              ////////////////////////////////////////////
            if(agentPosi.col == wumpus[i][0] && agentPosi.row == wumpus[i][1]) {
                alert("DEAD");
                console.log(agentPosi);
                return;
            }
        }
        if(agentPosi in pit) {
            alert("DEAD");
            return;
        }
        console.log(++agentPosi.col);
    }
    if(e.code == 'ArrowDown') {
        if(agentPosi.col <= 0) {
            alert("Invalid move, WATCH IT");
            return;
        }
        if(agentPosi in wumpus) {
            alert("DEAD");
            return;
        }
        if(agentPosi in pit) {
            alert("DEAD");
            return;
        }
        console.log(--agentPosi.col);
    }
    if(e.code == 'ArrowLeft') {
        if(agentPosi.row <= 0) {
            alert("Invalid move, WATCH IT");
            return;
        }
        if(agentPosi in wumpus) {
            alert("DEAD");
            return;
        }
        if(agentPosi in pit) {
            alert("DEAD");
            return;
        }
        console.log(--agentPosi.row);
    }
    if(e.code == 'ArrowRight') {
        if(agentPosi.row >= world.width) {
            alert("Invalid move, WATCH IT");
            return;
        }
        if(agentPosi in wumpus) {
            alert("DEAD");
            return;
        }
        if(agentPosi in pit) {
            alert("DEAD");
            return;
        }
        console.log(++agentPosi.row);
    }
}

/*function placingStuffInCells() { // IGNORE THIS I WAS JUST CHECKING STUFF...
    for(i in pit) {
        var cell = "cell" + pit[i][0] + pit[i][1];
        console.log("pit in - " + cell);
    }
    for(i in wumpus) {
        var cell = "cell" + wumpus[i][0] + wumpus[i][1];
        console.log("wumpus in - " + cell);
    }
    for(i in stench) {
        var cell = "cell" + stench[i][0] + stench[i][1];
        console.log("stench in - " + cell);
    }
    for(i in breeze) {
        var cell = "cell" + breeze[i][0] + breeze[i][1];
        console.log("breeze in - " + cell);
    }
}
placingStuffInCells();*/

//////////// .........MONITORING AND REACTING TO MOVEMENT OF THE AGENT IN THE WOLRD....... //////////
var agentPosi = {
    row: 0,
    col: 0
};

document.onkeydown = agentMove;
function agentMove(event) {
    var celll = "cell" + agentPosi.row + agentPosi.col;
    var cell = document.getElementById(celll);
    cell.style.backgroundImage = "none";

    console.log(event.code);
    moveCheck(event);
    posiMonitor();
}

function posiMonitor() {
    // I'll have to think about this a bit, plus im sure you'd wanna do some backend too so feel free to contribute SUSH CHAN...
    //HELLP W THISSSSSSSSSS ........  
    
    
    //I did itttttttttttt YAYYYYYYYYY!!!!   ......

    var celll = "cell" + agentPosi.row + agentPosi.col;
    var cell = document.getElementById(celll);
    //console.log(cell.type);
    cell.style.backgroundColor = "#98F992";
    cell.style.backgroundSize = "100px 100px"
    cell.style.backgroundImage = "url('../jotaro.png')";
}

