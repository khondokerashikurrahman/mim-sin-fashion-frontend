import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface StoreProduct {
  id: number;
  name: string;
  brand: string;
  brandName: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  rating: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: StoreProduct[] = [
    {
      id: 1,
      name: 'Elegant Embroidered Three Piece',
      brand: 'mim-sin-fashion',
      brandName: 'Mim Sin Fashion',
      category: 'Three Piece',
      price: 2850,
      oldPrice: 3500,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&q=85',
      badge: 'Bestseller',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Classic Premium Cotton Shirt',
      brand: 'minsin-garments',
      brandName: 'Minsin Garments',
      category: 'Shirt',
      price: 1450,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700&q=85',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Minimalist Elegant Black Abaya',
      brand: 'mim-sin-borka-house',
      brandName: 'Mim Sin Borka House',
      category: 'Abaya',
      price: 3200,
      oldPrice: 3800,
      image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=700&q=85',
      badge: 'New Arrival',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Modern Casual Co-ord Set',
      brand: 'mim-sin-fashion',
      brandName: 'Mim Sin Fashion',
      category: 'Co-ord Set',
      price: 2450,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Essential Everyday Polo Shirt',
      brand: 'minsin-garments',
      brandName: 'Minsin Garments',
      category: 'Polo Shirt',
      price: 950,
      oldPrice: 1200,
      image: 'https://images.unsplash.com/photo-1625910513413-5fc3c7f5f7a2?w=700&q=85',
      rating: 4.5
    },
    {
      id: 6,
      name: 'Premium Modest Wear Hijab',
      brand: 'mim-sin-borka-house',
      brandName: 'Mim Sin Borka House',
      category: 'Hijab',
      price: 750,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=700&q=85',
      badge: 'Popular',
      rating: 4.8
    },
    {
      id: 7,
      name: 'Women’s Contemporary Kurti',
      brand: 'mim-sin-fashion',
      brandName: 'Mim Sin Fashion',
      category: 'Kurti',
      price: 1750,
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e7?w=700&q=85',
      rating: 4.7
    },
    {
      id: 8,
      name: 'Premium Formal Trousers',
      brand: 'minsin-garments',
      brandName: 'Minsin Garments',
      category: 'Trousers',
      price: 1650,
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700&q=85',
      rating: 4.6
    }
  ];

  filteredProducts: StoreProduct[] = [];
  selectedBrand = '';
  selectedCategory = '';
  searchTerm = '';
  sortBy = 'featured';
  pageTitle = 'All Products';
  pageDescription = 'Discover thoughtfully selected pieces made to complement your style.';

  readonly brands = [
    { slug: 'mim-sin-fashion', name: 'Mim Sin Fashion' },
    { slug: 'minsin-garments', name: 'Minsin Garments' },
    { slug: 'mim-sin-borka-house', name: 'Mim Sin Borka House' }
  ];

  readonly categories = [
    'Three Piece',
    'Shirt',
    'Abaya',
    'Co-ord Set',
    'Polo Shirt',
    'Hijab',
    'Kurti',
    'Trousers'
  ];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.selectedBrand = params.get('brand') ?? '';
      this.selectedCategory = params.get('category') ?? '';

      const brand = this.brands.find(item => item.slug === this.selectedBrand);
      this.pageTitle = brand ? brand.name : 'All Products';
      this.pageDescription = brand
        ? `Explore the latest collection from ${brand.name}.`
        : 'Discover thoughtfully selected pieces made to complement your style.';

      this.applyFilters();
    });
  }

  applyFilters(): void {
    const search = this.searchTerm.trim().toLowerCase();

    this.filteredProducts = this.products.filter(product => {
      const matchesBrand = !this.selectedBrand || product.brand === this.selectedBrand;
      const matchesCategory = !this.selectedCategory ||
        product.category.toLowerCase() === this.selectedCategory.toLowerCase();
      const matchesSearch = !search ||
        product.name.toLowerCase().includes(search) ||
        product.brandName.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);

      return matchesBrand && matchesCategory && matchesSearch;
    });

    this.sortProducts();
  }

  setBrand(brand: string): void {
    this.selectedBrand = brand;
    this.pageTitle = brand
      ? this.brands.find(item => item.slug === brand)?.name ?? 'All Products'
      : 'All Products';
    this.applyFilters();
  }

  setCategory(category: string): void {
    this.selectedCategory = this.selectedCategory === category ? '' : category;
    this.applyFilters();
  }

  onSearch(value: string): void {
    this.searchTerm = value;
    this.applyFilters();
  }

  onSortChange(value: string): void {
    this.sortBy = value;
    this.sortProducts();
  }

  private sortProducts(): void {
    const sorted = [...this.filteredProducts];

    switch (this.sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted.sort((a, b) => a.id - b.id);
    }

    this.filteredProducts = sorted;
  }

  clearFilters(): void {
    this.selectedBrand = '';
    this.selectedCategory = '';
    this.searchTerm = '';
    this.sortBy = 'featured';
    this.pageTitle = 'All Products';
    this.pageDescription = 'Discover thoughtfully selected pieces made to complement your style.';
    this.applyFilters();
  }
}
