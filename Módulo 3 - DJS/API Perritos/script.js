function getxml(){
    let xml = new XMLHttpRequest();
    xml.open('GET', "https://dog.ceo/api/breeds/image/random", true);
    xml.onreadystatechange = function(){
        if (xml.readyState == 4 && xml.status == 200) {
            console.log(xml.responseText);
        }
    };
    xml.send();
}

function getIdXML(){
    let xml = new XMLHttpRequest();
    xml.open('GET', "https://dog.ceo/api/breeds/image/random", true);
    xml.onreadystatechange = function(){
        if (xml.readyState == 4 && xml.status == 200) {
            const data = JSON.parse(xml.responseText);
            const dogImage = document.getElementById("dogImage");
            
            dogImage.src = data.message;
        }
    };
    xml.send();
}

function getJSON(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


function getId() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        const dogImage = document.getElementById("dogImage");
        
        dogImage.src = data.message;
    })
    .catch(error => console.error('Error:', error));
}

