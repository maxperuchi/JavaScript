class TensorFlowViewer
{
    canvasId;

    canvas;
    
    ctx;

    constructor(canvasId) {
        this.canvasId = canvasId;
        this.canvas = document.getElementById(this.canvasId);
        this.ctx = this.canvas.getContext("2d");
    }

    draw(data) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawBackground();

        var offset = 50;
        
        this.ctx.beginPath();
        this.ctx.ellipse(offset + 60, 200, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
        this.ctx.stroke();

        this.ctx.font = "12px serif";
        this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
        this.ctx.fillText("X", offset + 55, 203);

        this.ctx.fillText(data?.entrada, offset + 55, 220);
        
        this.ctx.beginPath();

        this.ctx.moveTo(offset + 110, 200);
        this.ctx.lineTo(offset + 160, 200);
        this.ctx.stroke();
        this.ctx.lineTo(offset + 160, 190);
        this.ctx.lineTo(offset + 190, 200);
        this.ctx.lineTo(offset + 160, 210);
        this.ctx.lineTo(offset + 160, 200);

        this.ctx.fillStyle = "rgba(60, 107, 92, 1)";
        this.ctx.fill();
    
        this.ctx.beginPath();
        this.ctx.ellipse(offset + 245, 200, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
        this.ctx.stroke();

        this.ctx.font = "12px serif";
        this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
        this.ctx.fillText("W0 * X + B0", offset + 212, 203);

        this.ctx.fillText(Math.floor(data?.camadas[0]?.pesos[0]?.valor) + 
            " * " + data?.entrada + " + " + 
            Math.floor(data?.camadas[0]?.vies), 
            offset + 212, 220);

        this.ctx.beginPath();

        this.ctx.moveTo(offset + 295, 200);
        this.ctx.lineTo(offset + 345, 200);
        this.ctx.stroke();
        this.ctx.lineTo(offset + 345, 190);
        this.ctx.lineTo(offset + 375, 200);
        this.ctx.lineTo(offset + 345, 210);
        this.ctx.lineTo(offset + 345, 200);

        this.ctx.fillStyle = "rgba(60, 107, 92, 1)";
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.ellipse(offset + 430, 200, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
        this.ctx.stroke();

        this.ctx.font = "12px serif";
        this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
        this.ctx.fillText("Y", offset + 425, 203);

        this.ctx.fillText("~" + Math.floor(data?.saida), offset + 425, 220);
    }

    drawBackground() {
    }
}