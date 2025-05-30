/**
 * Adding a new font family involves 4 steps:
 * Step 1. Add it to one of the below FONT_FAMILIES variable array:
 *         English fonts -> SANS_SERIF_ENGLISH_FONT_FAMILIES or SERIF_ENGLISH_FONT_FAMILIES
 *         Non-English fonts -> NON_ENGLISH_FONT_FAMILIES
 *         Once the font is added, it would take care of
 *         a. Registering font family for React PDF at "components/fonts/hooks.tsx"
 *         b. Loading font family for React PDF iframe at "components/Resume/ResumeIFrame.tsx"
 *         c. Adding font family selection to Resume Settings at "components/ResumeForm/ThemeForm/Selection.tsx"
 * Step 2. To load css correctly for the Resume Form:
 *         English fonts -> add it to the "public\fonts\fonts.css" file
 *         Non-English fonts -> create/update "public\fonts\fonts-<language>.css" and update "components/fonts/NonEnglishFontsCSSLazyLoader.tsx"
 * Step 3. Update FONT_FAMILY_TO_STANDARD_SIZE_IN_PT and FONT_FAMILY_TO_DISPLAY_NAME accordingly
 * Step 4. Update "public/fonts/OFL.txt" to include the new font family and credit the font creator
 *
 * IMPORTANT NOTE:
 * One major problem with adding a new font family is that most font family doesn't work with
 * React PDF out of box. The texts would appear fine in the PDF, but copying and pasting them
 * would result in different texts. See issues: https://github.com/diegomura/react-pdf/issues/915
 * and https://github.com/diegomura/react-pdf/issues/629
 *
 * A solution to this problem is to import and re-export the font with a font editor, e.g. fontforge or birdfont.
 *
 * If using fontforge, the following command can be used to export the font:
 * ./fontforge -lang=ff -c 'Open($1); Generate($2); Close();' old_font.ttf new_font.ttf
 * Note that fontforge doesn't work on non-english fonts: https://github.com/fontforge/fontforge/issues/1534
 * Also, some fonts might still not work after re-export.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var SANS_SERIF_ENGLISH_FONT_FAMILIES = [
    "Roboto",
    "Lato",
    "Montserrat",
    "OpenSans",
    "Raleway",
];
var SERIF_ENGLISH_FONT_FAMILIES = [
    "Caladea",
    "Lora",
    "RobotoSlab",
    "PlayfairDisplay",
    "Merriweather",
];
export var ENGLISH_FONT_FAMILIES = __spreadArray(__spreadArray([], SANS_SERIF_ENGLISH_FONT_FAMILIES, true), SERIF_ENGLISH_FONT_FAMILIES, true);
export var NON_ENGLISH_FONT_FAMILIES = ["NotoSansSC"];
export var NON_ENGLISH_FONT_FAMILY_TO_LANGUAGE = {
    NotoSansSC: ["zh", "zh-CN", "zh-TW"],
};
export var FONT_FAMILY_TO_STANDARD_SIZE_IN_PT = {
    // Sans Serif Fonts
    Roboto: 11,
    Lato: 11,
    Montserrat: 10,
    OpenSans: 10,
    Raleway: 10,
    // Serif Fonts
    Caladea: 11,
    Lora: 11,
    RobotoSlab: 10,
    PlayfairDisplay: 10,
    Merriweather: 10,
    // Non-English Fonts
    NotoSansSC: 11,
};
export var FONT_FAMILY_TO_DISPLAY_NAME = {
    // Sans Serif Fonts
    Roboto: "Roboto",
    Lato: "Lato",
    Montserrat: "Montserrat",
    OpenSans: "Open Sans",
    Raleway: "Raleway",
    // Serif Fonts
    Caladea: "Caladea",
    Lora: "Lora",
    RobotoSlab: "Roboto Slab",
    PlayfairDisplay: "Playfair Display",
    Merriweather: "Merriweather",
    // Non-English Fonts
    NotoSansSC: "思源黑体(简体)",
};
