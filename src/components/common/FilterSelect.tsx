import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filterData } from "@/types/types";

function FilterSelect({ data }: { data: filterData[] }) {
  return (
    <Select>
      <SelectTrigger className="w-[180px] rounded-full hover:cursor-pointer mt-1">
        <SelectValue placeholder={data[0].title} />
      </SelectTrigger>
      <SelectContent>
        {data.map((item) => (
          <SelectItem
            key={item.title}
            value={item.value}
            className="hover:cursor-pointer"
          >
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default FilterSelect;
