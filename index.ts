 class Points{
     x
     y
     name
     constructor(x,y,name) {
         this.x=x
         this.y=y
         this.name=name


     }
     distance(next){
         let dx=this.x-next.x
         let dy=this.y-next.y

         return  Math.sqrt((dx*dx)+(dy*dy))
     }
 }
 let point1=new Points(2,2,"firstpoint")
 let point2=new Points(4,4,"lastpoint")

 console.log(point1.distance(point2))
