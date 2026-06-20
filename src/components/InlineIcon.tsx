import {
  IoAlertCircleOutline,
  IoBookOutline,
  IoBulbOutline,
  IoCalendarOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoDocumentTextOutline,
  IoEyeOutline,
  IoFlameOutline,
  IoFlashOutline,
  IoGlobeOutline,
  IoHeadsetOutline,
  IoMusicalNotesOutline,
  IoRocketOutline,
  IoSearchOutline,
  IoSparklesOutline,
  IoTextOutline,
  IoTimeOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { GiBrain, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { MdOutlineSmartToy } from "react-icons/md";

const icons = {
  alert: IoAlertCircleOutline,
  book: IoBookOutline,
  brain: GiBrain,
  calendar: IoCalendarOutline,
  check: IoCheckmarkCircleOutline,
  close: IoCloseCircleOutline,
  dice: GiPerspectiveDiceSixFacesRandom,
  document: IoDocumentTextOutline,
  eye: IoEyeOutline,
  flame: IoFlameOutline,
  flash: IoFlashOutline,
  globe: IoGlobeOutline,
  headphones: IoHeadsetOutline,
  music: IoMusicalNotesOutline,
  rocket: IoRocketOutline,
  search: IoSearchOutline,
  sparkle: IoSparklesOutline,
  text: IoTextOutline,
  time: IoTimeOutline,
  tip: IoBulbOutline,
  trophy: IoTrophyOutline,
  ai: MdOutlineSmartToy,
};

export type InlineIconName = keyof typeof icons;

export default function InlineIcon({
  className = "inline-block h-4 w-4",
  name,
}: {
  className?: string;
  name: InlineIconName;
}) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={className} />;
}
