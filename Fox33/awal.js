// let input = {
//   nama: "maemunah",
//   age: 25,
//   weigth: 72.57,
//   height: 178,
// };

var radios = document.getElementsByName("genderS");

const named = document.getElementById("inputName");
const age = document.getElementById("inputAge");
const height = document.getElementById("inputHeight");
const weigth = document.getElementById("inputWeight");
const btnSubmit = document.getElementById("btnSubmit");

const konsumsiGula = document.getElementById("kadarGula");
const inputGula = document.getElementById("inputGula");
const btnSubmitGula = document.getElementById("btnSubmitGula");

const caption = document.getElementById("caption");

const resultBMI = document.getElementById("resultBMI");

const BMI = document.getElementById("BMI");
const lined = document.getElementById("animasi");

let data;

function validation(check) {
  return check.value === "";
}

function formVal() {
  return validation(named) || validation(weigth) || validation(height) || validation(age);
}

function displayRadioValue() {
  var ele = document.getElementsByName("gender");
  let gender;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      gender = ele[i].value;
    }
  }
  return gender;
}

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const genderUser = displayRadioValue();
  let flagGender = false;

  if (!genderUser) {
    flagGender = true;
  }

  //   console.log(genderUser, flagGender);
  const val = formVal();
  if (val || flagGender) {
    alert("Isi lengkap - lengkap dong");
  } else {
    data = {
      name: named.value,
      age: age.value,
      weigth: weigth.value,
      height: height.value,
      gender: genderUser,
    };
    // console.log(data);
    const hitungBmi = hitungBMI(data);
    // console.log(hitungBmi);
    const degrees = degree(hitungBmi);
    // console.log(degrees);
    const categori = category(hitungBmi);
    data["status"] = categori.status;

    if (degrees < 0 || degrees > 180) {
      lined.innerHTML = `<div class="card mb-3" style="max-width: 540px">
      <img id = 'gif' src="./assert/question.gif" style="width: 350px; height: 200px" alt="obesitas" />
    </div>`;
      let audio = new Audio("./assert/WrongBuzzer.mp3");
      audio.play();
    } else {
      let w3 = "#ffe400";
      let w4 = "#008137";
      let w8 = "#8a0101";

      BMI.innerHTML = `BMI = ${hitungBmi[0].toFixed(1)} kg/m<sup>2</sup> (<strong id = "warna">${data["status"]}</strong>)`;

      let tukerWarna = document.getElementById("warna");

      if (data["status"] === "Normal") {
        tukerWarna.style.color = "green";
        // console.log(tukerWarna);
      } else if (data["status"] === "Severed Thinness" || data["status"] === "Obese class II") {
        tukerWarna.style.color = "#bc2020";
      } else if (data["status"] === "Moderate Thinness" || data["status"] === "Obese class I") {
        tukerWarna.style.color = "#d38888";
      } else if (data["status"] === "Mid Thinness" || data["status"] === "Overweigth") {
        tukerWarna.style.color = "#ffe400";
      } else {
        tukerWarna.style.color = "#8A0102";
      }

      gif(hitungBmi, degrees, categori);

      music(data["status"]);

      konsumsiGula.style.display = "flex";
    }
  }
});

