const datosVici = require('./datosBici.js')

const dhBici ={
    bicicletas: datosVici.leerJson(),

    buscarBici: function(id){
        const viciEnc = this.bicicletas.filter((vici)=>{
            return vici.id === id
        })
        if(viciEnc.length === 0){
            return null
        }
        return viciEnc
    },

    venderBici : function(id){
        const viciEnc = this.buscarBici(id)
        if(viciEnc ===null){
            return "Bicicleta no encontrada";
        }
        viciEnc[0].vendida =true
        return viciEnc[0]
    },

    biciParaLaVenta: function(){
        const viciNoVendida = this.bicicletas.filter((vici)=>{
            return !vici.vendida
        })
        return viciNoVendida
    },

    totalDeVentas: function(){
        const totalVenta = this.bicicletas.reduce((acumulador, vici)=>{
            if(vici.vendida){
                acumulador += vici.precio
            }
            return acumulador
        },0)
        return totalVenta
    }, 

    aumentoBici: function(aumento){
        const viciConAumento = this.bicicletas.map((vici)=>{
          return (vici.precio * aumento)/ this.bicicletas.length  
        })
        return viciConAumento 
    },

    biciPorRodado: function(rodado){
        const buscarPorRodado = this.bicicletas.filter((vici)=>{
            return vici.rodado === rodado
        })
        return buscarPorRodado;
    },

    listarTodasLasBici : bicicletas.forEach(function(bici){
        console.log(`id: ${bici.id}`);
        
        
    })



}
//console.log(dhBici.buscarBici(12))
//console.log(dhBici.venderBici(4))
//console.log(dhBici.biciParaLaVenta())
//console.log(dhBici.totalDeVentas())
//console.log(dhBici.aumentoBici(30))
//console.log(dhBici.biciPorRodado(29))
console.log(dhBici.bicicletas.listarTodasLasBici())