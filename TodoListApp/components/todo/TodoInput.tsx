import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';
import { Ionicons } from '@expo/vector-icons';

interface TodoInputProps {
  onSubmit: (title: string) => void;
}

export function TodoInput({ onSubmit }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim().length > 0) {
      onSubmit(text.trim());
      setText('');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.inputContainer}>
        <Ionicons name="add-circle-outline" size={24} color="#94A3B8" />
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Agregar nueva tarea..."
          placeholderTextColor="#94A3B8"
          onSubmitEditing={handleSubmit}
        />
      </ThemedView>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Ionicons name="arrow-forward" size={24} color="#ffffff" />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1E293B',
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#3B82F6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});