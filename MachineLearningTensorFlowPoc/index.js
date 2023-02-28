const viewer = new TensorFlowViewer('viewer');

const modelo = new Modelo();

viewer.drawBackground();

function gerarDados() {
  const func = (x) => 2000 * x;

  const xs = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50));
  xs.push(...xs.slice(10).map(x => x * 10));
  xs.push(...xs.slice(10).map(x => x * 100));
  xs.push(...xs.slice(10).map(x => x * 1000));

  const ys = xs.map(x => func(x));

  return [xs, ys];
}

async function treinar() {
  document.getElementById('valor').innerText = 'Treinando...';
  
  const [xs, ys] = gerarDados();

  await modelo.treinar(xs, ys);

  document.getElementById('valor').innerText = 'Pronto para calcular!';

  const dados = await modelo.imprimir(0, 0);

  viewer.draw(dados);
}

async function calcular() {
  const metros = document.getElementById('metros').value;

  const prediction = await modelo.calcular(metros);
  
  console.log('Prediction: ' + prediction);

  document.getElementById('valor').innerText = Math.floor(prediction);

  const dados = await modelo.imprimir(metros, prediction);

  viewer.draw(dados);
}
