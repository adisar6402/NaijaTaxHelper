import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { vatFreeItems } from "@/data/vat-free-items";
import { Search, Check } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function VatFreeItems() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Items", color: "bg-[var(--nigeria-green)]" },
    { id: "food", label: "Food & Beverages", color: "bg-green-500" },
    { id: "baby", label: "Baby Items", color: "bg-blue-500" },
    { id: "education", label: "Education", color: "bg-purple-500" },
    { id: "healthcare", label: "Healthcare", color: "bg-red-500" },
    { id: "utilities", label: "Utilities", color: "bg-yellow-500" },
  ];

  const filteredItems = useMemo(() => {
    return vatFreeItems.filter((item) => {
      const matchesSearch = searchQuery === "" || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryColor = (category: string) => {
    const categoryInfo = categories.find(cat => cat.id === category);
    return categoryInfo?.color || "bg-gray-500";
  };

  const getCategoryLabel = (category: string) => {
    const categoryInfo = categories.find(cat => cat.id === category);
    return categoryInfo?.label || category;
  };

  return (
    <section id="vat-free" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VAT-Free Items Directory</h2>
          <p className="text-xl text-gray-600">Search thousands of items exempt from VAT under the new reforms</p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              className="pl-12 pr-4 py-4 text-lg"
              placeholder="Search for items (e.g., rice, baby diapers, books)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>
        
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id 
                  ? `${category.color} text-white hover:opacity-90` 
                  : "hover:bg-[var(--nigeria-green)] hover:text-white"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* VAT-Free Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card key={index} className="card-shadow card-hover border">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${getCategoryColor(item.category).replace('bg-', 'bg-').replace('-500', '-100')} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Check className={`w-6 h-6 ${getCategoryColor(item.category).replace('bg-', 'text-')}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <Badge 
                      variant="secondary"
                      className={`${getCategoryColor(item.category).replace('bg-', 'bg-').replace('-500', '-100')} ${getCategoryColor(item.category).replace('bg-', 'text-')} text-xs font-medium`}
                    >
                      {getCategoryLabel(item.category)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600 mb-4">
              {searchQuery 
                ? `No items match "${searchQuery}" in the selected category.`
                : "No items found in the selected category."
              }
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
        
        {/* Contact Support CTA */}
<div className="text-center mt-8">
  <div className="text-gray-600 mb-4 flex justify-center items-center gap-1">
    <span>Can’t find what you’re looking for?</span>
    <ContactModal />
  </div>
</div>
</div>
</section>
);
}