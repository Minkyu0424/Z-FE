export const BUTTON_STYLE = {
  default: (className: string) => `w-full ${className}`,
  signUp: (className: string) => `w-full bg-main-1 text-white h-10 rounded-lg ${className}`,
  post: (className: string) =>
    `w-10 h-5 py-0.5 bg-[#333] text-white rounded-[15px] text-[10px] font-medium ${className}`,
  repost: (className: string) =>
    `w-[68px] h-8 py-2 px-3 bg-white text-black rounded-[15px] text-xs font-medium ${className}`,
  profile: (className: string) =>
    `w-[60px] h-7 py-1 px-3 bg-main-0 text-white rounded-[15px] text-[11px] font-medium ${className}`,
  deleteModal: (className: string) => `w-full h-8 flex-center rounded-xl text-[11px] font-semibold ${className}`,
} as const;

export const INPUT_STYLE = {
  default: (className: string) => `w-full pl-8 px-3 h-8 rounded border border-main-2 text-xs outline-none ${className}`,
  newChat: (className: string) =>
    `w-full h-10 text-xs outline-none border-b border-[#ececec] pl-[30px] bg-black ${className}`,
  comment: (className: string) => `w-[255px] h-10 text-sm outline-none ${className}`,
  message: (className: string) => `w-[260px] h-7 text-sm outline-none bg-main-4 ${className}`,
} as const;
