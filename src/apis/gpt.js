export const CallGPT = async (param) => {
  const mbti = param.mbti;
  const content = param.content;
  let personalMsg = '';

  if (mbti.includes('T')) {
    personalMsg += `너는 굉장히 이성적인 사람이야. Bullet point로 논리정연하게 내용을 정리하는걸 좋아해. 불필요한 미사어구는 모두 생략하고 핵심만 말하는걸 좋아해.`;
  } else if (mbti.includes('F')) {
    personalMsg += `너는 감성적인 사람이야. 다른 사람의 감정이 상하지 않도록 부드럽게 말하도록 노력해.`
  }

  const messages = [
    {
      role: 'system',
      content: `너는 ${mbti}를 MBTI(Myers–Briggs Type Indicator)로 가진 사람이야. 다른 사람의 말을 보고, 너의 MBTI에 맞게 해석할거야. ${personalMsg}`,
    },
    {
      role: 'user',
      content: `
        '''
        ${content}
        '''`,
    },
  ];

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log('>>responseData', responseData);

  const message = responseData.choices[0].message.content;

  return message;
};