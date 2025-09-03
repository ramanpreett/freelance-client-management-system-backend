import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  amount: Number,
  status: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' },
  dueDate: Date,
  description: { type: String, default: 'Professional Services' },
});

export default mongoose.model('Invoice', invoiceSchema);
