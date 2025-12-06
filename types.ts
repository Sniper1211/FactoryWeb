import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}