export class ExistenciaArticuloClass {
    constructor(
        public fechaCorteTxt?: Date,
        public grupoInicialTxt?: string,
        public grupoFinalTxt?: string,
        public existenciaTxt?: string,
        public bodegasTxt?: string,
        public tipoTxt?: string,
    ){
        var now = new Date();
        fechaCorteTxt = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        grupoInicialTxt = '';
        grupoFinalTxt = '';
        existenciaTxt = '';
        bodegasTxt = '';
        tipoTxt = '';
    }
}