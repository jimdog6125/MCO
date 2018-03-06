var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var magic = 0;

function buyMagic(){
    var magicCost = Math.floor(25 * Math.pow(1.1,magic));     //works out the cost of this cursor
    if(cookies >= magicCost){                                   //checks that the player can afford the cursor
        magic = magic + 1;                                   //increases number of cursors
    	cookies = cookies - magicCost;                          //removes the cookies spent
        document.getElementById('magic').innerHTML = magic;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,magic));       //works out the cost of the next cursor
    document.getElementById('magicCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 1000);
window.setInterval(function(){
	
	cookieClick(magic);

}, 200);

