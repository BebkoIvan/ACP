import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'config'
})
export class ConfigPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let config = [];
    value.questions.forEach((el,i) => {
      if ( el.questionType === 'input') {
        config.push(
          {
            type: 'input',
            label: el. question,
            name: `${i}`
          }
        );
      }
      else if (el.questionType === 'select') {
        config.push(
          {
            type: 'select',
            label: el. question,
            name: `${i}`,
            options: el.answerVariants.map(el => el.answer)
          }
        );
      }
    });
    return config;
  }

}
