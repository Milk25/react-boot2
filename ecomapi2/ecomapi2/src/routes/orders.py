from flask import Blueprint, request, jsonify
from app.models import db, Order, OrderItem, Product

orders_bp = Blueprint('orders', __name__)

@orders_bp.route('/orders', methods=['POST'])
def place_order():
    data = request.json
    if not data.get("customer_id") or not data.get("items"):
        return jsonify({"error": "Missing order details"}), 400

    order = Order(customer_id=data['customer_id'])
    db.session.add(order)
    db.session.commit()

    total_price = 0
    for item in data['items']:
        product = Product.query.get(item['product_id'])
        if product and product.stock >= item['quantity']:
            order_item = OrderItem(order_id=order.id, product_id=product.id, quantity=item['quantity'])
            db.session.add(order_item)
            product.stock -= item['quantity']
            total_price += product.price * item['quantity']
        else:
            return jsonify({"error": f"Product {product.name} is out of stock"}), 400

    db.session.commit()
    return jsonify({"message": "Order placed successfully", "order_id": order.id, "total_price": total_price})
