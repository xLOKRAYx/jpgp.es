var active = 0;
var mode = 0;
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
        document.getElementById(lastActive).className = "nonActive";
        document.getElementById(active).className = "active";
    }
}
function toggleDarkMode()
{
    if(mode == 0)
    {
        document.querySelector("html").setAttribute("data-theme", "dark");
        document.getElementById("toggle").innerHTML = "LIGHT";
        mode = 1;
    }
    else if(mode == 1)
    {
        document.querySelector("html").setAttribute("data-theme", "light");
        document.getElementById("toggle").innerHTML = "DARK";
        mode = 0;
    }
}
toggleDarkMode();