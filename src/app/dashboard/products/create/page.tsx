"use client";

import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Ellipsis, ImagePlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// NOTE: Lists derived from src/data/addProduct.tsx
const categories = [
  { id: 1, name: "mens-shirts" },
  { id: 2, name: "mens-shoes" },
];
const brands = [
  { id: 1, name: "Fashion Trends" },
  { id: 2, name: "Gigabyte" },
  { id: 3, name: "Classic Wear" },
  { id: 4, name: "Casual Comfort" },
  { id: 5, name: "Urban Chic" },
  { id: 6, name: "Nike" },
  { id: 7, name: "Puma" },
  { id: 8, name: "Off White" },
];
const availabilityStatuses = ["In Stock", "Low Stock"];

interface ProductFormState {
  name: string;
  images: File[];
  description: string;
  price: string;
  categoryId: string;
  brandId: string;
  isActive: boolean;
  isFeatured: boolean;
  discountPercentage: string;
  stock: string;
  tags: string; // comma separated
  sku: string;
  weight: string;
  depth: string;
  width: string;
  height: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: string;
}

const initialState: ProductFormState = {
  name: "",
  images: [],
  description: "",
  price: "",
  categoryId: "",
  brandId: "",
  isActive: true,
  isFeatured: false,
  discountPercentage: "0",
  stock: "",
  tags: "",
  sku: "",
  weight: "",
  depth: "",
  width: "",
  height: "",
  warrantyInformation: "",
  shippingInformation: "",
  availabilityStatus: "In Stock",
  returnPolicy: "",
  minimumOrderQuantity: "1",
};

