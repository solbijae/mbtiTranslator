export type validMbtiType = 'ISTJ' | 'ISFJ' | 'INFJ' | 'INTJ' | 'ISTP' | 'ISFP' | 'INFP' | 'INTP' | 'ESTP' | 'ESFP' | 'ENFP' | 'ENTP' | 'ESTJ' | 'ESFJ' | 'ENFJ' | 'ENTJ';
export const validMbti: Record<validMbtiType, string> = {
  ISTJ: '체계적이고 책임감이 강하며, 전통과 규칙을 중시합니다. 실용적인 접근을 통해 효율적으로 문제를 해결합니다.',
  ISFJ: '헌신적이고 세심하며, 다른 사람들을 돌보는 데 뛰어납니다. 충성스럽고 신뢰할 수 있는 친구나 동료입니다.',
  INFJ: '통찰력과 직관력이 뛰어나며, 깊은 감정과 도덕적 신념을 지닌 이상주의자입니다. 다른 사람을 돕고자 하는 강한 열망이 있습니다.',
  INTJ: '독립적이고 분석적이며, 장기적인 목표를 위해 전략을 세우는 데 능합니다. 혁신적인 사고로 복잡한 문제를 해결합니다.',
  ISTP: '실용적이고 논리적이며, 문제 해결에 유연한 접근을 취합니다. 손으로 직접 무언가를 만드는 것을 좋아하고, 새로운 기술을 빠르게 습득합니다.',
  ISFP: '감수성이 풍부하고 개방적이며, 현재의 순간을 즐기고자 합니다. 예술적이고 창의적인 표현을 선호합니다.',
  INFP: '이상주의적이고 상상력이 풍부하며, 깊은 가치관과 감정을 가지고 있습니다. 사람들과의 진솔한 연결을 중시합니다.',
  INTP: '논리적이고 분석적이며, 새로운 아이디어와 이론을 탐구하는 것을 좋아합니다. 독립적으로 문제를 해결하는 데 능숙합니다.',
  ESTP: '적극적이고 현실적이며, 문제를 즉각적으로 해결하는 데 능숙합니다. 새로운 경험을 추구하고, 모험을 즐깁니다.',
  ESFP: '사람들과의 상호작용을 즐기며, 현재의 순간을 즐기고자 합니다. 활발하고 재미있는 활동을 선호합니다.',
  ENFP: '열정적이고 창의적이며, 다양한 가능성을 탐색하는 것을 좋아합니다. 사람들과의 깊은 관계를 중요시합니다.',
  ENTP: '혁신적이고 논리적이며, 새로운 아이디어와 가능성을 탐구하는 데 능합니다. 문제를 해결하는 독특한 접근 방식을 선호합니다.',
  ESTJ: '실용적이고 조직적이며, 목표를 달성하기 위해 체계적인 계획을 세웁니다. 리더십을 발휘하며 책임을 중시합니다.',
  ESFJ: '사람들과의 조화로운 관계를 중요시하며, 친절하고 배려가 깊습니다. 사회적이고 공동체를 중시하는 성향이 있습니다.',
  ENFJ: '이상적이고 영감을 주며, 다른 사람의 잠재력을 끌어내는 데 능합니다. 관계를 중시하고 사회적 조화를 추구합니다.',
  ENTJ: '자신감이 넘치고 전략적이며, 목표를 달성하기 위해 강력한 리더십을 발휘합니다. 복잡한 문제를 해결하는 데 능숙합니다.'
};