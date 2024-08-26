import React, { useState } from 'react';
import Landing from './components/Landing';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Confirmation from './components/Confirmation';

const App = () => {
  const [step, setStep] = useState(0);
  const [designData, setDesignData] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleNext = (data) => {
    setDesignData(data);
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleFinalize = (paymentData) => {
    const orderData = {
      ...designData,
      ...paymentData,
      orderNumber: 'LX123456',
      deliveryDate: '5-7 business days',
    };
    setOrderDetails(orderData);
    setStep(step + 1);
  };

  return (
    <div>
      {step === 0 && <Landing onNext={() => setStep(1)} />} {/* Pass onNext function */}
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 designData={designData} onBack={handleBack} onProceed={() => setStep(3)} />}
      {step === 3 && <Step3 designData={designData} onFinalize={handleFinalize} />}
      {step === 4 && <Confirmation orderDetails={orderDetails} />}
    </div>
  );
};

export default App;
