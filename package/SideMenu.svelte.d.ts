import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        top?: string;
        active?: boolean;
        right?: boolean;
        theme?: string;
        nub?: string;
        links?: ({
            text: string;
            path?: undefined;
        } | {
            path: string;
            text: string;
        })[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SideMenuProps = typeof __propDef.props;
export declare type SideMenuEvents = typeof __propDef.events;
export declare type SideMenuSlots = typeof __propDef.slots;
export default class SideMenu extends SvelteComponentTyped<SideMenuProps, SideMenuEvents, SideMenuSlots> {
}
export {};
