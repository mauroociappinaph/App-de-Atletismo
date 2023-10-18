"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa las dependencias
var express_1 = require("express");
var morgan_1 = require("morgan");
// Crea una instancia de Express
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
// Middleware
app.use(express_1.default.json());
// Middleware de registro de solicitude
app.use((0, morgan_1.default)('dev'));
// Iniciar el servidor
app.listen(PORT, function () {
    console.log("Servidor escuchando en el puerto ".concat(PORT, " & QUE LA FUERZA TE ACOMPA\u00D1E!"));
});
