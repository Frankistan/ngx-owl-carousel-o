export declare class ResponsiveSettings {
    [key: number]: {
        items: number;
    };
}
export declare class OwlOptions {
    /**
     * The number of items you want to see on the screen.
     */
    items?: number;
    /**
     * Infinity loop. Duplicate last and first items to get loop illusion.
     */
    loop?: boolean;
    /**
     * Center item. Works well with even an odd number of items.
     */
    center?: boolean;
    /**
     * Go backwards when the boundary has reached.
     */
    rewind?: boolean;
    /**
     * Mouse drag.
     */
    mouseDrag?: boolean;
    /**
     * Touch drag
     */
    touchDrag?: boolean;
    /**
     * Stage pull to edge
     */
    pullDrag?: boolean;
    /**
     * Item pull to edge.
     */
    freeDrag?: boolean;
    /**
     * margin-right(px) on item
     */
    margin?: number;
    /**
     * Padding left and right on stage (can see neighbours)
     */
    stagePadding?: number;
    /**
     * Merge items. Works with @Input option 'dataMerge' of CarouselSlideDirective.
     */
    merge?: boolean;
    /**
     * Fit merged items if screen is smaller than items value.
     */
    mergeFit?: boolean;
    /**
     * Set non grid content.  Works with @Input option 'width' of CarouselSlideDirective.
     */
    autoWidth?: boolean;
    /**
     * Start position
     */
    startPosition?: number | string;
    /**
     * Change direction from Right to left
     */
    rtl?: boolean;
    /**
     * Speed Calculate while dragging
     */
    smartSpeed?: number;
    /**
     * Speed Calculate while dragging
     */
    fluidSpeed?: boolean;
    /**
     * Drag end speed
     */
    dragEndSpeed?: number | boolean;
    /**
     * Object containing responsive options. Can be set to false to remove responsive capabilities.
     */
    responsive?: ResponsiveSettings;
    /**
     * Responsive refresh rate. Period of time between firing 'resize' event and refreshing carousel.
     */
    responsiveRefreshRate?: number;
    /**
     * Show next/prev buttons.
     */
    nav?: boolean;
    /**
     * Text in next/prev buttons. HTML allowed.
     */
    navText?: string[];
    /**
     * Navigation speed
     */
    navSpeed?: number | boolean;
    /**
     * Navigation slide by x. 'page' string can be set to slide by page.
     */
    slideBy?: number | string;
    /**
     * Show dots navigation
     */
    dots?: boolean;
    /**
     * Show dots each x item
     */
    dotsEach?: number | boolean;
    /**
     * Used with @Input option 'dotContent' of CarouselSlideDirective.
     */
    dotsData?: boolean;
    /**
     * Pagination speed.
     */
    dotsSpeed?: number | boolean;
    /**
     * Autoplay.
     */
    autoplay?: boolean;
    /**
     * Autoplay interval timeout
     */
    autoplayTimeout?: number;
    /**
     * Pause on mouse hover
     */
    autoplayHoverPause?: boolean;
    /**
     * Autoplay speed
     */
    autoplaySpeed?: number | boolean;
    /**
     * Lazy loading of slides with images
     */
    lazyLoad?: boolean;
    /**
     * Indicates how many items (slides with images) to the right (and left, when loop is true) will be pre-loaded
     */
    lazyLoadEager?: number;
    /**
     * Class for CSS3 animation out.
     */
    animateOut?: string | boolean;
    /**
     * Class for CSS3 animation in.
     */
    animateIn?: string | boolean;
    /**
     * Enables changing carousel according to the biggest height of ass active slides providing slides have different height
     */
    autoHeight?: boolean;
    /**
     * Enables listening to url hash (fragment) changes
     */
    URLhashListener?: boolean;
    constructor();
}
