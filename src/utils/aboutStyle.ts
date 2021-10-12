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
  order: number;
}

export default function stylePercentGenerate(
  percentage: number,
  styleObjArr: IStyleObjType[],
  stop?: number,
): React.CSSProperties[] {
  if (percentage < 0 || percentage > 100) throw new Error('invalid percentage');
  if (stop && (stop < 0 || stop >= 100)) throw new Error('invalid stop number');

  const notKeepArrLength = styleObjArr.filter(({ order }) => {
    if (!order) return false;
    return true;
  }).length;

  const perPercentage = 100 / (notKeepArrLength + 2);
  // console.log(perPercentage);

  // 다시 돌아간다면 (alternate) 중간이 1의 지점
  // 아니라면 마지막이 1의 지점
  const result = styleObjArr.map(({ styleMaxObj, order }) => {
    const currentStartPer = !order ? 0 : (order + 1) * perPercentage;
    const currentEndPer = !order ? 100 : (order + 2) * perPercentage;
    const currentPer = (percentage - currentStartPer) / (currentEndPer - currentStartPer);
    const currentMid = (currentStartPer + currentEndPer) / 2;
    let currentMidRange: null | [number, number];

    if (!order) {
      currentMidRange = [perPercentage / 100, ((notKeepArrLength + 1) * perPercentage) / 100];
    } else if (stop) {
      const relativeStop = stop / perPercentage;
      currentMidRange = [(currentMid - relativeStop / 2) / 100, (currentMid + relativeStop / 2) / 100];
    }
    // debugger;

    return Object.entries(styleMaxObj).reduce((acc, [key, { max, unit, alternate }]) => {
      let value = 0;
      if (order === 0 && currentMidRange) {
        value = getValueByRange(max, currentPer, currentEndPer, currentMidRange, alternate);
      }
      if (currentPer < 0) {
        value = 0;
      } else if (currentPer >= 1) {
        value = 0;
      } else {
        // change percentage
        if (!stop && !alternate) value = currentPer * max;
        else if (!stop && alternate) {
          value = currentPer > 0.5 ? (1 - currentPer) * max : currentPer * 2 * max;
        } else if (currentMidRange) {
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
