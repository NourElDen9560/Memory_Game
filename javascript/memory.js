window.onload = function () {
    blocks.classList.add('stop_clicking');
    setTimeout(() => {
        blocks.classList.remove('stop_clicking');
    }, 1000);
}
function strat() {
    let name = prompt("enter your name "), s_name = document.getElementById('name');
    s_name.style.color = 'red';
    if (name == '' || name == null) s_name.textContent = "UnKnown";
    else s_name.textContent = name;
    document.querySelector(".control").remove();
}
function end() {
    let allblocksflipped = containerblocks.filter(alreadyflippeds => alreadyflippeds.classList.contains('has_match'));
    if (allblocksflipped.length === containerblocks.length) {
        console.log("allflipped");
        endofgame.style.display = 'block';
    }
}
function random(Array) {
    let current = Array.length, temp, random;

    while (current > 0) {
        random = Math.floor(Math.random() * current);

        current--;
        temp = Array[current];
        Array[current] = Array[random];
        Array[random] = temp;
    }
}
function stop_clicking() {
    blocks.classList.add('stop_clicking');
    setTimeout(() => {
        blocks.classList.remove('stop_clicking');
    }, 1000);
}
function is_clicked(selectedblock) {
    selectedblock.classList.add('is_fliped');
    let allflipped = containerblocks.filter(alreadyflipped => alreadyflipped.classList.contains('is_fliped'));
    if (allflipped.length === 2) {
        stop_clicking();
        console.log('two');
        has_match(allflipped[0], allflipped[1]);
        end();
    }

}
function has_match(firstblock, secondblock) {
    let wrong = document.querySelector(".info span");
    if (firstblock.dataset.tec === secondblock.dataset.tec) {
        firstblock.classList.remove('is_fliped');
        secondblock.classList.remove('is_fliped');
        console.log("isflipped removed");
        firstblock.classList.add('has_match');
        secondblock.classList.add('has_match');
    }
    else {
        console.log("function else done ");
        wrong.innerHTML = parseInt(wrong.innerHTML) + 1;
        setTimeout(function () {
            firstblock.classList.remove('is_fliped');
            secondblock.classList.remove('is_fliped');
        }, 1000);
    }
}
function play_again() {
    containerblocks.forEach(function (el) {
        el.classList.remove('has_match');
    });
    endofgame.style.display = 'none';

}
function close_win() {
    window.close();
}
document.querySelector(".end .play").onclick = play_again;
document.querySelector(".end .exit").onclick = close_win;

/*  ********************************************************************* */
document.querySelector(".control button").onclick = strat;
//let play1 = document.getElementById('play') , 
//exit1 = document.getElementById('exit') ; 
let blocks = document.querySelector('.game_row'),
    containerblocks = Array.from(blocks.children),
    orderRange = Array.from(Array(containerblocks.length).keys()),
    endofgame = document.getElementById('end');

random(orderRange);
containerblocks.forEach((block, index) => {
    block.style.order = orderRange[index];
    block.addEventListener('click', function () {
        is_clicked(block);

    });
});
