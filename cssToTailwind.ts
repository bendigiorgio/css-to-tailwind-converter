import * as fs from "fs";

export type CssRules = {
  [key: string]: string;
};

type TailwindRules = {
  [key: string]: string[];
};

function parseCssProperties(cssString: string): { [key: string]: string } {
  const properties: { [key: string]: string } = {};
  const cssPropsRegex = /([\w-]+)\s*:\s*([^;]+);/g;

  let match;
  while ((match = cssPropsRegex.exec(cssString))) {
    properties[match[1]] = match[2].trim();
  }

  return properties;
}

function cssPropToTailwind(prop: string, value: string): string | null {
  // You'll need to implement the conversion logic for all CSS properties.
  // This is just a simple example with two properties.

  //LAYOUT
  if (prop === "aspect-ration") {
    if (value === "1/1") {
      return "aspect-square";
    } else if (value === "16/9") {
      return "aspect-video";
    } else if (value === "auto") {
      return "aspect-auto";
    }
  } else if (prop === "columns") {
    if (Number(value) >= 1 && Number(value) <= 12) {
      return `columns-${value}`;
    }
    switch (value) {
      case "auto":
        return "columns-auto";
      case "16rem":
        return "columns-3xs";
      case "18rem":
        return "columns-2xs";
      case "20rem":
        return "columns-xs";
      case "24rem":
        return "columns-sm";
      case "28rem":
        return "columns-md";
      case "32rem":
        return "columns-lg";
      case "36rem":
        return "columns-xl";
      case "42rem":
        return "columns-2xl";
      case "48rem":
        return "columns-3xl";
      case "56rem":
        return "columns-4xl";
      case "64rem":
        return "columns-5xl";
      case "72rem":
        return "columns-6xl";
      case "80rem":
        return "columns-7xl";
      default:
        `columns-${value}`;
    }
  } else if (prop === "break-after") {
    switch (value) {
      case "auto":
        return "break-auto";
      case "avoid":
        return "break-avoid";
      case "always":
        return "break-all";
      case "all":
        return "break-all";
      case "left":
        return "break-left";
      case "right":
        return "break-right";
      case "page":
        return "break-page";
      case "column":
        return "break-column";
      case "avoid-page":
        return "break-avoid-page";
      case "avoid-column":
        return "break-avoid-column";
    }
  } else if (prop === "break-before") {
    switch (value) {
      case "auto":
        return "break-auto";
      case "avoid":
        return "break-avoid";
      case "always":
        return "break-all";
      case "all":
        return "break-all";
      case "left":
        return "break-left";
      case "right":
        return "break-right";
      case "page":
        return "break-page";
      case "column":
        return "break-column";
      case "avoid-page":
        return "break-avoid-page";
      case "avoid-column":
        return "break-avoid-column";
    }
  } else if (prop === "break-inside") {
    switch (value) {
      case "auto":
        return "break-auto";
      case "avoid":
        return "break-avoid";
      case "avoid-page":
        return "break-avoid-page";
      case "avoid-column":
        return "break-avoid-column";
    }
  } else if (prop === "box-decoration-break") {
    switch (value) {
      case "slice":
        return "decoration-slice";
      case "clone":
        return "decoration-clone";
    }
  } else if (prop === "box-sizing") {
    switch (value) {
      case "content-box":
        return "box-content";
      case "border-box":
        return "box-border";
    }
  } else if (prop === "display") {
    switch (value) {
      case "block":
        return "block";
      case "inline-block":
        return "inline-block";
      case "inline":
        return "inline";
      case "flex":
        return "flex";
      case "inline-flex":
        return "inline-flex";
      case "grid":
        return "grid";
      case "inline-grid":
        return "inline-grid";
    }
  } else if (prop === "float") {
    switch (value) {
      case "none":
        return "float-none";
      case "left":
        return "float-left";
      case "right":
        return "float-right";
    }
  } else if (prop === "clear") {
    switch (value) {
      case "none":
        return "clear-none";
      case "left":
        return "clear-left";
      case "right":
        return "clear-right";
      case "both":
        return "clear-both";
    }
  } else if (prop === "position") {
    switch (value) {
      case "static":
        return "static";
      case "relative":
        return "relative";
      case "absolute":
        return "absolute";
      case "fixed":
        return "fixed";
      case "sticky":
        return "sticky";
    }
  } else if (
    prop === "top" ||
    prop === "right" ||
    prop === "bottom" ||
    prop === "left"
  ) {
    return `${prop}-${value}`;
  } else if (prop === "visibility") {
    switch (value) {
      case "visible":
        return "visible";
      case "hidden":
        return "invisible";
    }
  } else if (prop === "z-index") {
    return `z-${value}`;
  } else if (prop === "flex-basis") {
    return `flex-basis-${value}`;
  } else if (prop === "flex-direction") {
    switch (value) {
      case "row":
        return "flex-row";
      case "row-reverse":
        return "flex-row-reverse";
      case "column":
        return "flex-col";
      case "column-reverse":
        return "flex-col-reverse";
    }
  } else if (prop === "flex-wrap") {
    switch (value) {
      case "nowrap":
        return "flex-nowrap";
      case "wrap":
        return "flex-wrap";
      case "wrap-reverse":
        return "flex-wrap-reverse";
    }
  } else if (prop === "flex") {
    return `flex-${value}`;
  } else if (prop === "flex-grow") {
    return `flex-grow-${value}`;
  } else if (prop === "flex-shrink") {
    return `flex-shrink-${value}`;
  } else if (prop === "order") {
    return `order-${value}`;
  } else if (prop === "grid-template-columns") {
    return `grid-cols-${value}`;
  } else if (prop === "grid-column-start" || prop === "grid-column-end") {
    return `col-${value}`;
  } else if (prop === "grid-template-rows") {
    return `grid-rows-${value}`;
  } else if (prop === "grid-row-start" || prop === "grid-row-end") {
    return `row-${value}`;
  } else if (prop === "grid-auto-flow") {
    switch (value) {
      case "row":
        return "grid-flow-row";
      case "column":
        return "grid-flow-col";
      case "dense":
        return "grid-flow-dense";
    }
  } else if (prop === "grid-auto-columns") {
    return `auto-cols-${value}`;
  } else if (prop === "grid-auto-rows") {
    return `auto-rows-${value}`;
  } else if (prop === "gap") {
    return `gap-${value}`;
  } else if (prop === "justify-content") {
    switch (value) {
      case "start":
        return "justify-start";
      case "end":
        return "justify-end";
      case "center":
        return "justify-center";
      case "space-between":
        return "justify-between";
      case "space-around":
        return "justify-around";
      case "space-evenly":
        return "justify-evenly";
    }
  } else if (prop === "justify-items") {
    switch (value) {
      case "start":
        return "justify-items-start";
      case "end":
        return "justify-items-end";
      case "center":
        return "justify-items-center";
      case "stretch":
        return "justify-items-stretch";
    }
  } else if (prop === "justify-self") {
    switch (value) {
      case "start":
        return "justify-self-start";
      case "end":
        return "justify-self-end";
      case "center":
        return "justify-self-center";
      case "stretch":
        return "justify-self-stretch";
    }
  } else if (prop === "align-content") {
    switch (value) {
      case "start":
        return "content-start";
      case "end":
        return "content-end";
      case "center":
        return "content-center";
      case "space-between":
        return "content-between";
      case "space-around":
        return "content-around";
      case "space-evenly":
        return "content-evenly";
    }
  } else if (prop === "align-items") {
    switch (value) {
      case "start":
        return "items-start";
      case "end":
        return "items-end";
      case "center":
        return "items-center";
      case "stretch":
        return "items-stretch";
    }
  } else if (prop === "align-self") {
    switch (value) {
      case "start":
        return "self-start";
      case "end":
        return "self-end";
      case "center":
        return "self-center";
      case "stretch":
        return "self-stretch";
    }
  } else if (prop === "place-content") {
    switch (value) {
      case "center":
        return "place-content-center";
      case "start":
        return "place-content-start";
      case "end":
        return "place-content-end";
      case "between":
        return "place-content-between";
      case "around":
        return "place-content-around";
      case "evenly":
        return "place-content-evenly";
    }
  } else if (prop === "place-items") {
    switch (value) {
      case "center":
        return "place-items-center";
      case "start":
        return "place-items-start";
      case "end":
        return "place-items-end";
      case "stretch":
        return "place-items-stretch";
    }
  } else if (prop === "place-self") {
    switch (value) {
      case "center":
        return "place-self-center";
      case "start":
        return "place-self-start";
      case "end":
        return "place-self-end";
      case "stretch":
        return "place-self-stretch";
      case "auto":
        return "place-self-auto";
    }
  } else if (prop === "padding") {
    return `p-[${value}]`;
  } else if (prop === "margin") {
    return `m-[${value}]`;
  } else if (prop === "space-between") {
    return `space-x-[${value}]`;
  } else if (prop === "width") {
    return `w-[${value}]`;
  } else if (prop === "min-width") {
    return `min-w-[${value}]`;
  } else if (prop === "max-width") {
    return `max-w-[${value}]`;
  } else if (prop === "height") {
    return `h-[${value}]`;
  } else if (prop === "min-height") {
    return `min-h-[${value}]`;
  } else if (prop === "max-height") {
    return `max-h-[${value}]`;
  } else if (prop === "font-family") {
    switch (value) {
      case "sans-serif":
        return "font-sans";
      case "serif":
        return "font-serif";
      case "monospace":
        return "font-mono";
      default:
        return `font-${value}`;
    }
  } else if (prop === "font-size") {
    switch (value) {
      case "12px":
        return "text-xs";
      case "14px":
        return "text-sm";
      case "16px":
        return "text-base";
      case "18px":
        return "text-lg";
      case "20px":
        return "text-xl";
      case "24px":
        return "text-2xl";
      case "30px":
        return "text-3xl";
      case "36px":
        return "text-4xl";
      case "48px":
        return "text-5xl";
      case "60px":
        return "text-6xl";
      case "72px":
        return "text-7xl";
      case "96px":
        return "text-8xl";
      case "128px":
        return "text-9xl";
      default:
        return `text-[${value}]`;
    }
  } else if (prop === "font-smoothing") {
    switch (value) {
      case "antialiased":
        return "antialiased";
      case "subpixel-antialiased":
        return "subpixel-antialiased";
    }
  } else if (prop === "font-style") {
    switch (value) {
      case "italic":
        return "italic";
      case "normal":
        return "not-italic";
    }
  } else if (prop === "font-weight") {
    switch (value) {
      case "100":
        return "font-thin";
      case "200":
        return "font-extralight";
      case "300":
        return "font-light";
      case "400":
        return "font-normal";
      case "500":
        return "font-medium";
      case "600":
        return "font-semibold";
      case "700":
        return "font-bold";
      case "800":
        return "font-extrabold";
      case "900":
        return "font-black";
    }
  } else if (prop === "letter-spacing") {
    switch (value) {
      case "tighter":
        return "-0.05em";
      case "tight":
        return "-0.025em";
      case "normal":
        return "0";
      case "wide":
        return "0.025em";
      case "wider":
        return "0.05em";
      case "widest":
        return "0.1em";
      default:
        return `tracking-[${value}]`;
    }
  } else if (prop === "line-height") {
    switch (value) {
      case "none":
        return "leading-none";
      case "tight":
        return "leading-tight";
      case "snug":
        return "leading-snug";
      case "normal":
        return "leading-normal";
      case "relaxed":
        return "leading-relaxed";
      case "loose":
        return "leading-loose";
      default:
        return `leading-[${value}]`;
    }
  } else if (prop === "list-style-image") {
    return `list-image-[${value}]`;
  } else if (prop === "list-style-position") {
    switch (value) {
      case "inside":
        return "list-inside";
      case "outside":
        return "list-outside";
    }
  } else if (prop === "list-style-type") {
    switch (value) {
      case "disc":
        return "list-disc";
      case "circle":
        return "list-circle";
      case "square":
        return "list-square";
      case "decimal":
        return "list-decimal";
      case "lower-alpha":
        return "list-lower-alpha";
      case "lower-latin":
        return "list-lower-latin";
      case "lower-roman":
        return "list-lower-roman";
      case "upper-alpha":
        return "list-upper-alpha";
      case "upper-latin":
        return "list-upper-latin";
      case "upper-roman":
        return "list-upper-roman";
      case "none":
        return "list-none";
    }
  } else if (prop === "text-align") {
    switch (value) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      case "center":
        return "text-center";
      case "justify":
        return "text-justify";
    }
  } else if (prop === "text-color") {
    return `text-[${value}]`;
  } else if (prop === "text-decoration") {
    switch (value) {
      case "underline":
        return "underline";
      case "line-through":
        return "line-through";
      case "none":
        return "no-underline";
    }
  } else if (prop === "text-decoration-color") {
    return `text-decoration-color-${value}`;
  } else if (prop === "text-decoration-style") {
    switch (value) {
      case "solid":
        return "text-decoration-solid";
      case "double":
        return "text-decoration-double";
      case "dotted":
        return "text-decoration-dotted";
      case "dashed":
        return "text-decoration-dashed";
      case "wavy":
        return "text-decoration-wavy";
    }
  } else if (prop === "text-decoration-thickness") {
    return `text-decoration-thickness-${value}`;
  } else if (prop === "text-underline-offset") {
    return `text-underline-offset-${value}`;
  } else if (prop === "text-transform") {
    switch (value) {
      case "uppercase":
        return "uppercase";
      case "lowercase":
        return "lowercase";
      case "capitalize":
        return "capitalize";
      case "none":
        return "normal-case";
    }
  } else if (prop === "text-overflow") {
    switch (value) {
      case "clip":
        return "text-overflow-clip";
      case "ellipsis":
        return "text-overflow-ellipsis";
    }
  } else if (prop === "text-indent") {
    return `text-indent-${value}`;
  } else if (prop === "vertical-align") {
    switch (value) {
      case "baseline":
        return "align-baseline";
      case "top":
        return "align-top";
      case "middle":
        return "align-middle";
      case "bottom":
        return "align-bottom";
      case "text-top":
        return "align-text-top";
      case "text-bottom":
        return "align-text-bottom";
    }
  } else if (prop === "whitespace") {
    switch (value) {
      case "normal":
        return "whitespace-normal";
      case "nowrap":
        return "whitespace-nowrap";
      case "pre":
        return "whitespace-pre";
      case "pre-wrap":
        return "whitespace-pre-wrap";
      case "pre-line":
        return "whitespace-pre-line";
    }
  } else if (prop === "word-break") {
    switch (value) {
      case "normal":
        return "break-normal";
      case "break-all":
        return "break-all";
      case "keep-all":
        return "break-keep-all";
      case "break-word":
        return "break-word";
    }
  } else if (prop === "hyphens") {
    switch (value) {
      case "none":
        return "hyphens-none";
      case "manual":
        return "hyphens-manual";
      case "auto":
        return "hyphens-auto";
    }
  } else if (prop === "content") {
    switch (value) {
      case "none":
        return "content-none";
      case "auto":
        return "content-auto";
      case "string":
        return `content-'${value}'`;
    }
  } else if (prop === "background-attachment") {
    switch (value) {
      case "fixed":
        return "bg-fixed";
      case "local":
        return "bg-local";
      case "scroll":
        return "bg-scroll";
    }
  } else if (prop === "background-clip") {
    switch (value) {
      case "border-box":
        return "bg-clip-border";
      case "padding-box":
        return "bg-clip-padding";
      case "content-box":
        return "bg-clip-content";
    }
  } else if (prop === "background-color") {
    return `bg-[${value}]`;
  } else if (prop === "background-origin") {
    switch (value) {
      case "border-box":
        return "bg-origin-border";
      case "padding-box":
        return "bg-origin-padding";
      case "content-box":
        return "bg-origin-content";
    }
  } else if (prop === "background-position") {
    return `bg-${value}`;
  } else if (prop === "background-repeat") {
    switch (value) {
      case "repeat":
        return "bg-repeat";
      case "no-repeat":
        return "bg-no-repeat";
      case "repeat-x":
        return "bg-repeat-x";
      case "repeat-y":
        return "bg-repeat-y";
      case "round":
        return "bg-repeat-round";
      case "space":
        return "bg-repeat-space";
    }
  } else if (prop === "background-size") {
    switch (value) {
      case "auto":
        return "bg-auto";
      case "cover":
        return "bg-cover";
      case "contain":
        return "bg-contain";
      default:
        return `bg-[${value}]`;
    }
  } else if (prop === "background-image") {
    return `bg-[url('${value}')]`;
  }

  //TODO   else if (prop === "gradient-color-stops") {
  //TODO     return `bg-gradient-to-${value.direction} ${value.stops
  //TODO       .map((stop) => `via-${stop.color}-${stop.opacity || ""}`)
  //TODO       .join(" ")}`;
  //TODO   }
  else if (prop === "border-radius") {
    return `rounded${
      value === "50%" ? "-full" : value === "0" ? "" : `-${value}`
    }`;
  } else if (prop === "border-width") {
    return `border${value === "0" ? "" : `-[${value}]`}`;
  } else if (prop === "border-color") {
    return `border-[${value}]`;
  } else if (prop === "border-style") {
    switch (value) {
      case "solid":
        return "border-solid";
      case "dashed":
        return "border-dashed";
      case "dotted":
        return "border-dotted";
      case "double":
        return "border-double";
      case "none":
        return "border-none";
    }
  } else if (prop === "divide-width") {
    return `divide-[${value}]`;
  } else if (prop === "divide-color") {
    return `divide-[${value}]`;
  } else if (prop === "divide-style") {
    switch (value) {
      case "solid":
        return "divide-solid";
      case "dashed":
        return "divide-dashed";
      case "dotted":
        return "divide-dotted";
      case "double":
        return "divide-double";
      case "none":
        return "divide-none";
    }
  } else if (prop === "outline-width") {
    switch (value) {
      case "thin":
        return "outline-thin";
      case "thick":
        return "outline-thick";
    }
  } else if (prop === "outline-color") {
    return `outline-[${value}]`;
  } else if (prop === "outline-style") {
    switch (value) {
      case "solid":
        return "outline-solid";
      case "dashed":
        return "outline-dashed";
      case "dotted":
        return "outline-dotted";
      case "double":
        return "outline-double";
      case "none":
        return "outline-none";
    }
  } else if (prop === "outline-offset") {
    return `outline-offset-[${value}]`;
  } else if (prop === "ring-width") {
    switch (value) {
      case "thin":
        return "ring-thin";
      case "thick":
        return "ring-thick";
    }
  } else if (prop === "ring-color") {
    switch (value) {
      case "transparent":
        return "ring-transparent";
      case "current":
        return "ring-current";
      default:
        return `ring-[${value}]`;
    }
  } else if (prop === "ring-offset-width") {
    return `ring-offset-[${value}]`;
  } else if (prop === "ring-offset-color") {
    switch (value) {
      case "transparent":
        return "ring-offset-transparent";
      case "current":
        return "ring-offset-current";
      default:
        return `ring-offset-[${value}]`;
    }
  } else if (prop === "box-shadow") {
    switch (value) {
      case "none":
        return "shadow-none";
      default:
        return `shadow-[${value}]`;
    }
  } else if (prop === "box-shadow-color") {
    return `shadow-[${value}]`;
  } else if (prop === "opacity") {
    return `opacity-[${value}]`;
  } else if (prop === "mix-blend-mode") {
    return `mix-blend-${value}`;
  } else if (prop === "background-blend-mode") {
    return `bg-blend-${value}`;
  } else if (prop === "filter-blur") {
    switch (value) {
      case "0":
        return "blur-none";
      default:
        return `blur-[${value}]`;
    }
  } else if (prop === "filter-brightness") {
    switch (value) {
      case "100%":
        return "brightness-100";
      default:
        return `brightness-[${value}]`;
    }
  } else if (prop === "filter-contrast") {
    switch (value) {
      case "100%":
        return "contrast-100";
      default:
        return `contrast-[${value}]`;
    }
  } else if (prop === "filter-drop-shadow") {
    return `drop-shadow-${value}`;
  } else if (prop === "filter-grayscale") {
    switch (value) {
      case "0%":
        return "grayscale-0";
      case "100%":
        return "grayscale-100";
      default:
        return `grayscale-[${value}]`;
    }
  } else if (prop === "filter-hue-rotate") {
    switch (value) {
      case "0deg":
        return "hue-rotate-0";
      default:
        return `hue-rotate-[${value}]`;
    }
  } else if (prop === "filter-invert") {
    switch (value) {
      case "0%":
        return "invert-0";
      case "100%":
        return "invert-100";
      default:
        return `invert-[${value}]`;
    }
  } else if (prop === "filter-saturate") {
    switch (value) {
      case "100%":
        return "saturate-100";
      default:
        return `saturate-[${value}]`;
    }
  } else if (prop === "filter-sepia") {
    switch (value) {
      case "0%":
        return "sepia-0";
      case "100%":
        return "sepia-100";
      default:
        return `sepia-[${value}]`;
    }
  } else if (prop === "backdrop-filter-blur") {
    switch (value) {
      case "0":
        return "backdrop-blur-none";
      default:
        return `backdrop-blur-[${value}]`;
    }
  } else if (prop === "backdrop-filter-brightness") {
    switch (value) {
      case "100%":
        return "backdrop-brightness-100";
      default:
        return `backdrop-brightness-[${value}]`;
    }
  } else if (prop === "backdrop-filter-contrast") {
    switch (value) {
      case "100%":
        return "backdrop-contrast-100";
      default:
        return `backdrop-contrast-[${value}]`;
    }
  } else if (prop === "backdrop-filter-grayscale") {
    switch (value) {
      case "0%":
        return "backdrop-grayscale-0";
      case "100%":
        return "backdrop-grayscale-100";
      default:
        return `backdrop-grayscale-[${value}]`;
    }
  } else if (prop === "backdrop-filter-hue-rotate") {
    switch (value) {
      case "0deg":
        return "backdrop-hue-rotate-0";
      default:
        return `backdrop-hue-rotate-[${value}]`;
    }
  } else if (prop === "backdrop-filter-invert") {
    switch (value) {
      case "0%":
        return "backdrop-invert-0";
      case "100%":
        return "backdrop-invert-100";
      default:
        return `backdrop-invert-[${value}]`;
    }
  } else if (prop === "backdrop-filter-opacity") {
    switch (value) {
      case "100%":
        return "backdrop-opacity-100";
      default:
        return `backdrop-opacity-[${value}]`;
    }
  } else if (prop === "backdrop-filter-saturate") {
    switch (value) {
      case "100%":
        return "backdrop-saturate-100";
      default:
        return `backdrop-saturate-[${value}]`;
    }
  } else if (prop === "backdrop-filter-sepia") {
    switch (value) {
      case "0%":
        return "backdrop-sepia-0";
      case "100%":
        return "backdrop-sepia-100";
      default:
        return `backdrop-sepia-[${value}]`;
    }
  } else if (prop === "border-collapse") {
    switch (value) {
      case "collapse":
        return "border-collapse";
      case "separate":
        return "border-separate";
    }
  } else if (prop === "border-spacing") {
    return `space-x-${value} space-y-${value}`;
  } else if (prop === "table-layout") {
    switch (value) {
      case "auto":
        return "table-auto";
      case "fixed":
        return "table-fixed";
    }
  } else if (prop === "caption-side") {
    switch (value) {
      case "top":
        return "caption-top";
      case "bottom":
        return "caption-bottom";
    }
  } else if (prop === "transition-property") {
    switch (value) {
      case "all":
        return "transition-all";
      case "none":
        return "transition-none";
      case "colors":
        return "transition-colors";
      case "opacity":
        return "transition-opacity";
      case "shadow":
        return "transition-shadow";
      case "transform":
        return "transition-transform";
      default:
        return `transition-[${value}]`;
    }
  } else if (prop === "transition-duration") {
    return `duration-${value}`;
  } else if (prop === "transition-timing-function") {
    switch (value) {
      case "linear":
        return "ease-linear";
      case "ease-in":
        return "ease-in";
      case "ease-out":
        return "ease-out";
      case "ease-in-out":
        return "ease-in-out";
      default:
        return `timing-${value}`;
    }
  } else if (prop === "transition-delay") {
    return `delay-${value}`;
  } else if (prop === "animation") {
    switch (value) {
      case "none":
        return "animate-none";
      case "spin":
        return "animate-spin";
      case "ping":
        return "animate-ping";
      case "pulse":
        return "animate-pulse";
      case "bounce":
        return "animate-bounce";
      default:
        return `animate-${value}`;
    }
  } else if (prop === "scale") {
    switch (value) {
      case "0":
        return "scale-0";
      case "50":
        return "scale-50";
      case "75":
        return "scale-75";
      case "90":
        return "scale-90";
      case "95":
        return "scale-95";
      case "100":
        return "scale-100";
      case "105":
        return "scale-105";
      case "110":
        return "scale-110";
      case "125":
        return "scale-125";
      case "150":
        return "scale-150";
      default:
        return `scale-[${value}]`;
    }
  } else if (prop === "rotate") {
    switch (value) {
      case "0":
        return "rotate-0";
      case "1":
        return "rotate-1";
      case "2":
        return "rotate-2";
      case "3":
        return "rotate-3";
      case "6":
        return "rotate-6";
      case "12":
        return "rotate-12";
      case "45":
        return "rotate-45";
      case "90":
        return "rotate-90";
      case "180":
        return "rotate-180";
      default:
        return `rotate-[${value}]`;
    }
  } else if (prop === "translate") {
    switch (value) {
      case "0":
        return "translate-x-0 translate-y-0";
      case "1":
        return "translate-x-1 translate-y-1";
      case "2":
        return "translate-x-2 translate-y-2";
      case "3":
        return "translate-x-3 translate-y-3";
      case "4":
        return "translate-x-4 translate-y-4";
      case "5":
        return "translate-x-5 translate-y-5";
      case "6":
        return "translate-x-6 translate-y-6";
      case "8":
        return "translate-x-8 translate-y-8";
      case "10":
        return "translate-x-10 translate-y-10";
      case "12":
        return "translate-x-12 translate-y-12";
      case "16":
        return "translate-x-16 translate-y-16";
      case "20":
        return "translate-x-20 translate-y-20";
      case "24":
        return "translate-x-24 translate-y-24";
      case "32":
        return "translate-x-32 translate-y-32";
      case "40":
        return "translate-x-40 translate-y-40";
      case "48":
        return "translate-x-48 translate-y-48";
      case "56":
        return "translate-x-56 translate-y-56";
      case "64":
        return "translate-x-64 translate-y-64";
      case "72":
        return "translate-x-72 translate-y-72";
      case "80":
        return "translate-x-80 translate-y-80";
      case "96":
        return "translate-x-96 translate-y-96";
      default:
        return `translate-x-[${value}] translate-y-[${value}]`;
    }
  } else if (prop === "skew") {
    switch (value) {
      case "0":
        return "skew-x-0 skew-y-0";
      case "1":
        return "skew-x-1 skew-y-1";
      case "2":
        return "skew-x-2 skew-y-2";
      case "3":
        return "skew-x-3 skew-y-3";
      case "6":
        return "skew-x-6 skew-y-6";
      case "12":
        return "skew-x-12 skew-y-12";
      case "24":
        return "skew-x-24 skew-y-24";
      default:
        return `skew-x-[${value}] skew-y-[${value}]`;
    }
  } else if (prop === "transformOrigin") {
    switch (value) {
      case "center":
        return "origin-center";
      case "top":
        return "origin-top";
      case "right":
        return "origin-right";
      case "bottom":
        return "origin-bottom";
      case "left":
        return "origin-left";
      case "top-right":
        return "origin-top-right";
      case "bottom-right":
        return "origin-bottom-right";
      case "bottom-left":
        return "origin-bottom-left";
      case "top-left":
        return "origin-top-left";
      default:
        return `origin-[${value}]`;
    }
  } else if (prop === "interactivity") {
    switch (value) {
      case "auto":
        return "accent-auto";
      case "none":
        return "accent-none";
      default:
        return `accent-[${value}]`;
    }
  } else if (prop === "appearance") {
    switch (value) {
      case "none":
        return "appearance-none";
      case "auto":
        return "appearance-auto";
    }
  } else if (prop === "cursor") {
    switch (value) {
      case "auto":
        return "cursor-auto";
      case "default":
        return "cursor-default";
      case "pointer":
        return "cursor-pointer";
      case "wait":
        return "cursor-wait";
      case "text":
        return "cursor-text";
      case "move":
        return "cursor-move";
      case "help":
        return "cursor-help";
      case "not-allowed":
        return "cursor-not-allowed";
      case "progress":
        return "cursor-progress";
      case "grab":
        return "cursor-grab";
      case "grabbing":
        return "cursor-grabbing";
      case "col-resize":
        return "cursor-col-resize";
      case "row-resize":
        return "cursor-row-resize";
      case "ns-resize":
        return "cursor-ns-resize";
      case "ew-resize":
        return "cursor-ew-resize";
      case "ne-resize":
        return "cursor-ne-resize";
      case "nw-resize":
        return "cursor-nw-resize";
      case "se-resize":
        return "cursor-se-resize";
      case "sw-resize":
        return "cursor-sw-resize";
      case "n-resize":
        return "cursor-n-resize";
      case "s-resize":
        return "cursor-s-resize";
      case "e-resize":
        return "cursor-e-resize";
      case "w-resize":
        return "cursor-w-resize";
      case "all-scroll":
        return "cursor-all-scroll";
      case "crosshair":
        return "cursor-crosshair";
      case "zoom-in":
        return "cursor-zoom-in";
      case "zoom-out":
        return "cursor-zoom-out";
      default:
        return `cursor-[${value}]`;
    }
  } else if (prop === "caret-color") {
    switch (value) {
      case "transparent":
        return "caret-transparent";
      case "current":
        return "caret-current";
      case "auto":
        return "caret-auto";
      default:
        return `caret-${value}`;
    }
  } else if (prop === "pointer-events") {
    switch (value) {
      case "none":
        return "pointer-events-none";
      case "auto":
        return "pointer-events-auto";
    }
  } else if (prop === "resize") {
    switch (value) {
      case "none":
        return "resize-none";
      case "y":
        return "resize-y";
      case "x":
        return "resize-x";
      case "both":
        return "resize-both";
    }
  } else if (prop === "scroll-behavior") {
    switch (value) {
      case "auto":
        return "scroll-behavior-auto";
      case "smooth":
        return "scroll-behavior-smooth";
    }
  }

  return null;
}

