import { getColoredIcon } from '../utils/getColoredIcon';
import { followersIcon, homeIcon, messageIcon, profileIcon, searchIcon } from './iconPath';

export const DAYS_OF_WEEEK = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];

export const SIDEBAR_ICONS = [homeIcon, followersIcon, messageIcon, searchIcon, profileIcon];

export const SIDEBAR_ICONS_SELECTED = SIDEBAR_ICONS.map((icon) => getColoredIcon(icon, 'black'));

export const SIDEBAR_PATHS = ['/', '/followers', '/messages', '/search', '/profile'];
