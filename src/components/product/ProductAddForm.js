import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const ProductAddForm = ({ categories }) => {
  return (
    <div className="product_add_form_container">
      <form className="product_add_form">
        <p className="product_add_form_heading">Add Product</p>

        {/* Product Name Input */}
        <label>Product Name</label>
        <input type="text" />

        {/* Product Price Input */}
        <label>Product Price</label>
        <input type="number" />

        {/* Product Category Input */}
        <label>Product Category</label>
        <select>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>

        {/* Product Image URL Input */}
        <label>Product Image URL</label>
        <input type="url" />

        {/* Product Add Button */}
        <button className="product_add_form_button">
          <AiOutlinePlusCircle className="icon_medium icon_green" /> Product
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
