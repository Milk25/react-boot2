from flask import Blueprint, request, jsonify
from app.models import db, Product

products_bp = Blueprint('products', __name__)

@products_bp.route('/products', methods=['POST'])
def create_product():
    data = request.json
    if not data.get("name") or not data.get("price"):
        return jsonify({"error": "Missing product information"}), 400

    product = Product(name=data['name'], price=data['price'], stock=data.get("stock", 0))
    db.session.add(product)
    db.session.commit()
    return jsonify({"message": "Product added successfully", "product_id": product.id})
