import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

export const ShoppingCartComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return newQuantity === 0 ? null : { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Cart Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
        size="icon"
      >
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">
            {itemCount}
          </span>
        )}
      </Button>

      {/* Cart Panel */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-96 max-h-[600px] overflow-hidden flex flex-col shadow-2xl">
          <div className="p-4 border-b border-border flex items-center justify-between bg-muted/50">
            <h3 className="font-semibold text-lg">Add-Ons Cart</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>Your cart is empty</p>
                <p className="text-sm mt-1">Add router or installation below</p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map(item => (
                  <div key={item.id} className="border border-border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="font-semibold">${item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-border p-4 bg-muted/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold">Total:</span>
                <span className="text-2xl font-bold">${total}</span>
              </div>
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </Card>
      )}

      {/* Quick Add Buttons */}
      <div className="fixed bottom-6 left-6 z-40 space-y-2">
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => addItem({
            id: "router",
            name: "GI NET Enterprise Modem",
            price: 199,
            description: "WiFi HIDE Technology with VLAN support"
          })}
        >
          <Plus className="h-4 w-4" />
          Add Router ($199)
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => addItem({
            id: "installation",
            name: "Professional On-Site Installation",
            price: 99,
            description: "Technician setup with VLAN configuration"
          })}
        >
          <Plus className="h-4 w-4" />
          Add Installation ($99)
        </Button>
      </div>
    </>
  );
};
