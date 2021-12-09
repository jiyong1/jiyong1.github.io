import stylePercentGenerate from './style';
import type { IStyleObjType } from './style';

describe('style generate function test', () => {
  const fixture: IStyleObjType[] = [
    {
      styleMaxObj: {
        transform: {
          max: 100,
        },
      },
      start: 0,
      end: 1,
    },
  ];

  it('percent는 0이상 100 이하이어야 합니다.', () => {
    expect(() => {
      stylePercentGenerate(101, fixture, 1);
    }).toThrow();
  });

  it('max: 100, length: 1, percent: 40% 일때 value 40을 전달합니다.', () => {
    const result = stylePercentGenerate(40, fixture, 1);
    expect(result).toMatchObject([{ transform: 40 }]);
  });

  it('alternate test', () => {
    const fixture: IStyleObjType[] = [
      {
        styleMaxObj: {
          transform: {
            max: 100,
            alternate: true,
          },
        },
        start: 0,
        end: 1,
      },
    ];
    const result = stylePercentGenerate(100, fixture, 1);
    expect(result).toMatchObject([{ transform: 0 }]);
  });

  it('mid range test', () => {
    const fixture: IStyleObjType[] = [
      {
        styleMaxObj: {
          transform: {
            max: 100,
            alternate: true,
          },
        },
        midRange: [10, 90],
        start: 0,
        end: 100,
      },
    ];
    const { transform: result } = stylePercentGenerate(6, fixture, 100)[0];
    expect(result).toEqual(60);
  });
});
