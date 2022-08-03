interface IExperienceProject {
  content: string;
  github?: string;
  youtube?: string;
  link?: string;
}

export interface IExperienceType {
  header: string;
  date: string;
  description: string;
  projects: IExperienceProject[];
}

const experiences: IExperienceType[] = [
  {
    header: '🏫  서울과학기술대학교',
    date: '2014.03 ~ 2021.02',
    description:
      '서울과학기술대학교 기계시스템디자인공학과를 졸업하였습니다. 학부 생활동안 임베디드시스템 개발을 위주로 학습 및 프로젝트를 경험하였으며, 주로 Python, C언어와 OpenCV를 사용하였습니다.',
    projects: [
      {
        content: 'Nesting 자동화 프로젝트 (부재 배치 최적화 프로젝트)',
      },
      {
        content: '모바일 로봇의 정적 및 동적 장애물 회피 기술 개발 (캡스톤 디자인)',
      },
    ],
  },
  {
    header: '👶  삼성 청년 SW 아카데미 (SSAFY)',
    date: '2021.01 ~ 2021.06',
    description: `알고리즘 및 자료구조 등의 개발자에게 필요한 기본적인 CS 지식 뿐만 아니라, 웹 개발에 필요한 기술을 학습하였습니다.
      또한, Vue.js, Django 등을 이용하여 몇 번의 팀 프로젝트를 경험하였습니다.`,
    projects: [
      {
        content: 'SSAFY 5기 1학기 성적 우수상 수상',
      },
      {
        content: '영화 리뷰 커뮤니티 서비스 개발 프로젝트 (프로젝트 우수상 수상)',
        github: 'https://github.com/jiyong1/movwe-community',
      },
    ],
  },
  {
    header: '🧑‍💻  우아한 테크캠프 (FE intern)',
    date: '2021.07 ~ 2021.08',
    description:
      '우아한형제들에서 진행하는 웹 프론트엔드 중심의 풀스택 개발 교육형 인턴 프로그램에 참여하였습니다. 이를 통해 JavaScript, TypeScript 등의 프론트엔드 개발자에게 필수적인 기술 역량을 쌓을 수 있었을 뿐만 아니라, 팀원들과 함께 코드 리뷰 등을 해보면서 협업을 경험해 볼 수 있었습니다.',
    projects: [
      {
        content: 'Vanilla JS를 이용한 중고마켓 서비스 개발 (Mobile UI)',
        github: 'https://github.com/woowa-techcamp-2021/deal-11',
        youtube: 'https://youtu.be/tEZeh8e3ugg',
      },
      {
        content: 'Vanilla JS, TS를 이용한 가계부 서비스 개발',
        github: 'https://github.com/woowa-techcamp-2021/cashbook-20',
        youtube: 'https://youtu.be/yJQcP3Mo_HQ',
      },
      {
        content: 'React를 이용한 배민 문방구 서비스 클론 프로젝트',
        github: 'https://github.com/woowa-techcamp-2021/store-1',
        youtube: 'https://youtu.be/IZD_atKAjwE',
      },
    ],
  },
  {
    header: '💻 라프텔 프론트엔드 개발자',
    date: '2022.02 ~',
    description: '라프텔의 웹과 앱을 개발하는 프론트엔드 엔지니어로 활동하고 있습니다.',
    projects: [
      {
        content: 'React를 이용하여 라프텔 웹을 개발합니다.',
        link: 'https://laftel.net',
      },
      {
        content: 'React-native를 이용하여 라프텔 앱을 개발합니다.',
      },
    ],
  },
];

export default experiences;
