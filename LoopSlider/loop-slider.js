// HTMLが全て読み込まれてから実行
window.onload = function () {
  loopTopSlider();
  loopsliderPosition();
}

function loopTopSlider () {
  let sliderSize = $('.loop-slider-wrap').width();
  $('.loop-slider-wrap').css({
    'width': sliderSize * 2 + 'px'
  });
  // ulを後ろに複製
  $('.loop-slider-wrap').find('ul').clone().appendTo('.loop-slider-wrap');
};
function loopsliderPosition () {
  // 最初のulタグの幅取得
  let sliderSize = $('.loop-slider-wrap:first-of-type').width();
  $('.loop-slider-wrap').css({
    left: '0'
  });
  // マイナスしていく
  $('.loop-slider-wrap').stop().animate({
    left: '-' + (sliderSize) + 'px'
  }, 80000, 'linear');

  // 80000秒ごとにloopsliderPosition関数を実行
  setTimeout ( function () {
    loopsliderPosition();
  }, 80000);
};
