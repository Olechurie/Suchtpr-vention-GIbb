import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import * as brands from "@fortawesome/free-brands-svg-icons";

export const byPrefixAndName = {
  fas: {},
  far: {},
  fab: {},
};

function loadIcons(source, prefix) {
  Object.keys(source).forEach((key) => {
    const icon = source[key];
    if (icon && typeof icon === "object" && icon.iconName) {
      byPrefixAndName[prefix][icon.iconName] = icon;
    }
  });
}

loadIcons(solid, "fas");
loadIcons(regular, "far");
loadIcons(brands, "fab");
