import useCartStore from "./useCartStore";

function Wishlist() {
    const { items, addItem, removeItem, clearCart } = useCartStore();

    return (
        <div className="wishlist-container">
            <h1 className="wishlist-title">Wishlist</h1>

            <form className="wishlist-form" onSubmit={(e) => {
                if (e.target.elements.name.value !== "") {
                    e.preventDefault();
                    addItem({ id: Date.now(), name: e.target.elements.name.value });
                    e.target.reset();
                }
            }}>
                <input 
                    className="wishlist-input" 
                    type="text" 
                    placeholder="Add new item..." 
                    name="name" 
                />
                <button className="wishlist-add-btn" type="submit">Add</button>
            </form>

            <ul className="wishlist-items">
                {items.length === 0 ? (
                    <li className="wishlist-empty">Your wishlist is empty ✨</li>
                ) : (
                    items.map((item) => (
                        <li className="wishlist-item" key={item.id}>
                            <span className="item-name">{item.name}</span>
                            <button 
                                className="wishlist-remove-btn" 
                                onClick={() => removeItem(item)}
                                aria-label="Remover item"
                            >✕</button>
                        </li>
                    ))
                )}
            </ul>
            
            {items.length > 0 && (
                <button className="wishlist-clear-btn" onClick={() => clearCart()}>
                    Clear Cart
                </button>
            )}
        </div>
    );
}

export default Wishlist;
