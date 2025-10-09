import * as solidIcons from "@fortawesome/free-solid-svg-icons";

const iconMap = Object.entries(solidIcons).reduce((acc, [key, value]) => {
  if (value && typeof value === "object" && value.iconName) {
    acc[value.iconName] = value;
  }
  return acc;
}, {});

export default iconMap;
