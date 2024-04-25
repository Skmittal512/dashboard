var sheet = document.createElement('style');
var rangeInput = document.querySelector('.range input');
var rangeLabels = document.querySelectorAll('.range-labels li');
var prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {
  var curVal = el.value,
      val = (curVal - 1) * 25,
      style = '';

  // Set active label
  rangeLabels.forEach(function(label) {
    label.classList.remove('active', 'selected');
  });
  var curLabel = document.querySelector('.range-labels li:nth-child(' + curVal + ')');
  curLabel.classList.add('active', 'selected');
  var prevLabels = document.querySelectorAll('.range-labels li:nth-child(-n+' + curVal + ')');
  prevLabels.forEach(function(label) {
    label.classList.add('selected');
  });

  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.range input::-'+ prefs[i] +'{background: linear-gradient(to right, #9568FF 0%, #9568FF ' + val + '%, white ' + val + '%, white 100%);}';
  }

  return style;
}

rangeInput.addEventListener('input', function () {
  sheet.textContent = getTrackStyle(this);
  this.style.background = 'linear-gradient(to right, #9568FF, #9568FF ' + this.value + '%, #fff ' + this.value + '%, #fff)';
});

// Change input value on label click
rangeLabels.forEach(function(label, index) {
  label.addEventListener('click', function () {
    rangeInput.value = (index * 25) + 1;
    rangeInput.dispatchEvent(new Event('input'));
  });
});
