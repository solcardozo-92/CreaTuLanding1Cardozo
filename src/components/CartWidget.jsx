function CartWidget() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <span className="text-xl">🛒</span>
      <span className="bg-white text-purple-500 text-xs font-bold px-2 py-1 rounded-full">
        0
      </span>
    </div>
  );
}

export default CartWidget;