function gif(hitungBmi, degrees, categori) {
  lined.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px" height="163px" viewBox="0 0 300 163">
    <g transform="translate(18,18)" style="font-family: arial, helvetica, sans-serif; font-size: 12px">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7"></polygon></marker>
        <path id="curvetxt1" d="M-4 140 A140 140, 0, 0, 1, 284 140" style="fill: none"></path>
        <path id="curvetxt2" d="M33 43.6 A140 140, 0, 0, 1, 280 140" style="fill: none"></path>
        <path id="curvetxt3" d="M95 3 A140 140, 0, 0, 1, 284 140" style="fill: none"></path>
        <path id="curvetxt4" d="M235.4 33 A140 140, 0, 0, 1, 284 140" style="fill: none"></path>
      </defs>
      <path d="M0 140 A140 140, 0, 0, 1, 6.9 96.7 L140 140 Z" fill="#bc2020"></path>
      <path d="M6.9 96.7 A140 140, 0, 0, 1, 12.1 83.1 L140 140 Z" fill="#d38888"></path>
      <path d="M12.1 83.1 A140 140, 0, 0, 1, 22.6 63.8 L140 140 Z" fill="#ffe400"></path>
      <path d="M22.6 63.8 A140 140, 0, 0, 1, 96.7 6.9 L140 140 Z" fill="#008137"></path>
      <path d="M96.7 6.9 A140 140, 0, 0, 1, 169.1 3.1 L140 140 Z" fill="#ffe400"></path>
      <path d="M169.1 3.1 A140 140, 0, 0, 1, 233.7 36 L140 140 Z" fill="#d38888"></path>
      <path d="M233.7 36 A140 140, 0, 0, 1, 273.1 96.7 L140 140 Z" fill="#bc2020"></path>
      <path d="M273.1 96.7 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#8a0101"></path>
      <path d="M45 140 A90 90, 0, 0, 1, 230 140 Z" fill="#fff"></path>
      <circle cx="140" cy="140" r="5" fill="#666"></circle>
      <g style="paint-order: stroke; stroke: #fff; stroke-width: 2px">
        <text x="25" y="111" transform="rotate(-72, 25, 111)">16</text>
        <text x="30" y="96" transform="rotate(-66, 30, 96)">17</text>
        <text x="35" y="83" transform="rotate(-57, 35, 83)">18.5</text>
        <text x="97" y="29" transform="rotate(-18, 97, 29)">25</text>
        <text x="157" y="20" transform="rotate(12, 157, 20)">30</text>
        <text x="214" y="45" transform="rotate(42, 214, 45)">35</text>
        <text x="252" y="95" transform="rotate(72, 252, 95)">40</text>
      </g>
      <g style="font-size: 14px">
        <text><textPath xlink:href="#curvetxt1">Underweight</textPath></text>
        <text><textPath xlink:href="#curvetxt2">Normal</textPath></text>
        <text><textPath xlink:href="#curvetxt3">Overweight</textPath></text>
        <text><textPath xlink:href="#curvetxt4">Obesity</textPath></text>
      </g>
      <line x1="140" y1="140" x2="65" y2="140" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)">
        <animateTransform id="arrow" attributeName="transform" attributeType="XML" type="rotate" from="0 140 140" dur="1s" fill="freeze" repeatCount="1" to="${Math.round(degrees)} 140 140 "></animateTransform>
      </line>
      <text x="67" y="120" style="font-size: 30px; font-weight: bold; color: #000" id="resultBMI">BMI = ${hitungBmi[0].toFixed(1)}</text>
    </g>
  </svg> 
  `;
  let gambarGemuk = `<div class="card mb-3" style="max-width: 540px">
    <img id = 'gif' src="./assert/Obesitas.gif" style="width: 350px; height: 200px" alt="obesitas" />
  </div>`;
  let gambarKurus = `<div  class="card mb-3" style="max-width: 540px">
    <img id = 'gif' src="./assert/kurus.gif" style="width: 350px; height: 200px" alt="Normal" />
  </div>`;
  let gambarNormal = `<div  class="card mb-3" style="max-width: 540px">
    <img id = 'gif' src="./assert/capt.gif" style="width: 350px; height: 200px" alt="kurus" />
  </div>`;

  let textCaptionSehat = `<div class="card card-body" style="max-width: 540px"><p>
  Anda Sehat</p>
