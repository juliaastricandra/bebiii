const musik = "music.mp3";

window.addEventListener("load", (event) => {
  const load = document.querySelector(".preload");
  load.style = "opacity: 0; transition: .5s ease all;";
  setTimeout(() => {
    load.style.display = "none";
  }, 500);
});

document.querySelector("button").addEventListener("click", start);
const musikku = new Audio(musik);
musikku.loop = true;

async function start() {
  musikku.play();
  formKu();
  inputSayang = document.querySelectorAll("input")[0];
  inputKangen = document.querySelectorAll("input")[1];
  inputPesan = document.querySelectorAll("input")[2];
  await dekatutorial.fire({
    imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/akuadapertanyaan.gif",
    title: "Haii sayangku!",
    text: "Dudut ada pertanyaan nih buat bebi",
  });
  await dekatutorial.fire({
    imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/jawabyangjujur.gif",
    title: "Jawab yang jujur",
  });
  await dekatutorial.fire({
    imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/awasajakaloboong.gif",
    title: "Awas aja kalo boong",
  });
  sayangGak();
}

function sayangGak() {
  dekatutorial
    .fire({
      showDenyButton: true,
      imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/kamusayanggak.gif",
      title: "Bebi sayang gak sama dudut?",
      denyButtonText: "Gak!",
      confirmButtonText: "Sayang",
    })
    .then((e) => {
      if (e.isConfirmed) {
        dekatutorial
          .fire({
            imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/akujugasayang.gif",
            title: "Dudut juga sayang sama bebiii",
          })
          .then(seberapaSayang);
      } else {
        dekatutorial
          .fire({
            showDenyButton: true,
            imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/yakinihgasayang.gif",
            title: "Yakin nih ga sayang sama Dudut?",
            denyButtonText: "Gak!",
            confirmButtonText: "Sayang",
          })
          .then((e) => {
            if (e.isConfirmed) {
              dekatutorial
                .fire({
                  imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/akujugasayang.gif",
                  title: "Dudut juga sayang sama bebiii",
                })
                .then(seberapaSayang);
            } else {
              dekatutorial
                .fire({
                  imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/yaudah.gif",
                  title: "Ya udah :(",
                })
                .then(kangenGak);
            }
          });
      }
    });
}

async function seberapaSayang() {
  const { value: syg } = await dekatutorial.fire({
    title: "Seberapa sayang emangnya?",
    inputLabel: "Antara 1 - 100",
    input: "range",
    confirmButtonText: "Kirim",
    inputValue: 50,
    inputAttributes: {
      min: 1,
      max: 100,
      step: 1,
    },
  });
  inputSayang.setAttribute("value", `${syg}%`);
  await dekatutorial.fire({
    imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/makasihyaudahsayang.gif",
    title: `Makasih yahh udah sayang sama dudut ${syg}%`,
  }).then(kangenGak);
}

async function kangenGak() {
  await dekatutorial.fire({
    showDenyButton: true,
    imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/kamukangengak.gif",
    title: "Bebi kangen gak sama dudut?",
    denyButtonText: "Gak!",
    confirmButtonText: "Kangen :(",
  }).then((e) => {
    if (e.isConfirmed) {
      inputKangen.setAttribute("value", "Iya");
      dekatutorial.fire({
        imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/akujugakangen.gif",
        title: "Dudut juga kangen bebiii",
      }).then(adaPesanGak);
    } else {
      dekatutorial.fire({
        imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/jahatgakangen.gif",
        title: "Jahat banget gak kangen sama pacar sendiri",
      }).then(adaPesanGak);
    }
  });
}

async function adaPesanGak() {
  await dekatutorial.fire({
    imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/terakhirdehsayang.gif",
    title: "Terakhir deh bebi",
  });
  await dekatutorial.fire({
    showDenyButton: true,
    imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/adapesangak.gif",
    title: "Ada pesan buat dudut gak?",
    denyButtonText: "Gak!",
    confirmButtonText: "Ada dong",
  }).then(async (e) => {
    if (e.isConfirmed) {
      const { value: pesan } = await dekatutorial.fire({
        title: "Apa pesannya?",
        input: "text",
      });
      if (pesan) {
        inputPesan.setAttribute("value", pesan);
      } else {
        await dekatutorial.fire({
          imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/yaudahkalogaada.gif",
          title: "Ya udah kalo gak jadi",
        });
      }
    } else {
      await dekatutorial.fire({
        imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/yaudahkalogaada.gif",
        title: "Ya udah kalo gak ada",
      });
    }
  });
  kirim();
  pesanAkhir();
}

async function pesanAkhir() {
  await dekatutorial.fire({
    imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/makasihudahjawab.gif",
    title: "Makasih udah jawab jujur yah sayangku",
  });
  await dekatutorial.fire({
    imageUrl: "https://dekatutorial.github.io/19gombal/stikerkuy/akujugasayang.gif",
    title: "Mmwuaaach",
  });
}
