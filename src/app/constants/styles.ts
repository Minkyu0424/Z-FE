export const BUTTON_STYLE = {
  default: (className: string) => `w-full ${className}`,
  signUp: (className: string) => `w-full bg-main-1 text-white h-10 rounded-lg ${className}`,
  post: (className: string) =>
    `w-10 h-5 py-0.5 bg-[#333] text-white rounded-[15px] text-[10px] font-medium ${className}`,
} as const;

export const INPUT_STYLE = {
  default: (className: string) => `w-full ${className}`,
  comment: (className: string) => `w-[255px] pl-2.5 h-10 text-sm outline-none ${className}`,
} as const;
