// 다니엘 쉬프만(Daniel Shiffman)저 Learning Processing을 적용
// learningprocessing.com
let mic;
let analyzer;
let volume;
let maxVolume = 0;

function setup() {
  createCanvas(710, 300);
  background(255);

  // 오디오 입력 생성하기
  mic = new p5.AudioIn();

  mic.start();
  console.log(mic);
}

function draw() {
  // 전체 볼륨(0과 1.0 사이) 받아오기
  volume = mic.getLevel();

  if(volume > maxVolume){
    maxVolume = volume;
  }

  let threshold = 0.5;

  // 전체 볼륨 범위를 막대 그래프로 나타내고 임계값의 위치에는 선 하나 긋기
  let y = map(maxVolume, 0, 1, 0, height, true);
  let ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);

  // 그 다음, 볼륨값을 보여주는 노란 사각형을 그래프 위에 그리기
  fill(255,244,0);
  rect(0, height-y, 20, y);

  // 한계 선긋기
  stroke(0);
  line(0, ythreshold, 19, ythreshold);

  
  var volume_input = document.getElementById("showVolume");
  volume_input.value = volume;
}