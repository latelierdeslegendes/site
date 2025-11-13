import {
  ShieldCheckIcon,
  GlobeAltIcon,
  HeartIcon,
  WrenchIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  StarIcon,
  TrophyIcon,
  UsersIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  BuildingStorefrontIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

// Icon mapping object for converting Sanity icon strings to React components
export const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  ShieldCheckIcon,
  GlobeAltIcon,
  HeartIcon,
  WrenchIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  StarIcon,
  TrophyIcon,
  UsersIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  BuildingStorefrontIcon,
  CalendarIcon
};

/**
 * Get icon component from string identifier
 * @param iconName - String identifier from Sanity (e.g., 'ShieldCheckIcon')
 * @returns React icon component or undefined if not found
 */
export function getIconComponent(iconName: string) {
  return iconMap[iconName];
}

/**
 * Check if icon name is valid
 * @param iconName - String identifier to validate
 * @returns true if icon exists in map
 */
export function isValidIcon(iconName: string): boolean {
  return iconName in iconMap;
}
