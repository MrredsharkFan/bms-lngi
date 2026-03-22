function mile_color(c) {
    var r = ["#fff", "#f99", "#9f9", "#99f", "#ff9", "#f9f", "#9ff", "#999", "#fc0", "#cc0", "#cf0", "#cfc", "#0fc", "#0cf", "#c5f"]
    //return r[(c%1).toString(2).length-1]
    return "#"+Math.max(16-(c%1).toString(2).length,0).toString(16).repeat(3)
}

function text_color(c) {
    return (c%1).toString(2).length>8?"#fff":"#000"
}


milestones = []

cM(2.875, "p(W_4)<br>**Remember, less bright = less relevant")
cM(2.875 + 1 / 4096, "p(W_4+W_2)")
cM(2.875 + 1 / 2048, "p(W_4+W_3)")
cM(2.875 + 1 / 1024, "p(W_4*2)")
cM(2.875 + 1 / 512, "p(W_4*w)")
cM(2.875 + 1 / 256, "p(W_4*W)")
cM(2.875 + 1 / 128, "p(W_4*W_2)")
cM(2.875 + 1 / 64, "p(W_4*W_3)")
cM(2.875 + 1 / 64+1/128, "p(W_4*p3(W_4))")
cM(2.875 +1/32, "p(W_4^2)")
cM(2.875 + 1 / 16, "p(W_5)")
cM(2.875 + 1 / 16 + 1 / 64, "p(W_5^2)")
cM(2.875 + 1 / 16 + 1 / 64+1/128, "p(W_5^W_5)")
cM(2.875 + 1 / 16 + 1 / 32, "p(W_6)")
cM(2.875 + 1 / 16 + 1 / 32+1/64, "p(W_7)")
cM(3, "p(W_w) [BO]")
cM(3 + 1 / 256, "p(W_w+W)")
cM(3 + 1 / 256+1/512, "p(W_w+p1(W_w))")
cM(3 + 1 / 128, "p(W_w*2)")
cM(3 + 1 / 64, "p(W_w*w)")
cM(3 + 1 / 32, "p(W_w*W)")
cM(3 + 1 / 32 + 1 / 8192 + 1 / 16384, "p(W_w*W+p1(W_w))")
cM(3 + 1 / 32 + 1 / 8192 + 1 / 16384 + 1 / 32768, "p(W_w*W_2)")
cM(3 + 1 / 32 + 1 / 8192 + 1 / 16384 + 1 / 32768 + 1 / 65536, "p(W_w*W_2+W_2)")
cM(3 + 1 / 32 + 1 / 8192 + 1 / 16384 + 1 / 32768 + 1 / 65536+1/131072, "p(W_w*W_2+p2(W_w))")
cM(3 + 1 / 32 + 1 / 4096, "p(W_w^2)")
cM(3 + 1 / 32 + 1 / 2048, "p(W_w^2*w)")
cM(3 + 1 / 32 + 1 / 1024, "p(W_w^2*W)")
cM(3 + 1 / 32 + 1 / 512, "p(W_w^w)")
cM(3 + 1 / 32 + 1 / 256, "p(W_w^W)")
cM(3 + 1 / 32 + 1 / 128, "p(W_{w+1}) / TFBO")
cM(3 + 1 / 32 + 1 / 64, "p(W_{w2}")
cM(3 + 1 / 16, "p(W_{w^2})")
cM(3 + 1 / 16 + 1 / 512, "p(W_{w^2}*W)")
cM(3 + 1 / 16 + 1 / 512 + 1 / 2048, "p(W_{w^2+1})")
cM(3 + 1 / 16 + 1 / 512 + 1 / 1024, "p(W_{w^2+w})")
cM(3 + 1 / 16 + 1 / 256, "p(W_{w^3})")
cM(3 + 1 / 16 + 1 / 128, "p(W_{w^w})")
cM(3 + 1 / 16 + 1 / 64, "p(W_W)")
cM(3 + 1 / 16 + 1 / 64 + 1 / 65536, "p(W_W_w)")
cM(3 + 1 / 16 + 1 / 64 + 1 / 32768, "p(I)")
cM(3 + 1 / 16 + 1 / 64 + 1 / 16384, "p(I+pI(I)*W)")
cM(3 + 1 / 16 + 1 / 64 + 1 / 8192, "p(I*w)")
cM(3 + 1 / 16 + 1 / 64 + 1 / 4096, "p(I^w)")
cM(3 + 1 / 16 + 1 / 64 + 1 / 2048, "p(I^W)")
cM(3 + 1 / 16 + 1 / 64 + 1 / 256, "p(W_{I+1}) / JO")
cM(3 + 1 / 16 + 1 / 64 + 1 / 128, "p(W_{I+w})")
cM(3 + 1 / 16 + 1 / 64 + 1 / 128 + 1 / 256, "p(W_{I+w^2})")
cM(3 + 1 / 16 + 1 / 64 + 1 / 128 + 1 / 256 + 1 / 512, "p(W_W_{I+1})")
cM(3 + 1 / 16 + 1 / 64 + 1 / 128 + 1 / 256 + 1 / 512 + 1 / 2048, "p(W_{I_2+1})")
cM(3 + 1 / 16 + 1 / 64 + 1 / 128 + 1 / 256 + 1 / 512 + 1/1024, "p(W_{I_2+w})")
cM(3 + 1 / 16 + 1 / 32, "p(I_w)")
cM(3 + 1 / 16 + 1 / 32 + 1 / 8192, "p(I_w*W)")
cM(3 + 1 / 16 + 1 / 32 + 1 / 8192 + 1 /32768, "p(W_{I_w+1})")
cM(3 + 1 / 16 + 1 / 32 + 1 / 8192 + 1 / 16384, "p(W_{I_w+w})")
cM(3 + 1 / 16 + 1 / 32 + 1 / 8192 + 1 / 16384 + 1 / 32768, "p(W_{I_w+w^2})")
cM(3 + 1 / 16 + 1 / 32 + 1 / 8192 + 1 / 16384 + 1 / 32768 + 1/65536, "p(I_{w2})")
cM(3 + 1 / 16 + 1 / 32 + 1 / 4096, "p(I_{w^2})")
cM(3 + 1 / 16 + 1 / 32 + 1 / 2048, "p(I(w,0))")
cM(3 + 1 / 16 + 1 / 32 + 1 / 1024, "p(I(W,0))")
cM(3 + 1 / 16 + 1 / 32+1/512, "p(M_w)")
cM(3 + 1 / 16 + 1 / 32+1/256, "p((2-)^w) / p(p(T^T^w))")
cM(3 + 1 / 16 + 1 / 32+1/128, "p((2-)^W) / p(p(T^T^W))")
cM(3 + 1 / 16 + 1 / 32+1/64, "p(K_w)")
cM(3 + 1 / 8, "p(psd.&Pi;w-ref.) / p(p(W_{T+1}))")
cM(3 + 1 / 4, "p(>l>a.W_{>a+2}-stb.) / p(p(T_w))")
cM(3 + 1 / 4 + 1 / 1024, "p(>l>a.W_{>a+3}-stb.) / p(p(p(X_w)))")
cM(3 + 1 / 4 + 1 / 512, "p(>l>a.W_{>a+w}-stb.) / lim(SAN) / SDO")
cM(3+1/2,"p(>a_w)")
cM(4, "p(w-P)")
cM(5, "p(S)")
cM(6, "p(way too large)")
cM(7, "p(way too large)")
cM(8, "p(way too large)")

function cM(pos, other_notations) {
    milestones.push([pos, lngi(pos)[0], other_notations.replaceAll("p","&psi;").replaceAll("W", "&Omega;").replaceAll("w", "&omega;").replaceAll(">a", "&alpha;").replaceAll(">l", "&lambda;")])
}

function mile_init() {
    for (i = 0; i < milestones.length; i++) {
        document.getElementById("6").innerHTML = document.getElementById("6").innerHTML + `<div style="background-color: ${mile_color(milestones[i][0])}; color: ${text_color(milestones[i][0])}">#${i} <br> ${milestones[i][2]}<br><span style="font-size: small">${milestones[i][1]}<br><span id="m${i}"></span></span></div><br>`
    }
}

function mile_load() {
    for (i = 0; i < milestones.length; i++) {
        document.getElementById(`m${i}`).innerHTML = `${format_time((reverse_enginnering(milestones[i][0])-Date.now())/1000)}`
    }
}

mile_init()