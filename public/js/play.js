class Game {
  constructor() {}

  randomize() {
    const choices = ["batu", "gunting", "kertas"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  }

  playGame(playerChoice) {
    this.resetBackground();

    console.log(`Player memilih ${playerChoice}`);
    this.setBackground("player", playerChoice);

    const comChoice = this.randomize();
    console.log(`COM memilih ${comChoice}`);
    this.setBackground("com", comChoice);

    // Bandingkan pilihan computer & player
    // Jika sama, panggil fungsi resultDraw()
    // Jika player menang, panggil fungsi resultPlayerWin()
    // Jika player kalah, panggil fungsi resultPlayerLose()
    if (playerChoice == comChoice) {
      return this.resultDraw();
    }

    if (playerChoice === "batu" && comChoice === "kertas") {
      return this.resultPlayerLose();
    }

    if (playerChoice === "batu" && comChoice === "gunting") {
      return this.resultPlayerWin();
    }

    if (playerChoice === "kertas" && comChoice === "gunting") {
      return this.resultPlayerLose();
    }

    if (playerChoice === "kertas" && comChoice === "batu") {
      return this.resultPlayerWin();
    }

    if (playerChoice === "gunting" && comChoice === "batu") {
      return this.resultPlayerLose();
    }

    if (playerChoice === "gunting" && comChoice === "kertas") {
      return this.resultPlayerWin();
    }
  }

  setBackground(playerType, choice) {
    // Ambil element berdasar id, kemudian berikan kelas custom-selected
    // Cara di bawah bisa dilakukan karena penamaan id menggunakan format jenisplayer-pilihan
    const selectedElement = document.getElementById(`${playerType}-${choice}`);

    // Kelas custom-selected memberikan background, cek .custom-selected di style.css
    selectedElement.classList.add("custom-selected");
  }

  resetBackground() {
    // hapus style background pada pilihan player & computer
    document.getElementById("player-batu").classList.remove("custom-selected");
    document.getElementById("player-kertas").classList.remove("custom-selected");
    document.getElementById("player-gunting").classList.remove("custom-selected");
    document.getElementById("com-batu").classList.remove("custom-selected");
    document.getElementById("com-kertas").classList.remove("custom-selected");
    document.getElementById("com-gunting").classList.remove("custom-selected");

    // hapus style background pada tulisan VS
    document.getElementById("vs").classList.remove("custom-green-vs-box");
    document.getElementById("vs").classList.remove("custom-green-darker-vs-box");
    document.getElementById("vs").classList.remove("custom-red-vs-box");

    // atur kembali tulisan menjadi VS & kembalikan style asal
    document.getElementById("vs").innerHTML = "VS";
    document.getElementById("vs").classList.add("custom-vs-text");
  }

  resultDraw() {
    // Cetak tulisan ke console
    console.log("DRAW");

    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "DRAW";

    // Hapus kelas custom-vs-text & tambahkan kelas custom-green-darker-vs-box
    // Cek kelas custom-vs-text & custom-green-darker-vs-box di style.css
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-green-darker-vs-box");
  }

  resultPlayerLose() {
    // Cetak tulisan ke console
    console.log("COM WIN");

    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "COM WIN";

    // Hapus kelas custom-vs-text & tambahkan kelas custom-green-vs-box
    // Cek kelas custom-vs-text & custom-green-vs-box di style.css
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-red-vs-box");
  }

  resultPlayerWin() {
    // Cetak tulisan ke console
    console.log("PLAYER WIN");

    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "PLAYER 1 WIN";

    // Hapus kelas custom-vs-text & tambahkan kelas custom-green-vs-box
    // Cek kelas custom-vs-text & custom-green-vs-box di style.css
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-green-vs-box");
  }
}

// Membuat object baru menggunakan kelas Game
const game = new Game();

// Menyimpan semua elemen yang dibutuhkan ke dalam variable
const playerBatu = document.getElementById("player-batu");
const playerKertas = document.getElementById("player-kertas");
const playerGunting = document.getElementById("player-gunting");

const comBatu = document.getElementById("com-rock");
const comKertas = document.getElementById("com-paper");
const comGunting = document.getElementById("com-scissor");

const versus = document.getElementById("vs");

const reset = document.getElementById("reset");

// Menambahkan fungsi yang dijalankan ketika element di-klik
// isi dari namaElement.addEventlistener harus 'click' pada param ke-1 dan function pada param ke-2
playerBatu.addEventListener("click", function () {
  game.playGame("batu");
});

playerKertas.addEventListener("click", function () {
  game.playGame("kertas");
});

playerGunting.addEventListener("click", function () {
  game.playGame("gunting");
});

reset.addEventListener("click", function () {
  // Pencetakan tulisan ini hanya dilakukan ketika mengklik gambar reset
  console.log("--- GAME RESET ---");

  game.resetBackground();
});
