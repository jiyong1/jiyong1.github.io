import { IStyleObjType } from '@utils/aboutStyle';
const HeadingStyle: IStyleObjType[] = [
  {
    styleMaxObj: {
      transform: {
        max: 1,
        unit: (value: number) => {
          return `scale(${1 + value})`;
        },
        alternate: true,
      },
    },
    start: 0,
    end: 1,
  },
];

export default HeadingStyle;
