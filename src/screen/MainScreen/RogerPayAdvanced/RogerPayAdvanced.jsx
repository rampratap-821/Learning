import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Alert,
  useWindowDimensions,
  Platform,
  SafeAreaView
} from 'react-native';

const RogerPayAdvanced = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const isSmallScreen = screenWidth < 375;
  const isMediumScreen = screenWidth >= 375 && screenWidth < 768;
  const isLargeScreen = screenWidth >= 768;
  const isLandscape = screenWidth > screenHeight;

  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('500');
  const [selectedMethod, setSelectedMethod] = useState('qr');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');

  const paymentMethods = [
    { id: 'qr', name: 'UPI QR', icon: '📱', color: ['#8B5CF6', '#EC4899'] },
    { id: 'card', name: 'Card', icon: '💳', color: ['#3B82F6', '#06B6D4'] },
    { id: 'upi', name: 'UPI ID', icon: '🔗', color: ['#10B981', '#047857'] },
    { id: 'netbanking', name: 'Net Banking', icon: '🏦', color: ['#F59E0B', '#EF4444'] },
    { id: 'wallet', name: 'Wallet', icon: '👛', color: ['#EAB308', '#F59E0B'] }
  ];

  const banks = [
    { name: 'HDFC Bank', icon: '🏦' },
    { name: 'ICICI Bank', icon: '🏛️' },
    { name: 'SBI', icon: '🇮🇳' },
    { name: 'Axis Bank', icon: '⚡' },
    { name: 'Kotak Bank', icon: '🔷' }
  ];

  const wallets = [
    { name: 'Paytm', icon: '💸', color: '#E1F5FE' },
    { name: 'PhonePe', icon: '📱', color: '#F3E5F5' },
    { name: 'Google Pay', icon: '🔵', color: '#E8F5E8' },
    { name: 'Amazon Pay', icon: '🅰️', color: '#FFFDE7' }
  ];

  // Responsive size calculator
  const responsiveSize = (small, medium, large) => {
    if (isSmallScreen) return small;
    if (isMediumScreen) return medium;
    return large;
  };

  const responsivePadding = () => {
    if (isLandscape) return 12;
    return responsiveSize(12, 16, 24);
  };

  const generateQRCode = () => {
    const qrSize = responsiveSize(120, 160, 200);
    return `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=upi://pay?pa=payments@rogerpay&pn=RogerPay+Merchant&am=${amount}&tn=Order+Payment&cu=INR`;
  };

  const initiatePayment = () => {
    if (!amount || parseInt(amount) <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid payment amount');
      return;
    }

    setIsLoading(true);
    setPaymentStatus(null);

    setTimeout(() => {
      setIsLoading(false);
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        setPaymentStatus({
          status: 'success',
          transactionId: `RP${Date.now()}`,
          amount: amount,
          method: selectedMethod
        });
      } else {
        setPaymentStatus({
          status: 'failed',
          error: 'Payment failed. Please try again.'
        });
      }
    }, 3000);
  };

  const resetPayment = () => {
    setPaymentStatus(null);
    setSelectedMethod('qr');
    setCardDetails({ number: '', expiry: '', cvv: '', name: '' });
    setUpiId('');
    setSelectedBank('');
    setSelectedWallet('');
  };

  const handleCardInput = (field, value) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value) => {
    return value.replace(/\//g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
  };

  const renderPaymentMethod = () => {
    const methodStyles = getMethodStyles();

    switch(selectedMethod) {
      case 'qr':
        return (
          <View style={methodStyles.container}>
            <View style={methodStyles.gradientCard}>
              <View style={methodStyles.qrCodeContainer}>
                <Image 
                  source={{ uri: generateQRCode() }} 
                  style={methodStyles.qrCode}
                  resizeMode="contain"
                />
              </View>
              
              <View style={methodStyles.merchantInfo}>
                <View style={methodStyles.infoRow}>
                  <Text style={methodStyles.infoLabel}>Merchant</Text>
                  <Text style={methodStyles.infoValue}>RogerPay</Text>
                </View>
                <View style={methodStyles.infoRow}>
                  <Text style={methodStyles.infoLabel}>UPI ID</Text>
                  <Text style={methodStyles.infoValue}>payments@rogerpay</Text>
                </View>
                <View style={methodStyles.infoRow}>
                  <Text style={methodStyles.infoLabel}>Amount</Text>
                  <Text style={methodStyles.amountText}>₹{amount}</Text>
                </View>
              </View>
            </View>

            <View style={methodStyles.scanInfo}>
              <Text style={methodStyles.scanTitle}>Scan with any UPI App</Text>
              <View style={methodStyles.appsContainer}>
                {['Google Pay', 'PhonePe', 'Paytm', 'BHIM'].map((app, index) => (
                  <View key={app} style={methodStyles.appItem}>
                    <View style={methodStyles.appIcon}>
                      <Text style={methodStyles.appIconText}>
                        {['🔵', '📱', '💸', '💳'][index]}
                      </Text>
                    </View>
                    <Text style={methodStyles.appName}>{app}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        );

      case 'card':
        return (
          <View style={methodStyles.container}>
            {/* Card Preview */}
            <View style={methodStyles.cardPreview}>
              <View style={methodStyles.cardHeader}>
                <Text style={methodStyles.cardIcon}>💳</Text>
                <Text style={methodStyles.cardType}>VISA</Text>
              </View>
              <Text style={methodStyles.cardNumber}>
                {cardDetails.number || '•••• •••• •••• ••••'}
              </Text>
              <View style={methodStyles.cardFooter}>
                <View>
                  <Text style={methodStyles.cardLabel}>Card Holder</Text>
                  <Text style={methodStyles.cardValue}>{cardDetails.name || 'YOUR NAME'}</Text>
                </View>
                <View>
                  <Text style={methodStyles.cardLabel}>Expires</Text>
                  <Text style={methodStyles.cardValue}>{cardDetails.expiry || 'MM/YY'}</Text>
                </View>
              </View>
            </View>

            {/* Card Form */}
            <View style={methodStyles.cardForm}>
              <View style={methodStyles.inputGroup}>
                <Text style={methodStyles.inputLabel}>Card Number</Text>
                <TextInput
                  style={methodStyles.textInput}
                  maxLength={19}
                  placeholder="1234 5678 9012 3456"
                  value={formatCardNumber(cardDetails.number)}
                  onChangeText={(text) => handleCardInput('number', text.replace(/\s/g, ''))}
                  keyboardType="numeric"
                />
              </View>
              
              <View style={methodStyles.row}>
                <View style={[methodStyles.inputGroup, { flex: 1, marginRight: 8 }]}>
                  <Text style={methodStyles.inputLabel}>Expiry Date</Text>
                  <TextInput
                    style={methodStyles.textInput}
                    maxLength={5}
                    placeholder="MM/YY"
                    value={formatExpiry(cardDetails.expiry)}
                    onChangeText={(text) => handleCardInput('expiry', text.replace(/\//g, ''))}
                    keyboardType="numeric"
                  />
                </View>
                
                <View style={[methodStyles.inputGroup, { flex: 1, marginLeft: 8 }]}>
                  <Text style={methodStyles.inputLabel}>CVV</Text>
                  <TextInput
                    style={methodStyles.textInput}
                    maxLength={3}
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChangeText={(text) => handleCardInput('cvv', text.replace(/\D/g, ''))}
                    keyboardType="numeric"
                    secureTextEntry
                  />
                </View>
              </View>
              
              <View style={methodStyles.inputGroup}>
                <Text style={methodStyles.inputLabel}>Cardholder Name</Text>
                <TextInput
                  style={methodStyles.textInput}
                  placeholder="John Doe"
                  value={cardDetails.name}
                  onChangeText={(text) => handleCardInput('name', text)}
                />
              </View>
            </View>
          </View>
        );

      case 'upi':
        return (
          <View style={methodStyles.container}>
            <View style={methodStyles.gradientCard}>
              <Text style={methodStyles.upiIcon}>🔗</Text>
              <Text style={methodStyles.upiTitle}>UPI Payment</Text>
              <Text style={methodStyles.upiSubtitle}>Enter your UPI ID to receive payment request</Text>
            </View>

            <View style={methodStyles.inputGroup}>
              <Text style={methodStyles.inputLabel}>Your UPI ID</Text>
              <TextInput
                style={[methodStyles.textInput, methodStyles.upiInput]}
                placeholder="yourname@upi"
                value={upiId}
                onChangeText={setUpiId}
                textAlign="center"
              />
            </View>

            <View style={methodStyles.upiInfo}>
              <Text style={methodStyles.upiInfoText}>
                You will receive a payment request on your UPI app
              </Text>
            </View>
          </View>
        );

      case 'netbanking':
        return (
          <View style={methodStyles.container}>
            <View style={methodStyles.gradientCard}>
              <Text style={methodStyles.sectionTitle}>Select Your Bank</Text>
              <View style={methodStyles.banksGrid}>
                {banks.map(bank => (
                  <TouchableOpacity
                    key={bank.name}
                    style={[
                      methodStyles.bankItem,
                      selectedBank === bank.name && methodStyles.selectedBankItem
                    ]}
                    onPress={() => setSelectedBank(bank.name)}
                  >
                    <Text style={methodStyles.bankIcon}>{bank.icon}</Text>
                    <Text style={methodStyles.bankName}>{bank.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        );

      case 'wallet':
        return (
          <View style={methodStyles.container}>
            <View style={methodStyles.gradientCard}>
              <Text style={methodStyles.sectionTitle}>Choose Wallet</Text>
              <View style={methodStyles.walletsGrid}>
                {wallets.map(wallet => (
                  <TouchableOpacity
                    key={wallet.name}
                    style={[
                      methodStyles.walletItem,
                      { backgroundColor: wallet.color },
                      selectedWallet === wallet.name && methodStyles.selectedWalletItem
                    ]}
                    onPress={() => setSelectedWallet(wallet.name)}
                  >
                    <Text style={methodStyles.walletIcon}>{wallet.icon}</Text>
                    <Text style={methodStyles.walletName}>{wallet.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  const getMethodStyles = () => {
    return {
      container: {
        gap: responsiveSize(16, 20, 24),
      },
      gradientCard: {
        borderRadius: responsiveSize(12, 16, 20),
        padding: responsiveSize(16, 20, 24),
        borderWidth: 1,
        borderColor: '#DDD6FE',
        backgroundColor: '#F3E8FF',
      },
      qrCodeContainer: {
        backgroundColor: '#FFFFFF',
        padding: responsiveSize(16, 20, 24),
        borderRadius: responsiveSize(8, 12, 16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 2,
        borderColor: '#10B981',
        alignSelf: 'center',
      },
      qrCode: {
        width: responsiveSize(120, 160, 200),
        height: responsiveSize(120, 160, 200),
        borderRadius: 8,
      },
      merchantInfo: {
        backgroundColor: '#FFFFFF',
        borderRadius: responsiveSize(8, 12, 16),
        padding: responsiveSize(12, 16, 20),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#D1FAE5',
        marginTop: responsiveSize(12, 16, 20),
      },
      infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: responsiveSize(6, 8, 10),
      },
      infoLabel: {
        fontSize: responsiveSize(10, 12, 14),
        color: '#6B7280',
      },
      infoValue: {
        fontSize: responsiveSize(12, 14, 16),
        fontWeight: '600',
        color: '#065F46',
      },
      amountText: {
        fontSize: responsiveSize(16, 20, 24),
        fontWeight: 'bold',
        color: '#064E3B',
      },
      scanInfo: {
        backgroundColor: '#F9FAFB',
        borderRadius: responsiveSize(8, 12, 16),
        padding: responsiveSize(12, 16, 20),
        borderWidth: 1,
        borderColor: '#E5E7EB',
      },
      scanTitle: {
        fontSize: responsiveSize(12, 14, 16),
        fontWeight: '600',
        color: '#374151',
        marginBottom: responsiveSize(8, 12, 16),
        textAlign: 'center',
      },
      appsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: isSmallScreen ? 'wrap' : 'nowrap',
      },
      appItem: {
        alignItems: 'center',
        marginBottom: isSmallScreen ? 8 : 0,
        minWidth: isSmallScreen ? '45%' : 'auto',
      },
      appIcon: {
        width: responsiveSize(40, 48, 56),
        height: responsiveSize(40, 48, 56),
        backgroundColor: '#FFFFFF',
        borderRadius: responsiveSize(8, 12, 16),
        borderWidth: 1,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: responsiveSize(6, 8, 10),
      },
      appIconText: {
        fontSize: responsiveSize(14, 16, 18),
      },
      appName: {
        fontSize: responsiveSize(10, 12, 14),
        color: '#6B7280',
      },
      cardPreview: {
        borderRadius: responsiveSize(12, 16, 20),
        padding: responsiveSize(16, 20, 24),
        backgroundColor: '#4F46E5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
      },
      cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: responsiveSize(24, 28, 32),
      },
      cardIcon: {
        fontSize: responsiveSize(20, 24, 28),
        color: '#FFFFFF',
      },
      cardType: {
        fontSize: responsiveSize(12, 14, 16),
        color: '#FFFFFF',
        opacity: 0.8,
      },
      cardNumber: {
        fontSize: responsiveSize(16, 18, 20),
        fontFamily: 'monospace',
        letterSpacing: 1,
        color: '#FFFFFF',
        marginBottom: responsiveSize(20, 24, 28),
      },
      cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      cardLabel: {
        fontSize: responsiveSize(10, 12, 14),
        color: '#FFFFFF',
        opacity: 0.8,
      },
      cardValue: {
        fontSize: responsiveSize(12, 14, 16),
        fontWeight: '600',
        color: '#FFFFFF',
      },
      cardForm: {
        gap: responsiveSize(12, 16, 20),
      },
      inputGroup: {
        gap: responsiveSize(6, 8, 10),
      },
      inputLabel: {
        fontSize: responsiveSize(12, 14, 16),
        fontWeight: '600',
        color: '#374151',
      },
      textInput: {
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderRadius: responsiveSize(8, 12, 16),
        padding: responsiveSize(12, 14, 16),
        fontSize: responsiveSize(14, 16, 18),
        backgroundColor: '#FFFFFF',
      },
      upiInput: {
        textAlign: 'center',
        fontSize: responsiveSize(16, 18, 20),
        fontWeight: '600',
      },
      row: {
        flexDirection: isSmallScreen ? 'column' : 'row',
        gap: isSmallScreen ? 12 : 0,
      },
      upiIcon: {
        fontSize: responsiveSize(36, 48, 60),
        textAlign: 'center',
        marginBottom: responsiveSize(12, 16, 20),
      },
      upiTitle: {
        fontSize: responsiveSize(16, 20, 24),
        fontWeight: 'bold',
        color: '#065F46',
        textAlign: 'center',
        marginBottom: responsiveSize(8, 10, 12),
      },
      upiSubtitle: {
        color: '#059669',
        textAlign: 'center',
        fontSize: responsiveSize(12, 14, 16),
      },
      upiInfo: {
        backgroundColor: '#F9FAFB',
        borderRadius: responsiveSize(8, 12, 16),
        padding: responsiveSize(12, 16, 20),
        borderWidth: 1,
        borderColor: '#E5E7EB',
      },
      upiInfoText: {
        fontSize: responsiveSize(12, 14, 16),
        color: '#6B7280',
        textAlign: 'center',
      },
      sectionTitle: {
        fontSize: responsiveSize(14, 18, 22),
        fontWeight: 'bold',
        color: '#92400E',
        textAlign: 'center',
        marginBottom: responsiveSize(12, 16, 20),
      },
      banksGrid: {
        gap: responsiveSize(8, 10, 12),
      },
      bankItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: responsiveSize(12, 14, 16),
        borderRadius: responsiveSize(8, 12, 16),
        borderWidth: 2,
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
        gap: responsiveSize(8, 10, 12),
      },
      selectedBankItem: {
        borderColor: '#F59E0B',
        backgroundColor: '#FEF3C7',
      },
      bankIcon: {
        fontSize: responsiveSize(16, 18, 20),
      },
      bankName: {
        fontSize: responsiveSize(12, 14, 16),
        fontWeight: '600',
        color: '#1F2937',
      },
      walletsGrid: {
        flexDirection: isSmallScreen ? 'column' : 'row',
        flexWrap: isSmallScreen ? 'nowrap' : 'wrap',
        gap: responsiveSize(8, 10, 12),
      },
      walletItem: {
        flex: isSmallScreen ? 0 : 1,
        minWidth: isSmallScreen ? '100%' : (screenWidth - 100) / 2,
        padding: responsiveSize(12, 14, 16),
        borderRadius: responsiveSize(8, 12, 16),
        borderWidth: 2,
        borderColor: '#E5E7EB',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: responsiveSize(80, 90, 100),
      },
      selectedWalletItem: {
        borderColor: '#EAB308',
        backgroundColor: '#FEF9C3',
        transform: [{ scale: 1.05 }],
      },
      walletIcon: {
        fontSize: responsiveSize(20, 24, 28),
        marginBottom: responsiveSize(6, 8, 10),
      },
      walletName: {
        fontSize: responsiveSize(12, 14, 16),
        fontWeight: '600',
        color: '#1F2937',
      },
    };
  };

  const styles = createStyles(isSmallScreen, isMediumScreen, isLargeScreen, isLandscape, screenWidth, responsiveSize, responsivePadding);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>💳</Text>
          </View>
          <Text style={styles.title}>RogerPay</Text>
          <Text style={styles.subtitle}>Secure Payment Gateway</Text>
        </View>

        <View style={styles.mainCard}>
          {/* Amount Section */}
          {!paymentStatus && (
            <View style={styles.amountSection}>
              <Text style={styles.amountLabel}>PAYMENT AMOUNT</Text>
              <View style={styles.amountInputContainer}>
                <Text style={styles.currencySymbol}>₹</Text>
                <TextInput
                  style={styles.amountInput}
                  value={amount}
                  onChangeText={setAmount}
                  placeholder="Enter amount"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  keyboardType="numeric"
                />
              </View>
            </View>
          )}

          <View style={styles.paymentContent}>
            {/* Payment Methods Selection */}
            {!paymentStatus && !isLoading && (
              <View style={styles.methodsSection}>
                <View style={styles.methodsHeader}>
                  <Text style={styles.methodsTitle}>Choose Payment Method</Text>
                  <Text style={styles.selectedMethodText}>
                    {paymentMethods.find(m => m.id === selectedMethod)?.name}
                  </Text>
                </View>
                
                <ScrollView 
                  horizontal 
                  showsHorizontalScrollIndicator={false}
                  style={styles.methodsScroll}
                  contentContainerStyle={styles.methodsScrollContent}
                >
                  {paymentMethods.map(method => (
                    <TouchableOpacity
                      key={method.id}
                      style={[
                        styles.methodButton,
                        selectedMethod === method.id && [
                          styles.methodButtonSelected,
                          { backgroundColor: method.color[0] }
                        ]
                      ]}
                      onPress={() => setSelectedMethod(method.id)}
                    >
                      <Text style={styles.methodIcon}>{method.icon}</Text>
                      <Text style={[
                        styles.methodName,
                        selectedMethod === method.id && styles.methodNameSelected
                      ]}>
                        {method.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

                {/* Selected Method Form */}
                <View style={styles.methodForm}>
                  {renderPaymentMethod()}
                </View>
              </View>
            )}

            {/* Pay Button */}
            {!paymentStatus && !isLoading && (
              <TouchableOpacity 
                style={[
                  styles.payButton,
                  (!amount || parseInt(amount) <= 0) && styles.payButtonDisabled
                ]}
                onPress={initiatePayment}
                disabled={!amount || parseInt(amount) <= 0}
              >
                <Text style={styles.payButtonText}>Pay ₹{amount}</Text>
              </TouchableOpacity>
            )}

            {/* Loading State */}
            {isLoading && (
              <View style={styles.loadingContainer}>
                <View style={styles.loadingLogo}>
                  <ActivityIndicator size="large" color="#FFFFFF" />
                </View>
                <Text style={styles.loadingTitle}>Processing Payment</Text>
                <Text style={styles.loadingText}>
                  Please wait while we process your {paymentMethods.find(m => m.id === selectedMethod)?.name} payment
                </Text>
                <View style={styles.progressBar}>
                  <View style={styles.progressFill} />
                </View>
              </View>
            )}

            {/* Payment Result */}
            {paymentStatus && (
              <View style={[
                styles.resultContainer,
                paymentStatus.status === 'success' 
                  ? styles.successResult 
                  : styles.failedResult
              ]}>
                
                {paymentStatus.status === 'success' ? (
                  <View style={styles.successContent}>
                    <View style={styles.successIcon}>
                      <Text style={styles.successIconText}>✅</Text>
                    </View>
                    <Text style={styles.successTitle}>Payment Successful!</Text>
                    
                    <View style={styles.transactionDetails}>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Transaction ID</Text>
                        <Text style={styles.detailValue}>{paymentStatus.transactionId}</Text>
                      </View>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Amount</Text>
                        <Text style={styles.detailAmount}>₹{paymentStatus.amount}</Text>
                      </View>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Method</Text>
                        <Text style={styles.detailValue}>
                          {paymentMethods.find(m => m.id === paymentStatus.method)?.name}
                        </Text>
                      </View>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Status</Text>
                        <View style={styles.statusBadge}>
                          <Text style={styles.statusText}>Completed</Text>
                        </View>
                      </View>
                    </View>
                    
                    <Text style={styles.thankYouText}>Thank you for your payment!</Text>
                  </View>
                ) : (
                  <View style={styles.failedContent}>
                    <View style={styles.failedIcon}>
                      <Text style={styles.failedIconText}>❌</Text>
                    </View>
                    <Text style={styles.failedTitle}>Payment Failed</Text>
                    <Text style={styles.failedMessage}>{paymentStatus.error}</Text>
                    <Text style={styles.failedSubtext}>
                      Please try again or use a different payment method
                    </Text>
                  </View>
                )}

                <TouchableOpacity 
                  style={styles.resetButton}
                  onPress={resetPayment}
                >
                  <Text style={styles.resetButtonText}>Make Another Payment</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Security Features */}
            <View style={styles.securityContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.securityTags}>
                  <View style={styles.securityTag}>
                    <Text style={styles.securityIcon}>🔒</Text>
                    <Text style={styles.securityText}>256-bit SSL</Text>
                  </View>
                  <View style={styles.securityTag}>
                    <Text style={styles.securityIcon}>✅</Text>
                    <Text style={styles.securityText}>PCI DSS Compliant</Text>
                  </View>
                  <View style={styles.securityTag}>
                    <Text style={styles.securityIcon}>🛡️</Text>
                    <Text style={styles.securityText}>RBI Approved</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = (isSmallScreen, isMediumScreen, isLargeScreen, isLandscape, screenWidth, responsiveSize, responsivePadding) => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#F8FAFC',
    },
    container: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
      padding: responsivePadding(),
    },
    header: {
      alignItems: 'center',
      marginBottom: responsiveSize(20, 24, 32),
      paddingTop: isLandscape ? 10 : 20,
    },
    logo: {
      width: responsiveSize(60, 70, 80),
      height: responsiveSize(60, 70, 80),
      backgroundColor: '#4F46E5',
      borderRadius: responsiveSize(16, 18, 20),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: responsiveSize(12, 14, 16),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    logoText: {
      fontSize: responsiveSize(24, 28, 32),
      color: '#FFFFFF',
    },
    title: {
      fontSize: responsiveSize(28, 32, 36),
      fontWeight: 'bold',
      color: '#3B82F6',
      marginBottom: responsiveSize(4, 6, 8),
      textAlign: 'center',
    },
    subtitle: {
      fontSize: responsiveSize(14, 16, 18),
      color: '#6B7280',
      textAlign: 'center',
    },
    mainCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: responsiveSize(16, 20, 24),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 8,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#F3F4F6',
      marginBottom: 20,
    },
    amountSection: {
      backgroundColor: '#4F46E5',
      padding: responsiveSize(20, 24, 32),
    },
    amountLabel: {
      color: '#FFFFFF',
      fontSize: responsiveSize(12, 14, 16),
      fontWeight: '600',
      opacity: 0.9,
      textAlign: 'center',
      marginBottom: responsiveSize(12, 14, 16),
    },
    amountInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: responsiveSize(16, 18, 20),
      borderWidth: 2,
      borderColor: 'rgba(255,255,255,0.3)',
      paddingHorizontal: responsiveSize(12, 14, 16),
    },
    currencySymbol: {
      fontSize: responsiveSize(18, 20, 24),
      color: '#FFFFFF',
      marginRight: responsiveSize(8, 10, 12),
    },
    amountInput: {
      flex: 1,
      fontSize: responsiveSize(18, 20, 24),
      fontWeight: 'bold',
      color: '#FFFFFF',
      paddingVertical: responsiveSize(12, 14, 16),
    },
    paymentContent: {
      padding: responsiveSize(16, 20, 32),
    },
    methodsSection: {
      marginBottom: responsiveSize(16, 20, 24),
    },
    methodsHeader: {
      flexDirection: isSmallScreen ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isSmallScreen ? 'flex-start' : 'center',
      marginBottom: responsiveSize(16, 20, 24),
      gap: isSmallScreen ? 8 : 0,
    },
    methodsTitle: {
      fontSize: responsiveSize(16, 18, 20),
      fontWeight: 'bold',
      color: '#1F2937',
    },
    selectedMethodText: {
      fontSize: responsiveSize(12, 14, 16),
      color: '#6B7280',
    },
    methodsScroll: {
      marginBottom: responsiveSize(16, 20, 24),
    },
    methodsScrollContent: {
      paddingHorizontal: 4,
    },
    methodButton: {
      width: responsiveSize(70, 80, 90),
      padding: responsiveSize(12, 14, 16),
      borderRadius: responsiveSize(12, 14, 16),
      borderWidth: 2,
      borderColor: '#E5E7EB',
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    },
    methodButtonSelected: {
      borderColor: '#1F2937',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
      transform: [{ scale: 1.05 }],
    },
    methodIcon: {
      fontSize: responsiveSize(20, 22, 24),
      marginBottom: responsiveSize(6, 8, 10),
    },
    methodName: {
      fontSize: responsiveSize(10, 12, 14),
      fontWeight: '600',
      color: '#374151',
      textAlign: 'center',
    },
    methodNameSelected: {
      color: '#FFFFFF',
    },
    methodForm: {
      backgroundColor: '#F9FAFB',
      borderRadius: responsiveSize(12, 14, 16),
      padding: responsiveSize(16, 20, 24),
      borderWidth: 1,
      borderColor: '#E5E7EB',
    },
    // Pay Button
    payButton: {
      backgroundColor: '#10B981',
      borderRadius: responsiveSize(12, 14, 16),
      padding: responsiveSize(16, 18, 20),
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    payButtonDisabled: {
      backgroundColor: '#9CA3AF',
    },
    payButtonText: {
      fontSize: responsiveSize(16, 18, 20),
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    // Loading State
    loadingContainer: {
      alignItems: 'center',
      paddingVertical: responsiveSize(32, 40, 48),
    },
    loadingLogo: {
      width: responsiveSize(60, 70, 80),
      height: responsiveSize(60, 70, 80),
      backgroundColor: '#4F46E5',
      borderRadius: responsiveSize(16, 18, 20),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: responsiveSize(16, 20, 24),
    },
    loadingTitle: {
      fontSize: responsiveSize(16, 18, 20),
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: responsiveSize(8, 10, 12),
      textAlign: 'center',
    },
    loadingText: {
      fontSize: responsiveSize(14, 16, 18),
      color: '#6B7280',
      textAlign: 'center',
      marginBottom: responsiveSize(16, 20, 24),
      paddingHorizontal: 20,
    },
    progressBar: {
      width: '100%',
      height: responsiveSize(6, 8, 10),
      backgroundColor: '#E5E7EB',
      borderRadius: responsiveSize(3, 4, 5),
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#4F46E5',
      borderRadius: responsiveSize(3, 4, 5),
    },
    // Result Styles
    resultContainer: {
      borderRadius: responsiveSize(12, 14, 16),
      padding: responsiveSize(20, 24, 32),
      borderWidth: 2,
    },
    successResult: {
      backgroundColor: '#DCFCE7',
      borderColor: '#BBF7D0',
    },
    failedResult: {
      backgroundColor: '#FEE2E2',
      borderColor: '#FECACA',
    },
    successContent: {
      alignItems: 'center',
    },
    successIcon: {
      width: responsiveSize(70, 80, 96),
      height: responsiveSize(70, 80, 96),
      backgroundColor: '#10B981',
      borderRadius: responsiveSize(16, 18, 24),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: responsiveSize(16, 20, 24),
    },
    successIconText: {
      fontSize: responsiveSize(28, 32, 36),
      color: '#FFFFFF',
    },
    successTitle: {
      fontSize: responsiveSize(18, 20, 24),
      fontWeight: 'bold',
      color: '#065F46',
      marginBottom: responsiveSize(16, 20, 24),
      textAlign: 'center',
    },
    transactionDetails: {
      backgroundColor: '#FFFFFF',
      borderRadius: responsiveSize(12, 14, 16),
      padding: responsiveSize(16, 20, 24),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
      borderWidth: 1,
      borderColor: '#BBF7D0',
      width: '100%',
      marginBottom: responsiveSize(16, 20, 24),
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: responsiveSize(6, 8, 10),
      borderBottomWidth: 1,
      borderBottomColor: '#F3F4F6',
    },
    detailLabel: {
      fontSize: responsiveSize(12, 14, 16),
      color: '#6B7280',
    },
    detailValue: {
      fontSize: responsiveSize(12, 14, 16),
      fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
      color: '#065F46',
      fontWeight: '600',
    },
    detailAmount: {
      fontSize: responsiveSize(14, 16, 18),
      fontWeight: 'bold',
      color: '#064E3B',
    },
    statusBadge: {
      backgroundColor: '#D1FAE5',
      paddingHorizontal: responsiveSize(8, 10, 12),
      paddingVertical: responsiveSize(4, 5, 6),
      borderRadius: responsiveSize(8, 10, 12),
    },
    statusText: {
      fontSize: responsiveSize(10, 12, 14),
      fontWeight: '600',
      color: '#065F46',
    },
    thankYouText: {
      fontSize: responsiveSize(14, 16, 18),
      color: '#059669',
      textAlign: 'center',
    },
    failedContent: {
      alignItems: 'center',
    },
    failedIcon: {
      width: responsiveSize(70, 80, 96),
      height: responsiveSize(70, 80, 96),
      backgroundColor: '#EF4444',
      borderRadius: responsiveSize(16, 18, 24),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: responsiveSize(16, 20, 24),
    },
    failedIconText: {
      fontSize: responsiveSize(28, 32, 36),
      color: '#FFFFFF',
    },
    failedTitle: {
      fontSize: responsiveSize(18, 20, 24),
      fontWeight: 'bold',
      color: '#991B1B',
      marginBottom: responsiveSize(12, 14, 16),
      textAlign: 'center',
    },
    failedMessage: {
      fontSize: responsiveSize(14, 16, 18),
      color: '#DC2626',
      textAlign: 'center',
      marginBottom: responsiveSize(8, 10, 12),
    },
    failedSubtext: {
      fontSize: responsiveSize(12, 14, 16),
      color: '#EF4444',
      textAlign: 'center',
    },
    resetButton: {
      backgroundColor: '#374151',
      borderRadius: responsiveSize(12, 14, 16),
      padding: responsiveSize(16, 18, 20),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: responsiveSize(16, 20, 24),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    resetButtonText: {
      fontSize: responsiveSize(16, 18, 20),
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    // Security Features
    securityContainer: {
      marginTop: responsiveSize(16, 20, 24),
      paddingTop: responsiveSize(16, 20, 24),
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
    },
    securityTags: {
      flexDirection: 'row',
      gap: responsiveSize(8, 10, 12),
      justifyContent: 'center',
    },
    securityTag: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F3F4F6',
      paddingHorizontal: responsiveSize(12, 14, 16),
      paddingVertical: responsiveSize(6, 8, 10),
      borderRadius: 20,
      gap: responsiveSize(6, 8, 10),
    },
    securityIcon: {
      fontSize: responsiveSize(12, 14, 16),
    },
    securityText: {
      fontSize: responsiveSize(10, 12, 14),
      color: '#6B7280',
    },
  });
};

export default RogerPayAdvanced;