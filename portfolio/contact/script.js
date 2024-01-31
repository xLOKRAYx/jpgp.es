var active = 1;
var mode = 1;
document.getElementById("0").className = "nonActive";
document.getElementById("1").className = "active";
document.getElementById("2").className = "nonActive";

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
    if(mode == 1)
    {
        document.querySelector("html").setAttribute("data-theme", "dark");
        document.getElementById("toggle").innerHTML = "LIGHT";
        mode = 0;
    }
    else if(mode == 0)
    {
        document.querySelector("html").setAttribute("data-theme", "light");
        document.getElementById("toggle").innerHTML = "DARK";
        mode = 1;
    }
}

toggleDarkMode();