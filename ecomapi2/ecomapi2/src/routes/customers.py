from flask import Blueprint, request, jsonify
from app.models import db, Customer, CustomerAccount
from werkzeug.security import generate_password_hash

customers_bp = Blueprint('customers', __name__)

@customers_bp.route('/customers', methods=['POST'])
def create_customer():
    data = request.json
    if not data.get("name") or not data.get("email") or not data.get("phone"):
        return jsonify({"error": "Missing customer information"}), 400

    customer = Customer(name=data['name'], email=data['email'], phone=data['phone'])
    db.session.add(customer)
    db.session.commit()
    return jsonify({"message": "Customer added successfully", "customer_id": customer.id})

@customers_bp.route('/customer_accounts', methods=['POST'])
def create_customer_account():
    data = request.json
    customer = Customer.query.get(data.get("customer_id"))
    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    hashed_password = generate_password_hash(data['password'])
    account = CustomerAccount(username=data['username'], password_hash=hashed_password, customer_id=customer.id)
    db.session.add(account)
    db.session.commit()
    return jsonify({"message": "Account created successfully", "account_id": account.id})
