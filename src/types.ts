export interface Review {
  id: string;
  name: 'Dewi' | 'Nisa' | 'Fatimah' | 'Solihin' | 'Aden' | 'Rifki' | string;
  city: string;
  rating: number; // 5
  date: string;
  comment: string;
  verified: boolean;
  avatarBg: string;
  avatarInitials: string;
  badge?: string;
  helpfulCount: number;
}

export interface PhotoColumn {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface PurchaseEvent {
  id: string;
  name: string;
  city: string;
  product: string;
  quantity: string;
  timeAgo: string;
}

export interface ProductBundle {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  originalPrice: number;
  promoPrice: number;
  savings: number;
  itemsIncluded: string[];
  isPopular?: boolean;
}
