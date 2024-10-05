class Friction{
    constructor(velocity, frictionCoefficient= 0.01, normalForceMag=1 ){
        this.frictionCoefficient = frictionCoefficient
        this.normalForceMag = normalForceMag
        
        this.direction = this.calculateDirection(velocity)
        this.magnitude = this.calculateMagnitude()
        
        this.force = this.calculateForce()
    }

    calculateForce(){
        return this.direction.mult(this.magnitude)
    }

    calculateDirection(velocity){
        let direction = velocity.copy()
        direction.normalize()
        direction.mult(-1)
    }

    calculateMagnitude(){
        return this.frictionCoefficient * this.normalForceMag
    }
}