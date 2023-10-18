"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa las dependencias
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// Crea una instancia de Express
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
// Middleware de registro de solicitude
app.use((0, morgan_1.default)('dev'));
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} QUE LA FUERZA TE ACOMPAÑE`);
});
