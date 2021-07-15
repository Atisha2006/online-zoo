const zoomIn = document.querySelector('.map__map-plus');
const zoomOut = document.querySelector('.map__map-minus');


zoomIn.addEventListener('click', function(e) {
  zoomin();
});
zoomOut.addEventListener('click', function(e) {
  zoomout();
});

const mapImg = document.querySelector(".map__img-wrap");
const mapWrap = document.querySelector('.map');
const mapLocations = document.querySelectorAll('.map__location');
const defOffsetTop = mapImg.offsetTop;
const zoom = 1.153;

let minWidth, defOffsetLeft, currWidth, currHeight;

function updateOptions() {
  minWidth = parseInt(getComputedStyle(mapImg).minWidth);
  minHeight = parseInt(getComputedStyle(mapWrap).maxHeight);
  defOffsetLeft = (mapWrap.clientWidth - minWidth) / 2;
  currWidth = mapImg.clientWidth;
  currHeight = mapImg.clientHeight;
}

updateOptions();

function zoomin() {
  updateOptions();
  if (currWidth >= minWidth * 3) return;
  else {
    mapImg.style.top = mapImg.offsetTop - (0.25 * currHeight) / 2 + 'px';
    mapImg.style.left = mapImg.offsetLeft - (0.25 * currWidth) / 2 + 'px';
    mapImg.style.width = (currWidth * 1.25) + 'px';
  };
}

function zoomout() {
  updateOptions();
  if (currWidth <= minWidth) {
    return;
  } else {
    mapImg.style.width = (currWidth / 1.25) + 'px';
    if (mapImg.clientWidth <= minWidth) {
      mapImg.style.left = defOffsetLeft + 'px';
      mapImg.style.top = defOffsetTop + 'px';
    } else {
      let tempTop = mapImg.offsetTop + (0.25 / 1.25 * currHeight) / 2;
      let tempLeft = mapImg.offsetLeft + (0.25 / 1.25 * currWidth) / 2;

      if (tempTop >= defOffsetTop) {
        mapImg.style.top = defOffsetTop + 'px';
      } else if (tempTop <= minHeight - currHeight / 1.25) {
        mapImg.style.top = minHeight - currHeight / 1.25 + 'px';
      } else mapImg.style.top = tempTop + 'px';

      if (tempLeft >= defOffsetLeft) {
        mapImg.style.left = defOffsetLeft + 'px';
      } else if (tempLeft <= minWidth - currWidth / 1.25 + defOffsetLeft) {
        mapImg.style.left = minWidth - currWidth / 1.25 + defOffsetLeft + 'px';
      } else mapImg.style.left = tempLeft + 'px';

    }
  }
}

const mapImgLeft = () => {
  mapImg.style.left = (mapWrap.clientWidth - mapImg.clientWidth) / 2 + 'px';
}
window.addEventListener('resize', mapImgLeft);



const mapTooltips = (e) => {
  if (event.target.closest('.map__location')) {
    let location = event.target.closest('.map__location');
    removeActive(mapLocations);
    location.classList.add('active');
  } else removeActive(mapLocations);
}

function removeActive(arr) {
  arr.forEach((el) => {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
    }
  });
}

mapWrap.addEventListener('click', mapTooltips);




let topIndent = 0;
let leftIndent = 0;

const calcCoords = (e, elem) => {
  const box = elem.getBoundingClientRect();
  topIndent = e.pageY - box.top - pageYOffset;
  leftIndent = e.pageX - box.left - pageXOffset;
}

const moveAt = (e) => {
  mapImg.style.position = 'absolute';
  let tempY = e.pageY - 80 - topIndent;
  let tempX = e.pageX - leftIndent;
  if (tempY >= defOffsetTop) {
    mapImg.style.top = defOffsetTop + 'px';
  } else if (tempY <= minHeight - currHeight) {
    mapImg.style.top = minHeight - currHeight + 'px';
  } else mapImg.style.top = tempY + 'px';

  if (tempX >= defOffsetLeft) {
    mapImg.style.left = defOffsetLeft + 'px';
  } else if (tempX <= minWidth - currWidth + defOffsetLeft) {
    mapImg.style.left = minWidth - currWidth + defOffsetLeft + 'px';
  } else mapImg.style.left = tempX + 'px';

}

mapImg.addEventListener('mousedown', (e) => {
  if (mapImg.clientWidth <= minWidth) {
    return;
  }
  updateOptions();
  calcCoords(e, mapImg);
  moveAt(e);

  mapWrap.addEventListener('mousemove', moveAt);

  document.addEventListener('mouseup', () => {
    mapWrap.removeEventListener('mousemove', moveAt);
  });
});

mapImg.ondragstart = function() {
  return false;
};