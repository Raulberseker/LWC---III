import { LightningElement } from 'lwc';

export default class InputForm extends LightningElement {
    formData = {
        primeiroNome: '',
        sobrenome: '',
        email: '',
        website: '',
        empresa: '',
        receitaAnual: 0
    };

    handleInputChange(event) {
        const field = event.target.dataset.field;
        const value = event.target.value;
        this.formData[field] = value;
        console.log(this.formData);
    }
}
