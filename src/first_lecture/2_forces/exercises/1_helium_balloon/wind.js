class Wind{
    constructor(){
        this.acceleration = createVector()
        this.tx = 0
        this.ty = 1000
    }

    update(){
        let x_force = map(noise(this.tx), 0, 1, -0.1, 0.22) 
        let y_force = map(noise(this.ty), 0, 1, -0.02, 0.02) 
        this.acceleration= createVector(x_force, y_force)
        this.tx += 0.05
        this.ty += 0.05
    }

    get force(){
        return this.acceleration
    }
    

}