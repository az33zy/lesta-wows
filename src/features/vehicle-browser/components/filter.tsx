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

type FilterProps<T extends FilterOption> = {
  label: string;
  options: T[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  renderOption?: (option: T) => React.ReactNode;
};

export function Filter<T extends FilterOption>({
  label,
  options,
  selectedValues,
  onChange,
  renderOption,
}: FilterProps<T>) {
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
        <ul className="w-[300px] pt-1 pb-1.5">
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
