import React from 'react';

type IStyleMaxType = {
  [key in keyof React.CSSProperties]: {
    max: number;
    unit?: (value: number) => string;
    alternate?: boolean;
  };
};

export interface IStyleObjType {
  styleMaxObj: IStyleMaxType;
  start: number;
  end: number;
  midRange?: [number, number];
}

export default function stylePercentGenerate(
  percentage: number,
  styleObjArr: IStyleObjType[],
  length: number,
): React.CSSProperties[] {
  if (percentage < 0 || percentage > 100) throw new Error('invalid percentage');

  const perPercentage = 100 / length;
  // console.log(perPercentage);

  // 다시 돌아간다면 (alternate) 중간이 1의 지점
  // 아니라면 마지막이 1의 지점
  const result = styleObjArr.map(({ styleMaxObj, start, end, midRange }) => {
    const currentStartPer = start * perPercentage;
    const currentEndPer = end * perPercentage;
    const currentPer = (percentage - currentStartPer) / (currentEndPer - currentStartPer);

    const currentMidRange: null | [number, number] = midRange
      ? [(midRange[0] * perPercentage) / 100, (midRange[1] * perPercentage) / 100]
      : null;
    // debugger;

    return Object.entries(styleMaxObj).reduce((acc, [key, { max, unit, alternate }]) => {
      let value = 0;
      if (currentPer < 0 || currentPer > 1) {
        value = 0;
      } else {
        // change percentage
        if (currentMidRange) {
          value = getValueByRange(max, currentPer, currentEndPer, currentMidRange, alternate);
        }
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      acc[key] = unit ? unit(value) : value;

      return acc;
    }, {} as React.CSSProperties);
  });

  return result;
}

function getValueByRange(
  max: number,
  currentPer: number,
  currentEndPer: number,
  range: [number, number],
  alternate?: boolean,
): number {
  const midMax = alternate ? max : max / 2;
  let rv = 0;
  if (range && currentPer >= range[0] && currentPer <= range[1]) {
    rv = midMax;
  } else if (range && currentPer < range[0]) {
    rv = midMax * (currentPer / range[0]);
  } else {
    rv = alternate
      ? midMax * (1 - (currentPer - range[1]) / (currentEndPer / 100 - range[1]))
      : midMax * ((currentPer - range[1]) / (currentEndPer / 100 - range[1])) + max / 2;
  }
  return rv;
}
