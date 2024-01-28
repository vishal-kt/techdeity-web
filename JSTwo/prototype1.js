
 let myHeros = ['Thor','SpiderMan']

 let heroPower = {
        Thor: 'Thunder',
        SpiderMan: 'Web',

        getSpiderPower : function () {
            console.log(`spidy power is ${this.SpiderMan}`);
        }
 }


 Object.prototype.vishal = function () {
    console.log(`vishal is present in all Objects`);
 }

Array.prototype.heyvishal = function () {
    console.log(`vishal says hello`);
}

 heroPower.vishal()
 heroPower.SpiderMan
 heroPower.getSpiderPower()

myHeros.heyvishal()


  