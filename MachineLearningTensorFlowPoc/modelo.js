class Modelo
{
    model;

    constructor() {
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({units: 1, inputShape: [1]}));
        
        const learningRate = 0.00001;
        const optimizer = tf.train.sgd(learningRate);
        
        this.model.compile({loss: 'meanSquaredError', optimizer: optimizer});
    }

    async treinar(xs, ys) {
        const txs = tf.tensor1d(xs);
        const tys = tf.tensor1d(ys);

        const fitResult = await this.model.fit(txs, tys, {epochs: 30});

        console.log(fitResult);
    }

    async imprimir(entrada, saida) {
        const dados = { entrada, saida, camadas: [] };

        this.model?.layers?.forEach(l => {
            const id = l?.id;
            const vies = l?.weights[l?.weights?.length - 1]?.val?.dataSync();

            console.log('Camada ' + id);
            console.log('-Vies: ' + vies);

            const camada = { id, pesos: [], vies  };

            for (var i = 0; i < l?.weights?.length - 1; i++) {
                const idPeso = i + 1;
                const valorPeso = l?.weights[i]?.val?.dataSync();

                console.log('-Peso ' + idPeso + ': ' + valorPeso);

                const peso = { id: idPeso, valor: valorPeso };
                camada.pesos.push(peso);
            }

            dados.camadas.push(camada);
        });

        return dados;
    }

    async calcular(metros) {
        return await this.model.predict(tf.tensor2d([Number(metros)], [1, 1])).dataSync();
    }
}
