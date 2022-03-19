AFRAME.registerComponent("diver",{
    schema:{
        rotationSpeed:{type:"number",default:0},
        heightSpeed:{type:"number",default:0}
    },

    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.rotationSpeed=this.el.getAttribute("rotation")
            this.data.heightSpeed=this.el.getAttribute("position")

            var diverRot=this.data.rotationSpeed
            var diverPos=this.data.heightSpeed


            if (e.key === "ArrowRight") {
                if (diverRot.x<10) {
                  diverRot.x += 0.5;
                  this.el.setAttribute("rotation", diverRot);
                }
              }
              if (e.key === "ArrowLeft") {
                if (diverRot.x>-10) {
                  diverRot.x -= 0.5;
                  this.el.setAttribute("rotation", diverRot);
                }
              }
              if (e.key === "ArrowUp") {
                if (diverRot.z< 10) {
                  diverRot.z += 0.5;
                  this.el.setAttribute("rotation", diverRot);
                }
                if (diverPos.y <2) {
                  diverPos.y += 0.01;
                  this.el.setAttribute("position", diverPos);
                }
              }
              if (e.key === "ArrowDown") {
                if (diverRot.z >-10) {
                  diverRot.z -= 0.5;
                  this.el.setAttribute("rotation", diverRot);
                }
                if (diverPos.y >-2) {
                  diverPos.y -= 0.01;
                  this.el.setAttribute("position", diverPos);
                }
              }
        })
    }
})