import React from 'react';
import { Radio, RadioGroup, Text } from '@ui-kitten/components';

const PaymentMethodRadio: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <RadioGroup
      selectedIndex={selectedIndex}
      onChange={(index) => setSelectedIndex(index)}
    >
      <Radio>Ví MoMo</Radio>
      <Radio>VNPAY</Radio>
      <Radio>Thẻ tín dụng/ghi nợ nội địa</Radio>
      <Radio>Thẻ tín dụng/ghi nợ quốc tế</Radio>
      <Radio>Thanh toán tiền mặt</Radio>
    </RadioGroup>
  );
};

export default PaymentMethodRadio;