function AddProductPage() {
  const [form, setForm] = useState<ProductFormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const fileInputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const MAX_IMAGES = 4;

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function addFiles(list: FileList | File[]) {
    const incoming = Array.from(list);
    if (!incoming.length) return;
    setForm((prev) => {
      const next = [...prev.images];
      for (const f of incoming) {
        if (next.length < MAX_IMAGES) next.push(f);
      }
      return { ...prev, images: next };
    });
  }

  function handleImages(e: ChangeEvent<HTMLInputElement>, index?: number) {
    const files = e.target.files;
    if (!files) return;
    if (typeof index === "number") {
      // replace specific slot
      setForm((prev) => {
        const next = [...prev.images];
        const arrFiles = Array.from(files);
        if (arrFiles[0]) {
          if (next[index]) next[index] = arrFiles[0];
          else if (next.length < MAX_IMAGES) next.push(arrFiles[0]);
        }
        return { ...prev, images: next.slice(0, MAX_IMAGES) };
      });
    } else {
      addFiles(files);
    }
    e.target.value = ""; // allow reselect
  }

  function removeImage(idx: number) {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== idx),
    }));
  }

  function triggerFileDialog(slot: number) {
    const el = fileInputsRef.current[slot];
    el?.click();
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function resetForm() {
    setForm(initialState);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submit – integrate API later
    const payload = {
      ...form,
      price: parseFloat(form.price || "0"),
      discountPercentage: parseFloat(form.discountPercentage || "0"),
      stock: parseInt(form.stock || "0", 10),
      weight: parseFloat(form.weight || "0"),
      dimensions: {
        depth: parseFloat(form.depth || "0"),
        width: parseFloat(form.width || "0"),
        height: parseFloat(form.height || "0"),
      },
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      minimumOrderQuantity: parseInt(form.minimumOrderQuantity || "1", 10),
    };
    console.log("Submitting product:", payload);
    setTimeout(() => setSubmitting(false), 600); // fake latency
  }

  return (
    <>
      <div className="flex items-center justify-between p-4 my-3">
        <div className="max-w-2xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            Add New Product
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Provide product details. Fields mirror the existing data shape so
            new items integrate cleanly.
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <Button variant="default">Open Documentation</Button>
          <Button variant="outline">Setup details</Button>
          <Button variant="outline" size="icon" aria-label="more">
            <Ellipsis />
          </Button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-10 p-4 md:p-6 bg-background/40 rounded-lg border"
      >
        {/* Basic Info */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="text-sm font-medium flex items-center justify-between">
                <span>Product Name *</span>
                <span className="text-xs text-muted-foreground">
                  max 80 chars
                </span>
              </label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                maxLength={80}
                placeholder="e.g. Blue & Black Check Shirt"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Short description"
                required
                className="mt-1 w-full min-h-28 rounded-md border bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Category *</label>
                <select
                  name="categoryId"
                  value={form.categoryId}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full h-9 rounded-md border bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id} className="bg-background">
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Brand *</label>
                <select
                  name="brandId"
                  value={form.brandId}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full h-9 rounded-md border bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <option value="" disabled>
                    Select brand
                  </option>
                  {brands.map((b) => (
                    <option key={b.id} value={b.id} className="bg-background">
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <label className="text-sm font-medium">Price *</label>
                <Input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  min={0}
                  step="0.01"
                  placeholder="0.00"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Discount %</label>
                <Input
                  type="number"
                  name="discountPercentage"
                  value={form.discountPercentage}
                  onChange={handleChange}
                  min={0}
                  max={100}
                  step="0.1"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Stock *</label>
                <Input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  min={0}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Min Order Qty *</label>
                <Input
                  type="number"
                  name="minimumOrderQuantity"
                  value={form.minimumOrderQuantity}
                  onChange={handleChange}
                  min={1}
                  required
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="text-sm font-medium">SKU *</label>
                <Input
                  name="sku"
                  value={form.sku}
                  onChange={handleChange}
                  placeholder="MEN-NIK-ABC-123"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Weight (kg)</label>
                <Input
                  type="number"
                  name="weight"
                  value={form.weight}
                  onChange={handleChange}
                  step="0.01"
                  min={0}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Availability</label>
                <select
                  name="availabilityStatus"
                  value={form.availabilityStatus}
                  onChange={handleChange}
                  className="mt-1 w-full h-9 rounded-md border bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  {availabilityStatuses.map((s) => (
                    <option key={s} value={s} className="bg-background">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium flex items-center justify-between">
                <span>Tags</span>
                <span className="text-xs text-muted-foreground">
                  comma separated
                </span>
              </label>
              <Input
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="clothing, men's shirts"
              />
            </div>
          </div>
          {/* Media & Flags */}
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium flex items-center gap-2">
                Product Images{" "}
                <span className="text-xs text-muted-foreground">
                  ({form.images.length}/{MAX_IMAGES})
                </span>
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {Array.from({ length: MAX_IMAGES }).map((_, i) => {
                  const file = form.images[i];
                  return (
                    <div
                      key={i}
                      className="relative aspect-square w-full border border-dashed rounded-md flex items-center justify-center overflow-hidden bg-muted/20 group text-center p-2"
                    >
                      {file ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`image-${i}`}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(i)}
                            className="absolute top-1 right-1 inline-flex items-center justify-center rounded-md bg-background/80 border px-1.5 py-0.5 text-[10px] opacity-0 group-hover:opacity-100 transition"
                          >
                            <X className="size-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => triggerFileDialog(i)}
                            className="absolute bottom-1 left-1 inline-flex items-center rounded-md bg-background/80 border px-1 py-0.5 text-[10px] opacity-0 group-hover:opacity-100 transition"
                          >
                            Replace
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={() => triggerFileDialog(i)}
                          className="flex flex-col items-center justify-center w-full h-full text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <ImagePlus className="size-6 mb-2 opacity-70" />
                          <span className="text-[10px] leading-tight font-medium">
                            Drop your images here, or select{" "}
                            <span className="text-primary">
                              click to browse
                            </span>
                          </span>
                        </button>
                      )}
                      <input
                        ref={(el) => {
                          fileInputsRef.current[i] = el;
                        }}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImages(e, i)}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Drag & drop up to {MAX_IMAGES} images. First will be the main
                image.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={form.isActive}
                  onChange={handleChange}
                  className="size-4 rounded border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                />
                Active
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={form.isFeatured}
                  onChange={handleChange}
                  className="size-4 rounded border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                />
                Featured
              </label>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">
                  Warranty Information
                </label>
                <Input
                  name="warrantyInformation"
                  value={form.warrantyInformation}
                  onChange={handleChange}
                  placeholder="e.g. 1 year warranty"
                />
              </div>
              <div>
                <label className="text-sm font-medium">
                  Shipping Information
                </label>
                <Input
                  name="shippingInformation"
                  value={form.shippingInformation}
                  onChange={handleChange}
                  placeholder="Ships in 3-5 business days"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Return Policy</label>
                <Input
                  name="returnPolicy"
                  value={form.returnPolicy}
                  onChange={handleChange}
                  placeholder="30 days return policy"
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold">Dimensions (cm)</p>
              <div className="grid gap-4 grid-cols-3">
                <div>
                  <label className="text-xs font-medium">Depth</label>
                  <Input
                    type="number"
                    name="depth"
                    value={form.depth}
                    onChange={handleChange}
                    step="0.01"
                    min={0}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium">Width</label>
                  <Input
                    type="number"
                    name="width"
                    value={form.width}
                    onChange={handleChange}
                    step="0.01"
                    min={0}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium">Height</label>
                  <Input
                    type="number"
                    name="height"
                    value={form.height}
                    onChange={handleChange}
                    step="0.01"
                    min={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-end pt-4 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={resetForm}
            disabled={submitting}
          >
            Reset
          </Button>
          <Button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Add Product"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default AddProductPage;
