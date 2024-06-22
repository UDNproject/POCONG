AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}

function wa(isi) {
  window.open("https://api.whatsapp.com/send?phone=6285171160401&text=" + isi);
}

async function tanya() {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'resources/foto.png',
    title: 'sepatah dua patah kata buat aku. (tulis di sini bawah ya)',
    input: 'text',
    showCancelButton: false
  });

  if (kado) {
    await swal.fire({
      imageUrl: 'resources/wa.png',
      title: 'Kirim jawabannya ke wa aku ya'
    });
    wa(kado);
  } else {
    await swal.fire({
      icon: 'error',
      title: 'Jangan dikosongin dong'
    });
    tanya();
  }
}