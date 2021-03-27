import { FormGroup, Validator } from '@angular/forms';

export class MatchPassword implements Validator{
 validate(formGroup: FormGroup) {
    return {
        passwordsDontMatch: true
    }
 }
}
