import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function CatProduct() {
  const [quantity, setQuantity] = useState(1);
  
  // Clean, local Windows file path mapping syntax for React Native
  const localCatImage = require('C:/Users/LEGION/Downloads/close-up-of-a-charming-ginger-kitten-with-big-blue-eyes-resting-on-a-soft-blanket-photo.jpg');

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    Alert.alert('Cart Updated', `Successfully added ${quantity} Ginger Kitten(s) to your cart! 🐾`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        {/* Product Image */}
        <Image source={localCatImage} style={styles.image} />

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Charming Ginger Kitten</Text>
          <Text style={styles.description}>
            Adorable domestic kitten featuring brilliant blue eyes, resting comfortably on a soft blanket. Looking for a warm home!
          </Text>
          <Text style={styles.price}>$250.00</Text>
        </View>

        {/* Quantity Selector Layout */}
        <View style={styles.quantityRow}>
          <Text style={styles.quantityLabel}>Quantity:</Text>
          <View style={styles.counterGroup}>
            <TouchableOpacity style={styles.counterButton} onPress={decrement}>
              <Text style={styles.counterButtonText}>−</Text>
            </TouchableOpacity>
            
            <Text style={styles.quantityText}>{quantity}</Text>
            
            <TouchableOpacity style={styles.counterButton} onPress={increment}>
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Add To Cart Action */}
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Balanced dark aesthetic
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden', // Forces image to follow card's border radius
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: '#636E72',
    lineHeight: 18,
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#E67E22', // Vibrant accent price tag
  },
  quantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2