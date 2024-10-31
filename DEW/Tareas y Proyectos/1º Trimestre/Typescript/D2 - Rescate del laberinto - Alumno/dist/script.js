"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LaberintoGame;
(function (LaberintoGame) {
    var Celda = /** @class */ (function () {
        function Celda(x, y) {
            this.x = x;
            this.y = y;
        }
        return Celda;
    }());
    LaberintoGame.Celda = Celda;
    var Jugador = /** @class */ (function (_super) {
        __extends(Jugador, _super);
        function Jugador() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.energia = 100;
            return _this;
        }
        Jugador.prototype.mover = function (dx, dy) {
            this.x += dx;
            this.y += dy;
            this.energia -= 1;
        };
        return Jugador;
    }(Celda));
    LaberintoGame.Jugador = Jugador;
    var Trampa = /** @class */ (function (_super) {
        __extends(Trampa, _super);
        function Trampa(x, y) {
            return _super.call(this, x, y) || this;
        }
        return Trampa;
    }(Celda));
    LaberintoGame.Trampa = Trampa;
    var ObjetoEspecial = /** @class */ (function (_super) {
        __extends(ObjetoEspecial, _super);
        function ObjetoEspecial(x, y) {
            return _super.call(this, x, y) || this;
        }
        return ObjetoEspecial;
    }(Celda));
    LaberintoGame.ObjetoEspecial = ObjetoEspecial;
    var Salida = /** @class */ (function (_super) {
        __extends(Salida, _super);
        function Salida(x, y) {
            return _super.call(this, x, y) || this;
        }
        return Salida;
    }(Celda));
    LaberintoGame.Salida = Salida;
    var Matriz = /** @class */ (function () {
        function Matriz(filas, columnas) {
            this.filas = filas;
            this.columnas = columnas;
            this.datos = new Array(filas).fill(null).map(function () { return new Array(columnas).fill(null); });
        }
        Matriz.prototype.set = function (x, y, valor) {
            if (this.enLimites(x, y))
                this.datos[y][x] = valor;
        };
        Matriz.prototype.enLimites = function (x, y) {
            return x >= 0 && y >= 0 && this.columnas >= y && this.filas >= x;
        };
        Matriz.prototype.get = function (x, y) {
            return this.datos[y][x];
        };
        return Matriz;
    }());
    var Juego = /** @class */ (function () {
        function Juego(filas, columnas) {
            this.filas = filas;
            this.columnas = columnas;
            this.tiempoRestante = 60;
            this.laberinto = new Matriz(filas, columnas);
            this.jugador = new Jugador(0, 0);
            this.inicializarLaberinto();
        }
        Juego.prototype.inicializarLaberinto = function () {
            this.laberinto.set(0, 0, this.jugador);
            for (var i = 0; i < 5; i++) {
                var x = Math.floor(Math.random() * this.columnas);
                var y = Math.floor(Math.random() * this.filas);
                while (this.laberinto.get(x, y) !== null) {
                    x = Math.floor(Math.random() * this.columnas);
                    y = Math.floor(Math.random() * this.filas);
                }
                this.laberinto.set(x, y, new Trampa(x, y));
            }
            for (var i = 0; i < 3; i++) {
                var x = Math.floor(Math.random() * this.columnas);
                var y = Math.floor(Math.random() * this.filas);
                while (this.laberinto.get(x, y) !== null) {
                    x = Math.floor(Math.random() * this.columnas);
                    y = Math.floor(Math.random() * this.filas);
                }
                this.laberinto.set(x, y, new ObjetoEspecial(x, y));
            }
            this.laberinto.set(this.columnas - 1, this.filas - 1, new Salida(this.columnas - 1, this.filas - 1));
        };
        Juego.prototype.moverJugador = function (dx, dy) {
            var nuevoX = this.jugador.x + dx;
            var nuevoY = this.jugador.y + dy;
            if (nuevoX >= 0 && nuevoX < this.columnas && nuevoY >= 0 && nuevoY < this.filas) {
                var celdaActual = this.laberinto.get(this.jugador.x, this.jugador.y);
                this.laberinto.set(this.jugador.x, this.jugador.y, new Celda(0, 0));
                this.jugador.mover(dx, dy);
                var celdaNueva = this.laberinto.get(nuevoX, nuevoY);
                if (celdaNueva instanceof Trampa) {
                    this.jugador.energia -= 20;
                }
                else if (celdaNueva instanceof ObjetoEspecial) {
                    this.jugador.energia += 10;
                }
                else if (celdaNueva instanceof Salida) {
                    this.terminarJuego(true);
                }
                this.laberinto.set(nuevoX, nuevoY, this.jugador);
                this.renderizarLaberinto();
                if (this.jugador.energia <= 0) {
                    this.terminarJuego(false);
                }
            }
        };
        Juego.prototype.actualizarEnergia = function () {
            $('#energia').text(this.jugador.energia);
        };
        Juego.prototype.actualizarTiempo = function () {
            $('#tiempo').text(this.tiempoRestante);
        };
        Juego.prototype.renderizarLaberinto = function () {
            var $laberinto = $('#laberinto');
            $laberinto.empty();
            for (var y = 0; y < this.filas; y++) {
                for (var x = 0; x < this.columnas; x++) {
                    var celda = this.laberinto.get(x, y);
                    var $celda = $('<div>').addClass('celda');
                    if (celda instanceof Jugador) {
                        $celda.addClass('jugador');
                    }
                    else if (celda instanceof Trampa) {
                        $celda.addClass('trampa');
                    }
                    else if (celda instanceof ObjetoEspecial) {
                        $celda.addClass('objeto');
                    }
                    else if (celda instanceof Salida) {
                        $celda.addClass('salida');
                    }
                    $laberinto.append($celda);
                }
            }
        };
        Juego.prototype.terminarJuego = function (gano) {
            if (gano) {
                alert('¡Felicidades! Has ganado el juego.');
            }
            else {
                alert('Lo siento, has perdido el juego.');
            }
        };
        return Juego;
    }());
    LaberintoGame.Juego = Juego;
})(LaberintoGame || (LaberintoGame = {}));
$(document).ready(function () {
    var juego = new LaberintoGame.Juego(10, 10);
    $('#iniciar').on('click', function () {
        juego.renderizarLaberinto();
        $(document).on('keydown', function (e) {
            switch (e.which) {
                case 37: // izquierda
                    juego.moverJugador(-1, 0);
                    break;
                case 38: // arriba
                    juego.moverJugador(0, -1);
                    break;
                case 39: // derecha
                    juego.moverJugador(1, 0);
                    break;
                case 40: // abajo
                    juego.moverJugador(0, 1);
                    break;
            }
        });
    });
});
