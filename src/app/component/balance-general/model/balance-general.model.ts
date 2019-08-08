export class BalanceGeneralClass {
    constructor(
        readonly nivelList?: string,
        readonly fechaCorteTxt?: string,
        readonly valorExpresadoList?: string,
        readonly centroCostosList?: string,
    ){
        this.nivelList = '';
        this.fechaCorteTxt = '';
        this.valorExpresadoList = '';
        this.centroCostosList = '';
    }
}