</div>`;

  if (categori.status === "Normal") {
    lined.innerHTML += gambarNormal;
    caption.innerText = `Anda Sekarang Sehat Pertahankan Yak!!`;
  } else if (categori.status === "Severed Thinness" || categori.status === "Moderate Thinness" || categori.status === "Mid Thinness") {
    lined.innerHTML += gambarKurus;
    caption.innerText = `Anda Sekarang Kurus Nich Jangan lupa Makan Yak`;
  } else if (categori.status === "Overweigth" || categori.status === "Obese class I" || categori.status === "Obese class II" || categori.status === "Obese class III") {
    lined.innerHTML += gambarGemuk;
    caption.innerText = `Anda Sekarang Berisi banget nih, Ayok Olahraga!!`;
  }
}

function music(categori) {
  if (categori === "Normal") {
    let audio = new Audio("./assert/romance.mp3");
    audio.play();
  } else if (categori === "Severed Thinness" || categori === "Moderate Thinness" || categori === "Mid Thinness") {
    let audio = new Audio("./assert/Omagad.mp3");
    audio.play();
  } else if (categori === "Overweigth" || categori === "Obese class I" || categori === "Obese class II" || categori === "Obese class III") {
    let audio = new Audio("./assert/Gemuk.mp3");
    audio.play();
  }
}

// fungsi menghitung BMI dan Ponderal dan
function hitungBMI(data) {
  let hasil = [];
  if (data.age < 2 || data.age > 120) {
    let kata = "umur hanya untuk umur dimulai dari 2 sampai 120 tahun";
    return kata;
  }
  let tinggi = data.height / 100;
  let bmi = data.weigth / (tinggi * tinggi);
  let ponderal = bmi / tinggi;
  hasil.push(bmi);
  hasil.push(ponderal);
  return hasil;
}

// console.log(hitungBMI(input));

// fungsi menghitung sudut dari MBI per 180
// input dari mbi
function degree(data) {
  let sudut = ((data[0] - 13) * 180) / 30;
  if (data[0] > 45) {
    sudut = 182;
  }
  if (data[0] < 13) {
    sudut = -3;
  }
  return sudut;
}
// console.log(degree([17.3, 12])); //25,8
// console.log(degree([23, 13]));

// memisahkan jenis kategori bmi dan pon
// input dari hasil input mbi
function category(arr) {
  let result = {};
  let bmi = arr[0];
  let beratMin, beratMax;
  if (bmi < 16) {
    beratSeharusnya = result.status = "Severed Thinness";
    result.BMI = ` Kurang dari 16 kg/m^2`;
  }
  if (bmi >= 16 && bmi < 17) {
    result.status = "Moderate Thinness";
    result.BMI = `16 - 17 kg/m^2`;
  }
  if (bmi >= 17 && bmi < 18.5) {
    result.status = "Mid Thinness";
    result.BMI = `17 - 18.5 kg/m^2`;
  }
  if (bmi >= 18.5 && bmi < 25) {
    result.status = "Normal";
    result.BMI = `18.8 - 25 kg/m^2`;
  }
  if (bmi >= 25 && bmi < 30) {
    result.status = "Overweigth";
    result.BMI = `25 - 30 kg/m^2`;
  }
  if (bmi >= 30 && bmi < 35) {
    result.status = "Obese class I";
    result.BMI = `30 - 35 kg/m^2`;
  }
  if (bmi >= 35 && bmi < 40) {
    result.status = "Obese class II";
    result.BMI = `35 - 40 kg/m^2`;
  }
  if (bmi >= 40) {
    result.status = "Obese class III";
    result.BMI = `Lebih dari 40 kg/m^2`;
  }

  result.Ponderal = arr[1];
  return result;
}

btnSubmitGula.addEventListener("click", function (e) {
  e.preventDefault();
  const val = validation(inputGula);
  if (val) {
    alert("Isi dulu dong udah konsumsi gula berapa");
  } else {
    // console.log(data);
    let jenis = data.gender;
    let kal = inputGula.value;
    let status = data.status;
    test(jenis, kal, status);
  }
});

// console.log(category([22.904305011993433, 12.86758708538957]));
function test(gender, kal, status) {
  let gambar = document.getElementById("gif");

  let kategori = [["Severed Thinness", "Moderate Thinness", "Mid Thinness"], ["Normal"], ["Overweigth", "Obese class I", "Obese class II", "Obese class III"]];
  let kalMale = [
    [2300, 2700],
    [1800, 2500],
    [1600, 2000],
  ];
  let kalFemale = [
    [1800, 2000],
    [1500, 2000],
    [1200, 1700],
  ];
  let kata = "";
  let checkPoint;

  for (let i = 0; i < kategori.length; i++) {
    for (let sumber of kategori[i]) {
      if (sumber === status) {
        checkPoint = i;
      }
    }
  }

  if ((gender = "Male")) {
    if (kal < kalMale[checkPoint][0]) {
      gambar.src = "./assert/kurus.gif";
      music(status);
      caption.innerText = "Konsumsi kalori anda KURANG";
    } else if (kal > kalMale[checkPoint][1]) {
      gambar.src = "./assert/Obesitas.gif";
      music(status);
      caption.innerText = "Konsumsi kalori Berlebih";
    } else {
      //   console.log("Mantap");
      gambar.src = "./assert/capt.gif";
      music(status);
      caption.innerText = "Konsumsi kalaori PAS";
    }
  }

  if ((gender = "Female")) {
    if (kal < kalFemale[checkPoint][0]) {
      gambar.src = "./assert/kurus.gif";
      caption.innerText = "Konsumsi kalori anda KURANG";
    } else if (kal > kalFemale[checkPoint][1]) {
      gambar.src = "./assert/Obesitas.gif";
      caption.innerText = "Konsumsi kalori Berlebih";
    } else {
      gambar.src = "./assert/capt.gif";
      caption.innerText = "Konsumsi kalaori PAS";
    }
  }

  return kata;
}
