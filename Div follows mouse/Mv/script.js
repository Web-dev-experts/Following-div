let myDiv = document.getElementById("my-div");

const checkDevice = function () {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (error) {
    return false;
  }
};

const mouseMove = function (e) {
  const Xposition = !checkDevice() ? e.pageX : e.touches[0].pageX;
  const Yposition = !checkDevice() ? e.pageY : e.touches[0].pageY;
  myDiv.style.left = Xposition - 50 + "px";
  myDiv.style.top = Yposition - 50 + "px";
};
document.addEventListener("mousemove", mouseMove);
document.addEventListener("touchmove", mouseMove);
