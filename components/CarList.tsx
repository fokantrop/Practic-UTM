'use client';

import { CarCard } from '@/components';

// Добавляем интерфейс для типа Car
interface Car {
  id: string;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

// Типизируем пропсы компонента
interface CarListProps {
  cars: Car[];
}

const CarList = ({ cars }: CarListProps) => (
  <div className='home__cars-wrapper'>
    {cars.map((car, index) => (
      <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
    ))}
  </div>
);

export default CarList;