export class EstadoResultadoClass {
    constructor(
        readonly nivelList?: string,
        readonly fechaCorteInicialTxt?: Date,
        readonly fechaCorteFinalTxt?: Date,
        readonly valorExpresadoList?: string,
        readonly centroCostosList?: string,
        readonly filtrocentroCostoTxt?: string,
        readonly userGenerator?: string,
        readonly grafica?: Array<any>,
    ){
        var now = new Date();
        nivelList = '';
        fechaCorteInicialTxt = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        fechaCorteFinalTxt   = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 30);
        valorExpresadoList = '';
        centroCostosList = '';
        filtrocentroCostoTxt = '';
        userGenerator = 'JORDAN OROZCO R';
        grafica = [];
    }
}