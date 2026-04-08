function summon_droplets(t) {
    for (var i = 0; i < t; i++){
        var x = Math.random() * 100
        var ti = Math.random() * 1 + 0.5
        var td = Math.random()*4.5-9
        document.getElementById("droplet").innerHTML = document.getElementById("droplet").innerHTML+`<div class="droplet" style="left: ${x}%; animation-duration: ${ti}s; animation-delay: ${td}s"></div>`
    }
}

summon_droplets(0)

function font_change() {
    document.getElementById("body").style["fontFamily"] = document.getElementById("font").value
}


fonts = ["system-ui","Sofia", "Trispace","Ubuntu","Saira", "Monospace", "Arial", "Wingdings", "Cursive", "Sora","Helvetica","Papyrus","Noto Sans","Roboto Condensed"]

function generate_fonts() {
    for (var i = 0; i < fonts.length;i++) {
        console.log(fonts[i])
        document.getElementById("font-buttons").innerHTML = document.getElementById("font-buttons").innerHTML+`<button style="font-family: ${fonts[i]}" class="font_button" onclick='document.getElementById("font").value = "${fonts[i]}"'>${fonts[i]}</button>`
    }
}

generate_fonts()