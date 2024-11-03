export const getColoredIcon = (icon: IconPathTypes, color: string) => {
  return {
    ...icon,
    fill: color,
  };
};
