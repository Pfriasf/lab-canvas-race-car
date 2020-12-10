class Background {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = 0;

        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;

        this.img = new Image();
        this.img.src = "./images/road.png";
        // ask about
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
            console.log(this.img.isReady)
        };
    }
    isReady() {
        
        return this.img.isReady;
    }

    draw() {
      console.log(this.isReady())
        if (this.isReady()) {
            this.ctx.drawImage(
                this.img,
                this.x,
                0,
                this.width,
                this.height

            )
        }

    }

}