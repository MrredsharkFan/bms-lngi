function summon_droplets() {
    var t = 300
    for (var i = 0; i < t; i++){
        var x = Math.random() * 100
        var ti = Math.random() * 1 + 0.5
        var td = Math.random()*4.5-9
        document.getElementById("droplet").innerHTML = document.getElementById("droplet").innerHTML+`<div class="droplet" style="left: ${x}%; animation-duration: ${ti}s; animation-delay: ${td}s"></div>`
    }
}

summon_droplets()