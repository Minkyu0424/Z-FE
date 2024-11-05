  //일부 아이콘 중 상호작용에 의해 색이 입혀지거나 디자인이 달라지는 아이콘을 위한 util함수

export const getColoredIcon = (icon: IconPathTypes, color: string) => {
  return {
    ...icon,
    fill: color,
  };
};
