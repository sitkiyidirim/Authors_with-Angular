import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ImgValidators {
              static ımgControl(control: AbstractControl):ValidationErrors | null{
                            const v=control.value as string;

                            if(v.endsWith('.jpg')){
                                          return null;
                            } else{
                                          return{
                                                        erroroImg:true
                                          }
                            }
              }
}