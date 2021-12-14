import { IStyleObjType } from '@utils/style';

const slideStyle: IStyleObjType[] = [
  {
    styleMaxObj: {
      transform: {
        max: 120,
        unit: (value: number) => {
          return `translateX(-${value}%)`;
        },
        keep: true,
      },
    },
    start: 0,
    end: 1,
  },
  {
    styleMaxObj: {
      transform: {
        max: 120,
        unit: (value: number) => {
          return `translateX(${value}%)`;
        },
        keep: true,
      },
    },
    start: 0,
    end: 1,
  },
];

export default slideStyle;
