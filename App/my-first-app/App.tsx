import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {
SafeAreaView
} from 'react-native-safe-area-context';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    Keyboard.dismiss();
  };

  const handleSignIn = () => {
    Keyboard.dismiss();
    setVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>🛡️</Text>

          <Text style={styles.appName}>
            MeroLink Safe
          </Text>

          <Text style={styles.tagline}>
            Scan suspicious links before you click.
          </Text>
        </View>

        {/* Login Card */}
        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Sign In
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <View style={styles.buttonContainer}>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
            >
              <Text style={styles.cancelText}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleSignIn}
            >
              <Text style={styles.signInText}>
                Sign In
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Success Modal */}
        <Modal
          visible={visible}
          transparent
          animationType="fade"
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>

              <Text style={styles.checkmark}>
                ✅
              </Text>

              <Text style={styles.successTitle}>
                Signed In Successfully
              </Text>

              <Text style={styles.successText}>
                Welcome to MeroLink Safe
              </Text>

              <Button
                title="Close"
                onPress={() => setVisible(false)}
              />

            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EAF4FF',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 40,
  },

  logo: {
    fontSize: 60,
  },

  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003366',
  },

  tagline: {
    marginTop: 5,
    color: 'gray',
    textAlign: 'center',
  },

  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 8,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003366',
  },

  input: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    backgroundColor: '#FAFAFA',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cancelButton: {
    width: '45%',
    borderWidth: 1,
    borderColor: '#FF4444',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },

  cancelText: {
    color: '#FF4444',
    fontWeight: 'bold',
  },

  signInButton: {
    width: '45%',
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },

  signInText: {
    color: 'white',
    fontWeight: 'bold',
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
  },

  checkmark: {
    fontSize: 60,
    marginBottom: 10,
  },

  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },

  successText: {
    color: 'gray',
    marginBottom: 20,
  },

});

export default App;