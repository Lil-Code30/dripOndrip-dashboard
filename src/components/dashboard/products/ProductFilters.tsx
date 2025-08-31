import React from "react";
import FilterSelect from "@/components/common/FilterSelect";
import {
  categoryFilter,
  priceFilter,
  statusFilter,
  availabilityStatusFilter,
} from "@/data/productFilters";

function ProductFilters() {
  return (
    <div className="flex items-center justify-around gap-x-2 flex-wrap px-3 w-full ">
      <div>
        <p className="font-semibold text-lg">Category</p>
        <FilterSelect data={categoryFilter} />
      </div>
      <div>
        <p className="font-semibold text-lg">Price</p>
        <FilterSelect data={priceFilter} />
      </div>
      <div>
        <p className="font-semibold text-lg">Status</p>
        <FilterSelect data={statusFilter} />
      </div>
      <div>
        <p className="font-semibold text-lg">Availability Status</p>
        <FilterSelect data={availabilityStatusFilter} />
      </div>
    </div>
  );
}

export default ProductFilters;

/*



*/