function cssObjectToTailwind(cssRules: CssRules): TailwindRules {
  const tailwindRules: TailwindRules = {};

  for (const [selector, cssString] of Object.entries(cssRules)) {
    const properties = parseCssProperties(cssString);
    tailwindRules[selector] = [];
    for (const [prop, value] of Object.entries(properties)) {
      const tailwindClass = cssPropToTailwind(prop, value);
      if (tailwindClass) {
        tailwindRules[selector].push(tailwindClass);
      }
    }
  }

  return tailwindRules;
}

export function getCssObjectFromFile(filePath: string): Promise<CssRules> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      // Remove comments from the CSS file
      const withoutComments = data.replace(
        /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        ""
      );

      const cssObject: CssRules = {};
      const cssRuleRegex = /([^{]+)\s*\{([^}]+)\}/g;

      let match;
      while ((match = cssRuleRegex.exec(withoutComments))) {
        const selector = match[1].trim();
        const cssString = match[2].trim();
        cssObject[selector] = cssString;
      }

      resolve(cssObject);
    });
  });
}

export async function convertCssObjectToTailwindList(
  filePath: string
): Promise<TailwindRules[]> {
  const cssObject = await getCssObjectFromFile(filePath);

  const tailwindList: TailwindRules[] = [];
  const tailwindRules = cssObjectToTailwind(cssObject);
  tailwindList.push(tailwindRules);

  return tailwindList;
}
