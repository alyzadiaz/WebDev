const apiurl = 'https://acnhapi.com/v1/fish/';

var fishList = [];
var selectedFishList = [];

for(var i = 1;i<=80;i++){
    var api = "https://acnhapi.com/v1/fish/".concat(i);
    insertFish(api);
}

window.onload = function() {
    document.getElementById("all-button").addEventListener("click", function(){
        document.getElementById("main").innerHTML="";
        for(var i=1;i<=80;i++){
            insertFish("https://acnhapi.com/v1/fish/".concat(i));
        }
    })

    var searchBtn = document.getElementById("search_button");
    var search = document.getElementById("search");

    searchBtn.addEventListener("click", function(){
        console.log(search.value);
    });
}

function insertFish(api){
    fetch(api)
        .then(res => res.json())
        .then(data => {
            fishList.push(data);

            var main = document.getElementById("main");
            var fish = document.createElement("div");
            fish.classList.add("fish");

            var img = document.createElement("img");
            var name = document.createElement("div");
            name.classList.add("name");
            name.classList.add("capitalize");
            name.innerHTML = data.name["name-USen"];

            img.src = data.image_uri;
            fish.appendChild(img);
            fish.appendChild(name);

            main.appendChild(fish);

            let hoverData = data.name["name-USen"];
            img.title = hoverData;

            img.onclick = function() {
                console.log("image is clicked");
                document.getElementById("name").innerHTML = "Name: "+ data.name["name-USen"];
                document.getElementById("availability").innerHTML = "Availability: "+ data.availability["month-northern"];
                console.log(data.availability);
                document.getElementById("shadow").innerHTML = "Shadow Size: "+ data.shadow;
                document.getElementById("price").innerHTML = "Price: "+ data.price;
            };
        });
}