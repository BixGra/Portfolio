let is_dark_mode = true;

let css_variables_dark = {
    "--main-font-color": "#FFFFFFFF",
    "--main-color1": "#0F1011FF",
    "--main-color2": "#040308FF",
    "--main-color3": "#141617FF",
    "--accent-color1": "#00A8E8FF",
    "--accent-color2": "#0070BFFF",
    "--accent-color3": "#02365BFF",
    "--filter-main-font-color": "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7463%) hue-rotate(103deg) brightness(100%) contrast(106%)",
    "--filter-accent-color1": "brightness(0) saturate(100%) invert(44%) sepia(35%) saturate(2273%) hue-rotate(164deg) brightness(103%) contrast(100%)",
};

let css_variables_light = {
    "--main-font-color": "#0F1011FF",
    "--main-color1": "#c6dbc4FF",
    "--main-color2": "#7a9278FF",
    "--main-color3": "#526e4fFF",
    "--accent-color1": "#55c54bFF",
    "--accent-color2": "#2f7228FF",
    "--accent-color3": "#084202FF",
    "--filter-main-font-color": "brightness(0) saturate(100%) invert(5%) sepia(2%) saturate(2186%) hue-rotate(164deg) brightness(91%) contrast(95%)",
    "--filter-accent-color1": "brightness(0) saturate(100%) invert(75%) sepia(10%) saturate(2634%) hue-rotate(66deg) brightness(86%) contrast(94%)",
};

function dark_mode() {
        let root = document.querySelector(":root");
    if (is_dark_mode) {
        tmp = css_variables_light;
        is_dark_mode = false;
        document.getElementById("theme-button").setAttribute("src", "./assets/light.png")
    } else {
        tmp = css_variables_dark;
        is_dark_mode = true;
        document.getElementById("theme-button").setAttribute("src", "./assets/dark.png")
    }
    for (const [key, value] of Object.entries(tmp)) {
        root.style.setProperty(key, value);
    }
}