"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type FilterOption = {
  name: string;
  title: string;
  icon?: string;
};

type FilterProps = {
  label: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  renderOption?: (option: FilterOption) => React.ReactNode;
};

export function Filter({
  label,
  options,
  selectedValues,
  onChange,
  renderOption,
}: FilterProps) {
  const handleCheckboxChange = (value: string, checked: string | boolean) => {
    if (checked) {
      onChange([...selectedValues, value]);
    } else {
      onChange(selectedValues.filter((f) => f !== value));
    }
  };

  return (
    <>
      <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[300px] py-1">
          {options.map((option) => (
            <li key={option.name}>
              <label className="flex items-center gap-2 cursor-pointer px-2 py-0.5 hover:bg-white/10 transition-colors">
                <Checkbox
                  checked={selectedValues.includes(option.name)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(option.name, checked)
                  }
                  id={`${label.toLowerCase()}-${option.name}`}
                />
                {renderOption ? renderOption(option) : option.title}
              </label>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </>
  );
}
