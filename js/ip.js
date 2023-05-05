function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "0000000";
  }
}

function showPosition(position) {
  console.log(
    " -->",
    position.coords.latitude + "/" + position.coords.longitude
  );
}
