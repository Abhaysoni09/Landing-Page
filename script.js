
var time = gsap.timeline({
    repeat:-1
})

time
.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    stagger:2
},'abhay')
.to(".name h1",{
    ease:Expo.easeInOut,
    stagger:2,
    top:0
},'abhay')
.to(".name h1",{
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:-100
},'abhay')
