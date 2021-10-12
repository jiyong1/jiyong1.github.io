import { IStyleObjType } from '@utils/aboutStyle';
const sectionFirstStyle: IStyleObjType[] = [
  {
    styleMaxObj: {
      position: {
        max: 10,
        unit: (value: number): string => {
          if (value > 0) return 'fixed';
          else return 'static';
        },
      },
    },
    start: 0,
    midRange: [2, 13],
    end: 15,
  },
  {
    styleMaxObj: {
      transform: {
        max: 100,
        unit: (value: number): string => {
          return `translateX(${value}%)`;
        },
        alternate: true,
      },
    },
    start: 0,
    midRange: [2, 13],
    end: 15,
  },
  {
    styleMaxObj: {
      transform: {
        max: 100,
        unit: (value: number): string => {
          return `translateX(-${value}%)`;
        },
        alternate: true,
      },
    },
    start: 0,
    midRange: [2, 13],
    end: 15,
  },
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
    start: 2,
    end: 14,
    midRange: [3, 13],
  },
  {
    styleMaxObj: {
      opacity: {
        max: 1,
        alternate: true,
      },
    },
    start: 3,
    end: 7,
    midRange: [5, 6],
  },
  {
    styleMaxObj: {
      opacity: {
        max: 1,
        alternate: true,
      },
    },
    start: 7,
    midRange: [8, 9],
    end: 10,
  },
  {
    styleMaxObj: {
      opacity: {
        max: 1,
        alternate: true,
      },
    },
    start: 10,
    midRange: [11, 12],
    end: 13,
  },
];

export default sectionFirstStyle;
