milestones = []

cM(1, "w")
cM(1.25,"w^2")
cM(1.5, "w^w")
cM(1.625, "w^w^2")
cM(1.75, "w^w^w")
cM(1 + 7 / 8, "w^w^w^w")
cM(1 + 15 / 16, "w^w^w^w^w")
cM(1 + 31 / 32, "w^w^w^w^w^w")
cM(2, "e0 / p(W) [SCO]")
cM(2+1/32, "e0*w / p(W+1)")
cM(2.0625, "e1 / p(W2)")
cM(2.125, "ew / p(W*w)")
cM(2+3/16, "ee0 / p(W*p(W))")
cM(2.25, "z0 / p(W^2) [CO]")
cM(2.25 + 1 / 128, "e(z0+1) / p(W^2+W)")
cM(2.25 + 1.5 / 128, "z1 / p(W^2*2)")
cM(2 + 9 / 32, "n0 / p(W^3) [LCO]")
cM(2 + 19 / 64, "phi(4,0) / p(W^4) [LCO]")
cM(2 + 5/16, "phi(w,0) / p(W^w) [HCO]")
cM(2 + 3 / 8, "phi(1,0,0) / p(W^W) [FSO]")
cM(2 + 3 / 8 + 1.75 / 1024, "phi(1,0,1) / p(W^W*2)")
cM(2 + 3 / 8 + 1 / 256, "phi(1,1,0) / p(W^(W+1))")
cM(2 + 25 / 64, "phi(1,0,0,0) / p(W^W^2) [ACO]")
cM(2 + 13 / 32, "phi(1@w) / p(W^W^w) [SVO]")
cM(2 + 27 / 64, "phi(1@e0) / p(W^W^p(W))")
cM(2 + 7 / 16, "phi(1@(1,0)) / p(W^W^W) [LVO]")
cM(2.5, "p(W_2) [BHO]")
cM(2.5 + 1 / 64, "p(W_2*2)")
cM(2.5+1/32, "p(W_2*w)")
cM(2.5625, "p(W_2*W)")
cM(2.625 , "p(W_2^2)")
cM(2.75, "p(W_3)")
cM(3, "p(W_w) [BO]")

function cM(pos, other_notations) {
    milestones.push([pos,lngi(pos)[0],other_notations])
}

function mile_load() {
    document.getElementById("6").innerHTML = ""
    for (i = 0; i < milestones.length;i++) {
        document.getElementById("6").innerHTML = document.getElementById("6").innerHTML + "<div>"+milestones[i][2]+"<br><t class=\"st\">"+milestones[i][1]+"<br>"+format_time((reverse_enginnering(milestones[i][0])-Date.now())/1000)+"</t></div>"
    }
}

setInterval(mile_load,10,1)