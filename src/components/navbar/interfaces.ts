interface MenuItemCommandEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Selected item instance.
     */
    item: MenuItem;
}

export interface MenuItem {
    /**
     * Unique identifier of the menuitem.
     */
    id?: string | undefined;
    /**
     * Text of the menuitem.
     */
    label?: string | undefined;
    /**
     * Icon of the item. It can be a string, JSX.Element or method.
     */
    icon?: any | undefined;
    /**
     * External link to navigate when item is clicked.
     */
    url?: string | undefined;
    /**
     * An array of children the menuitems.
     */
    items?: MenuItem[] | MenuItem[][] | undefined;
    /**
     * Visibility of submenu.
     * @defaultValue false
     */
    expanded?: boolean | undefined;
    /**
     * When set as true, disables the menuitem.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When set as false, hides the menuitem.
     * @defaultValue true
     */
    visible?: boolean | undefined;
    /**
     * Specifies where to open the linked document.
     */
    target?: string | undefined;
    /**
     * Defines the item as a separator.
     * @defaultValue false
     */
    separator?: boolean | undefined;
    /**
     * Inline style of the menuitem.
     */
    style?: React.CSSProperties | undefined;
    /**
     * Style class of the menuitem.
     */
    className?: string | undefined;
    /**
     * Callback to execute when item is clicked.
     * @param {MenuItemCommandEvent} event - Custom command event.
     */
    command?(): void;
    /**
     * Template of the menuitem.
     */
    // template?: React.ReactNode | ((item: MenuItem, options: MenuItemOptions) => React.ReactNode);
    /**
     * The data of the menuitem.
     */
    data?: any | undefined;
}
