import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

interface BrandCollection {
  name: string;
  description: string;
  image: string;
  label: string;
}

interface BrandPage {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  theme: string;
  categories: string[];
  collections: BrandCollection[];
  storyTitle: string;
  storyDescription: string;
  storyImage: string;
  cta: string;
}

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.scss'
})
export class BrandDetailsComponent implements OnInit, OnDestroy {
  brand: BrandPage | null = null;
  private routeSubscription?: Subscription;

  private readonly brands: Record<string, BrandPage> = {
    'mim-sin-fashion': {
      slug: 'mim-sin-fashion',
      name: 'Mim Sin Fashion',
      eyebrow: 'THE ART OF EVERYDAY ELEGANCE',
      title: 'Wear your <em>confidence.</em>',
      subtitle: 'CONTEMPORARY WOMENSWEAR',
      description: 'Discover a world of modern silhouettes, refined details and timeless wardrobe essentials. Made to make every day feel extraordinary.',
      heroImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=2000&q=90',
      theme: 'fashion-theme',
      categories: ['New Arrivals', 'Dresses', 'Western Wear', 'Everyday Style'],
      collections: [
        {
          name: 'The Modern Muse',
          description: 'Effortless looks for your everyday moments.',
          image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&q=85',
          label: '01 / EVERYDAY'
        },
        {
          name: 'Evening Elegance',
          description: 'Make every occasion a little more special.',
          image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1000&q=85',
          label: '02 / OCCASION'
        },
        {
          name: 'Minimal Stories',
          description: 'Less, but always beautifully considered.',
          image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000&q=85',
          label: '03 / MINIMAL'
        }
      ],
      storyTitle: 'Style is a way to tell your story.',
      storyDescription: 'Mim Sin Fashion celebrates individuality through thoughtfully selected styles. From everyday essentials to statement pieces, discover fashion that feels naturally yours.',
      storyImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=85',
      cta: 'EXPLORE THE COLLECTION'
    },

    'minsin-garments': {
      slug: 'minsin-garments',
      name: 'Minsin Garments',
      eyebrow: 'MADE FOR THE WAY YOU LIVE',
      title: 'Everyday wear.<br><em>Elevated.</em>',
      subtitle: 'MODERN GARMENT ESSENTIALS',
      description: 'A considered collection of versatile garments where comfort meets contemporary design. Discover pieces made to move with you.',
      heroImage: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=2000&q=90',
      theme: 'garments-theme',
      categories: ['New Season', 'Casual Wear', 'Formal Wear', 'Daily Essentials'],
      collections: [
        {
          name: 'Daily Uniform',
          description: 'Comfortable essentials for everyday living.',
          image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&q=85',
          label: '01 / CASUAL'
        },
        {
          name: 'Smart & Refined',
          description: 'Clean lines for a more polished look.',
          image: 'https://images.unsplash.com/photo-1506629905607-d9a4b6c1a7b2?w=1000&q=85',
          label: '02 / FORMAL'
        },
        {
          name: 'Weekend Edit',
          description: 'Relaxed pieces with effortless character.',
          image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1000&q=85',
          label: '03 / WEEKEND'
        }
      ],
      storyTitle: 'Good design begins with everyday life.',
      storyDescription: 'Minsin Garments is about practical style, thoughtful details and dependable comfort. Build a wardrobe that works beautifully for every part of your day.',
      storyImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=85',
      cta: 'DISCOVER GARMENTS'
    },

    'mim-sin-borka-house': {
      slug: 'mim-sin-borka-house',
      name: 'Mim Sin Borka House',
      eyebrow: 'GRACE IN EVERY DETAIL',
      title: 'Modesty with<br><em>meaning.</em>',
      subtitle: 'A WORLD OF MODEST FASHION',
      description: 'Explore graceful abayas, elegant borkas and thoughtfully designed modest wear. A refined expression of comfort, confidence and individuality.',
      heroImage: 'https://images.unsplash.com/photo-1583391733956-6c78276477e7?w=2000&q=90',
      theme: 'borka-theme',
      categories: ['New Arrivals', 'Abaya', 'Borka', 'Hijab & Accessories'],
      collections: [
        {
          name: 'The Abaya Edit',
          description: 'Elegant silhouettes for graceful occasions.',
          image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=1000&q=85',
          label: '01 / ABAYA'
        },
        {
          name: 'Everyday Grace',
          description: 'Comfort and modesty for every day.',
          image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1000&q=85',
          label: '02 / EVERYDAY'
        },
        {
          name: 'The Finishing Touch',
          description: 'Complete your look with refined details.',
          image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1000&q=85',
          label: '03 / ACCESSORIES'
        }
      ],
      storyTitle: 'Elegance is found in the details.',
      storyDescription: 'Mim Sin Borka House brings together modest fashion and graceful design. Discover thoughtfully selected pieces that let you express your personal style with confidence.',
      storyImage: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=1200&q=85',
      cta: 'EXPLORE MODEST WEAR'
    }
  };

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.brand = this.brands[slug] ?? null;
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
