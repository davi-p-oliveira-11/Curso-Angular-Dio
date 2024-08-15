type heroi = {
  name: string;
  vulgo: string;
};

function printaObjetos(pessoa: heroi) {
  console.log(pessoa);
}

// comentario que não vai ser bisto

printaObjetos({
  name: "bruce wayne",
  vulgo: "batman",
});
