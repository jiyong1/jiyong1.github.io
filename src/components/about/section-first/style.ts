import { IStyleObjType } from '@utils/aboutStyle';
const textStyle: IStyleObjType[] = [
  {
    styleMaxObj: {
      opacity: {
        max: 1,
        alternate: true,
      },
      transform: {
        max: 20,
        unit: (value: number): string => {
          return `translateY(${-value}%)`;
        },
        alternate: false,
      },
    },
    start: 0,
    end: 12,
    midRange: [1, 11],
  },
  {
    styleMaxObj: {
      opacity: {
        max: 1,
        alternate: true,
      },
    },
    start: 1,
    end: 5,
    midRange: [3, 4],
  },
  {
    styleMaxObj: {
      opacity: {
        max: 1,
        alternate: true,
      },
    },
    start: 5,
    midRange: [6, 7],
    end: 8,
  },
  {
    styleMaxObj: {
      opacity: {
        max: 1,
        alternate: true,
      },
    },
    start: 8,
    midRange: [9, 10],
    end: 11,
  },
];

export default textStyle;
