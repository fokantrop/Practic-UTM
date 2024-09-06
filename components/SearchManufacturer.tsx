import {Combobox, Transition} from '@headlessui/react'

import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  return (
    <div className="searh-manufacturer">SearchManufacturer
    <Combobox>
        <div className="relative w-full">

        </div>
    </Combobox>
    </div>
  );
};

export default SearchManufacturer;
