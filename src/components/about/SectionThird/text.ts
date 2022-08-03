export interface ISkillType {
  name: string;
}

type SkillPerType = 100 | 75 | 50 | 25;

export interface ISkillGraph {
  name: string;
  description: string[];
  per: SkillPerType;
}

export const skillsFirst: ISkillType[] = [
  {
    name: 'JavaScript',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'React',
  },
  {
    name: 'Vue.js',
  },
  {
    name: 'HTML/CSS',
  },
];

export const skillsSecond: ISkillType[] = [
  {
    name: 'Java',
  },
  {
    name: 'Python',
  },
  {
    name: 'Django',
  },
  {
    name: 'Express',
  },
  {
    name: 'Docker',
  },
];

export const skillGraph: ISkillGraph[] = [
  {
    name: 'HTML/CSS',
    description: [
      'SCSS을 사용할 수 있습니다.',
      '반응형 웹을 구현하기 위해 노력합니다.',
      '애니메이션 구현을 좋아합니다.',
      '웹 표준을 지키려 노력합니다.',
    ],
    per: 75,
  },
  {
    name: 'JavaScript / TypeScript',
    description: [
      '모던 자바스크립트에 익숙합니다.',
      'TypeScript를 사용할 수 있습니다.',
      'Vanilla JS/TS를 이용하여 SPA를 구현해본 경험이 있습니다.',
      'jest, testing-library를 이용하여 테스트 코드를 작성한 경험이 있습니다.',
    ],
    per: 75,
  },
  {
    name: 'React',
    description: [
      '함수형 컴포넌트 작성에 익숙합니다.',
      'CSS-in-JS (styled-component)를 사용한 경험이 있습니다.',
      '여러가지 상태관리 라이브러리를 사용한 경험이 많습니다. (redux, recoil, react-query 등등..)',
      'Storybook을 사용한 경험이 있습니다.',
      'Next.js, Gatsby를 사용한 경험이 있습니다.',
      'React-native를 사용해본 경험이 있습니다.',
    ],
    per: 75,
  },
  {
    name: 'Vue.js',
    description: [
      'vue2, 3를 사용한 경험이 있습니다.',
      'vuex를 사용한 경험이 있습니다.',
      'Composition api를 사용한 경험이 있습니다.',
    ],
    per: 50,
  },
];
