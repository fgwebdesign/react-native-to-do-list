import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Todo } from '../../app/types/todos';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity 
        style={styles.todoContent}
        onPress={() => onToggle(todo.id)}
      >
        <ThemedView style={[styles.checkbox, todo.completed && styles.checked]} />
        <ThemedText style={[
          styles.title,
          todo.completed && styles.completedText
        ]}>
          {todo.title}
        </ThemedText>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => onDelete(todo.id)}
        style={styles.deleteButton}
      >
        <ThemedText style={styles.deleteText}>X</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  todoContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#0a7ea4',
    marginRight: 12,
  },
  checked: {
    backgroundColor: '#0a7ea4',
  },
  title: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#687076',
  },
  deleteButton: {
    padding: 8,
  },
  deleteText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: 'bold',
  },
});