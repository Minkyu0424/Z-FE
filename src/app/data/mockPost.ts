import PostTypes from "@/app/_types/main/PostTypes";
export const mockPosts: PostTypes[] = [
  {
    profile: '/mock/profile2.png',
    userId: 'user1',
    nickname: '투자초보',
    tag: '주식',
    createdAt: '2024-11-01',
    content: `오늘 처음으로 주식에 투자했어요! 주식 시장에 대한 지식이 거의 없어서 공부해야 할 게 많지만, 조금씩 배워가고 있는 기분이 듭니다. 
                처음에는 막연한 두려움도 있었는데, 막상 시작하니 오히려 재미있네요. 앞으로 어떻게 될지는 모르겠지만 꾸준히 해보려고요! 
                소액부터 천천히 시작해서 실수를 줄이는 게 목표입니다. 주식 투자하면서 생기는 생각이나 팁도 공유할게요. 함께 성장해봐요!`,
    totalLikes: 23,
    totalComment: 5,
    files: ['/mock/content.jpeg'],
  },
  {
    profile: '/mock/profile1.png',
    userId: 'user2',
    nickname: '재테크러',
    tag: '부동산',
    createdAt: '2024-10-30',
    content: `부동산에 대한 다양한 정보를 모아서 올려봅니다! 최근 부동산 가격이 어떻게 변동하고 있는지, 시장 상황이 어떤지 궁금해하시는 분들이 많더라고요.
                그래서 저도 공부하는 김에 이렇게 기록을 남겨보려 해요. 집을 구매할 때 고려해야 할 점이나, 지역별 트렌드 같은 것도 정리해봤어요.
                초기 자본이 부족한 분들을 위한 재테크 팁도 자주 올려볼게요. 부동산에 관심이 많으신 분들, 정보 공유하고 싶으신 분들 모두 환영합니다!`,
    totalLikes: 45,
    totalComment: 12,
    files: ['/mock/content3.jpeg', '/mock/content2.png'],
  },
  {
    profile: '/mock/profile3.png',
    userId: 'user3',
    nickname: '주식왕',
    tag: '투자',
    createdAt: '2024-10-25',
    content: `최근 주식 시장의 트렌드를 분석하면서 몇 가지 유의할 점을 발견했어요. 여러 종목들의 흐름을 보니 하락세를 보이는 종목도 있고, 
                반대로 꾸준히 상승하는 종목들도 있습니다. 저는 앞으로 몇 주간의 시장 변동에 큰 영향을 줄 이슈들을 정리해서 여러분과 공유해볼까 해요.
                물론 정확한 예측은 어렵겠지만, 함께 알아가면 더 좋은 결과를 얻을 수 있을 거라 생각합니다. 투자자 여러분들, 화이팅입니다!`,
    totalLikes: 67,
    totalComment: 20,
    files: ['/mock/content3.jpeg'],
  },
  {
    profile: '/mock/profile1.png',
    userId: 'user4',
    nickname: '초보 부자',
    tag: '경제',
    createdAt: '2024-10-20',
    content: `최근에 경제 뉴스들을 자주 읽으면서 소감을 공유해보고 있어요. 경제 지식이 아직 부족한데, 뉴스를 읽다 보면 알게 되는 게 많네요.
                요즘 같은 시대에는 경제 흐름을 이해하는 게 중요한 것 같아서 꾸준히 공부하려고 합니다. 경제와 관련된 용어나 개념이 어려워서 
                처음엔 혼란스럽기도 했지만, 이제 조금씩 익숙해지고 있어요. 함께 경제를 공부하면서 지식을 쌓아가면 좋겠네요. 오늘도 파이팅!`,
    totalLikes: 15,
    totalComment: 3,
    files: ['/mock/content.jpeg'],
  },
];
