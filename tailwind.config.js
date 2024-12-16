const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "fvcoder",
      "themes": {
        "light": {
          "colors": {
            "default": {
              "50": "#fafafa",
              "100": "#f2f2f3",
              "200": "#ebebec",
              "300": "#e3e3e6",
              "400": "#dcdcdf",
              "500": "#d4d4d8",
              "600": "#afafb2",
              "700": "#8a8a8c",
              "800": "#656567",
              "900": "#404041",
              "foreground": "#000",
              "DEFAULT": "#d4d4d8"
            },
            "primary": {
              "50": "#eee9ff",
              "100": "#d7caff",
              "200": "#bfabff",
              "300": "#a78dff",
              "400": "#906eff",
              "500": "#784fff",
              "600": "#6341d2",
              "700": "#4e33a6",
              "800": "#392679",
              "900": "#24184d",
              "foreground": "#fff",
              "DEFAULT": "#784fff"
            },
            "secondary": {
              "50": "#f4eeed",
              "100": "#e6d7d3",
              "200": "#d7bfba",
              "300": "#c8a7a0",
              "400": "#b99087",
              "500": "#aa786d",
              "600": "#8c635a",
              "700": "#6f4e47",
              "800": "#513934",
              "900": "#332421",
              "foreground": "#000",
              "DEFAULT": "#aa786d"
            },
            "success": {
              "50": "#e9fff7",
              "100": "#caffeb",
              "200": "#abffdf",
              "300": "#8dffd3",
              "400": "#6effc8",
              "500": "#4fffbc",
              "600": "#41d29b",
              "700": "#33a67a",
              "800": "#267959",
              "900": "#184d38",
              "foreground": "#000",
              "DEFAULT": "#4fffbc"
            },
            "warning": {
              "50": "#fffde9",
              "100": "#fffaca",
              "200": "#fff7ab",
              "300": "#fff48d",
              "400": "#fff16e",
              "500": "#ffee4f",
              "600": "#d2c441",
              "700": "#a69b33",
              "800": "#797126",
              "900": "#4d4718",
              "foreground": "#000",
              "DEFAULT": "#ffee4f"
            },
            "danger": {
              "50": "#ffede9",
              "100": "#ffd4ca",
              "200": "#ffbaab",
              "300": "#ffa18d",
              "400": "#ff876e",
              "500": "#ff6e4f",
              "600": "#d25b41",
              "700": "#a64833",
              "800": "#793426",
              "900": "#4d2118",
              "foreground": "#000",
              "DEFAULT": "#ff6e4f"
            },
            "background": "#ffffff",
            "foreground": {
              "50": "#dfdfdf",
              "100": "#b3b3b3",
              "200": "#868686",
              "300": "#595959",
              "400": "#2d2d2d",
              "500": "#000000",
              "600": "#000000",
              "700": "#000000",
              "800": "#000000",
              "900": "#000000",
              "foreground": "#fff",
              "DEFAULT": "#000000"
            },
            "content1": {
              "DEFAULT": "#ffffff",
              "foreground": "#000"
            },
            "content2": {
              "DEFAULT": "#f4f4f5",
              "foreground": "#000"
            },
            "content3": {
              "DEFAULT": "#e4e4e7",
              "foreground": "#000"
            },
            "content4": {
              "DEFAULT": "#d4d4d8",
              "foreground": "#000"
            },
            "focus": "#006FEE",
            "overlay": "#000000",
            "divider": "#111111"
          }
        },
        "dark": {
          "colors": {
            "default": {
              "50": "#141417",
              "100": "#232327",
              "200": "#313136",
              "300": "#3f3f46",
              "400": "#6a6a70",
              "500": "#959599",
              "600": "#c1c1c3",
              "700": "#ececed",
              "foreground": "#fff",
              "DEFAULT": "#313136"
            },
            "primary": {
              "50": "#271a53",
              "100": "#422b8c",
              "200": "#5d3dc6",
              "300": "#784fff",
              "400": "#9677ff",
              "500": "#b59eff",
              "600": "#d3c6ff",
              "700": "#f2edff",
              "foreground": "#fff",
              "DEFAULT": "#5d3dc6"
            },
            "secondary": {
              "50": "#372723",
              "100": "#5e423c",
              "200": "#845d54",
              "300": "#aa786d",
              "400": "#bd968e",
              "500": "#d0b5af",
              "600": "#e3d3d0",
              "700": "#f7f2f0",
              "foreground": "#fff",
              "DEFAULT": "#845d54"
            },
            "success": {
              "50": "#1a533d",
              "100": "#2b8c67",
              "200": "#3dc692",
              "300": "#4fffbc",
              "400": "#77ffcb",
              "500": "#9effda",
              "600": "#c6ffe9",
              "700": "#edfff8",
              "foreground": "#000",
              "DEFAULT": "#3dc692"
            },
            "warning": {
              "50": "#534d1a",
              "100": "#8c832b",
              "200": "#c6b83d",
              "300": "#ffee4f",
              "400": "#fff277",
              "500": "#fff69e",
              "600": "#fff9c6",
              "700": "#fffded",
              "foreground": "#000",
              "DEFAULT": "#c6b83d"
            },
            "danger": {
              "50": "#53241a",
              "100": "#8c3d2b",
              "200": "#c6553d",
              "300": "#ff6e4f",
              "400": "#ff8f77",
              "500": "#ffaf9e",
              "600": "#ffd0c6",
              "700": "#fff1ed",
              "foreground": "#000",
              "DEFAULT": "#c6553d"
            },
            "background": "#000000",
            "foreground": {
              "50": "#535353",
              "100": "#8c8c8c",
              "200": "#c6c6c6",
              "300": "#ffffff",
              "400": "#ffffff",
              "500": "#ffffff",
              "600": "#ffffff",
              "700": "#ffffff",
              "foreground": "#000",
              "DEFAULT": "#c6c6c6"
            },
            "content1": {
              "DEFAULT": "#18181b",
              "foreground": "#fff"
            },
            "content2": {
              "DEFAULT": "#27272a",
              "foreground": "#fff"
            },
            "content3": {
              "DEFAULT": "#3f3f46",
              "foreground": "#fff"
            },
            "content4": {
              "DEFAULT": "#52525b",
              "foreground": "#fff"
            },
            "focus": "#006FEE",
            "overlay": "#ffffff",
            "divider": "#ffffff"
          }
        }
      },
      "layout": {
        "fontSize": {
          "tiny": "0.75rem",
          "small": "0.875rem",
          "medium": "1rem",
          "large": "1.125rem"
        },
        "lineHeight": {
          "tiny": "1rem",
          "small": "1.25rem",
          "medium": "1.5rem",
          "large": "1.75rem"
        },
        "radius": {
          "small": "0.25rem",
          "medium": "0.5rem",
          "large": "0.75rem"
        },
        "borderWidth": {
          "small": "1px",
          "medium": "2px",
          "large": "3px"
        },
        "disabledOpacity": "0.5",
        "dividerWeight": "1",
        "hoverOpacity": "0.9"
      }
  })]
}

