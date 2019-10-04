const icons = require.context('../icons', true, /\.svg$/);
const keys = require('../icons/keys.json');
console.log(keys);

interface IconsMap {
    [key: string]: React.FunctionComponent
}

interface IconProps {
    name: string
    width?: number
    height?: number
}

function keysToSameValueAsKeys<T extends string[]>(...keys: T): { [K in T[number]]: K };
function keysToSameValueAsKeys(keys: string[]): { [k: string]: string } {
  return keys.reduce((acc, type) => ({ ...acc, [type]: type }), {});
}

const Components:IconsMap = icons.keys().reduce((iconsMap: IconsMap, key: string) => {
    const icon = icons(key).default;
    const iconName = icon.name;
    console.log(key, iconName, icon.defaultProps);
    iconsMap[iconName] = icon;

    return iconsMap;
}, {});

export const ICONS = keysToSameValueAsKeys(keys)

export default (props: IconProps) => {
    const name = props.name;
    const icon = Components[name];

    if (!icon) return null;

    const defaultProps = icon.defaultProps;
    let [ , , vWidth, vHeight ] = defaultProps.viewBox.split(/\s+/).map(num => parseFloat(num));
    const ratio = vWidth / vHeight;

    let width = defaultProps.width || 20;
    let height = defaultProps.height || (defaultWidth / ratio);

    if (props.width !== undefined) {
        width = parseFloat(props.width);
        height = props.height || (width / ratio);
    } else if (props.height !== undefined) {
        height = parseFloat(props.height);
        width = props.width || (height * ratio);
    }

    const iconProps = Object.assign({}, defaultProps, {
        width,
        height,
    });

    return (
        <div className="icon">
            {icon && icon(iconProps)}
        </div>
    );
};
