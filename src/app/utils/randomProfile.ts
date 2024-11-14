export const getRandomProfileImage = () => {
  const randomNumber = Math.floor(Math.random() * 15) + 1; // 1부터 12 사이의 숫자 생성
  return `/mock/profile${randomNumber}.png`;
};
