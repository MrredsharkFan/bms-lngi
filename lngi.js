function gen_init_bms(x) {
    s = ""
    e = ""
    for (i = 0; i < x; i++){
        s = s + "0,"
        e = e +"1,"
    }
    return "("+s+"0)("+e+"1)[60]"
}



function lngi(x = get_lngi_from_time(Date.now())) {
    s = gen_init_bms(Math.floor(x))
    j = x % 1
    k = [1]
    l = 0
    m = 0
    while (l < 50) {
        if (j < 0.5){
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
    p = 0
    for (i = 0; i <= m; i++) {
        t = Bms.parse(s).s.length
        s = Bms.str2expand(s, k[i])
        u = Bms.parse(s).s.length
        if (t - 1 >= u) {
            break
        }
        p = p+k[i]+1
    }
    return [s.slice(0,-4),Math.min(p,50)]
}

dt = 1767801600000
//dt = dt-86400000000
function get_lngi_from_time(t) {
    t = t - dt
    t = Math.log10(t / 86400000+1) + 1
    return t
}

function reverse_enginnering(x) {
    return ((10 ** (x - 1)) - 1) * 86400000 + dt
}

function get_percent() {
    e = Math.min(100, (((get_lngi_from_time(Date.now()) % (2 ** (-lngi()[1] + 1))) * 2 ** (lngi()[1] - 1)) * 100))
    if (Math.abs(e+1/e) > 100) {
        e = 100
    }
    return e
}

function case_closed() {
    if (get_percent()==100){return 0}
    s = Math.ceil(get_lngi_from_time(Date.now())*(2**lngi()[1]/2))/(2**lngi()[1]/2)
    return ((reverse_enginnering(s)-Date.now())/1000).toFixed(3)
}

function update() {
    document.getElementById("1").innerHTML = lngi()[0]
    document.getElementById("3").innerHTML = get_percent().toFixed(3) + "%..."+case_closed()+"s"
    document.getElementById("4").style.width = get_percent() + "%"
    document.getElementById("8").innerHTML = lngi(eval(document.getElementById("bruh").value))[0]
}

setInterval(update, 10, 1)

function format_time(t) {
    if (t < 60) { return t.toFixed(3) + "s" }
    if (t<3600) {return Math.floor(t/60)+"min "+format_time(t%60)}
    if (t < 86400) { return Math.floor(t / 3600) + "h " + format_time(t % 360) }
    if (t < 86400 * 365) { return Math.floor(t / 86400) + "d " + format_time(t % 86400) }
    else {return (t/86400/365).toFixed(4)+" years"}

}