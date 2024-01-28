var active = 0;
document.getElementById("0").className = "active";
document.getElementById("1").className = "nonActive";
document.getElementById("2").className = "nonActive";
document.getElementById("3").className = "nonActive";
function changeActive(clicked)
{
    var lastActive = active;
    if(clicked != active)
    {
        active = clicked;
        console.log(lastActive);
        console.log(active);
        document.getElementById(lastActive).className = "nonActive";
        document.getElementById(active).className = "active";
    }
}