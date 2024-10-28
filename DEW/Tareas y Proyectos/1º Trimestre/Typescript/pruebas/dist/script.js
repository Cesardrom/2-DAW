"use strict";
// Ejercicio 1.1
$(function () {
    var msg = 'Hola';
    $('#output1').text("".concat(msg));
});
// Ejercicio 1.2
$(function () {
    var villano = {
        nombre: "Freddy",
        edad: 31,
        pesadilla: "Elm Street"
    };
    $('#output2').text("".concat(villano.nombre, ", ").concat(villano.edad, ", ").concat(villano.pesadilla));
    // Ejercicio 2.1
    function atacar(arma) {
        return $('#output3').text("Freddy te ataca en tus pesadillas con una ".concat(arma));
    }
    atacar('Guante de cuchillas');
    // Ejercicio 2.2
    function saltar(metrosInput, metrosNormales) {
        if (metrosNormales === void 0) { metrosNormales = 2; }
        return $('#output4').text("Freddy esta loco y salta ".concat(metrosNormales, " metros/Freddy esta loco y salta ").concat(metrosInput, " metros"));
    }
    saltar(10);
    // Ejercicio 3.1
    var Pesadilla = /** @class */ (function () {
        function Pesadilla(name) {
            this.name = name.toUpperCase();
        }
        Pesadilla.prototype.gritar = function () {
            return $('#output5').text("".concat(this.name, " esta aqui"));
        };
        return Pesadilla;
    }());
    var pesadilla = new Pesadilla('jason');
    pesadilla.gritar();
    //ejercicio 3.2
    var Pesadilla2 = /** @class */ (function () {
        function Pesadilla2(name) {
            var _this = this;
            this.gritar = function () { $('#output6').text("".concat(_this.name, " esta aqui")); };
            this.name = name.toUpperCase();
        }
        return Pesadilla2;
    }());
    var pesadilla2 = new Pesadilla2('LeatherFace');
    pesadilla2.gritar();
});
