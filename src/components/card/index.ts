import {Card as CardHOC} from './Card';

import { CardIcon } from './CardIcon';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { CardSubtitle } from './CardSubtitle';

export { CardIcon } from "./CardIcon";
export { CardImage } from "./CardImage";
export { CardTitle } from "./CardTitle";
export { CardSubtitle } from "./CardSubtitle";

export const Card = Object.assign(CardHOC, {
    Icon: CardIcon,
    Image: CardImage,
    Title: CardTitle,
    Subtitle: CardSubtitle
})

export default Card