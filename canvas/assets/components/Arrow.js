class Arrow {
    constructor(props) {
        this.x = 0;
        this.y = 0;
        this.w = 60;
        this.h = 30;
        this.rotation = 0;
        this.fillStyle = 'rgb(57, 119, 224)';
        this.strokeStyle = 'rgba(0, 0, 0, 0)';
        Object.assign(this, props);
        return this;
    }
    
    render(ctx) {
        let { x, y, rotation, fillStyle, strokeStyle } = this;
        ctx.save();
        ctx.fillStyle = fillStyle;
        ctx.strokeStyle = strokeStyle;
        ctx.translate(x, y);
        ctx.rotate(rotation);
        this.createPath(ctx);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        return this;
    }

    createPath(ctx) {
        let { w, h } = this;
        ctx.beginPath();
        ctx.moveTo(-w / 2, -h / 4);
        ctx.lineTo(-w / 2, h / 4);
        ctx.lineTo(w / 8, h / 4);
        ctx.lineTo(w / 8, h / 2);
        ctx.lineTo(w / 2, 0);
        ctx.lineTo(w / 8, -h / 2);
        ctx.lineTo(w / 8, -h / 4);
        ctx.closePath();
        return this;
    }

}