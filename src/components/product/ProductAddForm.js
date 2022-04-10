import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useRef } from 'react';
import { useAuth } from '../../context/authContext';
import { useRouter } from 'next/router';
import { Store } from 'react-notifications-component';
import { errorNotification, successNotification } from '../../shared/constants';

const ProductAddForm = ({ categories }) => {
  const { authUser } = useAuth();
  const router = useRouter();
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageUrlRef = useRef();

  const submitHandler = async e => {
    e.preventDefault();

    const { uid } = authUser;
    const name = nameRef.current.value;
    const price = Number(priceRef.current.value);
    const description = descriptionRef.current.value;
    const category = Number(categoryRef.current.value);
    const imageUrl = imageUrlRef.current.value;

    if (!uid || !name || !price || !description || !category || !imageUrl) {
      const notification = errorNotification;
      notification.message = 'Input Fields Missing';
      Store.addNotification(notification);
      return;
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, description, category, imageUrl }),
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/products/${uid}`,
      options
    );
    const { message } = await response.json();

    if (response.status === 201) {
      const notification = successNotification;
      notification.message = message;
      Store.addNotification(notification);
      router.push('/');
    } else {
      const notification = errorNotification;
      if (response.status === 400) notification.message = [message];
      Store.addNotification(notification);
    }
  };

  return (
    <div className="product_add_form_container">
      <form onSubmit={submitHandler} className="product_add_form">
        <p className="product_add_form_heading">Add Product</p>

        {/* Product Name Input */}
        <label>Product Name</label>
        <input
          type="text"
          ref={nameRef}
          name="productName"
          autoComplete="On"
          autoFocus
          required
        />

        {/* Product Price Input */}
        <label>Product Price</label>
        <input
          type="number"
          ref={priceRef}
          name="productPrice"
          autoComplete="On"
          required
        />

        {/* Product Price Input */}
        <label>Product Description</label>
        <textarea
          ref={descriptionRef}
          name="productDescription"
          autoComplete="On"
          required
        />

        {/* Product Category Input */}
        <label>Product Category</label>
        <select ref={categoryRef} name="productCategory" autoComplete="On">
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>

        {/* Product Image URL Input */}
        <label>Product Image URL</label>
        <input
          type="url"
          ref={imageUrlRef}
          name="productUrl"
          autoComplete="On"
          required
        />

        {/* Product Add Button */}
        <button className="product_add_form_button">
          <AiOutlinePlusCircle className="icon_medium icon_green" /> Product
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
