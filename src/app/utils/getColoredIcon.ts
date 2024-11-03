const getColoredIcon = (icon: IconPathTypes, color: string) => {
  return {
    ...icon,
    options: {
      ...icon.options,
      stroke: color,
    },
  };
};
