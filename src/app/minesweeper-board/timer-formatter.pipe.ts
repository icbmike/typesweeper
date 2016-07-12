import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'timerFormat'})
export class TimerFormatPipe implements PipeTransform {
    transform(value: number) : string {
        let numDigits = Math.max(Math.floor(Math.log(Math.abs(value)) / Math.LN10), 0) + 1;
        
        let numZeroes = 3 - numDigits;

        return `${_.repeat('0', numZeroes)}${value}`;
    }
}
