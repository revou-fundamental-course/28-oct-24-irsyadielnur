// Fungsi untuk melakukan scroll halus
function smoothScroll(target) {
  const element = document.querySelector(target);
  element.scrollIntoView({ behavior: 'smooth' });
}

// Mendapatkan semua link dengan atribut href yang dimulai dengan "#"
const links = document.querySelectorAll('a[href^="#"]');

// Menambahkan event listener ke setiap link
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll(link.getAttribute('href'));
  });
});

// mengidentifikasi atau mengambil nilai yang diinput
const form = document.getElementById('bmi-form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // menjadikan ukuran tinggi menjadi meter
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // konversi cm ke m

  //   jika kurang inputan akan muncul peringatan atau pemberitahuan
  if (isNaN(weight) || isNaN(height)) {
    resultDiv.textContent = 'Mohon masukkan berat dan tinggi yang tepat.';
    return;
  }

  // rumus bmi
  const bmi = weight / (height * height);
  let message = '';
  let advice = '';
  let healthRisks = '';

  //   saran dan jenis penyakit sesuai dengan hasil perhitungan
  if (bmi < 18.5) {
    message = 'Kamu kekurangan berat badan.';
    advice = 'Disarankan untuk meningkatkan asupan kalori dan nutrisi.';
    healthRisks = 'Risiko penyakit: Malnutrisi, Osteoporosis.';
  } else if (bmi < 24.9) {
    message = 'Berat badanmu normal.';
    advice = 'Pertahankan pola makan sehat dan rutin berolahraga.';
    healthRisks = 'Risiko penyakit: Rendah.';
  } else if (bmi < 29.9) {
    message = 'Kamu kelebihan berat badan.';
    advice = 'Disarankan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.';
    healthRisks = 'Risiko penyakit: Diabetes tipe 2, Penyakit jantung.';
  } else {
    message = 'Kamu obesitas.';
    advice = 'Disarankan untuk berkonsultasi dengan dokter untuk program penurunan berat badan.';
    healthRisks = 'Risiko penyakit: Diabetes tipe 2, Penyakit jantung, Hipertensi.';
  }

  //   tampilan hasil perhitungan
  resultDiv.innerHTML = `
    <div class="result2">
        BMI kamu adalah: <br>${bmi.toFixed(2)}
        <br>${message}
    </div>
    <div class="result3">
        <br>${advice}
        <br><strong>Risiko penyakit:</strong> ${healthRisks}
    </div>`;
});
