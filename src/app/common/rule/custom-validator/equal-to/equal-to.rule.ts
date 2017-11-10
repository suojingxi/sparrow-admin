import {AbstractControl, ValidatorFn} from "@angular/forms";

/**
 * 判断值相等
 */
export const equalTo = function (equalCtrl: AbstractControl): ValidatorFn {
  let subscribe: boolean = false;
  return function (ctrl: AbstractControl): { [key: string]: boolean } {
    if(!subscribe){
      subscribe = true;
      equalCtrl.valueChanges.subscribe(() => {
        ctrl.updateValueAndValidity();
      });
    }
    return equalCtrl.value === ctrl.value ? null : { equalTo: true };
  };
};
