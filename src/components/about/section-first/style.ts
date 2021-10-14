import { IStyleObjType } from '@utils/aboutStyle';
const sectionFirstStyle: IStyleObjType[] = [
  {
    styleMaxObj: {
      transform: {
        max: 100,
        unit: (value: number): string => {
          return `translateY(${value}%)`;
        },
        alternate: true,
      },
    },
    start: 0,
    midRange: [2, 14],
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
      transform: {
        max: 15,
        unit: (value: number): string => {
          return `translateY(${-50 - value}%)`;
        },
        alternate: false,
      },
    },
    start: 4,
    end: 7,
    midRange: [5, 6],
  },
  {
    styleMaxObj: {
      opacity: {
        max: 1,
        alternate: true,
      },
      transform: {
        max: 15,
        unit: (value: number): string => {
          return `translateY(${-50 - value}%)`;
        },
        alternate: false,
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
      transform: {
        max: 15,
        unit: (value: number): string => {
          return `translateY(${-50 - value}%)`;
        },
        alternate: false,
      },
    },
    start: 10,
    midRange: [11, 12],
    end: 13,
  },
];

export default sectionFirstStyle;
