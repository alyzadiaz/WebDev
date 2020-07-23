var bugsList = [];
var fishList = [];
var seaList = [];

var date = new Date();
var month = date.getMonth() + 1;
var hour = date.getHours();

window.onload = function() {
    
    for(var i = 1; i <= 80; i++) {
        var api = "https://acnhapi.com/v1/bugs/".concat(i);  
        fetch(api)
            .then(res => res.json())
            .then(data => {
                bugsList.push(data);
                console.log("checking " + month + " and " + data.availability["month-array-northern"]);
                
                if(data.availability["month-array-northern"].includes(month) && data.availability["time-array"].includes(hour)){
                    console.log("yes " + data.name["name-USen"] + " is available now");

                    var main = document.getElementById('dailyBugs');
                    var bug = document.createElement('div');
                    bug.classList.add("bug");
                    var img = document.createElement("img");
                    var name = document.createElement('div');
                    name.classList.add("name");
    
                    name.innerHTML = data.name["name-USen"];
                    img.src = data.icon_uri;

                    bug.appendChild(img);
                    bug.appendChild(name);
    
                    main.appendChild(bug);
                }
    
            });
    }

    for(var i = 1; i <= 80; i++) {
        var api = "https://acnhapi.com/v1/fish/".concat(i);  
        fetch(api)
            .then(res => res.json())
            .then(data => {
                fishList.push(data);
                console.log("checking " + month + " and " + data.availability["month-array-northern"]);
                
                if(data.availability["month-array-northern"].includes(month) && data.availability["time-array"].includes(hour)){
                    console.log("yes " + data.name["name-USen"] + " is available now");
                   //create the necessary HTML objects for each bug
                    var main = document.getElementById('dailyFish');
                    var fish = document.createElement('div');
                    fish.classList.add("fish");
                    var img = document.createElement("img");
                    var name = document.createElement('div');
                    name.classList.add("name");
    
                    name.innerHTML = data.name["name-USen"];
                    img.src = data.icon_uri;
    
                    fish.appendChild(img);
                    fish.appendChild(name);

                    main.appendChild(fish);
                }
    
            });
    }

    for(var i = 1; i <= 40; i++) {
        var api = "https://acnhapi.com/v1/sea/".concat(i);  
        fetch(api)
            .then(res => res.json())
            .then(data => {
                seaList.push(data);
                console.log("checking " + month + " and " + data.availability["month-array-northern"]);

                if(data.availability["month-array-northern"].includes(month) && data.availability["time-array"].includes(hour)){
                    console.log("yes " + data.name["name-USen"] + " is available now");
                   //create the necessary HTML objects for each bug
                    var main = document.getElementById('dailySea');
                    var sea = document.createElement('div');
                    sea.classList.add("sea");
                    var img = document.createElement("img");
                    var name = document.createElement('div');
                    name.classList.add("name");
    
                    name.innerHTML = data.name["name-USen"];
                    img.src = data.icon_uri;
    
                    sea.appendChild(img);
                    sea.appendChild(name);
                    
                    main.appendChild(sea);
                }
    
            });
    }

}