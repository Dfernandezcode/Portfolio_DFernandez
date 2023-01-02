const left = document.getElementById("left-side");

const handleOnMove = e => {
    left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleOnMove(e);

document.omtouchmove = e => handleOnMove(e.touches[0]);