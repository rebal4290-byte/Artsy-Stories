import {
  PenTool,
  Sparkles,
  Camera,
  FileImage,
  Package,
  PlaySquare,
  Gamepad2,
  CreditCard,
  Megaphone,
  LayoutGrid,
  Globe,
  ImagePlus,
  Box,
  UserRound,
  Wand2,
  Palette,
  Aperture,
  Flame,
  Joystick,
  Heart,
  Users,
  PawPrint,
  MonitorSmartphone,
  BookOpen,
  Lightbulb,
  Brush,
  MessageCircleMore,
  RefreshCcw,
  Download,
  FolderKanban,
  TrendingUp,
  Timer,
  Star,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  PenTool,
  Sparkles,
  Camera,
  FileImage,
  Package,
  PlaySquare,
  Gamepad2,
  CreditCard,
  Megaphone,
  LayoutGrid,
  Globe,
  ImagePlus,
  Box,
  UserRound,
  Wand2,
  Palette,
  Aperture,
  Flame,
  Joystick,
  Heart,
  Users,
  PawPrint,
  MonitorSmartphone,
  BookOpen,
  Lightbulb,
  Brush,
  MessageCircleMore,
  RefreshCcw,
  Download,
  FolderKanban,
  TrendingUp,
  Timer,
  Star,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps extends LucideProps {
  name: string;
}

export default function Icon({ name, ...props }: IconProps) {
  const Cmp = iconMap[name as IconName] ?? Sparkles;
  return <Cmp {...props} aria-hidden />;
}
