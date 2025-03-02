export default class Lenis {
    /**
     * @typedef {(t: number) => number} EasingFunction
     * @typedef {'vertical' | 'horizontal'} Orientation
     * @typedef {'vertical' | 'horizontal' | 'both'} GestureOrientation
     *
     * @typedef LenisOptions
     * @property {Orientation} [direction]
     * @property {GestureOrientation} [gestureDirection]
     * @property {number} [mouseMultiplier]
     * @property {boolean} [smooth]
     *
     * @property {Window | HTMLElement} [wrapper]
     * @property {HTMLElement} [content]
     * @property {boolean} [smoothWheel]
     * @property {boolean} [smoothTouch]
     * @property {number} [duration]
     * @property {EasingFunction} [easing]
     * @property {number} [lerp]
     * @property {boolean} [infinite]
     * @property {Orientation} [orientation]
     * @property {GestureOrientation} [gestureOrientation]
     * @property {number} [touchMultiplier]
     * @property {number} [wheelMultiplier]
     * @property {boolean} [normalizeWheel]
     *
     * @param {LenisOptions}
     */
    constructor({ direction, gestureDirection, mouseMultiplier, smooth, wrapper, content, smoothWheel, smoothTouch, duration, easing, lerp, infinite, orientation, gestureOrientation, touchMultiplier, wheelMultiplier, normalizeWheel, }?: {
        direction?: "vertical" | "horizontal";
        gestureDirection?: "vertical" | "horizontal" | "both";
        mouseMultiplier?: number;
        smooth?: boolean;
        wrapper?: Window | HTMLElement;
        content?: HTMLElement;
        smoothWheel?: boolean;
        smoothTouch?: boolean;
        duration?: number;
        easing?: (t: number) => number;
        lerp?: number;
        infinite?: boolean;
        orientation?: "vertical" | "horizontal";
        gestureOrientation?: "vertical" | "horizontal" | "both";
        touchMultiplier?: number;
        wheelMultiplier?: number;
        normalizeWheel?: boolean;
    });
    options: {
        wrapper: Window | HTMLElement;
        content: HTMLElement;
        smoothWheel: boolean;
        smoothTouch: boolean;
        duration: number;
        easing: (t: number) => number;
        lerp: number;
        infinite: boolean;
        gestureOrientation: "vertical" | "horizontal" | "both";
        orientation: "vertical" | "horizontal";
        touchMultiplier: number;
        wheelMultiplier: number;
        normalizeWheel: boolean;
    };
    wrapper: ObservedElement;
    content: ObservedElement;
    velocity: number;
    set isStopped(arg: any);
    get isStopped(): any;
    set isSmooth(arg: any);
    get isSmooth(): any;
    set isScrolling(arg: any);
    get isScrolling(): any;
    targetScroll: any;
    animatedScroll: any;
    animate: Animate;
    emitter: import("nanoevents").Emitter<import("nanoevents").DefaultEvents>;
    virtualScroll: VirtualScroll;
    destroy(): void;
    on(event: any, callback: any): import("nanoevents").Unsubscribe;
    off(event: any, callback: any): void;
    setScroll(scroll: any): void;
    onVirtualScroll: ({ type, deltaX, deltaY, event }: {
        type: any;
        deltaX: any;
        deltaY: any;
        event: any;
    }) => void;
    emit(): void;
    onScroll: () => void;
    direction: number;
    reset(): void;
    isLocked: boolean;
    start(): void;
    stop(): void;
    raf(time: any): void;
    time: any;
    scrollTo(target: any, { offset, immediate, lock, duration, easing, lerp, onComplete, force, programmatic, }?: {
        offset?: number;
        immediate?: boolean;
        lock?: boolean;
        duration?: number;
        easing?: (t: number) => number;
        lerp?: number;
        onComplete: any;
        force?: boolean;
        programmatic?: boolean;
    }): void;
    get rootElement(): any;
    get limit(): number;
    get isHorizontal(): boolean;
    get actualScroll(): any;
    get scroll(): any;
    get progress(): number;
    __isSmooth: any;
    __isScrolling: any;
    __isStopped: any;
}
import { ObservedElement } from "./observed-element";
import { Animate } from "./animate";
import { VirtualScroll } from "./virtual-scroll.js";
