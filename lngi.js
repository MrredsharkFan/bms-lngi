

if (null == localStorage.getItem("bms-font")) { document.getElementById("font").value = "system-ui" }
else { document.getElementById("font").value = localStorage.getItem("bms-font") }
const to = 8*-60


function cmp_bms(x,y) {
    //this shit about to work af
    return x>=y
}



function gen_init_bms(x) {
    var s = ""
    var e = ""
    for (var i = 0; i < x; i++){
        s = s + "0,"
        e = e +"1,"
    }
    return "("+s+"0)("+e+"1)[60]"
}



function gen_init_bms(x) {
    var s = ""
    var e = ""
    for (var i = 0; i < x; i++) {
        s = s + "0,"
        e = e + "1,"
    }
    return `(${s}0)(${e}1)[99]`
}
function lngi(prec=80,x = get_lngi_from_time(Date.now())) {
    var s = gen_init_bms(Math.floor(x))
    var j = x % 1
    var l = 0
    var k = [1]
    var m = 0
    while (l < prec) {
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
    for (var i = 0; i <= m; i++) {
        var t = Bms.parse(s).s.length
        var s = Bms.str2expand(s, k[i])
        var u = Bms.parse(s).s.length
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
        var s = v.toString()
    }
    return [s.slice(0, -4), Math.min(p, 53)]
}

dt = 1767900000000
//dt = dt-8640000000
dt = Date['UTC'](2026, 3, 2) - 86400 * 1000 * 100 + to * 1000 * 60
//dt = dt -421000000
function get_lngi_from_time(t) {
    var t = t - dt
    t = Math.log10(t / 86400000 + 1) / Math.log10(10) + 1
    return t
}

function reverse_enginnering(x) { return ((10 ** (x - 1)) - 1) * 86400000 + dt }

function get_percent(x) { return Math.min(100, (((get_lngi_from_time(Date.now()) % (2 ** (-x + 1))) * 2 ** (x - 1)) * 100)) }

function case_closed(x) {
    if (get_percent()==100){return 0}
    var ss = Math.ceil(get_lngi_from_time(Date.now())*(2**x/2))/(2**x/2)
    return ((reverse_enginnering(ss)-Date.now())/1000).toFixed(3)
}


function update() {
    var w = lngi(55) //HOW TF DID A GLOBAL VARIABLE MAKE THIS 3-4X FASTER
    document.getElementById("fps").innerHTML = fps.toFixed(3)
    document.getElementById("1").innerHTML = w[0]
    document.getElementById("3").innerHTML = get_percent(w[1]).toFixed(3) + "%..."+case_closed(w[1])+"s"
    document.getElementById("4").style.width = get_percent(w[1]) * 0.4 + "%"
    if (w[0] >= "(0,0,0)(1,1,1)(2,2,0)") {
        document.getElementById("main_text").style.height = "65%"
        document.getElementById("anal").style.top = "999%"
    }
    else {
        try { smallUpdate(32) }
        catch (err) {
            for (var t = 31; t != 0; t--){
                try {
                    smallUpdate(t); console.log(t); break
                }
                catch (err){console.log(err)} //wtf?
            }
        }
    }
    mile_load()
    fps = 1000/(Date.now()-last_update)
    last_update = Date.now()
    font_change()
    saveSettings()
}

function smallUpdate(ss) {
    document.getElementById("11").innerHTML = ">"+cal(lngi(ss)[0])
}


fps = 0
last_update = Date.now()
setInterval(update, 10, 1)

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