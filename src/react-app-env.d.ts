/// <reference types="react-scripts" />

interface Order {
  id: number;
  photos: string[];
  number: number;
  shape: string;
  name: string;
  address: string;
  date: string;
  total: number;
  status: string;
  statusId: string;
}

interface OrderState {
  order: Order[];
}

interface SearchState {
  query: string;
}

interface SortState {
  query: string;
}
