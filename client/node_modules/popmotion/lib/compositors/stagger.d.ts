import { Action } from '../action';
declare type IntervalCalc = (i: number) => number;
declare type Interval = number | IntervalCalc;
declare const stagger: (actions: Action[], interval: Interval) => Action;
export default stagger;
