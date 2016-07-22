/**
 * To be  described
 */
export class FieldTypeInputDataModel {
	constructor() {
		this.id = '';
		this.name = '';
		this.type = '';

		this.className = '';
		this.placeholder = '';
		this.labelText = '';
		this.labelClass = '';

		this.ngModel = undefined;
		this.isRequired = false;
	}
}
/**
 * To be  described
 */
export class FieldTypeInputText extends FieldTypeInputDataModel {
	constructor(ngModel, requireMsg, labelText) {
		super();
		this.type = 'text';
		this.ngModel = ngModel;

		this.isRequired = requireMsg;

		this.labelText = labelText || '';
	}
}
/**
 * To be  described
 */
export class FieldTypeInputPassword extends FieldTypeInputDataModel {
	constructor(ngModel, labelText) {
		super();
		this.type = 'password';
		this.ngModel = ngModel;

		this.labelText = labelText || '';
	}
}
/**
 * To be  described
 */
export class FieldTypeInputCheckbox extends FieldTypeInputDataModel {
	constructor(ngModel, labelText) {
		super();
		this.type = 'checkbox';
		this.ngModel = ngModel;

		this.labelText = labelText || '';
		delete this.placeholder;
	}
}
/**
 * To be  described
 */
export class FieldTypeInputRadio extends FieldTypeInputDataModel {
	constructor(ngModel, options, labelText) {
		super();
		this.type = 'radio';
		this.ngModel = ngModel;
		this.radioOptions = options;

		this.labelText = labelText || '';
		delete this.placeholder;
	}
}
/**
 * To be  described
 */
export class FieldTypeSelect extends FieldTypeInputDataModel {
	constructor(ngModel, options, labelText) {
		super();
		this.type = 'select';
		this.selectOptions = options;

		this.labelText = labelText || '';

		this.assignNgModel(ngModel, options);
	}

	assignNgModel(ngModel, options) {
		let len = options.length

		while (len--) {
			if(options[len].value === ngModel) {
				this.ngModel = options[len];
			}
		}
	}
}
/**
 * To be  described
 */
export class FieldsDataModelHelper {
	constructor() {}
	/**
	 * It's only for constructor values,
	 * for complex collection have to used item per item in the collection !!!
	 * @returns {{}}
	 */
	getData() {
		let resObj = {};

		for (let key in this) {

			if(this[key].type !== 'select') {
				resObj[key] = this[key].ngModel;
			} else {
				resObj[key] = this[key].ngModel.value;
			}

		}

		return resObj;
	}
}
//asd