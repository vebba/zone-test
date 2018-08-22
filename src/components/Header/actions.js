export const MENU_OPEN = 'MENU_OPEN';
export const SIDE_BAR_OPEN = 'SIDE_BAR_OPEN';

export const onMenuClick = menu => ({type: MENU_OPEN, menu});
export const openSideBar = () => ({type: SIDE_BAR_OPEN});
