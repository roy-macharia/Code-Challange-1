function estimateTransactionFee(amountToSend) {
  const rawFee = 0.015 * amountToSend;
  const fee = Math.max(10, Math.min(70, rawFee));
  const total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${fee}
Total amount to be debited: KES ${total}

Send Money Securely!`);
}

const input = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(input));