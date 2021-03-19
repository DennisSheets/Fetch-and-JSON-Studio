window.addEventListener("load", ()=> {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(json){
            //console.log(json);
        const container = document.getElementById("container");

        container.innerHTML=`<p>Total Astronauts: ${json.length}</p>`
         
        for (let i=0; i<json.length; i++) {
            let color = "red";
            if (json[i].active) {color = "green"
            }
            container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li style="color:${color}">Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills}</li>
                </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>
                `;
        }
        
        });
    });
});