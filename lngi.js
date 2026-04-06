if (null == localStorage.getItem("bms-font")) { document.getElementById("font").value = "system-ui" }
else { document.getElementById("font").value = localStorage.getItem("bms-font") }
to = new Date().getTimezoneOffset()

function gen_init_bms(x) {
    var s = ""
    var e = ""
    for (i = 0; i < x; i++){
        s = s + "0,"
        e = e +"1,"
    }
    return "("+s+"0)("+e+"1)[60]"
}



function gen_init_bms(x) {
    var s = ""
    var e = ""
    for (i = 0; i < x; i++) {
        s = s + "0,"
        e = e + "1,"
    }
    return `(${s}0)(${e}1)[99]`
}
function lngi(x = get_lngi_from_time(Date.now())) {
    var s = gen_init_bms(Math.floor(x))
    var j = x % 1
    var l = 0
    var k = [1]
    var m = 0
    while (l < 80) {
        if (j < 0.5) {
            j = j * 2
            k.push(0)
            m++
        } else {
            j = (j - 0.5) * 2
            k[k.length - 1]++
            if (j == 0) {
                l = 30
            }
        }
        l++
    }
    
    var p = 0
    for (i = 0; i <= m; i++) {
        t = Bms.parse(s).s.length
        s = Bms.str2expand(s, k[i])
        u = Bms.parse(s).s.length
            if (t - 1 >= u) {
                break
            }
                p = p + k[i] + 1
    }
    if (i == m + 1) {
        var v = Bms.parse(s)
        var q = v.s
        q.pop()
        v.s = q
        s = v.toString()
    }
    return [s.slice(0, -4), Math.min(p, 53)]
}

dt = 1767900000000
//dt = dt-8640000000
dt = Date['UTC'](2026, 3, 2) - 86400 * 1000 * 100 + to * 1000 * 60
//dt = dt-2000000000
function get_lngi_from_time(t) {
    var t = t - dt
    t = Math.log10(t / 86400000 + 1) / Math.log10(10) + 1
    return t
}

function reverse_enginnering(x) {
    return ((10 ** (x - 1)) - 1) * 86400000 + dt
}

function get_percent() {
    var e = Math.min(100, (((get_lngi_from_time(Date.now()) % (2 ** (-w[1] + 1))) * 2 ** (w[1] - 1)) * 100))
    if (Math.abs(e+1/e) > 100) {
        e = 100
    }
    return e
}

function case_closed() {
    if (get_percent()==100){return 0}
    var s = Math.ceil(get_lngi_from_time(Date.now())*(2**w[1]/2))/(2**w[1]/2)
    return ((reverse_enginnering(s)-Date.now())/1000).toFixed(3)
}

function update() {
  try {
  // Code that might throw an error
      nea = lngi() //HOW TF DID A GLOBAL VARIABLE MAKE THIS 3-4X FASTER
      window.alert(JSON.stringify(nea))
    //calculate(nea[0])
    document.getElementById("1").innerHTML = nea[0]
    document.getElementById("3").innerHTML = get_percent().toFixed(3) + "%..."+case_closed()+"s"
    document.getElementById("4").style.width = get_percent() * 0.4 + "%"
    mile_load()
    fps = 1000/(Date.now()-last_update)
    last_update = Date.now()
    font_change()
    saveSettings()
} catch (err) {
    window.alert("An error occurred!\n" + err + "\n" + err.stack);
}
}

fps = 0
last_update = Date.now()
setInterval(update, 1000/30)

function format_time(t) {
    if (t<0){return format_time(-t) + " ago"}
    if (t < 60) { return t.toFixed(2) + "s" }
    if (t < 3600) { return Math.floor(t / 60) + "min " + format_time(t % 60) }
    if (t < 86400) { return Math.floor(t / 3600) + "h " + format_time(t % 3600) }
    if (t < 86400 * 365) { return Math.floor(t / 86400) + "d " + format_time(t % 86400) }
    else { return Math.floor(t / 86400 / 365) + "y " + format_time(t % (86400 * 365)) }

}

function saveSettings() {
    localStorage.setItem("bms-font",document.getElementById("font").value)
}

function getThen(t) {
    var t = new Date(t + Date.now())
    return t.toDateString()+" "+t.toLocaleTimeString()
}
