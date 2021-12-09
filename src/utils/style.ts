import React from 'react';

type IStyleMaxType = {
  [key in keyof React.CSSProperties]: {
    max: number;
    unit?: (value: number) => string;
    alternate?: boolean;
    keep?: boolean;
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

    return Object.entries(styleMaxObj).reduce((acc, [key, { max, unit, alternate, keep }]) => {
      let value = 0;
      if (currentPer > 1 && keep) {
        value = max;
      } else if (currentPer > 0 && currentPer <= 1) {
        // change percentage
        if (currentMidRange) {
          value = getValueByRange(max, percentage, currentStartPer, currentEndPer, currentMidRange, alternate);
        } else {
          if (alternate) {
            value = currentPer < 0.5 ? currentPer * max * 2 : (1 - currentPer) * max * 2;
          } else {
            value = currentPer * max;
          }
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
  percentage: number,
  currentStartPer: number,
  currentEndPer: number,
  range: [number, number],
  alternate?: boolean,
): number {
  const per = percentage / 100;
  const midMax = alternate ? max : max / 2;
  let rv = 0;
  if (per >= range[0] && per <= range[1]) {
    rv = midMax;
  } else if (per < range[0]) {
    rv = midMax * ((per - currentStartPer / 100) / (range[0] - currentStartPer / 100));
  } else {
    rv = alternate
      ? midMax * (1 - (per - range[1]) / (currentEndPer / 100 - range[1]))
      : midMax * ((per - range[1]) / (currentEndPer / 100 - range[1])) + max / 2;
  }
  return rv;
}
