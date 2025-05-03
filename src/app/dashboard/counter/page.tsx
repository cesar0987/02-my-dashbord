import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: 'Counter',
  description: 'Counter page',
};

export default function CounterPage() {
  


  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <span>Productos del Carrito</span>

      <CartCounter value={20} />
      
      </div>
      
  );
}